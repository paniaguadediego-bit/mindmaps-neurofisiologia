---
codigo: C7
titulo: Seguridad eléctrica, quemaduras, fuego e infección
area: IONM
bloque: C — Transversales
plantilla: C
estado: completo
---

# C7 — Seguridad eléctrica, quemaduras, fuego e infección

```
Seguridad eléctrica, quemaduras, fuego e infección
├─ Concepto central
│  ├─ La monitorización intraoperatoria normalmente MEJORA la seguridad del paciente, pero
│  │  como cualquier procedimiento médico puede causar daño inadvertido
│  ├─ Los peligros ELÉCTRICOS inherentes a los dispositivos, electrodos, estímulos y
│  │  materiales que se usan son cuatro: SHOCK, SALIDA PELIGROSA, QUEMADURAS DE ELECTRODO y
│  │  FUEGO
│  ├─ A ellos se suma el control de INFECCIÓN, que protege al paciente y también al personal
│  └─ El esquema mental que ordena todo el tema es siempre el mismo: identificar el PELIGRO y
│     enumerar sus MEDIOS DE PROTECCIÓN. Entender el peligro y aplicar la protección adecuada
│     minimiza el riesgo y hace la técnica suficientemente segura en manos expertas
├─ SHOCK ELÉCTRICO
│  ├─ QUÉ ES: corriente que pasa por el cuerpo entre dos o más contactos y estimula tejido
│  │  excitable. Los efectos van de la percepción al dolor, contracciones musculares, daño
│  │  tisular, convulsiones y fibrilación ventricular con fallo cardiaco — que es la causa
│  │  habitual de muerte por electrocución
│  ├─ EL RIESGO DE FALLO CARDIACO varía con cuatro factores: tipo de corriente, frecuencia,
│  │  origen e intensidad
│  │  ├─ La corriente ALTERNA es más peligrosa que la continua, y es MÁS peligrosa entre 10 y
│  │  │  200 Hz — un rango que incluye de lleno los 50-60 Hz de la red eléctrica
│  │  └─ El origen INTRACARDIACO es mucho más peligroso que el transtorácico, porque la
│  │     intensidad de corriente cae rápidamente con la distancia a través de los tejidos
│  ├─ LAS CIFRAS QUE HAY QUE TENER EN LA CABEZA
│  │  ├─ Desde un electrodo INTRACARDIACO, la probabilidad de fibrilación ventricular con un
│  │  │  shock de 50-60 Hz es del 100% con solo 500 µA, y cae al 1% con 50 µA
│  │  │  └─ Y el dato que impide relajarse: NO existe una corriente mínima absolutamente
│  │  │     segura
│  │  ├─ Por vía TRANSTORÁCICA hacen falta shocks mucho mayores, que producen contracciones
│  │  │  musculares fuertes, para afectar al ritmo cardiaco: 1 A generaría unos 50 µA en el
│  │  │  corazón
│  │  └─ Y al revés: una corriente transtorácica de 500 µA, imperceptible, produciría solo
│  │     unos 0,025 µA en el corazón y ningún riesgo real de fibrilación — mientras que esa
│  │     MISMA corriente aplicada directamente al corazón podría ser mortal
│  ├─ Los dispositivos neurofisiológicos no están diseñados para conexiones intracardiacas y
│  │  NUNCA deben tener una vía conductora directa al corazón. Pero eso puede ocurrir
│  │  accidentalmente a través de shocks por corriente de fuga
│  ├─ LOS TRES TIPOS DE CORRIENTE DE FUGA que produce todo dispositivo médico eléctrico
│  │  ├─ De CHASIS: fluye desde la carcasa del dispositivo a través del paciente o del
│  │  │  operador hacia tierra o hacia otra parte de la carcasa
│  │  ├─ DE PACIENTE: fluye desde las conexiones del paciente a tierra, y puede originarse en
│  │  │  una fuente de voltaje EXTERNA sobre el paciente
│  │  └─ AUXILIAR DE PACIENTE: fluye ENTRE conexiones del paciente — por ejemplo el test de
│  │     impedancia o la corriente de polarización del amplificador
│  ├─ POR QUÉ ESTO ES ESPECIALMENTE RELEVANTE EN MIO, y no es teórico
│  │  ├─ Los dispositivos de MIO tienen habitualmente conexiones en las extremidades y
│  │  │  MÚLTIPLES conexiones, lo que crea vías TRANSTORÁCICAS y aumenta la corriente de fuga
│  │  │  total por SUMACIÓN
│  │  ├─ Las conexiones de otros aparatos eléctricos del quirófano introducen además fuentes
│  │  │  de voltaje externas y vías a tierra
│  │  ├─ Y las vías centrales YUGULAR INTERNA o SUBCLAVIA, y sus trayectos, son vías
│  │  │  conductoras potenciales AL CORAZÓN
│  │  │  └─ Consecuencia práctica: ni el equipo de monitorización, ni el operador que pueda
│  │  │     estar en contacto con él, ni las conexiones del paciente deben TOCAR esas vías
│  │  └─ El PUNTO DE ERB es una conexión de paciente cercana que podría llegar a hacer
│  │     contacto, y por eso puede ser más seguro OMITIRLO — aunque hasta ahora no hay ningún
│  │     caso publicado de ese evento
│  └─ LOS MEDIOS DE PROTECCIÓN CONTRA EL SHOCK
│     ├─ Todo dispositivo médico eléctrico tiene AL MENOS DOS medios de protección
│     │  incorporados contra shocks por corriente de fuga: puesta a tierra protectora,
│     │  aislamiento o impedancia, cumpliendo especificaciones técnicas detalladas
│     ├─ SEGURIDAD ANTE FALLO ÚNICO (single fault safe): el fallo de UNO de los medios de
│     │  protección no debe causar un riesgo inaceptable
│     │  ├─ Los fallos únicos surgen espontáneamente o por el estrés del uso; el ejemplo más
│     │  │  común es la rotura de la tierra del cable de alimentación
│     │  └─ Algunos fallos únicos disparan un aviso, pero OTROS SON SILENTES: su seguridad
│     │     depende de la inspección periódica y la reparación, para minimizar la probabilidad
│     │     de un segundo fallo antes de la siguiente inspección
│     ├─ LÍMITES DE CORRIENTE DE FUGA (corriente alterna, comisión electrotécnica
│     │  internacional), en condición normal y en condición de fallo único
│     │  ├─ Fugas INDIVIDUALES: 100 µA en condición normal y 500 µA en fallo único
│     │  ├─ Fuga TOTAL: 500 µA en condición normal y 1000 µA en fallo único
│     │  ├─ Y una condición especial: con una conexión del paciente a un voltaje externo
│     │  │  (incluida la red eléctrica), la fuga no debe exceder 5000 µA — eso generaría unos
│     │  │  0,25 µA en el corazón, que sigue teniendo riesgo bajo de fibrilación SALVO que
│     │  │  exista una vía cardiaca directa
│     │  └─ Aviso: los límites se revisan periódicamente y pueden variar entre jurisdicciones
│     ├─ INSPECCIÓN PERIÓDICA: tras la fabricación, tras la instalación, ante signos de daño,
│     │  tras una reparación, y CADA 6 MESES —o más a menudo si lo indica el fabricante, la
│     │  normativa local o un uso intenso
│     │  ├─ El ingeniero biomédico debe testar como UNA UNIDAD los dispositivos interconectados
│     │  │  alimentados por un solo cable, y también los dispositivos construidos a medida o
│     │  │  modificados
│     │  └─ Descuidar el test periódico aumenta el riesgo de un DOBLE FALLO seriamente
│     │     peligroso
│     └─ CABLES Y CONECTORES
│        ├─ Para no perder la puesta a tierra protectora: tomas de corriente bien construidas
│        │  SIN soldadura de estaño (que se afloja con el tiempo), y cables de alimentación de
│        │  servicio pesado con alivio de tensión en AMBOS extremos y sin enchufes acodados en
│        │  ángulo recto, propensos a la tensión
│        ├─ Los alargadores están desaconsejados, aunque pueden ser aceptables si cumplen los
│        │  mismos estándares. La inspección de cables y alargadores debe formar parte del test
│        │  periódico
│        └─ Los cables de paciente con conectores de pin NO protegidos pueden causar
│           ELECTROCUCIÓN por contacto accidental con la red. Deben tener conectores "a prueba
│           de contacto" (touch proof), incapaces de establecer contactos eléctricos
│           peligrosos cuando no están alojados en su receptáculo
├─ SALIDA PELIGROSA — parámetros de estimulación
│  ├─ El test neurofisiológico aplica shocks controlados e intencionados a dianas del sistema
│  │  nervioso, y una salida excesiva podría dañar el tejido neural o el tejido interpuesto
│  ├─ POLARIDAD por defecto: los pulsos son monofásicos o bifásicos y normalmente CATÓDICOS o
│  │  CÁTODO-PRIMERO, con la excepción de los pulsos ANÓDICOS o ánodo-primero de la
│  │  estimulación eléctrica transcraneal (TES) y la estimulación cortical directa (DCS) para
│  │  potenciales motores
│  ├─ LAS CUATRO MAGNITUDES de cada fase de pulso: duración D en ms, intensidad de corriente I
│  │  en mA, CARGA Q en µC —la integral de la corriente sobre la duración de la fase— y
│  │  ENERGÍA E en mJ —la integral de la corriente al cuadrado sobre la duración, multiplicada
│  │  por la resistencia R en kΩ
│  │  └─ Para el pulso rectangular monofásico, que es el más común, esto se simplifica a
│  │     Q = I × D y E = I² × D × R
│  ├─ BALANCE DE CARGA: la fase de estímulo con carga QS va seguida de una fase de reversión
│  │  de polaridad opuesta e igual carga, QR = −QS
│  │  ├─ Balance ASIMÉTRICO: fase de reversión más pequeña y de decaimiento lento
│  │  ├─ Bifásico SIMÉTRICO: fase de reversión de forma igual y polaridad opuesta
│  │  └─ El balance de carga puede reducir la toxicidad electroquímica y la corrosión del
│  │     electrodo, pero NO siempre está disponible en los equipos de monitorización
│  ├─ CORRIENTE CONSTANTE frente a VOLTAJE CONSTANTE
│  │  ├─ CORRIENTE CONSTANTE: entrega la corriente seleccionada ajustando el voltaje según la
│  │  │  ley de Ohm. Compensa las variaciones de resistencia, lo que da corriente predecible y
│  │  │  favorece la estabilidad de la respuesta
│  │  │  ├─ Si la resistencia es excesiva para el voltaje disponible, no alcanza la corriente
│  │  │  │  seleccionada, y el equipo debe indicar éxito o fallo con una señal OBVIA (por
│  │  │  │  ejemplo amarillo o rojo)
│  │  │  └─ Sus pulsos tienen distorsiones menores de tiempo de subida y bajada y pueden
│  │  │     mostrar cierto decaimiento de corriente cuando se les exige pulsos largos de
│  │  │     0,5-1 ms a alta frecuencia, pero son aproximadamente rectangulares
│  │  └─ VOLTAJE CONSTANTE: entrega el voltaje seleccionado y queda sujeto a las variaciones
│  │     de resistencia, que pueden causar inestabilidad de corriente y de respuesta. Una
│  │     lectura de la corriente entregada ayuda a interpretar
│  │     └─ Complica además la estimación de carga y energía, porque los pulsos NO son
│  │        rectangulares: puede haber un pico inicial de corriente que decae
│  │        exponencialmente, u otras distorsiones bajo carga
│  └─ TRENES: pulsos repetitivos caracterizados por su frecuencia en Hz o por el intervalo
│     interestímulo (ISI) en ms, definido como el tiempo entre inicios de pulsos sucesivos e
│     igual a 1000/frecuencia
│     ├─ Estimulación cortical tradicional de Penfield: trenes de 50-60 Hz (ISI de 20 a
│     │  16,7 ms) que duran de 1 a 5 segundos
│     ├─ Trenes de CINCO pulsos con ISI de 4 ms (250 Hz) parecen generalmente óptimos para los
│     │  MEP musculares por TES o por DCS
│     └─ La carga y la energía TOTALES son la suma de todos los pulsos del tren
├─ LA CURVA INTENSIDAD-DURACIÓN — el concepto que unifica los tres riesgos
│  ├─ LAS DOS CONSTANTES que definen la excitabilidad de una diana neural
│  │  ├─ REOBASE (Rb): corriente umbral asintótica a duración de pulso infinita
│  │  └─ CRONAXIA (Cx): constante de tiempo de excitabilidad, definida como la duración de
│  │     pulso a la que la corriente umbral es el DOBLE de la reobase
│  ├─ LAS TRES ECUACIONES CLÁSICAS, desarrolladas hace más de un siglo, que se ajustan
│  │  excelentemente a los resultados neurofisiológicos de pulso único y de tren
│  │  ├─ Corriente umbral: Ith = Rb × (1 + Cx/D)
│  │  ├─ Carga umbral: Qth = Rb × (1 + Cx/D) × D
│  │  └─ Energía umbral: Eth = Rb² × (1 + Cx/D)² × D × R
│  ├─ POR QUÉ IMPORTA: corriente, carga y energía son medidas de intensidad RELACIONADAS PERO
│  │  OPUESTAS, y cada una tiene un mecanismo de lesión distinto
│  │  ├─ La CORRIENTE umbral DISMINUYE al alargar el pulso → su riesgo es el daño
│  │  │  ELECTROQUÍMICO
│  │  ├─ La CARGA AUMENTA al alargar el pulso → su riesgo es la EXCITOTOXICIDAD
│  │  └─ La ENERGÍA es alta con pulsos cortos Y con pulsos largos, y MÍNIMA en la cronaxia →
│  │     su riesgo es el calor, es decir la lesión TÉRMICA
│  └─ CONCLUSIÓN OPERATIVA, que es lo más rentable de todo el tema: la CRONAXIA es la duración
│     de pulso MÁS SEGURA, porque minimiza la energía manteniendo a la vez una corriente y una
│     carga modestas
├─ PROTECCIÓN CONTRA LA LESIÓN TÉRMICA
│  ├─ El riesgo es daño térmico de la piel o del tejido neural por energía de pulso excesiva,
│  │  tanto en estimulación externa como directa del sistema nervioso
│  ├─ Ajustar la duración de pulso a la CRONAXIA, cuando se conoce, ayuda a minimizar el riesgo
│  │  ├─ Hay buena evidencia de curva intensidad-duración de que la cronaxia media del MEP por
│  │  │  DCS ronda los 0,2 ms
│  │  ├─ Hay ALGO de evidencia de que lo mismo valdría para los MEP por TES, pero los
│  │  │  estimuladores de TES disponibles hoy o no ofrecen 0,2 ms o no tienen salida suficiente
│  │  │  para conseguir respuestas de forma consistente con esa duración
│  │  └─ Para la mayoría del resto de técnicas simplemente NO hay datos de intensidad-duración
│  ├─ EL LÍMITE DE LOS 50 mJ: es el límite empírico de seguridad para estimulación EXTERNA; por
│  │  encima es posible el daño térmico cutáneo
│  │  ├─ Cómo se puede exceder: con TES usando pulsos de 0,05 ms, que exigen corriente mucho
│  │  │  más alta que los pulsos largos. Pulsos de más de 1000 mA a 0,05 ms podrían superar los
│  │  │  50 mJ asumiendo 1 kΩ de resistencia
│  │  └─ Una revisión de seguridad de la TES identificó DOS quemaduras del cuero cabelludo
│  │     posiblemente —aunque no definitivamente— relacionadas
│  ├─ POR QUÉ LA ESTIMULACIÓN DE NERVIO PERIFÉRICO NO PREOCUPA: con 0,2 ms y 100 mA de salida
│  │  máxima se generan solo 2 mJ asumiendo 1 kΩ; incluso alargando el pulso a 1 ms la energía
│  │  seguiría siendo aceptable, 10 mJ. Y además la intensidad supramáxima —el punto en que las
│  │  respuestas dejan de crecer— queda habitualmente MUY por debajo de la salida máxima
│  │  └─ Más precaución con la estimulación por AGUJA subcutánea, por la mayor proximidad
│  │     neural: hay que cuidar especialmente no pasarse de la intensidad supramáxima
│  ├─ ESTIMULACIÓN CORTICAL O NEURAL DIRECTA: recomendación de larga data de emplear al menos
│  │  0,1 ms de duración de pulso, basada en observaciones de daño térmico cortical con pulsos
│  │  muy breves y muy energéticos de 0,015 ms en animales de experimentación
│  │  └─ No hay casos clínicos publicados de lesión térmica neural en humanos. Pero el daño
│  │     podría no dar signos clínicos evidentes, y solo existe UN estudio histológico humano
│  └─ LOS CINCO MEDIOS DE PROTECCIÓN
│     ├─ 1. Ajustar la duración de pulso a la cronaxia cuando se conoce y es factible (por
│     │  ejemplo 0,2 ms para MEP por DCS)
│     ├─ 2. Asegurar que los estímulos externos no excedan 50 mJ
│     ├─ 3. Evitar intensidades de TES muy altas con pulsos de 0,05 ms
│     ├─ 4. Evitar intensidades por encima de lo necesario para respuestas adecuadas —o
│     │  supramáximas cuando corresponda— y en todo caso por debajo de los límites publicados
│     │  que parecen clínicamente seguros
│     └─ 5. Evitar duraciones de pulso menores de 0,1 ms para estimulación directa del sistema
│        nervioso
├─ PROTECCIÓN CONTRA LA EXCITOTOXICIDAD
│  ├─ Preocupa en estimulación cortical o neural DIRECTA, y posiblemente en TES. Tampoco hay
│  │  casos clínicos publicados, pero los modelos animales demuestran claramente el daño
│  │  excitotóxico
│  ├─ CAUTELA SOBRE ESOS MODELOS: aplican trenes de pulsos bifásicos a 50 Hz durante HORAS O
│  │  DÍAS, y su relevancia para los estímulos mucho más breves del test neurofisiológico es
│  │  incierta
│  ├─ EL UMBRAL EXPERIMENTAL: la carga Q y la densidad de carga QD = Q/cm² son cofactores
│  │  RECÍPROCOS de excitotoxicidad, con un umbral empírico de lesión de log QD = 1,85 − log Q
│  │  └─ Las lesiones histológicas aparecen SOLO por encima de ese umbral, y empeoran con el
│  │     tiempo total de estimulación
│  ├─ QUÉ TÉCNICAS HUMANAS QUEDAN POR ENCIMA DEL UMBRAL — el dato incómodo
│  │  ├─ La MAYORÍA de técnicas de DCS son potencialmente excitotóxicas: la estimulación de
│  │  │  Penfield con sondas de 2 mm, y los MEP por DCS con pulsos de 0,5 ms y electrodos de
│  │  │  disco de 2-3 mm de diámetro o incluso de 1 cm²
│  │  ├─ La ausencia de lesión clínica podría explicarse por la BREVEDAD de la estimulación,
│  │  │  pero eso no excluye necesariamente lesiones subclínicas — aunque el único estudio
│  │  │  histológico disponible argumenta en contra de que las haya
│  │  ├─ EXCEPCIÓN notable: los MEP por DCS con pulsos de 0,2 ms y electrodo de 1 cm² deberían
│  │  │  quedar con seguridad POR DEBAJO del umbral de lesión
│  │  ├─ Las cargas máximas publicadas de MEP por TES también deberían ser seguras, basándose
│  │  │  en una dispersión craneal estimada de 20:1
│  │  └─ Para poner las cosas en perspectiva: los límites de la TERAPIA ELECTROCONVULSIVA sí
│  │     exceden el umbral
│  └─ LOS CUATRO MEDIOS DE PROTECCIÓN
│     ├─ 1. Idealmente, mantener carga y densidad de carga POR DEBAJO del umbral experimental
│     │  de lesión, lo que hace la excitotoxicidad virtualmente imposible
│     ├─ 2. Considerar electrodos de DCS de 1 cm² para reducir la densidad de carga
│     ├─ 3. Usar pulsos de 0,2 ms para MEP por DCS, que limitan la carga frente a pulsos más
│     │  largos
│     └─ 4. En cualquier caso, evitar intensidades por encima de lo necesario para respuestas
│        adecuadas, y mantenerse por debajo de los límites publicados que parecen clínicamente
│        seguros
├─ PROTECCIÓN CONTRA LA TOXICIDAD ELECTROQUÍMICA
│  ├─ Preocupa en la estimulación directa del sistema nervioso, porque ocurre en la INTERFAZ
│  │  ELECTRODO-TEJIDO
│  ├─ LO QUE PASA EN LA INTERFAZ, y la distinción que ordena todo
│  │  ├─ Un electrodo metálico inactivo en contacto con tejido biológico forma un POTENCIAL DE
│  │  │  EQUILIBRIO
│  │  ├─ TRANSFERENCIA CAPACITIVA, que es la SEGURA: un pulso catódico acumula electrones y
│  │  │  desplaza el potencial del electrodo hacia negativo, iniciando transferencia de carga
│  │  │  al tejido. Cerca del potencial de equilibrio esa transferencia es capacitiva — los
│  │  │  cationes del líquido extracelular fluyen HACIA el electrodo y los aniones se alejan.
│  │  │  Invertir la polaridad invierte el flujo iónico. NO se pierde carga y el proceso NO es
│  │  │  tóxico
│  │  └─ TRANSFERENCIA FARADAICA, que es la PELIGROSA: un pulso catódico excesivamente fuerte o
│  │     de más de 1 ms desplaza el potencial más allá de su LÍMITE CAPACITIVO e inicia
│  │     inyección faradaica de carga, forzando electrones dentro del tejido
│  │     ├─ Esos electrones forman reacciones electroquímicas REDUCTIVAS con diversas
│  │     │  moléculas, liberando subproductos potencialmente tóxicos
│  │     ├─ Invertir la polaridad revierte parcialmente el proceso, pero NO recupera toda la
│  │     │  carga inyectada porque algunas reacciones son IRREVERSIBLES
│  │     └─ Un pulso ANÓDICO excesivamente fuerte o de más de 1 ms hace lo simétrico: desplaza
│  │        el potencial hacia positivo más allá del límite capacitivo e inicia RETIRADA
│  │        faradaica de carga, extrayendo electrones del tejido mediante reacciones oxidativas
│  │        igualmente tóxicas y parcialmente irreversibles
│  ├─ POR QUÉ LOS TRENES MONOFÁSICOS SON ESPECIALMENTE PELIGROSOS: no dejan tiempo suficiente
│  │  para que el potencial del electrodo se recupere hasta el equilibrio antes del siguiente
│  │  pulso. Eso desplaza progresivamente el potencial prepulso alejándolo del equilibrio hasta
│  │  un ESTADO ESTACIONARIO con transferencia faradaica predominante, que es la peligrosa
│  ├─ POR QUÉ LOS BIFÁSICOS SIMÉTRICOS PUEDEN SER MÁS SEGUROS: desplazan gradualmente el
│  │  potencial prepulso en dirección OPUESTA, hasta un estado estacionario con transferencia
│  │  mayoritariamente CAPACITIVA y pequeñas transferencias faradaicas bidireccionales
│  │  └─ Prueba experimental: los animales sometidos a DCS a 50 Hz durante horas o días
│  │     presentan lesiones electroquímicas con pulsos MONOFÁSICOS, pero NO con bifásicos
│  │     simétricos
│  ├─ RELEVANCIA CLÍNICA, con matiz: la relevancia para trenes más breves en humanos es
│  │  incierta. El tejido puede tamponar algunos subproductos tóxicos y parece IMPROBABLE que
│  │  los trenes muy breves de DCS para MEP causen lesión electroquímica. En cambio, los trenes
│  │  tradicionales de 50-60 Hz que duran SEGUNDOS sí podrían ser un motivo de preocupación
│  └─ LOS CUATRO MEDIOS DE PROTECCIÓN
│     ├─ 1. NO permitir pulsos de más de 1 ms
│     ├─ 2. Evitar estímulos más fuertes de lo necesario para respuestas adecuadas y
│     │  mantenerse por debajo de los límites publicados que parecen clínicamente seguros
│     ├─ 3. Aplicar pulsos con BALANCE DE CARGA si el equipo lo permite
│     └─ 4. Usar pulsos bifásicos SIMÉTRICOS para los trenes de 50-60 Hz que duran segundos.
│        Los trenes monofásicos muy breves son probablemente aceptables
├─ QUEMADURAS DE ELECTRODO
│  ├─ Son infrecuentes pero potencialmente serias: van desde quemaduras menores de primer o
│  │  segundo grado que curan solas, hasta NECROSIS CUTÁNEA DE ESPESOR COMPLETO, dolorosa y
│  │  desfigurante, que puede necesitar cirugía plástica
│  ├─ Hay que diferenciar la sospecha de quemadura de otras lesiones cutáneas: abrasión,
│  │  presión, dermatitis de contacto y otros mecanismos. Una vez confirmada, el hospital debe
│  │  INVESTIGAR para determinar y corregir la causa y reducir la probabilidad de repetición
│  ├─ ELECTROCIRUGÍA — y la corrección terminológica que la explica
│  │  ├─ La electrocirugía se llama a menudo, y erróneamente, "electrocauterio": el CAUTERIO
│  │  │  aplica CALOR, mientras que las pinzas o las hojas de electrocirugía NO están calientes
│  │  │  — conducen corriente de RADIOFRECUENCIA de 0,3 a 3 MHz al tejido para generar allí
│  │  │  energía y calor
│  │  ├─ ELECTROCIRUGÍA BIPOLAR: relativamente segura, porque pasa la corriente entre las
│  │  │  puntas cátodo-ánodo de la pinza. La corriente queda FOCAL y no se dispersa por el
│  │  │  cuerpo, así que no arriesga quemaduras en electrodos distantes
│  │  └─ ELECTROCIRUGÍA MONOPOLAR: más peligrosa. Introduce corriente en el paciente por el
│  │     contacto de la hoja; la pequeña superficie de la hoja genera alta DENSIDAD DE ENERGÍA
│  │     que calienta el tejido vecino, la corriente se dispersa por el paciente y sale por
│  │     TODAS las conexiones disponibles
│  │     ├─ En condiciones NORMALES, la mayor parte de la corriente sale por la placa
│  │     │  dispersiva de baja impedancia cercana y vuelve por su cable a la unidad, cerrando
│  │     │  el circuito. La gran superficie de contacto de la placa genera baja densidad de
│  │     │  energía y ningún calor significativo
│  │     └─ En condiciones ANORMALES, más corriente —o incluso toda— sale por otras conexiones
│  │        del paciente, incluidos los electrodos de monitorización
│  ├─ LAS CUATRO CONDICIONES ANORMALES, y la señal de aviso que las delata
│  │  ├─ Desprendimiento parcial o completo de la placa dispersiva, o rotura de su cable
│  │  ├─ Mal funcionamiento de la unidad de electrocirugía
│  │  ├─ Electrodos situados CERCA de la placa dispersiva, o ENTRE la placa y la hoja
│  │  └─ SEÑAL DE AVISO que hay que saber leer: las peticiones repetidas del cirujano para
│  │     SUBIR LA POTENCIA pueden indicar un desprendimiento progresivo de la placa. Las
│  │     quemaduras bajo la placa o en otros contactos aparecen cuando su área de contacto se
│  │     ha vuelto demasiado pequeña
│  ├─ Y LA VÍA QUE FUNCIONA INCLUSO CON LA PLACA INTACTA: la corriente de radiofrecuencia
│  │  INDUCE fácilmente corrientes en dispositivos, cables o cables de paciente cercanos, y
│  │  puede llegar a ser lo bastante fuerte como para causar quemaduras en los electrodos de
│  │  monitorización aunque la placa dispersiva funcione bien
│  │  └─ Tres factores potencian esa inducción: activar la unidad en CIRCUITO ABIERTO sin
│  │     contacto de la hoja; la proximidad del equipo de monitorización, sus cables o los
│  │     cables de paciente a la unidad de electrocirugía o a sus cables; y los BUCLES o
│  │     ESPIRALES en los cables de monitorización
│  ├─ POR QUÉ LAS QUEMADURAS OCURREN EN LAS AGUJAS: la energía que pasa por un electrodo de
│  │  monitorización aumenta con la impedancia, pero sobre todo la DENSIDAD DE ENERGÍA aumenta
│  │  al disminuir la superficie
│  │  └─ Las agujas rectas o de sacacorchos tienen superficie pequeña → alta densidad de
│  │     energía y calor, y más todavía si están INSERTADAS SOLO PARCIALMENTE. Por eso la
│  │     mayoría de las quemaduras por electrocirugía ocurren en agujas, mientras que las copas
│  │     de EEG y los discos o placas adhesivas, de mayor superficie, tienen menos riesgo
│  ├─ LOS OCHO MEDIOS DE PROTECCIÓN CONTRA QUEMADURAS POR ELECTROCIRUGÍA
│  │  ├─ 1. Limitar el uso de electrodos de aguja y asegurar su inserción COMPLETA cuando se
│  │  │  usen
│  │  ├─ 2. Asegurar la fijación uniforme de la placa dispersiva sobre piel limpia, seca y sin
│  │  │  vello, sobre tejido blando cerca del sitio operatorio
│  │  ├─ 3. Asegurar la conexión y la integridad del cable de la placa
│  │  ├─ 4. Asegurar que los electrodos de monitorización NO estén ni cerca de la placa ni
│  │  │  entre la placa y el sitio quirúrgico
│  │  ├─ 5. Evitar activar la unidad sin contacto de la hoja
│  │  ├─ 6. Situar el equipo de monitorización, sus cables y los cables de paciente LEJOS de la
│  │  │  unidad de electrocirugía y de sus cables
│  │  ├─ 7. No permitir bucles ni espirales en los cables de monitorización
│  │  └─ 8. Asegurar la inspección y reparación periódicas de la unidad de electrocirugía
│  ├─ QUEMADURAS POR RESONANCIA MAGNÉTICA INTRAOPERATORIA
│  │  ├─ El funcionamiento de la RM crea campos magnéticos grandes que inducen corrientes
│  │  │  fuertes en dispositivos, cables y cables de paciente, con riesgo de quemaduras bajo
│  │  │  los electrodos o INCLUSO bajo sus propios cables
│  │  ├─ Los factores de riesgo se repiten: agujas de superficie pequeña, y bucles o espirales
│  │  ├─ Los dispositivos, cables y electrodos ESTÁNDAR NO son compatibles con RM. Existen
│  │  │  electrodos no ferromagnéticos de plata, oro, platino, iridio, carbono o plástico, pero
│  │  │  pueden no estar disponibles
│  │  └─ LOS SEIS MEDIOS DE PROTECCIÓN: situar el equipo más allá de la línea relativamente
│  │     segura de los CINCO GAUSS · usar electrodos y material compatibles con RM siempre que
│  │     sea posible · limitar el uso de agujas · no permitir bucles ni espirales · colocar
│  │     aislamiento POR DEBAJO de los cables de paciente · y DESCONECTAR todos los electrodos
│  │     del paciente antes de operar la RM
│  └─ QUEMADURAS POR CORRIENTE CONTINUA
│     ├─ Una corriente continua SOSTENIDA, aun de baja intensidad, puede causar quemaduras
│     │  ELECTROLÍTICAS graves
│     ├─ Por eso los límites de fuga de corriente continua son mucho más estrictos que los de
│     │  alterna: solo 10 µA en condición normal y 50 µA en fallo único para fugas individuales,
│     │  y 50 y 100 µA para la fuga total. Forman parte de la inspección periódica
│     ├─ Qué puede generar corriente continua a través de los electrodos del paciente: los
│     │  dispositivos alimentados por BATERÍA, el mal funcionamiento del equipo, o los DERRAMES
│     │  de fluido dentro de sus componentes
│     └─ LOS TRES MEDIOS DE PROTECCIÓN: no usar dispositivos a batería · asegurar la inspección
│        periódica del equipo o tras cualquier signo de mal funcionamiento · y proteger los
│        equipos de derrames, lo que incluye NO montar componentes en palos POR DEBAJO de las
│        bolsas de fluido intravenoso
├─ FUEGO
│  ├─ La magnitud del problema: hay unos 100 incendios de quirófano al año en Estados Unidos,
│  │  y pueden causar lesiones graves y la muerte
│  ├─ FUENTES DE IGNICIÓN habituales: las chispas de la electrocirugía y los incendios del
│  │  equipo eléctrico
│  │  └─ Los dispositivos eléctricos que van a fallar pueden dar SIGNOS DE AVISO: partes
│  │     excesivamente calientes u olor a quemado
│  ├─ COMBUSTIBLE: gases inhalatorios inflamables, alcohol, colodión, acetona y las tallas
│  │  quirúrgicas alrededor del paciente
│  ├─ CATALIZADOR: la atmósfera rica en oxígeno cerca de la orofaringe
│  └─ LOS CINCO MEDIOS DE PROTECCIÓN
│     ├─ 1. Asegurar que el equipo de monitorización cumple los estándares contra incendios
│     ├─ 2. Inspeccionar y reparar el equipo ante cualquier signo de partes calientes u olor a
│     │  quemado
│     ├─ 3. Usar soluciones de preparación cutánea NO inflamables
│     ├─ 4. Asegurar que cualquier líquido inflamable que se use no forme CHARCOS, esté
│     │  completamente seco antes de colocar las tallas, y no esté en uso abierto mientras
│     │  funciona la electrocirugía
│     └─ 5. Formación del personal de monitorización en prevención y control de incendios
├─ CONTROL DE INFECCIÓN
│  ├─ EL MARCO: las enfermedades transmisibles adquiridas en el hospital —hepatitis, VIH y
│  │  enfermedad de Creutzfeldt-Jakob— preocupan tanto para los pacientes como para el personal
│  │  ├─ Las PRECAUCIONES ESTÁNDAR asumen que TODO EL MUNDO es potencialmente infeccioso
│  │  └─ Las precauciones ADICIONALES se aplican a pacientes con infección activa
│  ├─ PRECAUCIONES ESTÁNDAR — personal
│  │  ├─ Lavado de manos antibacteriano adecuado entre contactos con pacientes o entre
│  │  │  procedimientos, tras contactar con fluidos corporales, tras quitarse los guantes, y al
│  │  │  ENTRAR y SALIR del quirófano
│  │  ├─ Equipo de protección personal: gorro, mascarilla, calzas, ropa de quirófano y guantes,
│  │  │  obligatorios ante cualquier posible contacto con fluidos corporales, incluida la
│  │  │  preparación de la piel y la inserción de agujas
│  │  └─ No permitir que los guantes contacten con el equipo de monitorización, y quitárselos y
│  │     desecharlos en una bolsa adecuada INMEDIATAMENTE después de usarlos
│  ├─ PRECAUCIONES ESTÁNDAR — piel, electrodos y equipo
│  │  ├─ La preparación abrasiva de la piel para registros de superficie NO debe causar
│  │  │  sangrado ni exudación
│  │  ├─ Las agujas romas para reducir impedancia de copas de EEG deben ser estériles, de UN
│  │  │  SOLO USO, y desecharse en contenedor de punzantes
│  │  ├─ Los electrodos de aguja deben ser estériles y de un solo uso, y la preparación de su
│  │  │  sitio de inserción requiere una solución antiséptica adecuada
│  │  ├─ Tras el registro: electrodos adhesivos a bolsa de desecho, electrodos de aguja a
│  │  │  contenedor de punzantes. La limpieza y desinfección adecuadas de las copas de EEG
│  │  │  reutilizables es OBLIGATORIA
│  │  └─ Limpiar también el equipo, sus headboxes, cables y estimuladores con detergente o
│  │     desinfectante, especialmente si han estado expuestos a fluidos corporales
│  ├─ PINCHAZO ACCIDENTAL (needlestick) — preocupación especial por el uso habitual de
│  │  múltiples agujas de registro
│  │  ├─ Manejar las agujas por su VÁSTAGO y NUNCA intentar reencapucharlas
│  │  ├─ Quien sufra un pinchazo debe notificarlo al servicio de salud laboral del hospital y
│  │  │  seguir sus procedimientos
│  │  └─ Es aconsejable FAVORECER EL SANGRADO en el punto y lavarlo a fondo
│  └─ PRECAUCIONES ADICIONALES
│     ├─ Es improbable que un paciente con infección activa que requiera precauciones de
│     │  transmisión aérea, por gotas o por contacto vaya a ser monitorizado; si ocurre, hay
│     │  guías establecidas que seguir
│     ├─ El personal de monitorización debe tener todas las inmunizaciones recomendadas por el
│     │  hospital, incluida la hepatitis, y seguir las políticas de postexposición para VIH,
│     │  hepatitis y otras enfermedades infecciosas
│     └─ CREUTZFELDT-JAKOB: hay que asegurar la DESTRUCCIÓN de los electrodos usados. La única
│        excepción posible sería la esterilización de copas de EEG con hipoclorito concentrado
│        o autoclave intenso
├─ Errores y confusiones frecuentes
│  ├─ Llamar "electrocauterio" a la electrocirugía: el cauterio calienta, la electrocirugía
│  │  conduce radiofrecuencia. La confusión hace olvidar que la corriente SALE por algún sitio
│  ├─ Suponer que con la placa dispersiva intacta no hay riesgo de quemadura: la
│  │  radiofrecuencia INDUCE corriente en cables cercanos y en bucles
│  ├─ Dejar agujas parcialmente insertadas: la densidad de energía sube al reducirse la
│  │  superficie de contacto
│  ├─ Dejar bucles o espirales en los cables de paciente — factor de riesgo tanto para
│  │  electrocirugía como para RM
│  ├─ Montar componentes del equipo en el palo POR DEBAJO de las bolsas de suero: un derrame
│  │  puede generar corriente continua a través de los electrodos
│  ├─ Acortar el pulso para "ser más suave": acortar SUBE la corriente y la energía. La
│  │  duración más segura es la cronaxia, no la más corta posible
│  ├─ Usar pulsos de 0,2 ms en estimulación SUBCORTICAL trasladando la recomendación de la
│  │  DCS: la relación umbral-distancia está establecida con 0,5 ms y cambiaría de forma
│  │  indefinida
│  ├─ Usar trenes monofásicos largos a 50-60 Hz sobre tejido neural expuesto, que es la
│  │  combinación con más riesgo electroquímico
│  └─ No omitir el punto de Erb cuando hay vía central yugular o subclavia, o dejar que el
│     equipo o el operador contacten con esas vías
├─ Limitaciones
│  ├─ NO existe una corriente mínima absolutamente segura para el corazón: toda la seguridad
│  │  eléctrica se construye sobre reducir probabilidad, no sobre eliminar riesgo
│  ├─ Los límites normativos de corriente de fuga se revisan periódicamente y VARÍAN entre
│  │  jurisdicciones: no son un número universal
│  ├─ Faltan datos de intensidad-duración para la mayoría de las técnicas, así que la
│  │  recomendación de "ajustar a la cronaxia" solo puede aplicarse hoy a unas pocas
│  ├─ La evidencia de excitotoxicidad y de toxicidad electroquímica viene de modelos animales
│  │  con estimulación de HORAS O DÍAS, y su relevancia para estímulos breves es incierta
│  ├─ La ausencia de casos clínicos publicados de lesión térmica o excitotóxica humana no
│  │  prueba ausencia de lesión: el daño podría no dar signos clínicos evidentes, y solo hay UN
│  │  estudio histológico humano
│  └─ Algunos fallos únicos del equipo son SILENTES: la seguridad depende entonces por completo
│     de que se cumpla la inspección periódica
└─ Referencia
   └─ Deletis cap.41 (MacDonald/Seidel/Shils, "Safety") pp.581-593 — §41.1 introducción,
      §41.2.1 shock eléctrico (riesgo de fallo cardiaco con sus cifras intracardiacas y
      transtorácicas, los tres tipos de corriente de fuga, vías centrales y punto de Erb),
      §41.2.1.3 medios de protección (seguridad ante fallo único, límites de fuga de la
      comisión electrotécnica internacional, inspección cada 6 meses, cables y conectores touch
      proof), §41.2.2.1 parámetros de estimulación con las fórmulas de carga y energía y el
      balance de carga (Fig. 41.1), §41.2.2.2 reobase, cronaxia y las tres ecuaciones clásicas,
      con la cronaxia como duración más segura (Fig. 41.2), §41.2.2.3 lesión térmica, límite de
      50 mJ y los cinco medios de protección, §41.2.2.4 excitotoxicidad, umbral
      log QD = 1,85 − log Q y comparación de técnicas humanas (Fig. 41.3), §41.2.2.5 toxicidad
      electroquímica, transferencia capacitiva frente a faradaica y trenes monofásicos frente a
      bifásicos (Figs. 41.4-41.5), §41.2.3 quemaduras de electrodo por electrocirugía, RM y
      corriente continua (Fig. 41.6), §41.2.4 fuego, §41.4 control de infección (precauciones
      estándar, pinchazo accidental y precauciones adicionales), §41.6 conclusión
```
