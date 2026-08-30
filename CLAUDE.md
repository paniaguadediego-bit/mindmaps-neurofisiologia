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
| `IONM` | A modalidades · B contextos quirúrgicos · C transversales | 25 temas, todos completos | `ionm.html` |
| `PPEE` | A bases fisiológicas/anatómicas · B bases técnicas · C PEV en quirófano · V visuales | 22 temas, todos con contenido | `ppee.html` |
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

1. ~~**Retrofit de IONM**~~ **TERMINADO.** Los 23 temas se escribieron antes de la regla 5
   y arrastraban **dos** deudas: referencias cruzadas que SUSTITUÍAN información
   (~25, las peores en `B5`, `B6`, `C6` y `C3`) y densidad muy por debajo del estándar
   (49-127 líneas frente a las 150-350 de PPEE).

   **Resultado: de 1885 a 5336 líneas, y CERO referencias cruzadas que sustituyan
   información** en toda el área. Los 45 temas del proyecto están en estado `completo`.

   Tandas ejecutadas: bloque `C` (C1-C6) → nudo `B5`/`B6`/`B8` → bloque `A` (A1-A9) →
   resto del bloque `B` (B1-B4, B7).

   **Cómo mantenerlo.** Los enlaces del tipo "esto se amplía en X" siguen valiendo como
   añadido, pero ninguna rama puede resolverse con "ver X". Si un dato hace falta en dos
   temas, se repite en ambos con su cita. La plantilla C ya no trae la rama "Conexión con
   otros nodos", que era la que fabricaba el anti-patrón (ver `PLANTILLAS.md`).

   **Deuda de citas descubierta en el bloque `A`, ya saldada.** De las 13 claves de cita
   que usaban esos temas, **solo una correspondía a una fuente real** de `fuentes/` — y
   estaba mal escrita (`Romstöck2000` por `Romstock2000`). Las otras doce (`Nuwer2012`,
   `MacDonald2019`, `MacDonald2013`, `Toleikis2024`, `Legatt2016`, `Sloan2012`,
   `Costa2015`, `Leppänen2005/2006`, `Prell2007`, `Téllez2016`, `Ulkatan2017`) apuntaban a
   guías que el proyecto NO tiene, presentando contenido como si viniera de ellas — justo
   lo que prohíbe la regla 4. Todo el bloque `A` se ha reverificado contra las fuentes que
   sí existen y ninguna clave fantasma queda en el área. **Regla permanente que sale de
   aquí: antes de dar por bueno cualquier dato, comprobar que su clave de cita está en
   `INDICE_FUENTES.md`.** Vale también para las áreas futuras.

   Bloque `A` terminado: de 739 a 2080 líneas. Fuentes que estaban sin explotar y ahora sí
   lo están: Deletis cap.2 íntegro (los tres puntos de despolarización del CST, el ISI de
   4 ms, Tabla 2.1, paraplejia transitoria), cap.5 íntegro (PEATC — las cuatro palancas
   para acortar el tiempo, filtrado digital de fase cero, CAP del VIII y potencial de
   extremo cortado, registro del núcleo coclear, y la comparación entre los dos cirujanos
   que sostiene la hipótesis de que no hay umbral seguro de cambio de latencia), cap.10
   íntegro (CoMEP — doble estimulación a 90 ms, Tabla 10.2 de 100 cirugías), cap.13 íntegro
   (tornillo pedicular — la anchura de pulso duplica la densidad de corriente, y el 10 mA
   solo indica brecha, no lesión), cap.25 (Tabla 25.1 con los seis criterios de isquemia) y
   cap.32 (ECoG).

   Bloque `C` terminado: de 354 a 1350 líneas en total, cero referencias cruzadas que
   sustituyan información. Fuentes que estaban sin explotar y ahora sí lo están: Moller
   cap.5 y cap.9 (anatomía sensitiva y motora — resolvió que `C1` no tuviera ninguna
   cita), cap.4 (colocación de electrodos y campo lejano), cap.17 completo
   (troubleshooting e interferencia), Deletis cap.40 íntegro (farmacología).

   **Decisión acordada sobre el nudo `B5`/`B6`/`B8`** (los tres beben de Deletis cap.22 y
   hoy se solapan): se **re-reparten por TIPO de tema**, conservando los tres códigos
   para no dejar huérfana ninguna página ya dibujada a mano.
   - `B5` = tumores intrínsecos del **tronco encefálico** — contexto quirúrgico completo.
   - `B6` = tumores del **IV ventrículo** — contexto quirúrgico completo.
   - `B8` = **técnica** de mapeo del suelo del IV ventrículo y reflejos de tronco.

   Nudo terminado: de 243 a 826 líneas. `B8` cambió de título y de nombre de archivo (era
   "Fosa posterior avanzado con criterios de troncoencefálico") y de plantilla B a A,
   porque ha pasado de ser un contexto quirúrgico a ser una técnica; **el código B8 se
   conserva**. `B5` también cambió de nombre de archivo para que el slug coincida con el
   título nuevo. Fuente que estaba sin explotar y ahora sí lo está: Deletis cap.11
   (Morota/Deletis/Epstein) íntegro — parámetros de la Tabla 11.1, zonas de entrada segura
   con las medidas de Strauss y Bogucki, las siete ramas del corticobulbar de Krieg, los
   patrones de desplazamiento de núcleos por localización del tumor, y las cinco
   limitaciones clínicas del mapeo.

   Razón: un reparto "básico / avanzado" del mismo contexto es incompatible con la regla
   5 — si el básico tiene que sostenerse solo acaba conteniendo al avanzado, y entonces
   es el avanzado. Separar por contexto-vs-técnica sí produce temas que se sostienen
   solos sin ser el mismo tema dos veces.
