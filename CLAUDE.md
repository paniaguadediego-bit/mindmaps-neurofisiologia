# CLAUDE.md — Proyecto de mindmaps de Neurofisiología

Instrucciones permanentes para trabajar en este repositorio. Léelas antes de tocar
nada aquí.

## Contexto y rol

Asistente de un proyecto personal de estudio de Neurofisiología Clínica de Pani, FEA de
Neurofisiología Clínica que trabaja en monitorización neurofisiológica intraoperatoria
(IONM/MIO) en quirófano. Da por hecho terminología IONM avanzada, no expliques conceptos
básicos, discute de igual a igual como un especialista senior. Comunicación en español,
técnica, directa, sin relleno.

**Equipo:** usa **Inomed** hasta mediados de octubre de 2026; después pasa a **Cadwell**.
Cualquier detalle dependiente del equipo debe indicar explícitamente a cuál se refiere.

**Fuentes de referencia prioritarias:** guías y consensos de **ASNM, ACNS, ISION e IFCN**
por encima de investigación primaria, salvo que se pida explícitamente lo contrario.

**Plataforma:** Windows. No asumas comandos Unix ni que exista `python3`.

**Repositorio y publicación:** el proyecto vive en GitHub —
[github.com/paniaguadediego-bit/mindmaps-neurofisiologia](https://github.com/paniaguadediego-bit/mindmaps-neurofisiologia)
(repo público, solo Pani tiene permiso de escritura) — con GitHub Pages sirviendo
`index.html` en
[paniaguadediego-bit.github.io/mindmaps-neurofisiologia](https://paniaguadediego-bit.github.io/mindmaps-neurofisiologia/).
Publicar es siempre `git add` + `git commit` + `git push`: hasta el `push` todo se queda
en local, es el único paso que hace público un cambio (confirmar con ella antes de
hacerlo, salvo que ya lo haya pedido explícitamente en la misma conversación).

## Qué es este proyecto

Un repositorio **vivo** de mindmaps de neurofisiología. Cada tema es UN mindmap = UNA
página de libreta, que Pani dibuja después a mano como ejercicio de memoria activa. Este
proyecto NO dibuja mindmaps: almacena el guion jerárquico en texto que ella traduce a
dibujo.

**Vivo** significa que el catálogo de temas no es fijo: se añaden temas nuevos, se dividen
temas existentes en versiones más específicas, se crean versiones más abiertas, y pueden
sumarse bloques o **áreas** enteras nuevas. El sistema debe soportar todo eso sin
reorganizaciones manuales.

## Áreas

El proyecto cubre varias áreas de neurofisiología, cada una con **su propia página** en el
visor. `index.html` es el portal que las lista; cada área se descubre sola en cuanto un
`.md` la declara en su front-matter.

| Área | Bloques | Estado | Página |
|---|---|---|---|
| `IONM` | A modalidades · B contextos quirúrgicos · C transversales | 23 temas, todos con contenido | `ionm.html` |
| `PPEE` | A bases fisiológicas/anatómicas · B bases técnicas · V visuales | 19 temas, 13 con contenido | `ppee.html` |
| EMG, EEG, EEG infantil, EEG UCI | — | previstas, aún no creadas | — |

El recuento exacto y actualizado está siempre en `MAPA_MAESTRO.md` (generado): no lo
dupliques aquí más allá de esta orientación gruesa.

**Códigos por área.** IONM usa códigos sin prefijo por motivos históricos (`A1`, `B7`,
`C3`). **Toda área nueva lleva prefijo** para que el código sea autoexplicativo en la
página de la libreta: PPEE usa `PE-A1`, `PE-B3`, `PE-V9`. `nuevo-tema.js` deduce el
prefijo solo a partir de los temas que ya existan en esa área; para un área nueva se le
pasa con `--prefijo "XX-"`.

**Nunca recodificar un tema ya publicado** sin motivo de peso: Pani puede tener ya esa
página dibujada a mano con ese código escrito.

## Trabajo pendiente (orden acordado)

1. **Bloque B de PPEE** — los 6 temas de bases técnicas de registro (`PE-B1` a `PE-B6`),
   los únicos esqueletos vacíos que quedan. Fuente: **Markand cap.1 "Basic Techniques of
   EP Recording", pp.1-23**. Ojo: parte de ese material YA está escrito dentro de
   `PE-A1` (promediado, relación señal/ruido, conversión A/D, nomenclatura, mediciones,
   límites del promediado). Por la regla de autocontención eso **no es un problema**: se
   repite el dato en el tema del bloque B que le corresponda, con su cita, y además se
   profundiza donde `PE-A1` solo lo resumía.
2. **Retrofit de autocontención en IONM** — los 23 temas se escribieron antes de la regla
   5 y están llenos de referencias cruzadas. Los peores: `B5` y `B6` (casi solo "ver
   B8") y todo el bloque `C`. Acordado hacerlo después de terminar PPEE.
3. **Repaso de contenido** de los temas ya escritos, por tandas, buscando lo que las
   fuentes den de sí y aún no esté recogido.

Áreas futuras (EMG, EEG, EEG infantil, EEG UCI): sin fuentes aún en `fuentes/`; no
empezar hasta que Pani las aporte.

## Reglas fundamentales

1. **Fuente de verdad: los `.md` de `mindmaps/`.** `MAPA_MAESTRO.md` e `index.html` están
   **generados** por `build.js` y son desechables — nunca se editan a mano.
2. **Un mindmap = un tema = un archivo = una página de libreta.** Nunca mezclar dos temas
   en un archivo.
3. **Anulación de la skill `/mindmap`:** su Paso 3 (de la skill genérica) dice que no
   genere archivos. **En este proyecto es al revés**: el resultado se escribe siempre en
   el `.md` correspondiente de `mindmaps/`, y después se ejecuta el build.
4. **Uso de fuentes:** antes de rellenar contenido clínico, consulta `fuentes/`, guiándote
   por `fuentes/INDICE_FUENTES.md` para ir directo a la fuente y sección correctas —
   **no abras un PDF de 500 páginas entero en cada consulta**, es lento y caro. Cita con
   la clave de cita en la rama `Referencia`. Si un dato no está en las fuentes
   disponibles, escríbelo con `(verificar)` y dilo explícitamente. **Nunca inventes
   cifras, umbrales, latencias ni criterios de alarma**, ni los presentes como si
   vinieran de una guía. Prioriza ASNM/ACNS/ISION/IFCN sobre investigación primaria.
5. **Cada tema es AUTOCONTENIDO. No estudia en orden.** Está prohibido escribir un tema
   que remita a otro para un dato ("los parámetros completos están en A5", "ver B8"): si
   abre A7 sin haber leído A1, el tema tiene que sostenerse solo. Repite el dato con su
   cita, aunque ya aparezca en otro mindmap. Los enlaces del tipo "esto se amplía en X"
   solo valen como **añadido**, nunca como sustituto de la información.
   - Corolario: **si un tema necesita más ramas de las que trae su plantilla, se añaden.**
     La plantilla es un punto de partida, no un límite. Antes perder brevedad que perder
     información.
   - Tensión a vigilar: autocontenido + "una página de libreta" tiran en direcciones
     opuestas. Si un tema se hace inabarcable para una página, **se parte en dos temas**
     con códigos propios; no se resuelve recortando información ni volviendo a referenciar.
   - Deuda conocida: los 23 temas de IONM se escribieron antes de esta regla y están
     llenos de referencias cruzadas (B5 y B6 son casi solo "ver B8"; el bloque C entero es
     referencial). Hay un retrofit pendiente, acordado para después de PPEE.
6. **Equipo:** ver arriba (Inomed → Cadwell en octubre de 2026).
7. **Después de cualquier cambio en `mindmaps/` o `PLANTILLAS.md`, ejecuta el build:**

   ```
   node build.js
   ```

   (Node.js está disponible en esta máquina; Python no lo está — no uses `python`,
   `python3` ni `py`.)

## Cómo leer los PDFs de `fuentes/` (práctico)

Lecciones ya pagadas. Respétalas y ahorrarás tiempo y dinero:

- **La herramienta Read NO puede renderizar PDFs aquí** (falta `pdftoppm`/poppler). En
  cambio **`pdftotext` SÍ está disponible** (`/mingw64/bin/pdftotext`). Es la vía buena:

  ```
  pdftotext -layout -f <pag_inicio> -l <pag_fin> "ruta.pdf" "<scratchpad>/salida.txt"
  ```

- **La salida va SIEMPRE al scratchpad del sistema, nunca al repo**, y se borra al
  terminar (ver la regla de copyright en "Qué NO hacer").
- **Extrae tú directamente en vez de lanzar un subagente** para esto. Un subagente
  arranca sin contexto y gasta mucho más; en una ocasión consumió ~50 000 tokens en dos
  llamadas antes de empezar. Solo delega si el volumen es realmente grande.
- **El número de página del PDF NO coincide con el impreso.** En Markand el desfase varía
  por capítulo (+14 en cap.1, +13 en cap.3, +12 en cap.4). Verifícalo leyendo los
  encabezados de página y **cita siempre la página IMPRESA**.
- **`pdftotext` se come los símbolos de grado y de minuto de arco.** Aparecen cosas como
  "campo de 150" (era 15°) o "cuadros de 40-60" (eran 40-60′). Reconstruye por contexto y
  comprueba la coherencia interna antes de escribir la cifra.
- **Las tablas salen descolocadas**: las columnas se desalinean y las filas se mezclan.
  No copies una tabla sin cruzarla con el texto del cuerpo que la explica.

## Front-matter obligatorio de cada mindmap

```yaml
---
codigo: PE-V3
titulo: PEV normal: componentes N75-P100-N145 y medición
area: PPEE
bloque: V — Potenciales evocados visuales
plantilla: E
estado: esqueleto        # esqueleto | en-progreso | completo
---
```

**Aviso: el parser de `build.js` NO es YAML de verdad.** Toma literalmente todo lo que va
tras el primer `: ` de cada línea. Consecuencias prácticas: un título puede contener dos
puntos sin problema (como el del ejemplo), pero **no lo entrecomilles** — las comillas
saldrían impresas tal cual en el visor.

- `codigo`: prefijo de área (si lo hay) + letra de bloque + número. Los números crecen sin
  límite (A10, A11...).
- `area`: define en qué página del visor sale el tema. Si falta, el build asume `IONM`
  (compatibilidad con los temas antiguos), pero en temas nuevos se pone siempre.
- `bloque`: puede ser solo la letra (`A`) o letra + nombre (`V — Potenciales evocados
  visuales`), que es lo que se muestra como título del bloque. No está cerrado en el
  código: un bloque nuevo se recoge solo en cuanto aparece en algún archivo.
- `plantilla`: A-F según `PLANTILLAS.md` (o una nueva si se añade allí). Un tema puede
  usar una plantilla de otro bloque si tiene sentido.
- `estado`: lo actualiza quien rellena el mindmap.

Después del front-matter va el título (`# CODIGO — Título`) y el árbol en un bloque de
código con conectores `├─ │ └─`. La última rama siempre es `Referencia`, con la clave de
cita de la fuente. Cualquier dato numérico no confirmado se marca `(verificar)`.

### Ampliación (opcional): ramas de profundización

Un mindmap puede tener, después del árbol base, una sección opcional para quien quiera
estudiar ese tema más a fondo — no es para dibujar a mano junto con la base. En el visor
se muestra fusionada dentro del mismo desplegable del tema (bajo un separador y la
etiqueta "Ampliación — profundizar"), no como un desplegable aparte: al abrir un tema se
ve todo de una vez, sin clics adicionales.

```markdown
## Ampliación — profundizar

\`\`\`
Tema — ampliación
├─ Rama extra 1
├─ Rama extra 2 (opcional)
└─ Rama extra 3 (opcional)
\`\`\`
```

Reglas:
- El encabezado debe ser exactamente `## Ampliación` (con o sin texto después, ej.
  "Ampliación — profundizar"). `build.js` lo busca así para separar el árbol base del de
  ampliación; si no coincide, no se renderiza como plegable.
- 1 a 3 ramas nuevas, con la misma densidad y exigencia de citas que el árbol base —
  nunca inventar datos, marcar `(verificar)` igual que en el resto.
- Es opcional: la mayoría de los temas no la necesitan. Solo se añade cuando la fuente da
  para profundizar de verdad en ese tema.

## El visor

Autocontenido, sin JavaScript de terceros ni dependencias — todo el JS es un script
propio embebido para dos cosas: el acordeón nativo de temas y el checkbox de estudiado.

- **`index.html` es el portal de áreas**; cada área tiene su propia página
  (`ionm.html`, `ppee.html`, ...), generada a partir del campo `area`. Todo lo generado
  por `build.js` es desechable — nunca se edita a mano.
- **Jerarquía tipográfica del árbol.** El visor NO pinta el árbol como bloque
  monoespaciado: `build.js` parsea los conectores `├─ │ └─` y lo renderiza con tamaños y
  pesos distintos por nivel (título > rama 1 > rama 2 > rama 3). Los `.md` conservan el
  árbol ASCII intacto porque es lo que se copia a mano. Consecuencia práctica: **respeta
  la indentación de 3 espacios por nivel** al escribir un árbol, o el parser calculará mal
  la profundidad. Las líneas de continuación (las que siguen a una rama larga sin conector
  propio) se fusionan solas con la rama anterior.
- **Bloques y temas son `<details>` nativos.** Los bloques (A/B/C) empiezan abiertos;
  cada tema empieza cerrado. Los temas comparten `name="tema"`, así que abrir uno cierra
  el resto automáticamente (acordeón nativo del navegador, sin JS) — soportado en
  navegadores razonablemente recientes; en uno antiguo simplemente pueden quedar varios
  abiertos a la vez, no rompe nada.
- **La Ampliación va fusionada dentro del cuerpo del tema**, no en un desplegable propio
  — al abrir un tema se ve todo de una vez.
- **Checkbox "estudiado a mano" por tema**, con contador en la barra lateral. Se guarda en
  `localStorage` del navegador — **no es contenido del proyecto, no toca los `.md`**, es
  solo progreso de lectura personal. Por eso **no se sincroniza entre dispositivos**: el
  estado marcado en el móvil no aparece en el PC ni en la tablet, cada navegador lleva su
  propia cuenta. Si algún día hace falta sincronizarlo entre dispositivos, hará falta algo
  más que HTML estático (backend/servicio) — no está planteado por ahora.
- **Icono/PWA:** `icon.svg` (vectorial, recreado a partir del logo que dio Pani) y
  `manifest.webmanifest` hacen que el sitio sea instalable como app desde Chrome en
  Android ("Añadir a pantalla de inicio"). Si el logo cambia, se edita `icon.svg`
  directamente — no hay generación automática de icono en `build.js`.

## Operaciones del sistema vivo

**Añadir un tema (automatizado, recomendado):**

```
node nuevo-tema.js --area PPEE --bloque V --titulo "Título del tema nuevo"
```

(Si se omite `--area`, usa la primera existente. Para un área nueva, añade
`--prefijo "XX-"` la primera vez.)

Calcula solo el siguiente código libre del bloque, genera `mindmaps/CODIGO-slug.md` con
el front-matter y el esqueleto de ramas de la plantilla (leídas en vivo de
`PLANTILLAS.md`, así que si se edita la plantilla el script lo respeta sin tocar código),
y ejecuta `node build.js` al final. Si se omiten `--bloque` o `--titulo`, pregunta por
consola. No hace `git commit` ni `git push` — eso sigue siendo manual (ver más abajo).
Opciones: `--plantilla LETRA` (por defecto la misma letra que el bloque), `--codigo` para
forzar uno concreto, `--no-build` para no regenerar el visor.

**Añadir un tema (a mano):**
1. Elige el siguiente código libre del bloque (ej. si el último de A es A9, el nuevo es A10).
2. Crea `mindmaps/CODIGO-slug.md` con el front-matter completo y el esqueleto de ramas de
   su plantilla (ver `PLANTILLAS.md`).
3. Ejecuta `node build.js`.

**Añadir un bloque nuevo** dentro de un área existente:
1. Basta con usar una letra nueva en el `bloque` del front-matter — el build lo descubre
   solo, sin tocar código.

**Añadir un área nueva** (ej. EMG, EEG, EEG infantil, EEG UCI):
1. Decide el prefijo de código (ej. `EMG-`) y las letras de sus bloques.
2. `node nuevo-tema.js --area EMG --prefijo "EMG-" --bloque "A — Nombre del bloque"
   --titulo "..."`. A partir del segundo tema el prefijo ya se deduce solo.
3. El build genera su página (`emg.html`) y la añade al portal automáticamente.
4. Añade las plantillas que necesite a `PLANTILLAS.md` si las existentes no encajan.

**Dividir un tema** en versiones más específicas:
1. Crea los archivos hijos con códigos nuevos.
2. Deja el padre como índice de los hijos, o elimínalo si ya no aporta.
3. `node build.js`.

**Crear una versión más abierta o de repaso rápido** de un tema existente:
1. Archivo nuevo con código propio, que referencia al tema detallado.
2. `node build.js`.

**Renombrar o recodificar:**
1. Cambia el `codigo`/`titulo` en el front-matter y el nombre de archivo.
2. Busca referencias cruzadas a ese código en otros mindmaps (ramas que lo citen) antes
   de dar el cambio por hecho.
3. `node build.js`.

## Qué NO hacer

- No inventar contenido clínico al crear temas nuevos si no hay fuente: dejar esqueleto o
  marcar `(verificar)`.
- No hardcodear el catálogo de temas ni de bloques en `build.js`: debe salir siempre de
  los archivos de `mindmaps/`.
- No añadir tags, taxonomías ni base de datos más allá del front-matter de 6 campos. El
  checkbox de "estudiado" del visor no cuenta como excepción — vive solo en
  `localStorage` del navegador, nunca en los `.md`.
- **No escribir un tema a base de referencias a otros** (ver regla 5): cada uno se estudia
  suelto.
- No usar frameworks, npm ni dependencias externas en el build.
- No editar `MAPA_MAESTRO.md` ni `index.html` a mano — se pierden en el siguiente build.
- No duplicar el mapa maestro ni las plantillas dentro de los archivos individuales de
  `mindmaps/`.
- **No dejar nunca volcados de texto de los PDFs/docx de `fuentes/` sueltos en el repo**
  (ej. salidas de `pdftotext`, notas de extracción). El repo es **público** — el `.gitignore`
  excluye `fuentes/*.pdf`, `*.docx`, `*.doc` y `*.txt`, pero si se usa una herramienta que
  escriba extracciones de texto en otro formato o ubicación, hay que borrarlas antes de
  cualquier `git add`/`commit`. Ya pasó una vez (texto íntegro de dos libros con copyright
  subido por error, tuvo que purgarse del historial con force-push) — verificar `git
  status` después de cualquier tarea de investigación en fuentes antes de publicar.

## Estructura del repositorio

```
./
├── CLAUDE.md                    # este archivo
├── README.md                    # presentación del proyecto para GitHub, editable a mano
├── MAPA_MAESTRO.md              # GENERADO por build.js, nunca a mano
├── index.html                   # GENERADO: portal de áreas, nunca a mano
├── ionm.html, ppee.html, ...    # GENERADOS: una página por área, nunca a mano
├── icon.svg                     # logo/favicon/icono PWA, editable a mano
├── manifest.webmanifest         # hace el visor instalable como app, editable a mano
├── PLANTILLAS.md                # las plantillas de ramas, editable a mano
├── mindmaps/                    # un .md por tema, nombre = CODIGO-slug.md
├── fuentes/                     # PDFs/docx de libros y artículos — NO se suben a git
│   └── INDICE_FUENTES.md        # qué cubre cada fuente, editable a mano (sí se sube)
├── build.js                     # genera MAPA_MAESTRO.md e index.html (node build.js)
├── nuevo-tema.js                # crea un esqueleto de tema y ejecuta el build
├── .gitignore                   # excluye fuentes/*.pdf|docx|doc|txt (copyright)
└── .claude/skills/mindmap/SKILL.md
```
