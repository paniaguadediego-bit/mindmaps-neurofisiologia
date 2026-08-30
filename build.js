#!/usr/bin/env node
'use strict';

/**
 * Build script del proyecto de mindmaps.
 * Lee mindmaps/*.md, parsea su front-matter YAML y genera:
 *   - MAPA_MAESTRO.md
 *   - index.html            (portal de áreas)
 *   - <area>.html           (una página por área: ionm.html, ppee.html, ...)
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

const AREA_DEFAULT = 'IONM';

// Orden de estudio sugerido. Solo aplica al área indicada; los temas que no
// aparezcan aquí se listan aparte, sin romper nada.
const ORDEN_TRABAJO = {
  IONM: [
    'C1', 'C2', 'A1', 'A2', 'A3', 'C5', 'A4', 'A5', 'C3', 'C4', 'C6', 'C7', 'B2', 'B1',
    'B3', 'B4', 'A6', 'A9', 'A10', 'A7', 'B8', 'B5', 'B6', 'B7', 'B9', 'A8', 'C8',
  ],
};

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

/** Separa un código en su parte alfabética y su número final: "PE-A10" -> ["PE-A", 10]. */
function naturalCodeKey(codigo) {
  const m = String(codigo).match(/^(.*?)(\d+)$/);
  if (!m) return [String(codigo), 0];
  return [m[1], parseInt(m[2], 10)];
}

function compareCodigo(a, b) {
  const [la, na] = naturalCodeKey(a);
  const [lb, nb] = naturalCodeKey(b);
  if (la !== lb) return la < lb ? -1 : 1;
  return na - nb;
}