2. **Repaso de contenido** (EN CURSO). Revisar por tandas lo ya escrito buscando lo que las
   fuentes den de sí y aún no esté recogido.

   **Hallazgo que reordenó el repaso: `INDICE_FUENTES.md` catalogaba media biblioteca.**
   Listaba unos 24 de los **44 capítulos** del Deletis. Los otros 20 nunca se habían
   consultado, y varios eran **fuente primaria de contenido escrito desde capítulos
   secundarios**. Ya están todos añadidos al índice, en una tabla al final marcada con ★
   (enriquecen un tema existente) y ✦ (territorio sin tema propio). **Empezar cualquier
   tanda leyendo esa tabla.**

   **Hecho hasta ahora**
   - Índice de fuentes completado con los 20 capítulos que faltaban.
   - `B3` reescrito desde **Deletis cap.12** (Deletis/Seidel), que es la fuente PRIMARIA del
     mapeo medular y estaba sin usar: de 150 a 256 líneas. Aporta los TRES métodos de mapeo
     de columna dorsal (B3 solo tenía uno), la rejilla de ocho hilos de 76 µm separados
     1 mm con la línea media entre los dos máximos, el uso avanzado de la colisión de onda D
     para separar fibras sanas/desincronizadas/bloqueadas, y la advertencia de que una
     respuesta muscular al estimular la médula expuesta **también se obtiene estimulando
     columna dorsal** — no prueba que se esté tocando el CST.

   - **Primera tanda de enriquecimiento (★) terminada:** los cuatro capítulos de más peso
     de la columna ★, volcados en seis temas. De 1.244 a 2.107 líneas entre los seis.
     - **cap.29 §29.1 y §29.2** (Sala/Niimi) → `B1`, `B3`, `B4`. Es la anatomía vascular
       medular que los tres citaban sin fuente propia: ejes ASA/PSA, Adamkiewicz y la cesta
       anastomótica del cono, 4-8 radiculares anteriores frente a 10-20 posteriores,
       vascularización segmentaria y punto frágil torácico medio, correspondencia
       territorio-modalidad (ASA→MEP, PSA→SEP), vasa corona y watershed axial, drenaje
       venoso, y sobre todo el **gradiente de vulnerabilidad gris/blanca** que explica por
       qué el MEP muscular detecta la isquemia antes que la onda D. `B4` se lleva además el
       **protocolo completo del reflejo bulbocavernoso con parámetros** (cátodo proximal,
       tren de cinco de 0,2-0,5 ms con ISI 4 ms a 2,3 Hz, ≤40 mA, registro por
       hemiesfínteres), que era un hueco real de ese tema.
     - **cap.42 completo** (Ney/van der Goes) → `B2` en versión larga y `B1` en versión
       corta: los cuatro tipos de análisis económico, la ecuación
       P(evento) = BSR × sensibilidad × EoA con sus cuatro debilidades, las cifras de CCA
       (63.387 USD por déficit evitado), CBA (ahorro de 23.189 USD y sus tres puntos de
       paridad) y CUA cervical, los estudios de datos administrativos a favor y en contra,
       y el argumento de equipoise (uso real por debajo del 30%).
     - **cap.43 §43.5 y §43.7** (Holdefer/Skinner) → `C5`: el marco formal de exactitud
       diagnóstica que le faltaba — test índice y patrón de referencia, las cuatro celdas
       definidas en clave intraoperatoria, fórmulas de sensibilidad/especificidad/VPP/
       cociente de verosimilitud, curva ROC y criterio deslizante, el **cambio de señal
       reversible** con la tasa de cambio >5-10 de Glasziou, la serie de Langeloo y Journée
       2003, QUADAS-2/GRADE, y el aviso de que exactitud no es eficacia.
     - **cap.44 §44.1 y §44.5** (Skinner/Holdefer) → `C6`: el error humano como modo de
       fallo del sistema — diseño indulgente y redundancia, los cinco sesgos cognitivos que
       arruinan una alarma correcta, checklists y comunicación de riesgo, y la cascada
       test → interpretación → comunicación → intervención → resultado con sus
       deceleradores y aceleradores.

   - **Segunda tanda de enriquecimiento (★) terminada: la columna ★ está VACÍA.** Los siete
     capítulos restantes, volcados en siete temas (`A2`, `A4`, `A6`, `A9`, `B4`, `B7`, `C1`).
     - **cap.1 (Amassian)** → `A2` y `C1`. La fisiología que había debajo de reglas que se
       aplicaban de memoria: por qué la onda D es trifásica (teoría del conductor de
       volumen), los tres factores de su amplitud, el bloqueo del impulso (×5 en la D, ×15,5
       en la I, cociente I/D triplicado) y por qué eso hace inservible el registro conducido
       para comparar umbrales D/I, la conversión a monofásico como localizador del nivel
       lesional, ánodo frente a cátodo y los codos de las fibras, el montaje de 2×2 cm con
       referencia de 25 cm², **el problema de sumación C3/C4 con sus dos soluciones**, el
       efecto anestésico con cifras (46% con TES frente a 80% con corteza expuesta), y toda
       la fisiología de la facilitación temporal que justifica el tren.
     - **cap.8 (Urriza)** → `A6`. La superexcitabilidad subumbral: cifras de Bostock
       (28% / 4-9%), metodología completa en mediano y facial, y **por qué el control de la
       doble estimulación puede fallar** — un tren subumbral activa directamente el facial.
     - **cap.14 (Arranz Arranz)** → `C1` y `A2`. El síndrome de déficit motor puro: los siete
       puntos de lesión, la irrigación perforante separada de CST y vía lemniscal, los
       marcadores neurofisiológicos, **las dos excepciones (síndrome del AMS y paraplejia
       histérica)** y cuatro casos documentados por nivel.
     - **cap.18 (Minassian/Hofstoetter)** → `A9`. El reflejo raíz posterior-músculo: latencias
       y amplitudes con tablas, las tres propiedades compartidas con el reflejo H, la
       aparición de respuestas ARM al estimular sobre la cauda equina, la dependencia de la
       posición corporal con las cifras de LCR dorsomedial, y el protocolo de colocación del
       electrodo epidural.
     - **cap.20 (Giampiccolo/Sala)** → `B7`. La versión DORMIDA de la craneotomía: abordaje en
       tres pasos, complementariedad mapeo/monitorización, Penfield frente a tren de cinco con
       sus cifras (20% de crisis, 63% de falsos negativos), los cuatro escenarios de MEP, la
       trampa del AMS, y umbrales subcorticales con el límite crítico de 3-5 mA.
     - **cap.24 (Ulkatan)** → `A4` y `A6`. La evidencia contra el EMG libre en el facial
       EXTRAcraneal (Meier con su 16%, Grosheva) con su razón anatómica, y el CMAP continuo
       como competidor del CoMEP: regla de los ≥5 mA, criterios del 50% y del 70%, regla del
       70% / ratio 1:3, y el falso CMAP del muñón distal por encima de 20 mA.
     - **cap.39 (Haberl)** → `B4`. Rizotomía dorsal selectiva: t-EMG con tren a 50 Hz de 0,05
       a 5,0 mA, escala de Phillips y Park de 0 a 4 con su decisión, criterio del 60-70% de
       raicillas, y DRAP en S1-S3 con división de S2.

   **PUNTO EXACTO DONDE SE QUEDÓ.** Pani eligió **enriquecer temas existentes (★) primero**,
   y eso ya está terminado: **no queda ningún capítulo ★ pendiente**. Lo siguiente es el
   territorio ✦ — capítulos con fuente y sin tema donde estudiarlos, que exigen CREAR temas
   nuevos, no enriquecer:

   - **Primer ✦ resuelto: `B9` Descompresión microvascular de pares craneales**, tema NUEVO
     desde el cap.33 íntegro. Es el primer tema del proyecto en el que la MIO tiene **dos
     objetivos separados**: demostrar el ÉXITO quirúrgico en tiempo real (AMR / lateral
     spread) y evitar complicaciones (PEATC). Incluye las cuatro patologías con su
     epidemiología y diagnóstico diferencial, las dos hipótesis fisiopatológicas y las dos
     pruebas neurofisiológicas que apoyan la nuclear, montaje y parámetros del AMR con sus
     latencias discriminantes (2-4 ms la directa, >8 ms el AMR), la regla de reestablecer el
     basal de PEATC **en la apertura dural**, las tres firmas de cambio del PEATC, y la
     secuencia práctica completa de pre a postoperatorio.
     - **Partido en dos por decisión de Pani**, con el mismo criterio contexto-frente-a-técnica
       que se acordó para el nudo `B5`/`B6`/`B8`, porque en un solo archivo salían 618 líneas
       y no cabían en una página de libreta.
       - `B9` = **contexto quirúrgico** (559 líneas): patologías, fisiopatología, radiología,
         fases, vasos ofensores, riesgo, posicionamiento, PEATC completo, AN-CAP, EMG libre y
         estimulado, jerarquía, protocolo de reacción y la secuencia práctica completa. Lleva
         el AMR en versión OPERATIVA —montaje, parámetros, latencias discriminantes, lectura
         intraoperatoria y rendimiento— para sostenerse solo.
       - `A10` = **técnica del AMR / lateral spread** (259 líneas), tema nuevo de bloque A: es
         la única modalidad del proyecto cuyo objetivo no es evitar una lesión sino DEMOSTRAR
         el éxito terapéutico. Lleva la discrepancia de polaridad, la facilitación tetánica y
         por qué sus proponentes la abandonaron, las tres respuestas alternativas (blink R1,
         onda F y respuesta Z-L) y las series de AMR residual y de toxina botulínica.

   | ✦ Territorio con fuente y sin tema, pendiente |
   |---|
   | **cap.41 Safety** completo (§41.2 eléctrica, §41.3 por procedimiento, §41.4 infección, §41.5 rendimiento) |
   | cap.30 y 31 — nervio periférico y cirugía de cadera (el §18.6.2 del cap.18 también apunta aquí y quedó sin usar) |
   | cap.34-38 — trastornos del movimiento, DBS, dolor, espasticidad |
   | **Markand cap.5** — PPEE no tiene ningún tema de PEM |
   | **cap.24 cirugía de la cara**, material sobrante — mapeo transcutáneo preoperatorio, escleroterapia y anatomía de las malformaciones vasculares faciales no caben en `A4` ni en `A6` |

   El ✦ con más peso que queda es **cap.41** (seguridad, hoy explotado solo en las
   pp.590-591 de la mordedura). El cap.33 ya está resuelto en `B9`.

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
