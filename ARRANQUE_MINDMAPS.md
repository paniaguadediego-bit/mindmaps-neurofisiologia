# ARRANQUE — Proyecto de mindmaps de Neurofisiología

> Instrucciones para Claude Code. Lee este archivo entero y ejecuta lo que dice.
> Cuando termines, este archivo puede quedarse como referencia o borrarse.

---

## Contexto y rol

Eres el asistente de un proyecto personal de estudio de Neurofisiología Clínica.

El usuario es Pani, FEA de Neurofisiología Clínica que trabaja en monitorización
neurofisiológica intraoperatoria (IONM/MIO) en quirófano. Actualmente usa sistema
**Inomed**; a partir de **mediados de octubre de 2026** pasará a **Cadwell**, así que
cualquier detalle dependiente del equipo debe indicar a cuál se refiere.

Tiene formación de base: da por hecho terminología IONM avanzada, no expliques
conceptos básicos, discute de igual a igual como un especialista senior. Comunicación
en español, técnica, directa, sin relleno. Fuentes de referencia prioritarias: guías y
consensos de **ASNM, ACNS, ISION e IFCN** por encima de investigación primaria, salvo
que él pida explícitamente lo contrario.

El usuario trabaja en **Windows**. No asumas comandos de Unix ni que `python3` exista.

---

## Qué es este proyecto

Un repositorio local y **vivo** de mindmaps de neurofisiología. Cada tema es UN mindmap
= UNA página de su libreta, que él dibuja después **a mano** como ejercicio de memoria
activa. Este proyecto NO dibuja mindmaps: almacena el guion jerárquico en texto que él
traduce a dibujo.

**Vivo** significa que el catálogo de temas NO es fijo. Él añadirá temas nuevos,
dividirá temas en versiones más específicas, creará versiones más abiertas de temas
existentes, y sumará áreas enteras que hoy no están (por ejemplo VEP intraoperatorios).
El sistema debe soportar eso sin reorganizaciones manuales.

**La fuente de verdad son los archivos Markdown. Todo lo demás se genera.**

---

## Estructura a crear

```
./
├── CLAUDE.md                    # instrucciones permanentes (ver abajo)
├── MAPA_MAESTRO.md              # GENERADO por el build, nunca a mano
├── PLANTILLAS.md                # las 3 plantillas de ramas, editable a mano
├── mindmaps/                    # un .md por tema, nombre = CODIGO-slug.md
├── fuentes/                     # PDFs de libros y artículos
│   └── INDICE_FUENTES.md        # qué cubre cada fuente (mantenido a mano)
├── build.py  (o build.js)       # genera MAPA_MAESTRO.md e index.html
└── .claude/skills/mindmap/SKILL.md
```

---

## Front-matter obligatorio en cada mindmap

Cada archivo de `mindmaps/` empieza con este bloque YAML. Es lo que permite generar el
índice sin que se desincronice nunca:

```yaml
---
codigo: A4
titulo: EMG libre (free-running)
bloque: A
plantilla: A
estado: esqueleto        # esqueleto | en-progreso | completo
---
```

Reglas de los campos:

- `codigo`: letra de bloque + número. Los números crecen sin límite (A10, A11...).
- `bloque`: se define aquí, **no está cerrado en el código**. Si él crea un bloque nuevo
  (por ejemplo `D` para otra área), el build debe recogerlo automáticamente sin que haya
  que tocar el script.
- `plantilla`: A, B o C según `PLANTILLAS.md`. Un tema puede usar una plantilla de bloque
  distinto al suyo si tiene sentido.
- `estado`: lo actualiza quien rellene el mindmap.

---

## Los 22 temas iniciales

Créalos como **esqueletos**: front-matter correcto, título, y las ramas de primer nivel
de su plantilla ya escritas y vacías. **NO inventes el contenido clínico.**

**Bloque C — Transversales (plantilla C):**

- C1 Anatomía funcional de las vías largas (corticoespinal vs. columnas dorsales)
- C2 Colocación de electrodos 10-20 / 10-10
- C3 TIVA y farmacología anestésica en MIO
- C4 Relajantes musculares en MIO
- C5 Marco general de criterios de alarma
- C6 Troubleshooting general

**Bloque A — Modalidades de señal (plantilla A):**

- A1 PESS / SSEP
- A2 PEM / MEP transcraneal (miogénico)
- A3 Onda D (D-wave epidural)
- A4 EMG libre (free-running)
- A5 EMG estimulado — umbral de tornillo pedicular
- A6 Corticobulbares / MEP de pares craneales (CoMEPs)
- A7 PEATC / BAEP
- A8 EEG intraoperatorio
- A9 Reflejos en IONM (H, blink, bulbocavernoso, maseterino, trigémino-cervical, trigémino-vocal)