/** "PPEE" -> "ppee"; usado para el nombre de archivo de cada área. */
function slugify(str) {
  return String(str)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'area';
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
        area: fm.area || AREA_DEFAULT,
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

/** Agrupa en áreas y, dentro de cada una, en bloques. Todo se descubre del front-matter. */
function groupByArea(temas) {
  const areas = new Map();
  for (const t of temas) {
    if (!areas.has(t.area)) areas.set(t.area, []);
    areas.get(t.area).push(t);
  }
  return [...areas.keys()].sort().map((area) => {
    const temasArea = areas.get(area);
    const bloques = new Map();
    for (const t of temasArea) {
      if (!bloques.has(t.bloque)) bloques.set(t.bloque, []);
      bloques.get(t.bloque).push(t);
    }
    const grupos = [...bloques.keys()]
      .sort()
      .map((b) => ({ bloque: b, temas: bloques.get(b) }));
    return { area, slug: slugify(area), temas: temasArea, grupos };
  });
}

function contarEstados(temas) {
  return {
    total: temas.length,
    completos: temas.filter((t) => t.estado === 'completo').length,
    enProgreso: temas.filter((t) => t.estado === 'en-progreso').length,
    esqueletos: temas.filter((t) => t.estado === 'esqueleto').length,
  };
}

function buildMapaMaestro(areas) {
  const todos = areas.flatMap((a) => a.temas);
  const c = contarEstados(todos);

  const lineas = [];
  lineas.push('# Mapa maestro');
  lineas.push('');
  lineas.push('> **GENERADO automáticamente por `build.js`. No editar a mano.**');
  lineas.push('> Fuente de verdad: los archivos en `mindmaps/`. Para cambiar algo aquí, edita el');
  lineas.push('> `.md` correspondiente y vuelve a ejecutar el build.');
  lineas.push('');
  lineas.push(`Generado: ${new Date().toISOString()}`);
  lineas.push('');
  lineas.push(
    `Progreso global: ${c.completos} completos · ${c.enProgreso} en progreso · ${c.esqueletos} esqueletos · ${c.total} temas en ${areas.length} área(s).`
  );
  lineas.push('');

  for (const { area, slug, temas: temasArea, grupos } of areas) {
    const ca = contarEstados(temasArea);
    lineas.push(`# Área ${area}`);
    lineas.push('');
    lineas.push(`Visor: \`${slug}.html\` · ${ca.completos} completos · ${ca.enProgreso} en progreso · ${ca.esqueletos} esqueletos · ${ca.total} temas.`);
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

    const orden = ORDEN_TRABAJO[area];
    if (orden) {
      lineas.push('### Orden de trabajo sugerido');
      lineas.push('');
      const codigosExistentes = new Set(temasArea.map((t) => t.codigo));
      lineas.push(orden.filter((c2) => codigosExistentes.has(c2)).join(' → '));
      const nuevos = temasArea.filter((t) => !orden.includes(t.codigo));
      if (nuevos.length) {
        lineas.push('');
        lineas.push(`Temas aún sin ubicar en el orden: ${nuevos.map((t) => t.codigo).join(', ')}`);
      }
      lineas.push('');
    }
  }

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

/**
 * Convierte el árbol de texto (conectores ├─ │ └─) en una lista de nodos con
 * profundidad, para poder renderizarlo con jerarquía tipográfica real en el visor.
 * Los .md siguen guardando el árbol ASCII: es lo que se copia a mano.
 */
function parseTree(tree) {
  const lines = tree.split('\n');
  const nodos = [];
  let raiz = '';

  for (const line of lines) {
    if (!line.trim()) continue;

    const idx = (() => {
      const a = line.indexOf('├─');
      const b = line.indexOf('└─');
      if (a === -1) return b;
      if (b === -1) return a;
      return Math.min(a, b);
    })();

    if (idx >= 0) {
      // Nodo nuevo. Cada nivel indenta 3 caracteres ("│  ").
      nodos.push({ depth: Math.round(idx / 3), text: line.slice(idx + 2).trim() });
      continue;
    }

    // Sin conector: o es la raíz, o una continuación, o una línea suelta a nivel 0.
    if (!nodos.length && !raiz) {
      raiz = line.trim();
    } else if (/^[\s│]/.test(line) && nodos.length) {
      // Continuación de la línea anterior: hay que quitar los conectores de
      // relleno ("│  │  "), no solo el espacio en blanco.
      nodos[nodos.length - 1].text += ' ' + line.replace(/^[\s│]+/, '').trim();
    } else {
      nodos.push({ depth: 0, text: line.trim() });
    }
  }

  return { raiz, nodos };
}

function renderTree(tree) {
  const { raiz, nodos } = parseTree(tree);
  // Si el árbol no se deja parsear, no perdemos el contenido: se pinta tal cual.
  if (!nodos.length) {
    return `<div class="tree-wrap"><pre class="tree">${escapeHtml(tree)}</pre></div>`;
  }
  const cuerpo = nodos
    .map((n) => {
      const nivel = Math.min(n.depth, 3);
      return `<div class="mm-node n${nivel}" style="--d:${n.depth}">${escapeHtml(n.text)}</div>`;
    })
    .join('\n');
  const raizHtml = raiz ? `<div class="mm-root">${escapeHtml(raiz)}</div>` : '';
  return `<div class="mm">${raizHtml}${cuerpo}</div>`;
}

const ESTILOS = `
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
  min-height: 100vh;
}

a { color: inherit; }

.sidebar {
  width: 290px;
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
  margin: 0 0 0.15rem;
}

.volver {
  display: inline-block;
  font-size: 0.78rem;
  color: var(--text-muted);
  text-decoration: none;
  margin-bottom: 0.6rem;
}

.volver:hover { color: var(--accent); }

.progreso {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0.6rem;
}

.progreso-bar {
  height: 6px;
  border-radius: 3px;
  background: var(--code-bg);
  overflow: hidden;
  margin-top: 0.35rem;
}

.progreso-fill { height: 100%; background: var(--estado-completo); }

.nav-bloque { margin-bottom: 1rem; }

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

.nav-item:hover { background: var(--code-bg); border-left-color: var(--bloque-color); }

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

.nav-item.estado-completo .nav-codigo::after { content: " ●"; color: var(--estado-completo); }
.nav-item.estado-en-progreso .nav-codigo::after { content: " ●"; color: var(--estado-en-progreso); }
.nav-item.estado-esqueleto .nav-codigo::after { content: " ○"; color: var(--estado-esqueleto); }

.nav-item.estudiado .nav-titulo { text-decoration: line-through; opacity: 0.6; }

main { flex: 1; padding: 2rem 2.5rem; max-width: 940px; }

.bloque-seccion { margin-bottom: 2rem; border: none; }

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

.bloque-seccion:not([open]) .bloque-titulo::before { transform: rotate(-90deg); }

.bloque-body { padding-top: 0.9rem; }

.tema {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-left: 4px solid var(--bloque-color);
  border-radius: 8px;
  margin-bottom: 1rem;
  /* Aire por encima al abrir un tema o al saltar desde el índice lateral. */
  scroll-margin-top: 0.75rem;
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

.tema:not([open]) .tema-header::before { transform: rotate(-90deg); }

.estudiado-check {
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  accent-color: var(--estado-completo);
  cursor: pointer;
}

.tema.estudiado { opacity: 0.7; }

.tema.estudiado .tema-titulo {
  text-decoration: line-through;
  text-decoration-color: var(--text-muted);
  text-decoration-thickness: 1.5px;
}

.tema-codigo {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-weight: 700;
  color: var(--bloque-color);
}

.tema-titulo { margin: 0; font-size: 1.05rem; flex: 1; min-width: 150px; }

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

.tema-body { padding: 0 1.1rem 1rem; }

/* --- Árbol del mindmap: jerarquía tipográfica por nivel --- */

.mm {
  background: var(--code-bg);
  border-radius: 6px;
  padding: 0.95rem 1.1rem;
  overflow-x: auto;
}

.mm-root {
  font-size: 1.18rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--bloque-color);
  padding-bottom: 0.5rem;
  margin-bottom: 0.6rem;
  border-bottom: 1px solid var(--border);
}

.mm-node {
  /* Sangría francesa: al hacer wrap, el texto sigue alineado bajo el texto,
     no bajo el marcador. */
  padding-left: calc(var(--d) * 1.25rem + 1.05em);
  text-indent: -1.05em;
  line-height: 1.45;
}

.mm-node::before {
  color: var(--bloque-color);
  opacity: 0.8;
  margin-right: 0.4rem;
}

.mm-node.n0 {
  font-size: 1.02rem;
  font-weight: 650;
  margin-top: 0.7rem;
  letter-spacing: -0.005em;
}

.mm-node.n0::before { content: "▸"; }

.mm-node.n1 {
  font-size: 0.9rem;
  font-weight: 400;
  margin-top: 0.22rem;
}

.mm-node.n1::before { content: "–"; opacity: 0.55; }

.mm-node.n2 {
  font-size: 0.84rem;
  font-weight: 400;
  color: var(--text-muted);
  margin-top: 0.15rem;
}

.mm-node.n2::before { content: "·"; opacity: 0.5; }

.mm-node.n3 {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 0.1rem;
}

.mm-node.n3::before { content: "·"; opacity: 0.35; }

.tree-wrap { overflow-x: auto; background: var(--code-bg); border-radius: 6px; }

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

/* --- Portal de áreas --- */

.portal { max-width: 820px; margin: 0 auto; padding: 3rem 1.5rem; }
.portal h1 { font-size: 1.6rem; margin: 0 0 0.3rem; }
.portal .lead { color: var(--text-muted); margin: 0 0 2rem; font-size: 0.95rem; }

.area-card {
  display: block;
  text-decoration: none;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-left: 5px solid var(--bloque-color);
  border-radius: 10px;
  padding: 1.1rem 1.3rem;
  margin-bottom: 1rem;
}

.area-card:hover { border-color: var(--bloque-color); }
.area-nombre { font-size: 1.2rem; font-weight: 700; color: var(--bloque-color); }
.area-meta { font-size: 0.82rem; color: var(--text-muted); margin-top: 0.2rem; }
.area-bloques { font-size: 0.85rem; margin-top: 0.6rem; line-height: 1.6; }

@media (max-width: 800px) {
  .layout { flex-direction: column; }
  .sidebar { width: 100%; height: auto; position: static; border-right: none; border-bottom: 1px solid var(--border); }
  main { padding: 1.25rem; }
}
`;

const HEAD_COMUN = `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" type="image/svg+xml" href="icon.svg">
<link rel="apple-touch-icon" href="icon.svg">
<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#000000">
<meta name="mobile-web-app-capable" content="yes">`;

/**
 * Al abrir un tema, lo lleva al principio del viewport.
 *
 * Sin esto, el acordeón nativo (`name="tema"`) hace que al abrir un tema se cierre el
 * que estuviera abierto; si el que se cierra estaba MÁS ARRIBA, la página se encoge por
 * encima y el tema recién abierto se va hacia arriba fuera de la pantalla, obligando a
 * hacer scroll hacia atrás para leer el título. Se espera a que el layout se asiente
 * (dos rAF) antes de medir y desplazar.
 */
function scriptAbrirTema() {
  return `<script>
(function () {
  var temas = document.querySelectorAll('details.tema');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  temas.forEach(function (tema) {
    tema.addEventListener('toggle', function () {
      if (!tema.open) return;
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          try {
            tema.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
          } catch (e) {
            tema.scrollIntoView(true);
          }
        });
      });
    });
  });
})();
</script>`;
}

/** Script de progreso "estudiado a mano", persistido por área en localStorage. */
function scriptEstudiado(area) {
  return `<script>
(function () {
  var KEY = 'mio-mindmaps-estudiado';
  var AREA = ${JSON.stringify(area)};

  function loadAll() {
    var raw;
    try { raw = JSON.parse(localStorage.getItem(KEY)); } catch (e) { raw = null; }
    if (!raw || typeof raw !== 'object') return {};
    // Migración del formato antiguo (plano, sin áreas): era todo de IONM.
    var plano = Object.keys(raw).some(function (k) { return typeof raw[k] === 'boolean'; });
    if (plano) {
      var migrado = { IONM: {} };
      Object.keys(raw).forEach(function (k) {
        if (typeof raw[k] === 'boolean') migrado.IONM[k] = raw[k];
        else migrado[k] = raw[k];
      });
      return migrado;
    }
    return raw;
  }

  var all = loadAll();
  var state = all[AREA] || (all[AREA] = {});

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(all)); } catch (e) {}
  }

  var checks = document.querySelectorAll('.estudiado-check');

  function aplicar(codigo, estudiado) {
    var tema = document.getElementById(codigo);
    var nav = document.querySelector('.nav-item[data-codigo="' + codigo + '"]');
    if (tema) tema.classList.toggle('estudiado', estudiado);
    if (nav) nav.classList.toggle('estudiado', estudiado);
  }

  function actualizarContador() {
    var hechos = 0;
    checks.forEach(function (c) { if (state[c.getAttribute('data-codigo')]) hechos++; });
    var el = document.getElementById('estudiado-contador');
    if (el) el.textContent = hechos + '/' + checks.length + ' estudiados a mano';
  }

  checks.forEach(function (check) {
    var codigo = check.getAttribute('data-codigo');
    check.checked = !!state[codigo];
    aplicar(codigo, check.checked);
    check.addEventListener('change', function () {
      state[codigo] = check.checked;
      save();
      aplicar(codigo, check.checked);
      actualizarContador();
    });
  });

  actualizarContador();
})();
</script>`;
}

function buildAreaPage(areaInfo, todasLasAreas) {
  const { area, temas, grupos } = areaInfo;
  const c = contarEstados(temas);
  const pct = c.total ? Math.round((c.completos / c.total) * 100) : 0;

  const colorPorBloque = {};
  grupos.forEach((g, i) => {
    colorPorBloque[g.bloque] = PALETA[i % PALETA.length];
  });

  const navHtml = grupos
    .map(({ bloque, temas: temasBloque }) => {
      const items = temasBloque
        .map(
          (t) =>
            `<a href="#${t.codigo}" class="nav-item estado-${t.estado}" data-codigo="${t.codigo}"><span class="nav-codigo">${escapeHtml(t.codigo)}</span><span class="nav-titulo">${escapeHtml(t.titulo)}</span></a>`
        )
        .join('\n');
      return `<div class="nav-bloque" style="--bloque-color:${colorPorBloque[bloque]}">
        <div class="nav-bloque-titulo">${escapeHtml(bloque)}</div>
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
                ${renderTree(ampliacion)}
              </div>`
            : '';
          return `<details class="tema" id="${t.codigo}" style="--bloque-color:${colorPorBloque[bloque]}" name="tema">
            <summary class="tema-header">
              <input type="checkbox" class="estudiado-check" data-codigo="${t.codigo}" onclick="event.stopPropagation()" aria-label="Marcar ${escapeHtml(t.codigo)} como estudiado">
              <span class="tema-codigo">${escapeHtml(t.codigo)}</span>
              <h3 class="tema-titulo">${escapeHtml(t.titulo)}</h3>
              <span class="badge estado-${t.estado}">${ESTADO_LABEL[t.estado] || t.estado}</span>
              <span class="badge plantilla-badge">Plantilla ${escapeHtml(t.plantilla)}</span>
            </summary>
            <div class="tema-body">
              ${renderTree(base)}
              ${ampliacionHtml}
            </div>
          </details>`;
        })
        .join('\n');
      return `<details class="bloque-seccion" style="--bloque-color:${colorPorBloque[bloque]}" open>
        <summary class="bloque-titulo">${escapeHtml(bloque)}</summary>
        <div class="bloque-body">
          ${temasHtml}
        </div>
      </details>`;
    })
    .join('\n');

  const otrasAreas = todasLasAreas
    .filter((a) => a.area !== area)
    .map((a) => `<a class="volver" href="${a.slug}.html">${escapeHtml(a.area)} →</a>`)
    .join(' ');

  return `<!doctype html>
<html lang="es">
<head>
${HEAD_COMUN}
<title>${escapeHtml(area)} — Mindmaps de Neurofisiología</title>
<style>${ESTILOS}
body { display: flex; }
</style>
</head>
<body class="layout">
<nav class="sidebar">
  <a class="volver" href="index.html">← Todas las áreas</a>
  <h1>${escapeHtml(area)}</h1>
  <div class="progreso">
    ${c.completos}/${c.total} completos (${pct}%) · ${c.enProgreso} en progreso · ${c.esqueletos} esqueletos
    <div class="progreso-bar"><div class="progreso-fill" style="width:${pct}%"></div></div>
  </div>
  <div class="progreso" id="estudiado-contador">0/${c.total} estudiados a mano</div>
  ${otrasAreas ? `<div class="progreso">${otrasAreas}</div>` : ''}
  ${navHtml}
</nav>
<main>
  ${seccionesHtml}
</main>
${scriptAbrirTema()}
${scriptEstudiado(area)}
</body>
</html>
`;
}

