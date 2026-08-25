#!/usr/bin/env node
'use strict';

/**
 * Automatiza el paso "escribir" del flujo de creación de un tema:
 *   1. Calcula el siguiente código libre del bloque.
 *   2. Genera mindmaps/CODIGO-slug.md con el front-matter y el esqueleto de ramas
 *      de la plantilla elegida (leído en vivo de PLANTILLAS.md).
 *   3. Ejecuta node build.js.
 *
 * Uso con argumentos (recomendado para uso no interactivo):
 *   node nuevo-tema.js --bloque A --titulo "PEATC en fosa posterior" [--plantilla A] [--codigo A10]
 *
 * Uso sin argumentos: hace las mismas preguntas por consola, una a una.
 *
 * NO hace commit ni push. Publicar (`git add`, `git commit`, `git push`) sigue
 * siendo una acción manual y explícita — este script solo automatiza crear el
 * archivo y regenerar el visor local.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execFileSync } = require('child_process');

const ROOT = __dirname;
const MINDMAPS_DIR = path.join(ROOT, 'mindmaps');
const PLANTILLAS_PATH = path.join(ROOT, 'PLANTILLAS.md');

function parsePlantillas(raw) {
  const lines = raw.split(/\r?\n/);
  const templates = {};
  let current = null;
  for (const line of lines) {
    const heading = line.match(/^##\s*Tipo\s+([A-Za-z0-9]+)\s*(?:—|-)?\s*(.*)$/);
    if (heading) {
      current = heading[1].trim();
      templates[current] = { nombre: heading[2].trim(), ramas: [] };
      continue;
    }
    if (current) {
      const item = line.match(/^\d+\.\s+(.*)$/);
      if (item) templates[current].ramas.push(item[1].trim());
    }
  }
  return templates;
}

const COMBINING_MARKS = new RegExp('[̀-ͯ]', 'g');

function slugify(str) {
  return str
    .normalize('NFD')
    .replace(COMBINING_MARKS, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

/** Lee el front-matter mínimo (area, bloque, codigo) de todos los mindmaps. */
function leerIndice() {
  if (!fs.existsSync(MINDMAPS_DIR)) return [];
  return fs
    .readdirSync(MINDMAPS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(MINDMAPS_DIR, file), 'utf8');
      const get = (campo) => {
        const m = raw.match(new RegExp('^' + campo + ':\\s*(.+)$', 'm'));
        return m ? m[1].trim() : null;
      };
      return {
        file,
        area: get('area') || 'IONM',
        bloque: get('bloque'),
        codigo: get('codigo'),
        plantilla: get('plantilla'),
      };
    })
    .filter((t) => t.codigo && t.bloque);
}

/**
 * Deduce el prefijo de código de un área a partir de sus temas existentes:
 * "PE-V3" -> "PE-", "A1" -> "". Si el área es nueva, no hay prefijo que deducir.
 */
function prefijoDeArea(indice, area) {
  for (const t of indice) {
    if (t.area !== area) continue;
    const m = t.codigo.match(/^(.*?)[A-Za-z](\d+)$/);
    if (m) return m[1];
  }
  return null;
}

/**
 * Plantilla por defecto de un bloque: la que ya usan sus temas. Solo si el bloque
 * es nuevo se cae a la letra del bloque o a la primera disponible.
 */
function plantillaDeBloque(indice, area, letra) {
  const usos = {};
  for (const t of indice) {
    if (t.area !== area || !t.plantilla) continue;
    if (letraDeBloque(t.bloque) !== letra) continue;
    usos[t.plantilla] = (usos[t.plantilla] || 0) + 1;
  }
  const orden = Object.keys(usos).sort((a, b) => usos[b] - usos[a]);
  return orden[0] || null;
}

/** La letra de bloque es la inicial del campo `bloque` ("V — Visuales" -> "V"). */
function letraDeBloque(bloque) {
  const m = String(bloque).trim().match(/^([A-Za-z0-9]+)/);
  return m ? m[1] : String(bloque).trim();
}

function nextCodigo(indice, area, bloque, prefijoForzado) {
  const letra = letraDeBloque(bloque);
  const prefijo = prefijoForzado !== null && prefijoForzado !== undefined
    ? prefijoForzado
    : (prefijoDeArea(indice, area) || '');

  let max = 0;
  let existeBloque = false;
  for (const t of indice) {
    if (t.area !== area) continue;
    if (letraDeBloque(t.bloque) !== letra) continue;
    existeBloque = true;
    const n = t.codigo.match(/(\d+)$/);
    if (n) max = Math.max(max, parseInt(n[1], 10));
  }

  return {
    codigo: `${prefijo}${letra}${max + 1}`,
    esBloqueNuevo: !existeBloque,
    esAreaNueva: !indice.some((t) => t.area === area),
  };
}

function buildArbol(titulo, ramas) {
  const lineas = ramas.map((r, i) => {
    const isLast = i === ramas.length - 1;
    return `${isLast ? '└─' : '├─'} ${r}`;
  });
  return [titulo, ...lineas].join('\n');
}

