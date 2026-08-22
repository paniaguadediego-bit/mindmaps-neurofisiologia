#!/usr/bin/env node
'use strict';

/**
 * Build script del proyecto de mindmaps.
 * Lee mindmaps/*.md, parsea su front-matter YAML y genera:
 *   - MAPA_MAESTRO.md
 *   - index.html
 *
 * Sin dependencias externas. Solo librería estándar de Node.
 * Uso: node build.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const MINDMAPS_DIR = path.join(ROOT, 'mindmaps');
const MAPA_PATH = path.join(ROOT, 'MAPA_MAESTRO.md');
const INDEX_PATH = path.join(ROOT, 'index.html');

const ORDEN_TRABAJO = [
  'C1', 'C2', 'A1', 'A2', 'A3', 'C5', 'A4', 'A5', 'C3', 'C4', 'C6', 'B2', 'B1', 'B3', 'B4',
  'A6', 'A9', 'A7', 'B5', 'B6', 'B7', 'A8',
];

const ESTADO_LABEL = {
  esqueleto: 'Esqueleto',
  'en-progreso': 'En progreso',
  completo: 'Completo',
};

const PALETA = [
  '#3b82f6', // azul
  '#10b981', // verde
  '#f59e0b', // ámbar
  '#a855f7', // violeta
  '#ef4444', // rojo
  '#06b6d4', // cian
  '#ec4899', // rosa
  '#84cc16', // lima
];

function parseFrontMatter(raw, filename) {
  const lines = raw.split(/\r?\n/);
  if (lines[0].trim() !== '---') {
    throw new Error(`${filename}: no empieza con front-matter '---'`);
  }
  let end = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      end = i;
      break;
    }
  }
  if (end === -1) {
    throw new Error(`${filename}: front-matter sin cierre '---'`);
  }
  const fm = {};
  for (let i = 1; i < end; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    const m = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!m) {
      throw new Error(`${filename}: línea de front-matter inválida: "${line}"`);
    }
    fm[m[1]] = m[2].trim();
  }
  const body = lines.slice(end + 1).join('\n');

  const required = ['codigo', 'titulo', 'bloque', 'plantilla', 'estado'];
  for (const key of required) {
    if (!fm[key]) {
      throw new Error(`${filename}: falta el campo obligatorio "${key}" en el front-matter`);
    }
  }

  return { fm, body };
}

function naturalCodeKey(codigo) {
  const m = codigo.match(/^([A-Za-z]+)(\d+)$/);
  if (!m) return [codigo, 0];
  return [m[1], parseInt(m[2], 10)];
}

function compareCodigo(a, b) {
  const [la, na] = naturalCodeKey(a);
  const [lb, nb] = naturalCodeKey(b);
  if (la !== lb) return la < lb ? -1 : 1;
  return na - nb;
}

function loadTemas() {
  const files = fs.readdirSync(MINDMAPS_DIR).filter((f) => f.endsWith('.md'));
  const temas = [];
  const errores = [];

  for (const file of files) {
    const fullPath = path.join(MINDMAPS_DIR, file);
    const raw = fs.readFileSync(fullPath, 'utf8');
    try {
      const { fm, body } = parseFrontMatter(raw, file);
      temas.push({
        codigo: fm.codigo,
        titulo: fm.titulo,
        bloque: fm.bloque,
        plantilla: fm.plantilla,
        estado: fm.estado,
        archivo: `mindmaps/${file}`,
        body,
      });
    } catch (err) {
      errores.push(err.message);
    }
  }

  for (const err of errores) {
    console.warn(`[build] AVISO: ${err}`);
  }

  temas.sort((a, b) => compareCodigo(a.codigo, b.codigo));

  return temas;
}

function groupByBloque(temas) {
  const bloques = new Map();
  for (const t of temas) {
    if (!bloques.has(t.bloque)) bloques.set(t.bloque, []);
    bloques.get(t.bloque).push(t);
  }
  const bloquesOrdenados = [...bloques.keys()].sort();
  return bloquesOrdenados.map((b) => ({ bloque: b, temas: bloques.get(b) }));
}

function buildMapaMaestro(temas, grupos) {
  const total = temas.length;
  const completos = temas.filter((t) => t.estado === 'completo').length;
  const enProgreso = temas.filter((t) => t.estado === 'en-progreso').length;
  const esqueletos = temas.filter((t) => t.estado === 'esqueleto').length;

  const lineas = [];
  lineas.push('# Mapa maestro');
  lineas.push('');
  lineas.push('> **GENERADO automáticamente por `build.js`. No editar a mano.**');
  lineas.push('> Fuente de verdad: los archivos en `mindmaps/`. Para cambiar algo aquí, edita el');
  lineas.push('> `.md` correspondiente y vuelve a ejecutar el build.');
  lineas.push('');
  lineas.push(`Generado: ${new Date().toISOString()}`);
  lineas.push('');
  lineas.push(`Progreso: ${completos} completos · ${enProgreso} en progreso · ${esqueletos} esqueletos · ${total} temas totales.`);
  lineas.push('');

  for (const { bloque, temas: temasBloque } of grupos) {
    lineas.push(`## Bloque ${bloque}`);
    lineas.push('');
    lineas.push('| Código | Título | Plantilla | Estado | Archivo |');
    lineas.push('|---|---|---|---|---|');
    for (const t of temasBloque) {
      const estadoLabel = ESTADO_LABEL[t.estado] || t.estado;
      lineas.push(`| ${t.codigo} | ${t.titulo} | ${t.plantilla} | ${estadoLabel} | \`${t.archivo}\` |`);
    }
    lineas.push('');
  }

  lineas.push('## Orden de trabajo sugerido');
  lineas.push('');
  lineas.push('Básico → avanzado. Se mantiene a mano; si aparecen temas nuevos no listados aquí,');
  lineas.push('añádelos donde tengan sentido.');
  lineas.push('');
  const codigosExistentes = new Set(temas.map((t) => t.codigo));
  const ordenValido = ORDEN_TRABAJO.filter((c) => codigosExistentes.has(c));
  lineas.push(ordenValido.join(' → '));
  const faltantes = ORDEN_TRABAJO.filter((c) => !codigosExistentes.has(c));
  if (faltantes.length) {
    lineas.push('');
    lineas.push(`(Códigos del orden sugerido que ya no existen como archivo: ${faltantes.join(', ')})`);
  }
  const nuevos = temas.filter((t) => !ORDEN_TRABAJO.includes(t.codigo));
  if (nuevos.length) {
    lineas.push('');
    lineas.push(`Temas nuevos aún sin ubicar en el orden de trabajo: ${nuevos.map((t) => t.codigo).join(', ')}`);
  }
  lineas.push('');

  return lineas.join('\n');
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function extractTree(body) {
  const m = body.match(/```\n([\s\S]*?)```/);
  return m ? m[1].replace(/\n+$/, '') : '';
}

function extractSections(body) {
  const idx = body.search(/^##\s*Ampliaci[oó]n/im);
  if (idx === -1) {
    return { base: extractTree(body), ampliacion: null };
  }
  return {
    base: extractTree(body.slice(0, idx)),
    ampliacion: extractTree(body.slice(idx)),
  };
}

function buildIndexHtml(temas, grupos) {
  const total = temas.length;
  const completos = temas.filter((t) => t.estado === 'completo').length;
  const enProgreso = temas.filter((t) => t.estado === 'en-progreso').length;
  const esqueletos = temas.filter((t) => t.estado === 'esqueleto').length;
  const pct = total ? Math.round((completos / total) * 100) : 0;

  const colorPorBloque = {};
  grupos.forEach((g, i) => {
    colorPorBloque[g.bloque] = PALETA[i % PALETA.length];
  });

  const navHtml = grupos
    .map(({ bloque, temas: temasBloque }) => {
      const items = temasBloque
        .map(
          (t) =>
            `<a href="#${t.codigo}" class="nav-item estado-${t.estado}" data-codigo="${t.codigo}"><span class="nav-codigo">${t.codigo}</span><span class="nav-titulo">${escapeHtml(t.titulo)}</span></a>`
        )
        .join('\n');
      return `<div class="nav-bloque" style="--bloque-color:${colorPorBloque[bloque]}">
        <div class="nav-bloque-titulo">Bloque ${escapeHtml(bloque)}</div>
        ${items}
      </div>`;
    })
    .join('\n');

  const seccionesHtml = grupos
    .map(({ bloque, temas: temasBloque }) => {
      const temasHtml = temasBloque
        .map((t) => {
          const { base, ampliacion } = extractSections(t.body);
          const ampliacionHtml = ampliacion
            ? `<div class="ampliacion-inline">
                <div class="ampliacion-label">Ampliación — profundizar</div>
                <div class="tree-wrap"><pre class="tree">${escapeHtml(ampliacion)}</pre></div>
              </div>`
            : '';
          return `<details class="tema" id="${t.codigo}" style="--bloque-color:${colorPorBloque[bloque]}" name="tema">
            <summary class="tema-header">
              <input type="checkbox" class="estudiado-check" data-codigo="${t.codigo}" onclick="event.stopPropagation()" aria-label="Marcar ${t.codigo} como estudiado">
              <span class="tema-codigo">${t.codigo}</span>
              <h3 class="tema-titulo">${escapeHtml(t.titulo)}</h3>
              <span class="badge estado-${t.estado}">${ESTADO_LABEL[t.estado] || t.estado}</span>
              <span class="badge plantilla-badge">Plantilla ${escapeHtml(t.plantilla)}</span>
            </summary>
            <div class="tema-body">
              <div class="tree-wrap"><pre class="tree">${escapeHtml(base)}</pre></div>
              ${ampliacionHtml}
            </div>
          </details>`;
        })
        .join('\n');
      return `<details class="bloque-seccion" style="--bloque-color:${colorPorBloque[bloque]}" open>
        <summary class="bloque-titulo">Bloque ${escapeHtml(bloque)}</summary>
        <div class="bloque-body">
          ${temasHtml}
        </div>
      </details>`;
    })
    .join('\n');

  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Mindmaps de Neurofisiología</title>
<link rel="icon" type="image/svg+xml" href="icon.svg">
<link rel="apple-touch-icon" href="icon.svg">
<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#000000">
<meta name="mobile-web-app-capable" content="yes">
<style>
:root {
  --bg: #f7f7f8;
  --bg-elevated: #ffffff;
  --text: #1a1a1e;
  --text-muted: #6b6b74;
  --border: #e2e2e7;
  --accent: #3b82f6;
  --estado-esqueleto: #9ca3af;
  --estado-en-progreso: #f59e0b;
  --estado-completo: #10b981;
  --code-bg: #f0f0f3;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #16161a;
    --bg-elevated: #1e1e23;
    --text: #ececef;
    --text-muted: #9a9aa2;
    --border: #2e2e35;
    --code-bg: #101013;
  }
}

* { box-sizing: border-box; }

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 280px;
  flex-shrink: 0;
  border-right: 1px solid var(--border);
  padding: 1.25rem 1rem;
  overflow-y: auto;
  height: 100vh;
  position: sticky;
  top: 0;
}

.sidebar h1 {
  font-size: 1.05rem;
  margin: 0 0 0.25rem;
}

.progreso {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.progreso-bar {
  height: 6px;
  border-radius: 3px;
  background: var(--code-bg);
  overflow: hidden;
  margin-top: 0.35rem;
}

.progreso-fill {
  height: 100%;
  background: var(--estado-completo);
}

.nav-bloque {
  margin-bottom: 1rem;
}

.nav-bloque-titulo {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--bloque-color);
  font-weight: 600;
  margin: 0.75rem 0 0.35rem;
}

.nav-item {
  display: flex;
  gap: 0.4rem;
  align-items: baseline;
  text-decoration: none;
  color: var(--text);
  font-size: 0.85rem;
  padding: 0.2rem 0.3rem;
  border-radius: 4px;
  border-left: 2px solid transparent;
}

.nav-item:hover {
  background: var(--code-bg);
  border-left-color: var(--bloque-color);
}

.nav-codigo {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-weight: 600;
  color: var(--bloque-color);
  flex-shrink: 0;
}

.nav-titulo {
  color: var(--text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

main {
  flex: 1;
  padding: 2rem 2.5rem;
  max-width: 900px;
}

.bloque-seccion {
  margin-bottom: 2rem;
  border: none;
}

.bloque-titulo {
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--bloque-color);
  border-bottom: 2px solid var(--bloque-color);
  padding-bottom: 0.35rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.bloque-titulo::-webkit-details-marker { display: none; }

.bloque-titulo::before {
  content: "▾";
  font-size: 0.85rem;
  flex-shrink: 0;
  transition: transform 0.15s ease;
}

.bloque-seccion:not([open]) .bloque-titulo::before {
  transform: rotate(-90deg);
}

.bloque-body {
  padding-top: 0.9rem;
}

.tema {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-left: 4px solid var(--bloque-color);
  border-radius: 8px;
  margin-bottom: 1rem;
}

.tema-header {
  cursor: pointer;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.1rem;
}

.tema-header::-webkit-details-marker { display: none; }

.tema-header::before {
  content: "▾";
  font-size: 0.75rem;
  color: var(--text-muted);
  flex-shrink: 0;
  transition: transform 0.15s ease;
}

.tema:not([open]) .tema-header::before {
  transform: rotate(-90deg);
}

.estudiado-check {
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  accent-color: var(--estado-completo);
  cursor: pointer;
}

.tema.estudiado {
  opacity: 0.7;
}

.tema.estudiado .tema-titulo {
  text-decoration: line-through;
  text-decoration-color: var(--text-muted);
  text-decoration-thickness: 1.5px;
}

.tema-body {
  padding: 0 1.1rem 1rem;
}

.tema-codigo {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-weight: 700;
  color: var(--bloque-color);
}

.tema-titulo {
  margin: 0;
  font-size: 1.05rem;
  flex: 1;
  min-width: 150px;
}

.badge {
  font-size: 0.7rem;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--text-muted);
  white-space: nowrap;
}

.badge.estado-esqueleto { color: var(--estado-esqueleto); border-color: var(--estado-esqueleto); }
.badge.estado-en-progreso { color: var(--estado-en-progreso); border-color: var(--estado-en-progreso); }
.badge.estado-completo { color: var(--estado-completo); border-color: var(--estado-completo); }

.nav-item.estado-completo .nav-codigo::after { content: " ●"; color: var(--estado-completo); }
.nav-item.estado-en-progreso .nav-codigo::after { content: " ●"; color: var(--estado-en-progreso); }
.nav-item.estado-esqueleto .nav-codigo::after { content: " ○"; color: var(--estado-esqueleto); }

.nav-item.estudiado .nav-titulo {
  text-decoration: line-through;
  opacity: 0.6;
}

.tree-wrap {
  overflow-x: auto;
  background: var(--code-bg);
  border-radius: 6px;
}

.tree {
  margin: 0;
  padding: 0.75rem 1rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  white-space: pre;
}

.ampliacion-inline {
  margin-top: 0.85rem;
  padding-top: 0.65rem;
  border-top: 1px dashed var(--border);
}

.ampliacion-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--bloque-color);
  font-weight: 600;
  margin-bottom: 0.45rem;
}

@media (max-width: 800px) {
  body { flex-direction: column; }
  .sidebar { width: 100%; height: auto; position: static; border-right: none; border-bottom: 1px solid var(--border); }
  main { padding: 1.25rem; }
}
</style>
</head>
<body>
<nav class="sidebar">
  <h1>Mindmaps de Neurofisiología</h1>
  <div class="progreso">
    ${completos}/${total} completos (${pct}%) · ${enProgreso} en progreso · ${esqueletos} esqueletos
    <div class="progreso-bar"><div class="progreso-fill" style="width:${pct}%"></div></div>
  </div>
  <div class="progreso progreso-estudiado" id="estudiado-contador">0/${total} estudiados a mano</div>
  ${navHtml}
</nav>
<main>
  ${seccionesHtml}
</main>
<script>
(function () {
  var KEY = 'mio-mindmaps-estudiado';

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function save(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      /* localStorage no disponible (modo privado, etc.) — se ignora */
    }
  }

  var state = load();
  var checks = document.querySelectorAll('.estudiado-check');

  function aplicar(codigo, estudiado) {
    var tema = document.getElementById(codigo);
    var nav = document.querySelector('.nav-item[data-codigo="' + codigo + '"]');
    if (tema) tema.classList.toggle('estudiado', estudiado);
    if (nav) nav.classList.toggle('estudiado', estudiado);
  }

  function actualizarContador() {
    var hechos = 0;
    checks.forEach(function (c) {
      if (state[c.getAttribute('data-codigo')]) hechos++;
    });
    var el = document.getElementById('estudiado-contador');
    if (el) el.textContent = hechos + '/' + checks.length + ' estudiados a mano';
  }

  checks.forEach(function (check) {
    var codigo = check.getAttribute('data-codigo');
    var estudiado = !!state[codigo];
    check.checked = estudiado;
    aplicar(codigo, estudiado);
    check.addEventListener('change', function () {
      state[codigo] = check.checked;
      save(state);
      aplicar(codigo, check.checked);
      actualizarContador();
    });
  });

  actualizarContador();
})();
</script>
</body>
</html>
`;
}

function main() {
  if (!fs.existsSync(MINDMAPS_DIR)) {
    console.error(`[build] No existe el directorio ${MINDMAPS_DIR}`);
    process.exit(1);
  }

  const temas = loadTemas();
  const grupos = groupByBloque(temas);

  fs.writeFileSync(MAPA_PATH, buildMapaMaestro(temas, grupos), 'utf8');
  fs.writeFileSync(INDEX_PATH, buildIndexHtml(temas, grupos), 'utf8');

  console.log(`[build] ${temas.length} temas procesados en ${grupos.length} bloques (${grupos.map((g) => g.bloque).join(', ')}).`);
  console.log(`[build] Escrito ${path.relative(ROOT, MAPA_PATH)}`);
  console.log(`[build] Escrito ${path.relative(ROOT, INDEX_PATH)}`);
}

main();