function buildPortal(areas) {
  const cards = areas
    .map((a, i) => {
      const c = contarEstados(a.temas);
      const pct = c.total ? Math.round((c.completos / c.total) * 100) : 0;
      const color = PALETA[i % PALETA.length];
      const bloques = a.grupos
        .map((g) => `${escapeHtml(g.bloque)} <span style="color:var(--text-muted)">(${g.temas.length})</span>`)
        .join(' · ');
      return `<a class="area-card" href="${a.slug}.html" style="--bloque-color:${color}">
        <div class="area-nombre">${escapeHtml(a.area)}</div>
        <div class="area-meta">${c.total} temas · ${c.completos} completos (${pct}%) · ${c.enProgreso} en progreso · ${c.esqueletos} esqueletos</div>
        <div class="area-bloques">${bloques}</div>
      </a>`;
    })
    .join('\n');

  return `<!doctype html>
<html lang="es">
<head>
${HEAD_COMUN}
<title>Mindmaps de Neurofisiología</title>
<style>${ESTILOS}</style>
</head>
<body>
<div class="portal">
  <h1>Mindmaps de Neurofisiología</h1>
  <p class="lead">Guiones de mindmap para dibujar a mano. Elige un área.</p>
  ${cards}
</div>
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
  const areas = groupByArea(temas);

  fs.writeFileSync(MAPA_PATH, buildMapaMaestro(areas), 'utf8');
  fs.writeFileSync(INDEX_PATH, buildPortal(areas), 'utf8');
  for (const areaInfo of areas) {
    fs.writeFileSync(path.join(ROOT, `${areaInfo.slug}.html`), buildAreaPage(areaInfo, areas), 'utf8');
  }

  console.log(`[build] ${temas.length} temas en ${areas.length} área(s): ${areas.map((a) => `${a.area} (${a.temas.length})`).join(', ')}`);
  console.log(`[build] Escrito ${path.relative(ROOT, MAPA_PATH)}`);
  console.log(`[build] Escrito index.html (portal) + ${areas.map((a) => `${a.slug}.html`).join(', ')}`);
}

main();
