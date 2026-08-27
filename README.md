# Mindmaps de Neurofisiología

Repositorio personal de estudio de Neurofisiología Clínica: cada tema es el guion de
texto de un mindmap que se dibuja después a mano en una libreta, como ejercicio de
memoria activa. Este repositorio no dibuja nada — guarda el árbol jerárquico en Markdown,
con cada dato clínico citado a su fuente.

Está organizado en **áreas**, cada una con su propia página en el visor:

| Área | Temas | Contenido |
|---|---|---|
| **IONM** | 23 | Monitorización neurofisiológica intraoperatoria |
| **PPEE** | 22 | Potenciales evocados: bases generales, visuales y en quirófano |

Previstas: EMG, EEG, EEG infantil y EEG UCI.

Estado: **45 temas, todos con contenido escrito y citado**. El recuento al día está en
[`MAPA_MAESTRO.md`](MAPA_MAESTRO.md), que se genera solo.

El trabajo en curso es el **repaso de contenido**: releer las fuentes buscando lo que aún
no está recogido en los temas. La tabla final de
[`fuentes/INDICE_FUENTES.md`](fuentes/INDICE_FUENTES.md) lleva la cuenta de qué capítulos
siguen sin explotar y a qué tema alimentaría cada uno.

**Visor en vivo:** [paniaguadediego-bit.github.io/mindmaps-neurofisiologia](https://paniaguadediego-bit.github.io/mindmaps-neurofisiologia/)
— accesible desde el navegador del PC o instalable como app desde Chrome en Android
("Añadir a pantalla de inicio").

## Qué es esto

Cada mindmap es UN tema = UN archivo `.md` en [`mindmaps/`](mindmaps/) = UNA página de
libreta. Dentro de cada área los temas se agrupan en bloques:

- **IONM** — *A* Modalidades de señal (PESS, MEP, onda D, EMG libre y estimulado, CoMEPs,
  PEATC, EEG, reflejos) · *B* Contextos quirúrgicos (columna, tumores medulares, tronco
  encefálico, IV ventrículo, mapeo del suelo del IV ventrículo, craneotomía despierta) ·
  *C* Transversales (anatomía de vías largas, electrodos, TIVA, relajantes, criterios de
  alarma, troubleshooting).
- **PPEE** — *A* Bases fisiológicas y anatómicas · *B* Bases técnicas de registro · *C*
  PEV en quirófano · *V* Potenciales evocados visuales.

Cada tema se escribe **autocontenido**: no remite a otro para completar un dato, porque
no se estudian en orden. Si un dato hace falta en dos temas, se repite en ambos con su
cita — antes perder brevedad que perder información.

El catálogo es **vivo**: crece, se reorganiza y se divide sin tocar código — el visor y
el índice ([`MAPA_MAESTRO.md`](MAPA_MAESTRO.md)) se generan solos a partir de los
archivos de `mindmaps/`. Un área nueva aparece con solo declararla en un `.md`.

## Cómo funciona

```
mindmaps/*.md  →  node build.js  →  MAPA_MAESTRO.md + index.html (portal) + una página por área
```

`build.js` no tiene dependencias externas (solo Node.js estándar) y no hardcodea el
catálogo: lee el front-matter de cada `.md`, agrupa por área y bloque, ordena los códigos
naturalmente (A9 antes que A10) y genera el visor — con tema claro/oscuro automático,
bloques y temas desplegables, jerarquía tipográfica por nivel de rama, y un checkbox de
progreso de estudio guardado en el navegador.

**Añadir un tema nuevo:**

```bash
node nuevo-tema.js --area PPEE --bloque V --titulo "Título del tema"
```

Calcula el siguiente código libre, genera el esqueleto con la plantilla del bloque y
regenera el visor. El contenido clínico se rellena después, citando siempre una fuente
real (o marcando `(verificar)` si no hay una disponible) — nunca se inventa.

Instrucciones completas de trabajo, convenciones y reglas del proyecto: [`CLAUDE.md`](CLAUDE.md).

## Fuentes

Los PDFs/docx de libros y artículos que respaldan el contenido clínico **no están en
este repositorio** — son material con copyright y se quedan solo en el equipo local. El
índice de qué cubre cada fuente sí está publicado: [`fuentes/INDICE_FUENTES.md`](fuentes/INDICE_FUENTES.md).

Cada rama `Referencia` cita la clave de una fuente que **está en ese índice**, con
capítulo y páginas. Ninguna cifra —umbral, latencia, criterio de alarma— se escribe sin
respaldo: lo que no puede confirmarse contra una fuente disponible va marcado
`(verificar)` de forma explícita, y las discrepancias internas de las propias fuentes se
dejan anotadas en lugar de resolverse en silencio.
