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

function nextCodigo(bloque) {
  let max = 0;
  let existe = false;
  if (fs.existsSync(MINDMAPS_DIR)) {
    for (const file of fs.readdirSync(MINDMAPS_DIR)) {
      if (!file.endsWith('.md')) continue;
      const raw = fs.readFileSync(path.join(MINDMAPS_DIR, file), 'utf8');
      const b = raw.match(/^bloque:\s*(.+)$/m);
      const c = raw.match(/^codigo:\s*(.+)$/m);
      if (b && c && b[1].trim() === bloque) {
        existe = true;
        const n = c[1].trim().match(/(\d+)$/);
        if (n) max = Math.max(max, parseInt(n[1], 10));
      }
    }
  }
  return { codigo: `${bloque}${max + 1}`, esBloqueNuevo: !existe };
}

function buildArbol(titulo, ramas) {
  const lineas = ramas.map((r, i) => {
    const isLast = i === ramas.length - 1;
    return `${isLast ? '└─' : '├─'} ${r}`;
  });
  return [titulo, ...lineas].join('\n');
}

function crearArchivo({ codigo, titulo, bloque, plantilla, ramas }) {
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

  let bloque = args.bloque;
  let titulo = args.titulo;
  let plantilla = args.plantilla;

  const modoInteractivo = !bloque || !titulo;

  if (modoInteractivo) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    console.log(`Plantillas disponibles: ${letrasDisponibles.join(', ')}`);
    if (!bloque) bloque = (await preguntar(rl, '¿Bloque del tema nuevo? (ej. A, B, C, o uno nuevo): ')).toUpperCase();
    if (!titulo) titulo = await preguntar(rl, '¿Título del tema? ');
    if (!plantilla) {
      const def = letrasDisponibles.includes(bloque) ? bloque : letrasDisponibles[0];
      const resp = await preguntar(rl, `¿Plantilla a usar? (por defecto ${def}): `);
      plantilla = resp || def;
    }
    rl.close();
  } else {
    bloque = bloque.toUpperCase();
    if (!plantilla) plantilla = letrasDisponibles.includes(bloque) ? bloque : letrasDisponibles[0];
  }

  if (!titulo) {
    console.error('[nuevo-tema] Falta el título. Abortado.');
    process.exit(1);
  }
  if (!templates[plantilla]) {
    console.error(`[nuevo-tema] La plantilla "${plantilla}" no existe en PLANTILLAS.md. Disponibles: ${letrasDisponibles.join(', ')}`);
    process.exit(1);
  }

  const { codigo: codigoAuto, esBloqueNuevo } = nextCodigo(bloque);
  const codigo = args.codigo || codigoAuto;

  if (esBloqueNuevo) {
    console.log(`[nuevo-tema] Bloque "${bloque}" no existía todavía — se creará automáticamente.`);
  }

  const { filename } = crearArchivo({
    codigo,
    titulo,
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
