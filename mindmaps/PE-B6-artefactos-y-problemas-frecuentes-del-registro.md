---
codigo: PE-B6
titulo: Artefactos y problemas frecuentes del registro
area: PPEE
bloque: B — Bases técnicas de registro
plantilla: D
estado: completo
---

# PE-B6 — Artefactos y problemas frecuentes del registro

```
Artefactos y problemas frecuentes del registro
├─ Definición y alcance
│  ├─ Los PE son respuestas diminutas, en el rango de microvoltios; registrarlos de forma
│  │  óptima para poder interpretarlos es muy a menudo un reto, sobre todo en pacientes
│  │  difíciles — y de forma particular en el PESS de TIBIAL POSTERIOR
│  ├─ Una relación de trabajo estrecha entre el técnico y el neurofisiólogo clínico es lo
│  │  que asegura un porcentaje alto de estudios de calidad
│  ├─ Buena práctica de laboratorio: mirar los PE ANTES de que el paciente se marche, para
│  │  asegurarse de que se ha conseguido un registro óptimo — si hay que repetir algo, se
│  │  repite con el paciente todavía puesto
│  └─ Principio que ordena el tema: casi ningún artefacto se arregla promediando más. Se
│     arreglan en la fuente
├─ PROBLEMA 1 — El PE no es registrable
│  ├─ Causas posibles
│  │  ├─ Estimulación inadecuada
│  │  ├─ Electrodos de alta impedancia
│  │  ├─ Artefactos de gran amplitud — del sujeto, del instrumento o del entorno
│  │  ├─ Uso incorrecto de los electrodos de registro
│  │  └─ Colocación incorrecta de los electrodos
│  ├─ Qué hacer: comprobación SISTEMÁTICA de las impedancias, de la colocación de los
│  │  electrodos y de su conexión a los amplificadores
│  ├─ Comprobación específica en PESS: asegurarse de que los electrodos de estimulación
│  │  están sobre la piel que cubre el nervio que se pretende estimular, y de que la
│  │  intensidad es suficiente para producir una CONTRACCIÓN MUSCULAR VISIBLE
│  └─ Comprobación específica en PEATC: el auricular puede no estar bien sujeto contra la
│     oreja, o haber resbalado hacia abajo sobre la mandíbula
├─ PROBLEMA 2 — Calidad subóptima por artefacto excesivo
│  ├─ Cuando el sujeto está tenso o se mueve mucho, los artefactos pueden NO eliminarse ni
│  │  aumentando el número de promedios ni con el rechazo automático de artefacto
│  ├─ En esas condiciones la relación señal/ruido no puede mejorarse lo bastante para
│  │  extraer un PE robusto y reproducible
│  ├─ Estrategias por orden: tranquilizar al paciente · identificar y eliminar la fuente de
│  │  interferencia externa · sedación (para PEATC y PESS)
│  └─ A veces el único remedio es reprogramar la prueba para otro día, preferiblemente sin
│     coste adicional: ocurre en un 2-5% de los pacientes, y en el reintento se obtiene
│     casi siempre un estudio óptimo
├─ PROBLEMA 3 — "Los PE se ven raros"
│  ├─ Situación: los PE están bien resueltos pero tienen un aspecto distinto del esperado
│  ├─ Causa frecuente: los electrodos de uno o más canales están INVERTIDOS — se registra
│  │  Cz-A2 cuando se pretendía A2-Cz para el PEATC del oído derecho
│  └─ Truco de identificación: mirar la copia en papel del PE a contraluz por el reverso,
│     lo que equivale a revertir la derivación y devuelve la morfología esperada
├─ ARTEFACTO MUSCULAR Y DE MOVIMIENTO
│  ├─ Es el problema mayor durante el registro del PESS: la actividad muscular continua
│  │  del paciente. Conseguir que el paciente esté completamente relajado es esencial
│  ├─ Los artefactos de movimiento intermitentes pueden ser de amplitud muy alta
│  │  ├─ Son habitualmente obvios en el EEG CRUDO, que hay que estar monitorizando
│  │  │  continuamente en la pantalla mientras se promedia
│  │  └─ Su presencia obliga a parar el promediado, resolver el artefacto y reiniciar —
│  │     no a dejarlo correr
│  ├─ Otros artefactos transitorios de gran amplitud sí se manejan adecuadamente con el
│  │  rechazo automático de artefacto, que descarta los barridos cuya amplitud supera un
│  │  nivel fijado (discriminador de ventana)
│  ├─ Si el artefacto muscular sigue impidiendo obtener un PESS satisfactorio: sedación
│  │  antes de repetir — lorazepam 1-2 mg o diazepam 5-10 mg justo antes de la prueba, o
│  │  hidrato de cloral
│  └─ La comodidad postural del paciente no es un detalle: reduce el artefacto muscular de
│     partida y por tanto baja el número de promedios necesarios
├─ ARTEFACTO DE ESTÍMULO
│  ├─ Aparece al PRINCIPIO del registro y puede ser grande
│  ├─ En PESS es más frecuente en el canal que registra desde la fosa poplítea, pero puede
│  │  afectar también a otros canales
│  ├─ Medidas útiles para reducirlo o eliminarlo
│  │  ├─ Colocar correctamente el electrodo de TIERRA: sobre el muslo para la estimulación
│  │  │  de tibial y sobre el antebrazo para la de mediano
│  │  ├─ Bajar la intensidad del estímulo
│  │  ├─ Reducir la duración del pulso
│  │  ├─ Cambiar la orientación de los electrodos de estimulación rotando el ánodo
│  │  └─ Cambiar el ajuste del filtro de baja frecuencia
│  ├─ En PEATC, el artefacto de estímulo que aparece con estimulación de alta intensidad
│  │  se elimina eficazmente usando clics de polaridad ALTERNANTE
│  └─ Relación con el tiempo de análisis: si la ventana es demasiado larga, los componentes
│     de latencia corta quedan apelotonados en el extremo izquierdo y pueden quedar
│     directamente OSCURECIDOS por el artefacto de estímulo
├─ ARTEFACTO DE RED (60 Hz)
│  ├─ Mecanismo peligroso: si la frecuencia de estimulación es armónico o subarmónico del
│  │  artefacto de red, el promediado lo REALZA en vez de cancelarlo, y deteriora el PE
│  ├─ Prevención: frecuencias de estimulación deliberadamente no relacionadas con 60 Hz —
│  │  PEV 2.1/s, PEATC 11/s, PESS 4.7/s (en PESS se prefiere 4.8/s antes que 5/s exactos
│  │  precisamente por esto)
│  ├─ Los amplificadores llevan además un filtro de 60 Hz disponible
│  └─ Subir el filtro LF de los 30 Hz habituales a 100 Hz reduce el artefacto muscular y el
│     de 60 Hz, pero tiene precio: reduce la amplitud del N13 y del N20 y acorta
│     ligeramente sus latencias de pico
├─ ARTEFACTO DE ALIASING (de digitalización)
│  ├─ Aparece cuando se muestrea la señal por debajo del doble de su componente de
│  │  frecuencia más alta (frecuencia de Nyquist)
│  ├─ Consiste en frecuencias FALSAS —típicamente lentas— que aparecen en la señal de
│  │  salida y que no formaban parte de la señal analógica original
│  ├─ Es especialmente traicionero porque no "parece" un artefacto: parece señal
│  └─ Prevención: filtrado HF adecuado ANTES de digitalizar, que elimine todas las
│     frecuencias superiores a la mitad de la frecuencia de muestreo
│     └─ Ejemplo: en PEATC, con muestreo de 10 kHz la frecuencia de Nyquist es 5 kHz, y el
│        filtro HF de 3 kHz elimina eficazmente todo lo que está por encima
├─ ARTEFACTOS OCULARES Y DE FIJACIÓN (sobre todo PEV)
│  ├─ Movimientos oculares, parpadeo y EOG están entre los artefactos excesivos que pueden
│  │  no eliminarse aunque se aumente el número de promedios
│  ├─ En PEV la causa más común de mal registro es que el paciente se adormezca o pierda
│  │  la fijación en el punto central del damero — y no se arregla promediando más
│  │  └─ Contramedida: vigilancia activa del técnico, hablando al paciente para reenfocar
│  │     la atención en el punto de fijación
│  └─ Movimientos oculares, nistagmo y desenfoque intencionado bajan la amplitud del PEV
│     con poco efecto sobre la latencia del P100
├─ SEÑALES PARÁSITAS TIME-LOCKED — el artefacto que el promediado no puede quitar
│  ├─ Pueden ocurrir señales irrelevantes con relación temporal FIJA respecto al estímulo,
│  │  por ejemplo actividad EMG disparada por el propio estímulo
│  ├─ El promediado no las distingue del PE, porque el criterio con que separa señal de
│  │  ruido es precisamente el time-locking
│  └─ De ahí que aumentar N no sirva de nada aquí: la solución es cambiar la estimulación
│     (intensidad, posición, orientación del ánodo) o el montaje
├─ ERRORES DE MONTAJE QUE PARECEN PATOLOGÍA
│  ├─ Canales invertidos (ver PROBLEMA 3)
│  ├─ Colocación asimétrica de los electrodos occipitales laterales en PEV: produce una
│  │  asimetría interhemisférica ARTEFACTUAL
│  ├─ Colocación asimétrica de los electrodos en PESS: hace que la comparación interlado
│  │  de amplitudes deje de ser válida
│  ├─ Impedancias desequilibradas entre los dos electrodos de un canal: arruina el rechazo
│  │  en modo común y mete ruido que no debería estar
│  └─ Cambiar de monitor CRT a LCD en PEV sin rehacer los normativos: el P100 se retrasa
│     de forma significativa (unos 8 ms con monitores de 2 ms de tiempo de respuesta y
│     cuadros de 32′)
├─ Aplicación práctica — algoritmo ante un registro malo
│  ├─ 1. Mirar el EEG crudo, no solo el promedio: la mayoría de los artefactos se ven ahí
│  │  antes de contaminar el promedio
│  ├─ 2. Impedancias, colocación y conexiones de los electrodos, en ese orden
│  ├─ 3. Comprobar la estimulación: contracción visible en PESS, ajuste del auricular en
│  │  PEATC, fijación y gafas correctoras en PEV
│  ├─ 4. Actuar sobre la fuente del ruido (postura, relajación, interferencia ambiental),
│  │  no sobre el número de promedios
│  ├─ 5. Ajustar parámetros con criterio: frecuencia no relacionada con la red, filtros
│  │  adecuados, rechazo de artefacto, clics alternantes
│  ├─ 6. Considerar sedación (PEATC y PESS)
│  └─ 7. Si nada funciona, reprogramar — es la conducta correcta en ese 2-5% de casos, no
│     un fracaso
├─ Errores y confusiones frecuentes
│  ├─ Subir el número de promedios como respuesta refleja a cualquier registro sucio
│  ├─ Dejar correr el promediado mientras hay artefacto de movimiento visible en el crudo
│  ├─ Estrechar la banda de paso hasta que el trazado "queda bonito", desplazando latencias
│  │  y perdiendo amplitud de componentes reales
│  ├─ Interpretar picos no reproducidos entre réplicas como componentes del PE
│  ├─ Tomar por patológica una asimetría que solo refleja colocación asimétrica de
│  │  electrodos o estimulación desigual
│  └─ Atribuir a patología un aspecto "raro" que solo es un canal invertido
├─ Limitaciones
│  ├─ El rechazo automático de artefacto solo elimina lo que supera una ventana de
│  │  amplitud: no toca el ruido continuo de amplitud moderada, que es el que más daño
│  │  hace en PESS
│  ├─ Hay un suelo de ruido que ninguna medida técnica vence en el paciente que no puede
│  │  relajarse ni colaborar
│  ├─ Cada medida antiartefacto tiene un coste sobre la señal (filtrar, bajar intensidad,
│  │  sedar), y hay que saber cuál se está pagando
│  └─ Un registro limpio no garantiza un registro correcto: un montaje mal puesto produce
│     ondas impecables y falsas
└─ Referencia
   └─ Markand2020 cap.1 pp.9-10 ("Common Problems Encountered During EP Recordings",
      Fig. 1.8), pp.6-9 (límites del promediado, rechazo de artefacto, frecuencias no
      relacionadas con 60 Hz), pp.3-5 y 17-18 (aliasing y filtro antialiasing), p.14
      (artefacto de estímulo y tiempo de análisis) · cap.4 pp.165-166 (artefacto muscular
      y de movimiento, sedación, artefacto de estímulo, efecto de subir el LF a 100 Hz) ·
      cap.3 pp.85-88, 104-105 (fijación y adormecimiento, asimetría por colocación, CRT
      frente a LCD)
```
