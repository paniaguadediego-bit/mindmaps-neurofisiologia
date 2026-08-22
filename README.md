# Mindmaps de Neurofisiología

Repositorio personal de estudio de Neurofisiología Clínica intraoperatoria (IONM/MIO):
23 temas, cada uno el guion de texto de un mindmap que se dibuja después a mano en una
libreta, como ejercicio de memoria activa. Este repositorio no dibuja nada — guarda el
árbol jerárquico en Markdown, con cada dato clínico citado a su fuente.

**Visor en vivo:** [paniaguadediego-bit.github.io/mindmaps-neurofisiologia](https://paniaguadediego-bit.github.io/mindmaps-neurofisiologia/)
— accesible desde el navegador del PC o instalable como app desde Chrome en Android
("Añadir a pantalla de inicio").

## Qué es esto

Cada mindmap es UN tema = UN archivo `.md` en [`mindmaps/`](mindmaps/) = UNA página de
libreta. Los temas se agrupan en tres bloques:

- **A — Modalidades de señal**: PESS, MEP, onda D, EMG libre/estimulado, CoMEPs, BAEP,
  EEG, reflejos.
- **B — Contextos quirúrgicos**: columna (deformidad, degenerativa), tumores medulares
  (intra/extramedulares), fosa posterior/tronco, cuarto ventrículo, craneotomía despierta.
- **C — Transversales**: anatomía de vías largas, electrodos, farmacología anestésica,
  relajantes musculares, criterios de alarma, troubleshooting.

El catálogo es **vivo**: crece, se reorganiza y se divide sin tocar código — el visor y
el índice ([`MAPA_MAESTRO.md`](MAPA_MAESTRO.md)) se generan solos a partir de los
archivos de `mindmaps/`.

Estado actual: 13 temas completos, 10 en progreso, 23/23 con contenido (ninguno vacío).

## Cómo funciona

```
mindmaps/*.md  →  node build.js  →  MAPA_MAESTRO.md + index.html
```

`build.js` no tiene dependencias externas (solo Node.js estándar) y no hardcodea el
catálogo: lee el front-matter de cada `.md`, agrupa por bloque, ordena los códigos
naturalmente (A9 antes que A10) y genera el visor — con tema claro/oscuro automático,
navegación por bloques y temas desplegables, y un checkbox de progreso de estudio
guardado en el navegador.

**Añadir un tema nuevo:**

```bash
node nuevo-tema.js --bloque A --titulo "Título del tema"
```

Calcula el siguiente código libre, genera el esqueleto con la plantilla del bloque y
regenera el visor. El contenido clínico se rellena después, citando siempre una fuente
real (o marcando `(verificar)` si no hay una disponible) — nunca se inventa.

Instrucciones completas de trabajo, convenciones y reglas del proyecto: [`CLAUDE.md`](CLAUDE.md).

## Fuentes

Los PDFs/docx de libros y artículos que respaldan el contenido clínico **no están en
este repositorio** — son material con copyright y se quedan solo en el equipo local. El
índice de qué cubre cada fuente sí está publicado: [`fuentes/INDICE_FUENTES.md`](fuentes/INDICE_FUENTES.md).
Cada rama `Referencia` de cada mindmap cita la clave correspondiente.