function crearArchivo({ codigo, titulo, area, bloque, plantilla, ramas }) {
  const slug = slugify(titulo);
  const filename = `${codigo}-${slug}.md`;
  const fullPath = path.join(MINDMAPS_DIR, filename);
  if (fs.existsSync(fullPath)) {
    throw new Error(`Ya existe ${filename} — aborto para no sobrescribir.`);
  }
  const contenido = [
    '---',
    `codigo: ${codigo}`,
    `titulo: ${titulo}`,
    `area: ${area}`,
    `bloque: ${bloque}`,
    `plantilla: ${plantilla}`,
    'estado: esqueleto',
    '---',
    '',
    `# ${codigo} — ${titulo}`,
    '',
    '```',
    buildArbol(titulo, ramas),
    '```',
    '',
  ].join('\n');
  fs.writeFileSync(fullPath, contenido, 'utf8');
  return { filename, fullPath };
}

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith('--')) {
        out[key] = true;
      } else {
        out[key] = next;
        i++;
      }
    }
  }
  return out;
}

async function preguntar(rl, texto) {
  return new Promise((resolve) => rl.question(texto, (ans) => resolve(ans.trim())));
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const templates = parsePlantillas(fs.readFileSync(PLANTILLAS_PATH, 'utf8'));
  const letrasDisponibles = Object.keys(templates);

  const indice = leerIndice();
  const areasExistentes = [...new Set(indice.map((t) => t.area))].sort();

  let area = args.area;
  let bloque = args.bloque;
  let titulo = args.titulo;
  let plantilla = args.plantilla;

  const modoInteractivo = !bloque || !titulo;

  if (modoInteractivo) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    console.log(`Áreas existentes: ${areasExistentes.join(', ')}`);
    console.log(`Plantillas disponibles: ${letrasDisponibles.join(', ')}`);
    if (!area) {
      const resp = await preguntar(rl, `¿Área? (por defecto ${areasExistentes[0] || 'IONM'}): `);
      area = resp || areasExistentes[0] || 'IONM';
    }
    if (!bloque) {
      bloque = await preguntar(rl, '¿Bloque? (letra, o "V — Nombre del bloque" si es nuevo): ');
    }
    if (!titulo) titulo = await preguntar(rl, '¿Título del tema? ');
    if (!plantilla) {
      const letra = letraDeBloque(bloque);
      const def = letrasDisponibles.includes(letra) ? letra : letrasDisponibles[0];
      const resp = await preguntar(rl, `¿Plantilla a usar? (por defecto ${def}): `);
      plantilla = resp || def;
    }
    rl.close();
  } else {
    area = area || areasExistentes[0] || 'IONM';
    if (!plantilla) {
      const letra = letraDeBloque(bloque);
      plantilla =
        plantillaDeBloque(indice, area, letra) ||
        (letrasDisponibles.includes(letra) ? letra : letrasDisponibles[0]);
    }
  }

  if (!titulo) {
    console.error('[nuevo-tema] Falta el título. Abortado.');
    process.exit(1);
  }
  if (!templates[plantilla]) {
    console.error(`[nuevo-tema] La plantilla "${plantilla}" no existe en PLANTILLAS.md. Disponibles: ${letrasDisponibles.join(', ')}`);
    process.exit(1);
  }

  // Si el bloque se dio solo como letra, reutiliza el nombre completo que ya
  // tengan los temas de ese bloque en esa área.
  const letraBloque = letraDeBloque(bloque);
  if (bloque.trim() === letraBloque) {
    const existente = indice.find((t) => t.area === area && letraDeBloque(t.bloque) === letraBloque);
    if (existente) bloque = existente.bloque;
  }

  const prefijoForzado = typeof args.prefijo === 'string' ? args.prefijo : null;
  const { codigo: codigoAuto, esBloqueNuevo, esAreaNueva } = nextCodigo(indice, area, bloque, prefijoForzado);
  const codigo = args.codigo || codigoAuto;

  if (esAreaNueva) {
    console.log(`[nuevo-tema] Área "${area}" no existía todavía — tendrá su propia página en el visor.`);
    if (!prefijoForzado) {
      console.log('[nuevo-tema] Sin prefijo de código: usa --prefijo "XX-" si quieres uno (ej. PE- para PPEE).');
    }
  }
  if (esBloqueNuevo) {
    console.log(`[nuevo-tema] Bloque "${bloque}" no existía todavía — se creará automáticamente.`);
  }

  const { filename } = crearArchivo({
    codigo,
    titulo,
    area,
    bloque,
    plantilla,
    ramas: templates[plantilla].ramas,
  });
  console.log(`[nuevo-tema] Creado mindmaps/${filename}`);

  if (args['no-build']) {
    console.log('[nuevo-tema] --no-build indicado: no se ha regenerado el visor.');
    return;
  }

  execFileSync('node', [path.join(ROOT, 'build.js')], { stdio: 'inherit' });

  console.log('');
  console.log('[nuevo-tema] Listo. El archivo está creado y el visor local regenerado.');
  console.log('[nuevo-tema] Para publicarlo, sigue siendo un paso manual y explícito:');
  console.log('  git add -A');
  console.log(`  git commit -m "Añade tema ${codigo}: ${titulo}"`);
  console.log('  git push');
}

main().catch((err) => {
  console.error(`[nuevo-tema] Error: ${err.message}`);
  process.exit(1);
});