**Bloque B — Contextos quirúrgicos (plantilla B):**

- B1 Columna — deformidad / escoliosis
- B2 Columna — degenerativa / instrumentación
- B3 Tumores medulares intramedulares (IMSCT)
- B4 Tumores medulares extramedulares / cono-cola de caballo
- B5 Fosa posterior / tronco encefálico
- B6 Tumores de cuarto ventrículo
- B7 Craneotomía despierta / mapeo cortical-subcortical

**Orden de trabajo sugerido** (básico → avanzado), que va en `MAPA_MAESTRO.md`:

```
C1 → C2 → A1 → A2 → A3 → C5 → A4 → A5 → C3 → C4 → C6 → B2 → B1 → B3 → B4 →
A6 → A9 → A7 → B5 → B6 → B7 → A8
```

---

## PLANTILLAS.md

**Tipo A — Modalidad de señal:**
Vía anatómica → Estimulación → Registro/montaje → Morfología normal → Efecto
anestesia/fisiología → Criterios de alarma → Causas de cambio no quirúrgico →
Troubleshooting → Limitaciones → Referencia.

**Tipo B — Contexto quirúrgico:**
Modalidades combinadas → Fases del procedimiento → Riesgo neurológico específico →
Posicionamiento → Jerarquía de alarma → Protocolo de reacción → Técnica de mapeo
específica → Referencia.

**Tipo C — Transversal:**
Concepto central → A qué modalidades afecta → Parámetros clave → Aplicación práctica →
Errores frecuentes → Conexión con otros nodos → Referencia.

Este archivo es **editable a mano**: si él quiere cambiar una plantilla o añadir una
Tipo D, se edita aquí y el resto del sistema lo respeta.

---

## Formato del árbol dentro de cada mindmap

Después del front-matter: título del tema, y el árbol dentro de un bloque de código con
conectores de texto (`├─ │ └─`), porque ese es el formato que él copia a mano. La última
rama siempre es `Referencia`, con la clave de cita de la fuente. Cualquier dato numérico
no confirmado se marca con `(verificar)`.

Ejemplo de esqueleto generado:

````markdown
---
codigo: A4
titulo: EMG libre (free-running)
bloque: A
plantilla: A
estado: esqueleto
---

# A4 — EMG libre (free-running)

```
EMG libre (free-running)
├─ Vía anatómica
├─ Estimulación
├─ Registro / montaje
├─ Morfología normal
├─ Efecto anestesia/fisiología
├─ Criterios de alarma
├─ Causas de cambio no quirúrgico
├─ Troubleshooting
├─ Limitaciones
└─ Referencia
```
````

---

## fuentes/ e INDICE_FUENTES.md

La carpeta `fuentes/` contendrá PDFs que él irá añadiendo: libros (Deletis
*Neurophysiology in Neurosurgery*, Moller *Intraoperative Neurophysiological
Monitoring*, MacDonald) y artículos (Romstöck 2000, Leppänen 2005/2006, MacDonald
2013/2019, Legatt 2016, Toleikis 2024, Nuwer 2012, Sloan 2012, Costa 2015, Boaro 2026,
Urriza 2025, Lima Medeiros 2024...).

Crea `INDICE_FUENTES.md` con una tabla de: **clave de cita · archivo · tipo
(libro/artículo/guía) · sociedad si aplica · qué temas cubre · capítulos o secciones
relevantes**. Déjalo con las cabeceras y una fila de ejemplo comentada; se rellena según
él vaya añadiendo PDFs.

**Motivo, y debe quedar en CLAUDE.md:** abrir un libro entero de 500 páginas en cada
consulta es lento y caro. El índice existe para poder ir directo a la fuente y sección
correctas.

Las claves de cita (formato Autor+Año, ej. `Romstöck2000`, `Leppänen2005`) son las que
se usan en la rama `Referencia` de cada mindmap.

---

## El script de build

**Primero comprueba qué runtime hay disponible en la máquina** (Windows): prueba
`python --version`, `py --version` y `node --version`. Escribe el script en **Python 3
si está disponible; si no, en Node.js**. No asumas que existe el comando `python3`.
Deja documentado en CLAUDE.md el comando exacto que funciona en esta máquina.

Sin dependencias externas: solo librería estándar del lenguaje elegido. Sin npm, sin
pip, sin CDN.

Lee todos los `.md` de `mindmaps/`, parsea su front-matter, y genera dos salidas:

**1. `MAPA_MAESTRO.md`** — índice derivado de los archivos: temas agrupados por bloque,
con código, título, plantilla, estado y ruta al archivo. Cabecera que avise de que está
generado y no debe editarse a mano.

**2. `index.html`** — visor autocontenido:

- CSS inline, sin JavaScript de terceros
- Navegación lateral por bloques, con anclas a cada tema
- Árboles en fuente monoespaciada dentro de contenedores con `overflow-x: auto`, para
  que el ancho de la página nunca haga scroll horizontal
- Color de acento distinto por bloque, asignado de forma que un bloque nuevo reciba
  color automáticamente sin tocar el código
- Indicador visual del campo `estado` (esqueleto / en-progreso / completo) y contador de
  progreso global
- Tema claro y oscuro vía `prefers-color-scheme`: define la paleta completa en `:root` y
  redefine **solo los tokens** dentro del media query. Ningún color puede tener su única
  definición dentro del media query. El `body` debe pintar `background` explícito desde
  un token.

Requisitos de robustez:

- **Orden natural de códigos**: A9 antes que A10, nunca alfabético.
- **Bloques descubiertos dinámicamente** desde el front-matter, no hardcodeados.
- Si un archivo tiene front-matter ausente o inválido, **no rompas el build**: avisa por
  consola nombrando el archivo y sigue con el resto.
- Un solo comando para ejecutarlo, sin argumentos.

---

## CLAUDE.md que debes escribir

Instrucciones permanentes del proyecto:

1. **Fuente de verdad:** los `.md` de `mindmaps/`. `MAPA_MAESTRO.md` e `index.html` son
   generados y desechables: nunca editarlos a mano.
2. **Un mindmap = un tema = un archivo = una página de libreta.** Nunca mezclar dos temas
   en un archivo.
3. **Anulación de la skill `/mindmap`:** su Paso 3 dice que no genere archivos. En ESTE
   proyecto es al revés: el resultado se escribe siempre en el `.md` correspondiente de
   `mindmaps/`, y después se ejecuta el build.
4. **Uso de fuentes:** consulta siempre `fuentes/` antes de rellenar contenido clínico,
   guiándote por `INDICE_FUENTES.md` para ir a la fuente y sección correctas en vez de
   abrir PDFs enteros. Cita con la clave de cita en la rama `Referencia`. Si un dato no
   está en las fuentes disponibles, escríbelo con `(verificar)` y dilo explícitamente.
   **NUNCA inventes cifras, umbrales, latencias ni criterios de alarma**, ni los
   presentes como si vinieran de una guía. Prioriza ASNM/ACNS/ISION/IFCN sobre
   investigación primaria.
5. **Equipo:** Inomed hasta mediados de octubre de 2026, Cadwell después. Cualquier
   detalle dependiente del equipo debe decir a cuál se refiere.
6. **Después de cualquier cambio en `mindmaps/` o `PLANTILLAS.md`, ejecutar el build.**
   Anota aquí el comando exacto que funciona en esta máquina.

Y documenta las **operaciones del sistema vivo**, con los pasos exactos:

- **Añadir un tema:** siguiente código libre del bloque → crear
  `mindmaps/CODIGO-slug.md` con front-matter y esqueleto de plantilla → build.
- **Añadir un área nueva** (ej. VEP intraoperatorios): decidir si es una modalidad más
  del bloque A o un bloque nuevo con su letra → si es bloque nuevo, basta con usar la
  letra en el front-matter, el build lo recoge solo.
- **Dividir un tema** en versiones más específicas: crear los archivos hijos con códigos
  nuevos, dejar el padre como índice o eliminarlo → build.
- **Crear una versión más abierta o de repaso rápido** de un tema existente: archivo
  nuevo con código propio, referenciando al detallado.
- **Renombrar o recodificar:** cambiar front-matter y nombre de archivo, y buscar
  referencias cruzadas en otros mindmaps antes de dar por hecho el cambio.

---

## Qué NO hacer

- No inventes el contenido clínico de los 22 temas: crea **esqueletos**.
- No hardcodees el catálogo de temas ni de bloques en el build: debe salir siempre de los
  archivos.
- No añadas tags, taxonomías ni base de datos más allá del front-matter de 5 campos.
- No uses frameworks, npm ni dependencias externas.
- No conviertas el visor en el proyecto: debe funcionar y quedar terminado.
- No dupliques el mapa maestro ni las plantillas dentro de los archivos individuales.

---

## Al terminar

Ejecuta el build, confirma que los 22 temas aparecen agrupados correctamente y que
`MAPA_MAESTRO.md` se ha generado. Después dime:

