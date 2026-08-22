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

## Qué es este proyecto

Un repositorio **vivo** de mindmaps de neurofisiología. Cada tema es UN mindmap = UNA
página de libreta, que Pani dibuja después a mano como ejercicio de memoria activa. Este
proyecto NO dibuja mindmaps: almacena el guion jerárquico en texto que ella traduce a
dibujo.

**Vivo** significa que el catálogo de temas no es fijo: se añaden temas nuevos, se dividen
temas existentes en versiones más específicas, se crean versiones más abiertas, y pueden
sumarse bloques enteros nuevos (por ejemplo VEP intraoperatorios). El sistema debe
soportar todo eso sin reorganizaciones manuales.

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
5. **Equipo:** ver arriba (Inomed → Cadwell en octubre de 2026).
6. **Después de cualquier cambio en `mindmaps/` o `PLANTILLAS.md`, ejecuta el build:**

   ```
   node build.js
   ```

   (Node.js está disponible en esta máquina; Python no lo está — no uses `python`,
   `python3` ni `py`.)

## Front-matter obligatorio de cada mindmap

```yaml
---
codigo: A4
titulo: EMG libre (free-running)
bloque: A
plantilla: A
estado: esqueleto        # esqueleto | en-progreso | completo
---
```

- `codigo`: letra de bloque + número. Los números crecen sin límite (A10, A11...).
- `bloque`: no está cerrado en el código. Un bloque nuevo se recoge automáticamente por
  el build en cuanto aparece en el front-matter de algún archivo.
- `plantilla`: A, B o C según `PLANTILLAS.md` (o una nueva si se añade allí). Un tema
  puede usar una plantilla de bloque distinto al suyo si tiene sentido.
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

## Operaciones del sistema vivo

**Añadir un tema (automatizado, recomendado):**

```
node nuevo-tema.js --bloque A --titulo "Título del tema nuevo"
```

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

**Añadir un área nueva** (ej. VEP intraoperatorios):
1. Decide si es una modalidad más del bloque A o merece un bloque propio.
2. Si es un bloque nuevo, basta con usar esa letra en el `bloque` del front-matter — el
   build la descubre sola, sin tocar código.

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
- No añadir tags, taxonomías ni base de datos más allá del front-matter de 5 campos.
- No usar frameworks, npm ni dependencias externas en el build.
- No editar `MAPA_MAESTRO.md` ni `index.html` a mano — se pierden en el siguiente build.
- No duplicar el mapa maestro ni las plantillas dentro de los archivos individuales de
  `mindmaps/`.

## Estructura del repositorio

```
./
├── CLAUDE.md                    # este archivo
├── MAPA_MAESTRO.md              # GENERADO por build.js, nunca a mano
├── index.html                   # GENERADO por build.js, nunca a mano
├── PLANTILLAS.md                # las plantillas de ramas, editable a mano
├── mindmaps/                    # un .md por tema, nombre = CODIGO-slug.md
├── fuentes/                     # PDFs de libros y artículos
│   └── INDICE_FUENTES.md        # qué cubre cada fuente, editable a mano
├── build.js                     # genera MAPA_MAESTRO.md e index.html (node build.js)
├── nuevo-tema.js                # crea un esqueleto de tema y ejecuta el build
└── .claude/skills/mindmap/SKILL.md
```
