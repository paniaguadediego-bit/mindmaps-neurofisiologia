---
codigo: PE-B3
titulo: Elección de parámetros de estimulación y registro
area: PPEE
bloque: B — Bases técnicas de registro
plantilla: D
estado: completo
---

# PE-B3 — Elección de parámetros de estimulación y registro

```
Elección de parámetros de estimulación y registro
├─ Definición y alcance
│  ├─ Cada parámetro del protocolo se deduce de una propiedad concreta del PE que se
│  │  quiere registrar; no se eligen por costumbre ni se copian de otro laboratorio sin
│  │  entender de dónde salen
│  ├─ La regla que organiza todo el tema
│  │  ├─ El componente MÁS LENTO (de mayor duración) fija el tiempo de análisis y el
│  │  │  filtro LF
│  │  └─ El componente MÁS RÁPIDO (de mayor frecuencia) fija el filtro HF y la frecuencia
│  │     de muestreo
│  └─ Los parámetros están ACOPLADOS entre sí: cambiar uno obliga a revisar los demás
│     (alargar el tiempo de análisis obliga a bajar la frecuencia de estimulación)
├─ TIEMPO DE ANÁLISIS
│  ├─ Definición: el tiempo durante el cual se adquieren los datos del PE después del
│  │  estímulo
│  ├─ De qué depende: de la latencia del ÚLTIMO componente mayor de interés; además debe
│  │  ser lo bastante largo para colocar los componentes principales en el CENTRO del
│  │  gráfico
│  ├─ Si es demasiado CORTO: los componentes importantes de latencia prolongada se
│  │  pierden en el extremo derecho — precisamente los que interesa ver cuando hay
│  │  patología
│  ├─ Si es demasiado LARGO: los componentes de latencia corta quedan "apelotonados" en
│  │  el extremo izquierdo o quedan oscurecidos por el artefacto de estímulo
│  ├─ Regla de rescate: si la prueba detecta componentes retrasados, hay que aumentar el
│  │  tiempo de análisis a 1.5-2.0 veces y repetir
│  ├─ Neonatos y niños pequeños tienen latencias más largas y requieren tiempos de
│  │  análisis mayores que el adulto
│  ├─ Valores por modalidad
│  │  ├─ PEATC: 10 ms en el adulto — coloca la onda V, que normalmente aparece hacia los
│  │  │  5 ms, en el centro del registro
│  │  │  └─ 15-20 ms en neonatos o durante monitorización intraoperatoria, donde las
│  │  │     latencias del PEATC pueden ser más largas
│  │  ├─ PEV: 250 ms coloca el P100 en el centro
│  │  │  └─ 500 ms en neonatos, lactantes y niños o cuando el PEV está retrasado — y
│  │  │     entonces hay que bajar la frecuencia de inversión a <2/s
│  │  ├─ PESS de mediano: 40-50 ms (habitualmente 50)
│  │  └─ PESS de tibial posterior: 80-100 ms (habitualmente 100)
│  └─ Recordar siempre: aumentar el tiempo de análisis obliga a ajustar la frecuencia de
│     estimulación
├─ FRECUENCIA DE ESTIMULACIÓN
│  ├─ Principio: ni demasiado rápida ni demasiado lenta
│  │  ├─ Muy rápida → deteriora la morfología del PE, aunque acorta la adquisición y el
│  │  │  estado del paciente se mantiene más estable
│  │  └─ Muy lenta → alarga la adquisición, y con ella cambia el estado de alerta y la
│  │     cooperación del sujeto durante la prueba
│  ├─ Límite duro impuesto por el tiempo de análisis: la frecuencia debe ser MENOR que
│  │  1/tiempo de análisis, para que no se entregue más de un estímulo dentro de la
│  │  ventana de análisis seleccionada
│  ├─ En general las frecuencias más lentas producen mejores ondas
│  ├─ Segunda restricción: la frecuencia no debe ser armónico ni subarmónico de la
│  │  frecuencia de red (60 Hz), o el artefacto se realza en vez de cancelarse con el
│  │  promediado → PEV 2.1/s, PEATC 11/s, PESS 4.7-4.8/s
│  ├─ Valores por modalidad
│  │  ├─ PEATC: frecuencias de clic próximas a 10/s para obtener las respuestas de tronco
│  │  │  └─ Frecuencias rápidas de 50-100/s son aceptables para trazar curvas
│  │  │     latencia-intensidad y evaluar el umbral auditivo
│  │  ├─ PEV: <5/s con tiempo de análisis de 200 ms; <2/s con tiempo de análisis de 500 ms
│  │  └─ PESS: 3-5/s tanto en MMSS como en MMII
│  │     ├─ Hasta 10/s es aceptable con tiempos de análisis de 50-100 ms, pero por encima
│  │     │  de 5/s los pacientes lo toleran mal, y la mala tolerancia aumenta el artefacto
│  │     │  muscular y de movimiento
│  │     └─ La frecuencia de estimulación tiene POCO efecto sobre las latencias de los
│  │        componentes obligados; si el paciente lo tolera, pueden usarse hasta 15/s para
│  │        acortar el tiempo de adquisición
│  └─ En PEATC, los clics de polaridad ALTERNANTE eliminan eficazmente el artefacto de
│     estímulo que aparece con estimulación de alta intensidad
├─ FILTROS — cómo se eligen y cuánto valen por modalidad
│  ├─ Lógica del LF: lo fija el componente de mayor duración de interés, que no debe
│  │  quedar atenuado; y también el tiempo de análisis, porque ningún componente
│  │  identificable puede ser más largo que la ventana
│  ├─ Lógica del HF: lo fija el componente de menor duración (mayor frecuencia) de interés
│  ├─ PEATC (tiempo de análisis 10-20 ms)
│  │  ├─ LF de 30-100 Hz
│  │  └─ HF de 1.5-3.0 kHz — porque las ondas I y II duran menos de 1 ms (es decir, más
│  │     de 1000 Hz) y un HF por debajo las atenuaría
│  ├─ PEV (tiempo de análisis 200 ms)
│  │  ├─ LF de 1-5 Hz
│  │  └─ HF de 100 Hz — el componente más corto del PEV es el N75, de unos 20-25 ms de
│  │     duración
│  ├─ PESS (tiempo de análisis 50-100 ms)
│  │  ├─ LF de 10-30 Hz; la ACNS (2006) recomienda banda de paso 30-3000 Hz a
│  │  │  −6 dB/octava
│  │  │  ├─ Algunos usan 1-3000 Hz para atenuar menos los componentes lentos
│  │  │  └─ Otros usan bandas más estrechas para registrar selectivamente ciertos
│  │  │     componentes
│  │  └─ HF de 1.5-3.0 kHz — los componentes más cortos son el potencial de plexo braquial
│  │     y el poplíteo, de 1-2 ms
│  └─ Límite de pendiente (ACNS 2006): no exceder −12 dB/octava en el LF ni −24 dB/octava
│     en el HF
├─ FRECUENCIA DE MUESTREO
│  ├─ Depende del componente más corto (de mayor frecuencia) de interés
│  ├─ Regla: muestrear al menos 2 veces, preferiblemente 4-5 veces la frecuencia más alta
│  │  de interés — o dicho al revés, el intervalo entre muestras debe ser 1/5-1/4 de la
│  │  duración del componente más corto del PE
│  ├─ PEATC: componente más corto <1 ms → muestreo >5000/s, habitualmente 10.000/s
│  ├─ PESS: componentes más cortos de la misma duración → misma frecuencia de muestreo,
│  │  >5000 Hz por canal, es decir intervalo entre muestras <0.2 ms
│  ├─ PEV: componente más corto de unos 20 ms → basta >200/s (la Tabla 1.2 del capítulo
│  │  recoge >500/s)
│  └─ Obligación asociada: aplicar el filtro HF adecuado ANTES de digitalizar, para
│     eliminar todas las frecuencias superiores a la de Nyquist (mitad de la frecuencia de
│     muestreo) y evitar el aliasing
├─ CONVERSOR A/D — número de bits
│  ├─ Depende de la razón entre el componente de menor amplitud del PE y el voltaje
│  │  global de la señal
│  ├─ En PEATC el componente menor ronda 0.1 µV y la señal pico-pico 100 µV → razón
│  │  1/1000 → hacen falta al menos 2000 niveles → conversor de 11 bits
│  └─ La mayoría de equipos llevan 12 bits o más, suficiente para todos los tipos de PE
├─ NÚMERO DE PROMEDIOS
│  ├─ Depende de la relación señal/ruido de partida, porque el ruido decrece con la raíz
│  │  cuadrada del número de barridos
│  ├─ PEATC 1000-4000 (el cálculo sobre S/N 1/50 da ≈2500) · PEV 200-300 (bastan a menudo
│  │  100-200) · PESS 500-1000
│  └─ Ajuste al caso: menos barridos bajo anestesia o con paciente muy relajado; varios
│     miles con paciente tenso. Siempre ≥2 réplicas superpuestas
├─ MONTAJE Y NÚMERO DE CANALES
│  ├─ Los PE se registran con dos o más derivaciones o canales
│  ├─ PEATC: habitualmente 2 canales
│  ├─ PEV y PESS: al menos 4 canales
│  └─ En PESS los cuatro canales se ordenan en pantalla o en papel según el NIVEL DEL
│     NEUROEJE: el canal que registra el potencial de plexo braquial abajo del todo y el
│     que registra la respuesta cortical arriba del todo
├─ CONVENIOS DE VISUALIZACIÓN
│  ├─ No existe convenio universal sobre cómo se muestran los PE en pantalla o en papel
│  └─ Lo más habitual: en PEATC la positividad en el vértex da onda hacia ARRIBA; en PEV
│     la positividad en los electrodos occipitales da traza hacia ABAJO; en PESS la
│     negatividad en los electrodos sobre corteza somatosensorial da onda hacia ARRIBA
├─ PARÁMETROS DE ESTIMULACIÓN ESPECÍFICOS DEL PESS
│  ├─ Nervios: mediano (menos frecuentemente cubital) en MMSS; tibial posterior (menos
│  │  frecuentemente peroneo) en MMII
│  ├─ Sitio: muñeca para el mediano, tobillo para el tibial posterior
│  ├─ Electrodos de estimulación: dos electrodos de disco como los de EEG convencional —
│  │  cara palmar de la muñeca y cara medial del tobillo — separados 2-3 cm y lo más cerca
│  │  posible del nervio
│  │  ├─ Agujas subdérmicas en pacientes con edema de pies que dificulta la estimulación
│  │  │  transcutánea; en monitorización intraoperatoria se usan de rutina porque se
│  │  │  sujetan mejor y requieren menos corriente
│  │  └─ CÁTODO PROXIMAL al ánodo, para evitar el bloqueo anódico — al revés que en los
│  │     estudios de conducción convencionales. El nervio se despolariza bajo el cátodo
│  ├─ Estimulador de corriente constante o de voltaje constante
│  │  ├─ Corriente constante: ajusta el voltaje según la impedancia para entregar una
│  │  │  magnitud exacta de corriente en mA — es el más usado
│  │  └─ Voltaje constante: entrega corriente variable según la impedancia
│  ├─ Pulsos rectangulares monofásicos de 100-300 µs de duración, con intensidad de
│  │  10-20 mA
│  │  └─ Pueden usarse pulsos más largos, hasta 1 ms, con intensidad menor, sin afectar
│  │     significativamente a las características del PESS
│  └─ Intensidad: la que produzca una contracción muscular VISIBLE, consistente y
│     tolerable — idealmente unas 2 veces el umbral sensitivo
│     ├─ Es lo contrario de las conducciones motoras convencionales, donde se busca
│     │  estímulo supramáximo
│     ├─ Estimulación subóptima con respuesta motora fluctuante (de mínima a ausente)
│     │  puede no activar bien las fibras del grupo 1A y dar una respuesta cortical
│     │  aparentemente RETRASADA, por estimulación limitada a fibras cutáneas del grupo II
│     └─ Intensidades altas no solo son incómodas: pueden llegar a ATENUAR el potencial
│        evocado
├─ Aplicación práctica
│  ├─ Ante un PE retrasado, antes de interpretar: comprobar que el tiempo de análisis no
│  │  esté cortando el componente y repetir con 1.5-2× la ventana
│  ├─ En pediatría, ajustar de entrada tiempo de análisis y frecuencia de estimulación —
│  │  no usar el protocolo de adulto
│  └─ Cualquier cambio de parámetro (filtros, intensidad, frecuencia, monitor) invalida
│     los datos normativos previos: hay que rehacerlos
├─ Errores y confusiones frecuentes
│  ├─ Alargar el tiempo de análisis y dejar la frecuencia de estimulación intacta, con lo
│  │  que se entrega más de un estímulo dentro de la ventana
│  ├─ Elegir frecuencias "redondas" que son subarmónicos de la red
│  ├─ Subir la intensidad de estimulación pensando que "más es mejor"
│  ├─ Estrechar la banda de paso para limpiar el registro sin asumir que se están
│  │  atenuando componentes reales y desplazando latencias
│  └─ Comparar registros hechos con parámetros distintos como si fueran equivalentes
├─ Limitaciones
│  ├─ Los rangos publicados son orientativos: lo que valida un protocolo son los datos
│  │  normativos obtenidos con ESE protocolo en el propio laboratorio
│  ├─ Los parámetros óptimos para un componente no lo son para otro dentro del mismo
│  │  registro (un HF que respeta el N75 del PEV destrozaría la onda I del PEATC)
│  └─ La tolerancia del paciente pone un techo real a la frecuencia y a la intensidad,
│     por encima de cualquier consideración técnica
└─ Referencia
   └─ Markand2020 cap.1 pp.14-19 ("Appropriate Use of Certain Stimulating and Recording
      Parameters": tiempo de análisis, frecuencia, filtros, muestreo, conversor, número de
      promedios, montaje, Tabla 1.2, Figs. 1.10-1.11), pp.22 (convenios de visualización)
      · cap.4 pp.141-143 (Tabla 4.1 y parámetros de estimulación y registro del PESS),
      p.166 (frecuencia, intensidad y duración del pulso) · cap.3 pp.85-88 (parámetros del
      PEV por damero)
```
