---
codigo: PE-B2
titulo: Cadena de registro: amplificación, filtros y conversión A/D
area: PPEE
bloque: B — Bases técnicas de registro
plantilla: D
estado: completo
---

# PE-B2 — Cadena de registro: amplificación, filtros y conversión A/D

```
Cadena de registro: amplificación, filtros y conversión A/D
├─ Definición y alcance
│  ├─ El equipo de PE tiene TRES componentes conceptualmente distintos, aunque vayan
│  │  metidos en la misma caja
│  │  ├─ 1. ESTIMULADOR, que entrega el estímulo específico (visual, acústico o
│  │  │  somatosensorial)
│  │  ├─ 2. Sistema AMPLIFICADOR / FILTROS
│  │  └─ 3. CONVERSOR ANALÓGICO-DIGITAL y PROMEDIADOR
│  ├─ El estimulador está físicamente conectado al promediador y por tanto TIME-LOCKED
│  │  con él — esa conexión es la que hace posible todo el promediado
│  └─ Recorrido de la señal: electrodos → amplificador diferencial → filtros LF/HF →
│     conversor A/D → promediado digital → conversión D/A → pantalla, cursor de medida,
│     copia en papel y almacenamiento digital
├─ Características que debe tener el estímulo
│  ├─ Brusco y de corta duración
│  ├─ Controlado con exactitud en frecuencia y en intensidad
│  ├─ Constante y consistente entre estímulos
│  └─ Por eso en PESS se usan pulsos eléctricos rectangulares cortos sobre el nervio
│     periférico y NO la estimulación táctil de la piel, más fisiológica: el pulso
│     eléctrico es controlable con precisión en frecuencia, duración e intensidad
├─ Amplificación
│  ├─ El PE tiene amplitud muy baja (0.1-10 µV); el conversor A/D y el promediador
│  │  necesitan un voltaje relativamente grande, de hasta 1 V
│  ├─ Por eso la señal analógica de entrada (que contiene el PE) tiene que amplificarse
│  │  antes de nada
│  └─ Ganancias disponibles en la mayoría de sistemas de PE: 10³-10⁶
├─ El amplificador diferencial — el corazón del montaje
│  ├─ Cada canal de registro tiene DOS entradas (los dos electrodos) y UNA salida, que
│  │  es la DIFERENCIA de voltaje entre ambas entradas
│  ├─ Nomenclatura de los dos terminales (confusa porque conviven dos tradiciones)
│  │  ├─ Entrada 1 = polo INVERSOR = polo negativo (−) = terminal "activo" = Grid I
│  │  └─ Entrada 2 = polo NO INVERSOR = polo positivo (+) = terminal "referencia" =
│  │     Grid II
│  ├─ Tres posibilidades y sus tres salidas
│  │  ├─ Voltaje IGUAL en los dos electrodos (equipotenciales) → salida CERO, la traza
│  │  │  no se mueve de la línea de base: "efecto de cancelación", rechazo en modo común
│  │  │  o cancelación en fase
│  │  ├─ Entrada 1 MÁS NEGATIVA (o menos positiva) que la entrada 2 → traza HACIA ARRIBA
│  │  └─ Entrada 1 MÁS POSITIVA (o menos negativa) que la entrada 2 → traza HACIA ABAJO
│  │     └─ Esto es el llamado "convenio negativo-arriba"; la magnitud del movimiento
│  │        refleja la diferencia de voltaje entre los dos electrodos
│  ├─ Si las dos entradas reciben actividad de polaridad DISTINTA, hay suma en oposición
│  │  de fase (out-of-phase summation) y la deflexión resultante es mayor
│  ├─ Designación del canal: SIEMPRE se escribe primero el electrodo conectado al
│  │  terminal 1 y después el del terminal 2
│  │  └─ Ejemplo: A1-Cz (canal de PEATC) significa A1 en el terminal 1 y Cz en el
│  │     terminal 2. Un potencial POSITIVO en Cz respecto a A1 en esa derivación produce
│  │     una traza hacia ARRIBA
│  └─ Trampa conceptual clave: la salida de un amplificador diferencial es solo una
│     diferencia y NO prueba de forma concluyente la polaridad de la señal de entrada
│     ├─ Dos situaciones de polaridad OPUESTA pueden dar la MISMA salida: una actividad
│     │  positiva mayor en la entrada 1 da lo mismo que una actividad negativa mayor en
│     │  la entrada 2
│     └─ De ahí que sin conocer la derivación la polaridad de un componente no signifique
│        nada
├─ "Activo" y "referencia" no son etiquetas fijas
│  ├─ En algunas derivaciones los DOS electrodos son activos para unos componentes e
│  │  inactivos para otros dentro del mismo canal
│  └─ Ejemplo canónico — PEATC con derivación Cz-oreja ipsilateral: para la ONDA I el
│     electrodo de la oreja es el activo y Cz la referencia; para la onda II y siguientes
│     es Cz el activo y la oreja la referencia
├─ Impedancia de los electrodos
│  ├─ Se comprueba siempre y se mantiene por debajo de 5 kΩ
│  ├─ Interesa además que la DIFERENCIA de impedancia entre los dos electrodos de un
│  │  canal sea lo más baja posible (<1 kΩ), para asegurar una buena razón de rechazo en
│  │  modo común — un desequilibrio de impedancias arruina la cancelación del ruido común
│  └─ Los electrodos de aguja, con menor superficie, tienen siempre impedancias más altas
│     que los de disco
├─ Filtrado de la señal analógica
│  ├─ Para qué: condicionar la señal antes de la conversión A/D. Un filtrado cuidadoso es
│  │  esencial porque ACORTA de forma efectiva el número de promedios necesarios para
│  │  extraer el PE del ruido
│  ├─ Filtros disponibles habitualmente
│  │  ├─ LF (paso alto): 0.01, 0.1, 0.3, 1.0, 3.0, 30, 100, 300 Hz
│  │  ├─ HF (paso bajo): de 100 Hz a varios kHz
│  │  └─ Filtro de 60 Hz (de red)
│  ├─ Qué hace cada uno: el LF atenúa todas las frecuencias POR DEBAJO del punto fijado;
│  │  el HF atenúa todas las frecuencias POR ENCIMA del punto fijado
│  ├─ Cómo se define el punto del filtro: por la frecuencia atenuada al punto de MEDIA
│  │  POTENCIA, es decir al 70% de la amplitud (−3 dB)
│  │  └─ Un filtro LF de 100 Hz atenúa la frecuencia de 100 Hz al 70%, y las frecuencias
│  │     inferiores progresivamente más
│  ├─ Pendiente o roll-off: se designa en −6 dB/octava, −12 dB/octava, etc.
│  │  ├─ −6 dB/octava significa que la señal se atenúa a la MITAD cada vez que la
│  │  │  frecuencia cambia por un factor de dos
│  │  ├─ Ejemplo: filtro LF de 100 Hz con roll-off de −6 dB/octava → la amplitud de
│  │  │  50 Hz queda a la mitad y la de 25 Hz a un cuarto
│  │  └─ Cuanto más empinada la pendiente, más rápida la atenuación más allá del punto
│  │     de corte
│  ├─ Límite recomendado por la ACNS (2006): la pendiente no debe exceder −12 dB/octava
│  │  en los filtros LF ni −24 dB/octava en los HF
│  ├─ Lógica de elección del LF: depende del componente MÁS LENTO (de mayor duración) de
│  │  interés, que no debe quedar atenuado por el filtro
│  │  └─ Segundo determinante: el TIEMPO DE ANÁLISIS, porque ningún componente
│  │     identificable del PE puede ser más largo que la ventana de análisis
│  └─ Lógica de elección del HF: depende del componente MÁS CORTO (de mayor frecuencia)
│     de interés
├─ Conversión analógico-digital (A/D)
│  ├─ Por qué hace falta: la salida del amplificador diferencial es ANALÓGICA (cambia de
│  │  forma continua con el tiempo, hay un valor de amplitud en cada instante), pero el
│  │  equipo de PE usa procesadores digitales que solo manejan señales binarias
│  ├─ FUNCIÓN A — Muestreo (sampling)
│  │  ├─ Toma muestras de la onda analógica a intervalos temporales regulares (intervalo
│  │  │  entre muestras, periodo de muestreo o frecuencia de muestreo) y RETIENE el valor
│  │  │  de amplitud muestreado para que empiece la cuantificación
│  │  ├─ Visualmente: "corta" la señal analógica en sentido HORIZONTAL a intervalos
│  │  │  regulares
│  │  └─ Determina la RESOLUCIÓN HORIZONTAL del conversor: cuanto más corto el intervalo
│  │     entre muestras, más se parece la señal muestreada a la analógica original
│  ├─ FUNCIÓN B — Cuantificación (quantization)
│  │  ├─ Asigna a los valores de amplitud muestreados niveles discretos con codificación
│  │  │  digital o binaria
│  │  └─ Determina la RESOLUCIÓN VERTICAL del conversor
│  ├─ Teorema de muestreo de NYQUIST
│  │  ├─ La frecuencia de muestreo debe ser AL MENOS EL DOBLE de la componente de
│  │  │  frecuencia más alta de la señal analógica
│  │  ├─ El PE es una señal compleja con múltiples componentes de frecuencia; es la
│  │  │  componente de FRECUENCIA MÁS ALTA la que fija la frecuencia de muestreo exigida
│  │  ├─ Ejemplo: si el componente más rápido dura 2 ms (= 500 Hz), el muestreo debe ser
│  │  │  al menos 500 × 2 = 1000 Hz
│  │  └─ En la práctica se recomienda 4-5 veces la frecuencia más alta, para que la
│  │     representación digital se acerque lo más posible a la entrada analógica
│  ├─ ALIASING (artefacto de distorsión de onda)
│  │  ├─ Ocurre si se muestrea a una frecuencia MENOR del doble de la componente de
│  │  │  frecuencia más alta contenida en los datos
│  │  ├─ Consiste en la aparición de FRECUENCIAS FALSAS en la señal de salida que no
│  │  │  formaban parte de la señal analógica original — típicamente frecuencias lentas
│  │  │  introducidas artefactualmente
│  │  └─ Cómo se evita: aplicando el filtrado HF adecuado ANTES de la digitalización, de
│  │     forma que se eliminen de la señal todas las frecuencias superiores a la
│  │     frecuencia de Nyquist (= la mitad de la frecuencia de muestreo)
│  │     └─ Ejemplo PEATC: con muestreo de 10 kHz (periodo de 0.1 ms) la frecuencia de
│  │        Nyquist es 5 kHz; el filtro HF de 3 kHz que se usa en PEATC elimina
│  │        eficazmente todo lo que está por encima
│  └─ Tamaño del conversor ("bits")
│     ├─ Un conversor de n bits tiene 2ⁿ niveles de amplitud: 4 bits → 16 niveles,
│     │  8 bits → 256, 10 bits → 1024
│     ├─ Ejemplo de resolución: un conversor de 8 bits con señal de entrada de 10 V
│     │  pico-pico resuelve hasta 10/256 = 0.04 V
│     ├─ Regla para dimensionarlo: nº de niveles necesarios ≈ amplitud global de la señal
│     │  de fondo / amplitud del componente más pequeño del PE
│     │  ├─ Con un PE cuyo componente menor es 0.1 µV sobre una señal global de 100 µV
│     │  │  hacen falta al menos 1000 niveles → conversor de 10 bits (2¹⁰ = 1024)
│     │  └─ Formulado sobre el PEATC (componente menor ~0.1 µV, señal pico-pico ~100 µV,
│     │     razón 1/1000) el capítulo exige ≥2000 niveles → conversor de 11 bits: es el
│     │     mismo cálculo con un margen de seguridad de un bit
│     ├─ Los equipos de PE llevan al menos 11-12 bits, y la mayoría 12 o más, lo que es
│     │  suficiente para todos los tipos de PE
│     └─ Ilustración de por qué importa: un conversor de 3 bits no resuelve tres
│        componentes de baja amplitud, uno de 4 bits resuelve solo uno de ellos, y hace
│        falta uno de 5 bits (32 niveles) para resolver los tres
├─ Salida: conversión D/A, visualización y almacenamiento
│  ├─ El promediador reconvierte las ondas digitalizadas a forma analógica mediante
│  │  conversión digital-analógica (D/A), el proceso inverso al A/D
│  └─ El PE se muestra entonces en el monitor, se mide con cursor, se puede imprimir en
│     papel y se guarda en soporte digital
├─ Cómo se traduce en el montaje: campo cercano frente a campo lejano
│  ├─ Potencial de CAMPO CERCANO: electrodo cerca del generador, localizado,
│  │  topográficamente específico, gradiente de amplitud abrupto, muy dependiente de la
│  │  colocación exacta del electrodo (N9 de Erb, N20 cortical, P100 del PEV, onda I)
│  │  └─ Se registra mejor con referencia EN EL SCALP (derivación scalp-scalp), poniendo
│  │     el activo justo sobre el generador y la referencia en el punto del scalp menos
│  │     afectado: da un registro muy satisfactorio y con poco artefacto
│  ├─ Potencial de CAMPO LEJANO: electrodo alejado del generador, amplitud pequeña,
│  │  campo amplio con gradiente suave, poco dependiente de la localización exacta del
│  │  electrodo (ondas II-VII del PEATC recogidas en Cz)
│  │  └─ Solo se registra bien con referencia NO CEFÁLICA: la derivación scalp-scalp lo
│  │     cancela porque el componente es casi equipotencial en los dos electrodos. El
│  │     registro con referencia no cefálica es más ruidoso, pero es la única forma
│  │     └─ Ejemplo: el P31 subcortical del PESS tibial solo se registra con referencia
│  │        no cefálica (CPz-C5S); la derivación CPz-Fz registra el P37 cortical de campo
│  │        cercano pero pierde el P31 por efecto de cancelación
│  └─ Existe además un tipo de potencial de campo lejano de polaridad POSITIVA y latencia
│     fija generado cuando un potencial de acción compuesto propagado atraviesa un CODO
│     de la vía o entra en un compartimento de volumen o impedancia distintos — el P9 del
│     PESS de mediano, reflejo lejano de la entrada del impulso del brazo a la axila
├─ Errores y confusiones frecuentes
│  ├─ Invertir los electrodos de uno o más canales (registrar Cz-A2 en vez de A2-Cz): el
│  │  PE sale bien resuelto pero "raro". Truco de comprobación: mirar la copia en papel a
│  │  contraluz por el reverso, lo que equivale a invertir la derivación
│  ├─ Deducir la polaridad del generador a partir de la deflexión, sin saber qué electrodo
│  │  está en el terminal 1
│  ├─ Subir el filtro LF para "limpiar" el registro sin contar el precio: usar LF de
│  │  100 Hz en vez de los 30 Hz habituales reduce el artefacto muscular y el de 60 Hz,
│  │  pero reduce la amplitud del N13 y del N20 y acorta ligeramente sus latencias
│  ├─ Muestrear a menos de 2× la frecuencia más alta, o no filtrar en HF antes de
│  │  digitalizar: aparecen componentes lentos que no existían (aliasing) y que se
│  │  interpretan como señal
│  └─ Dar por buena la etiqueta "activo/referencia" del montaje sin comprobar qué
│     componente se está mirando (caso PEATC Cz-oreja ipsilateral)
├─ Limitaciones
│  ├─ Todo filtrado es un compromiso: la banda que quita ruido quita también parte del
│  │  PE, y desplaza latencias y amplitudes de los componentes
│  ├─ La resolución del sistema está limitada por el eslabón más pobre de la cadena: de
│  │  nada sirve un conversor de 16 bits si la impedancia de los electrodos es alta o si
│  │  el filtrado deja pasar aliasing
│  ├─ El rechazo en modo común solo funciona si las impedancias de los dos electrodos del
│  │  canal están equilibradas
│  └─ La referencia no cefálica, imprescindible para el campo lejano, introduce por
│     definición más ruido (ECG, EMG) en el registro
└─ Referencia
   └─ Markand2020 cap.1 pp.1-5 (componentes del equipo, estímulo, amplificación, filtrado,
      conversión A/D, Nyquist y aliasing, bits, Figs. 1.1-1.5), pp.11, 16-19 (filtros y
      pendientes, muestreo, amplificador diferencial y convenio de polaridad, Figs.
      1.11-1.13), pp.19-22 (campo cercano/lejano y elección de referencia, Figs.
      1.14-1.15) · cap.4 pp.142-143, 166 (impedancias <5 kΩ, banda de paso PESS, efecto
      de subir el LF a 100 Hz) · cap.3 p.87 (impedancias y diferencia <1 kΩ para el
      rechazo en modo común)
```