1. La ruta de `index.html` para abrirlo.
2. El comando exacto de build que funciona en esta máquina.
3. En 5 líneas, cómo añado un tema nuevo.

---
---

# ANEXO — Crea este archivo en `.claude/skills/mindmap/SKILL.md`

Copia el contenido de abajo tal cual, incluido el front-matter YAML de las tres primeras
líneas.

```markdown
---
name: mindmap
description: Genera el esquema ramificado (árbol de texto) de UN tema de estudio, listo para copiar a mano como mindmap en una página de libreta. Úsala siempre que el usuario invoque /mindmap, o pida "hazme un mindmap de X", "ramifica X", "dame las ramas de X para mi libreta", "esquema para dibujar de X", "cómo organizo X en un mapa mental", o cualquier variante de convertir un tema en una estructura jerárquica lista para memorizar a mano. No está atada a ningún área concreta: se adapta al tipo de tema (un concepto, un caso aplicado, un marco transversal) y a la disciplina de estudio del usuario, usando las fuentes del proyecto activo cuando existan y su propio criterio cuando no.
---

# Mindmap de un tema de estudio

Convierte un tema en el esquema ramificado de una sola página: el usuario lo dibujará a
mano en su libreta como ejercicio de memoria activa. Tu trabajo es decidir qué ramas
debe tener y rellenarlas con contenido real y correcto — no producir un dibujo, sino el
guion de texto que el usuario traduce a mapa mental.

## Paso 0: Identificar el tema y su tipo

Cada mindmap tiene UN tema central. Si el usuario da varios a la vez, trátalos como
mindmaps independientes, uno por uno.

Clasifica el tema en uno de tres tipos:

1. **Concepto o entidad** — algo que se define y funciona por sí mismo: un mecanismo,
   una estructura, una técnica, una ley, una fórmula.
2. **Caso aplicado o escenario** — una situación real donde se combinan varios
   conceptos: un procedimiento, un caso clínico, un supuesto práctico.
3. **Marco transversal** — algo que atraviesa varios temas sin ser un tema en sí: un
   principio general, una herramienta, un criterio metodológico.

Si el tipo es evidente, continúa sin preguntar y dilo en una línea. Si es genuinamente
ambiguo, haz una única pregunta aclaratoria rápida.

## Paso 1: Aplicar la plantilla de ramas según el tipo

**Tipo 1 — Concepto o entidad:** Definición / qué es → Cómo funciona o mecanismo/vía →
Parámetros o componentes clave → Cómo se reconoce o manifiesta → Qué lo modifica o
influye → Cuándo se considera anómalo o relevante → Errores o confusiones frecuentes →
Limitaciones / qué no cubre → Fuente.

**Tipo 2 — Caso aplicado o escenario:** Qué conceptos combina y por qué → Fases o pasos
del proceso → Objetivo o riesgo específico → Condicionantes prácticos → Jerarquía de
decisión si hay conflicto entre datos → Protocolo o pauta de actuación → Particularidad
técnica de este caso → Fuente.

**Tipo 3 — Marco transversal:** Concepto central → A qué otros temas afecta y cómo →
Datos o reglas clave → Aplicación práctica → Errores frecuentes o mitos → Conexión con
otros nodos del mapa de estudio → Fuente.

Si el tema real pide una rama más o una menos para no forzar contenido que no existe,
ajústala. No mezcles ramas de dos plantillas en el mismo árbol.

## Paso 2: Rellenar cada rama con contenido real

- Si el proyecto tiene documentos o fuentes propias sobre el tema, consúltalos antes de
  escribir y cita la fuente concreta en la rama "Fuente".
- Si no hay fuentes de proyecto, usa conocimiento propio fiable, pero marca
  explícitamente con "(verificar)" cualquier dato numérico o afirmación muy específica
  de la que no estés seguro al 100%. Nunca lo inventes.
- Profundidad: rama principal + 1-2 subniveles como máximo. Debe caber dibujado a mano
  en una página.
- Usa la terminología propia de la disciplina del tema.

## Paso 3: Formato de salida

Árbol en bloque de código monoespaciado con conectores.

    Tema central
    ├─ Rama 1
    │  ├─ Sub-rama 1a
    │  └─ Sub-rama 1b
    └─ Rama N
       └─ Fuente

## Reglas

- Un mindmap = un tema central = una página.
- No inventes datos, cifras ni criterios que no controles con seguridad — usa
  "(verificar)" en vez de rellenar con una cifra dudosa.
- No fuerces todas las ramas de una plantilla si el tema no las tiene con sentido:
  mejor un árbol correcto y corto que uno completo y relleno.
- Respeta el idioma y el nivel técnico con el que el usuario plantea el tema.
```
