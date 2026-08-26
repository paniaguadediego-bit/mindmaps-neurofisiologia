---
codigo: A8
titulo: EEG intraoperatorio
area: IONM
bloque: A — Modalidades de señal
plantilla: A
estado: completo
---

# A8 — EEG intraoperatorio

> Aviso de alcance: las fuentes del proyecto NO tienen un capítulo dedicado al EEG
> intraoperatorio como modalidad única. Lo de abajo se apoya en los dos contextos que sí
> están cubiertos a fondo: detección de isquemia en endarterectomía carotídea, y
> electrocorticografía en cirugía de epilepsia. Burst-suppression como objetivo de
> profundidad anestésica, EEG cuantitativo tipo BIS o entropía, y protocolos fuera de estos
> dos contextos quedan `(verificar)`.

```
EEG intraoperatorio
├─ Qué registra y en qué se diferencia de un potencial evocado
│  ├─ Actividad cortical ESPONTÁNEA, no evocada: no hay estimulación, es registro pasivo
│  │  continuo
│  ├─ Diferencia conceptual con los PE: un potencial evocado evalúa la integridad de una
│  │  VÍA definida, incluyendo componentes subcorticales y corticales. El EEG refleja
│  │  ACTIVIDAD CORTICAL
│  ├─ La colocación definida según el sistema 10-20 permite atribuir un cambio de actividad
│  │  eléctrica a un área cortical CONCRETA — ahí está su valor localizador
│  └─ Se interpreta por análisis VISUAL de frecuencias y de actividad a lo largo de la
│     corteza, más la detección de patrones específicos como el burst-suppression
├─ REGISTRO Y MONTAJE
│  ├─ Sistema 10-20 multicanal, con comparación bihemisférica obligatoria
│  ├─ El sistema 10-20 de la IFCN localiza los electrodos por porcentajes de distancias
│  │  craneales fijas (nasion-inion, preauriculares), lo que da reproducibilidad entre
│  │  cráneos de distinto tamaño
│  └─ La comparación entre hemisferios no es un lujo: es lo que convierte el EEG en
│     interpretable bajo anestesia (ver más abajo)
├─ MORFOLOGÍA NORMAL
│  └─ Actividad bilateral simétrica, con predominio regional fisiológico: más beta frontal,
│     más theta y delta temporal
├─ EFECTO DE LA ANESTESIA
│  ├─ MUY sensible y dosis-dependiente, al contrario que el PEATC: enlentecimiento
│  │  progresivo hasta el burst-suppression
│  ├─ Es del Grupo 2 farmacológico: sensible a halogenados, insensible a relajante
│  └─ El efecto varía por fármaco en lo que respecta a actividad epileptiforme: enflurano,
│     metohexital, etomidato y fentanilo tienden a AUMENTARLA; isoflurano, sevoflurano y
│     propofol son relativamente neutros
├─ CRITERIOS DE ISQUEMIA EN ENDARTERECTOMÍA CAROTÍDEA
│  ├─ Criterios generales del capítulo
│  │  ├─ Descenso de amplitud >60% o pérdida completa de señal = signo de aviso de perfusión
│  │  │  reducida
│  │  └─ Parámetros basados en frecuencia: enlentecimiento general, aumento de actividad
│  │     delta (0-4 Hz), o reducción >50% de la actividad rápida de fondo
│  └─ LOS SEIS CRITERIOS PUBLICADOS (Tabla 25.1) — conviene saber que NO coinciden
│     ├─ Jenkins: pérdida del 75-80% o más de amplitud equivale a pérdida completa de toda
│     │  la actividad EEG
│     ├─ Blume y Sharbrough (Mayo Clinic): reducción >75% de toda la actividad, en particular
│     │  de la rápida de 8-15 Hz, y/o aumento de dos veces o más de la actividad delta ≤1 Hz
│     ├─ Kearse: pérdida marcada o ausencia completa de frecuencias alfa y beta, predominio
│     │  de actividad delta con poca o ninguna theta, y aumento o descenso de amplitud
│     ├─ Craft: descenso >50% de la amplitud en la banda de 8-15 Hz (alfa rápida y beta lenta)
│     ├─ Nuwer: pérdida >50% de la amplitud global del EEG o de la actividad rápida, o
│     │  aumento >50% de la actividad lenta
│     └─ Mizrahi (ACNS): toda la actividad EEG progresivamente disminuida en amplitud,
│        aproximándose a la isoelectricidad
├─ EL PROBLEMA CENTRAL: LOS CAMBIOS SON INESPECÍFICOS
│  ├─ La mayoría de esos cambios NO son específicos de isquemia: alteraciones similares se
│  │  producen por cambios de profundidad anestésica o de concentración de los agentes
│  ├─ Consecuencia operativa: el nivel de anestesia debe mantenerse CONSTANTE durante los
│  │  momentos en que se esperan cambios de perfusión — solo así puede compararse el EEG con
│  │  su basal, que es el principio del índice de simetría cerebral TEMPORAL
│  └─ LA SOLUCIÓN ELEGANTE — comparar hemisferios en lugar de valores absolutos
│     ├─ A diferencia del efecto anestésico, que es global, los cambios de perfusión durante
│     │  una endarterectomía ocurren de forma UNILATERAL
│     ├─ Por tanto la comparación entre ambos hemisferios proporciona una señal de CONTROL
│     │  mayormente no afectada por los cambios de perfusión
│     ├─ Vale para el análisis basado en frecuencia, en amplitud y en patrón, y es el
│     │  principio del índice de simetría cerebral ESPACIAL
│     ├─ Asimetría del 15-20% se considera MODERADA; por encima del 20%, SEVERA
│     └─ La asimetría severa PERSISTENTE está estrechamente relacionada con ictus mayor
├─ EEG CUANTITATIVO — qué es cada gráfico y cuánto vale
│  ├─ CSA (compressed spectral array): basado en transformada de Fourier del EEG; muestra la
│  │  potencia (amplitud al cuadrado) de las frecuencias en un gráfico pseudotridimensional
│  │  de potencia frente a frecuencia frente a tiempo
│  ├─ DSA (density spectral array): los mismos datos en gráfico BIDIMENSIONAL, con la
│  │  potencia alta en colores cálidos (rojo y naranja) y la baja en fríos (azul y verde)
│  ├─ SEF95 (frecuencia de borde espectral 95): la frecuencia por debajo de la cual está
│  │  contenido el 95% de la potencia del EEG — la reducción máxima del análisis de potencia
│  └─ QUÉ DICEN LAS GUÍAS, que es lo que más importa
│     ├─ Tanto el EEG crudo como el cuantitativo se declaran "opción de práctica" para la
│     │  detección de isquemia cerebral durante endarterectomía
│     ├─ PERO el EEG CRUDO se clasificó como recomendación POSITIVA, con evidencia clase II
│     ├─ Y el EEG CUANTITATIVO se votó como recomendación NEGATIVA, con evidencia clase III
│     └─ Razón añadida: se ha postulado la POCA FIABILIDAD del EEG computarizado para
│        detectar eventos isquémicos LEVES, frente al EEG crudo multicanal
├─ ELECTROCORTICOGRAFÍA (ECoG) — la otra cara del EEG intraoperatorio
│  ├─ Es registro INTRACRANEAL directo de la corteza, usado en cirugía de epilepsia para
│  │  adaptar (tailor) la resección
│  ├─ Ventajas de señal frente al EEG de superficie
│  │  ├─ La actividad normal registrada tiene amplitud MUCHO MAYOR, a menudo de 100 a
│  │  │  1000 µV, frente a los 10-50 µV del EEG de scalp
│  │  ├─ No hay músculo cerca de los electrodos, así que el ECoG tiene en general MUCHO
│  │  │  MENOS artefacto que el EEG de superficie
│  │  └─ PERO los electrodos situados cerca de un VASO pueden mostrar artefacto de PULSO
│  │     significativo
│  ├─ Puede combinarse con estimulación cortical para mapeo funcional, y sirve además para
│  │  evaluar el estado anestésico del paciente y para detectar durante la estimulación la
│  │  aparición de actividad eléctrica anormal, como crisis electrográficas o focales
│  └─ ESTADO REAL DE LA EVIDENCIA — por qué las series no coinciden
│     ├─ Los resultados VARÍAN sustancialmente entre estudios, porque son grupos pequeños y
│     │  heterogéneos con técnicas quirúrgicas y de registro distintas
│     ├─ Algunos estudios muestran mejor resultado en pacientes con MENOS espigas
│     │  postresección; otros NO lo muestran
│     ├─ Esa discrepancia depende probablemente de CUATRO factores
│     │  ├─ 1. CUÁNDO se evalúa el resultado tras la cirugía: resecar todas las espigas
│     │  │  significativas puede influir más en la frecuencia de crisis en los primeros 6-24
│     │  │  meses que después
│     │  │  └─ Sería especialmente cierto si la recurrencia PRECOZ se debiera a resección
│     │  │     inadecuada y la TARDÍA a formación de redes neurales anormales generadas por
│     │  │     la propia cirugía
│     │  ├─ 2. TIPO DE LESIÓN resecada: la significación de las espigas corticales puede ser
│     │  │  MAYOR en cirugía lesional que en epilepsia mesial temporal clásica
│     │  │  ├─ Explicación propuesta: en las mesiales temporales las espigas de superficie
│     │  │  │  están DIRIGIDAS por anomalías de red de las estructuras mesiales, mientras que
│     │  │  │  en lesiones corticales las anomalías se registran directamente del área lesionada
│     │  │  └─ Lo apoya el hecho de que en las mesiales temporales registrar las espigas
│     │  │     postresección directamente del HIPOCAMPO, y no de la superficie temporal, sí
│     │  │     puede ayudar a adaptar la resección
│     │  ├─ 3. CARACTERÍSTICAS de las espigas postresección: ni siquiera todas las espigas
│     │  │  corticales son iguales
│     │  └─ 4. LOCALIZACIÓN: resecar espigas de regiones aparentemente normales, alejadas de
│     │     la zona epileptógena putativa, que son SÍNCRONAS con la actividad de esa zona —y
│     │     por tanto probablemente dirigidas por ella— puede NO mejorar el resultado
│     ├─ TÉCNICAS MÁS NUEVAS: oscilaciones de alta frecuencia (HFO), divididas en ripples de
│     │  80-250 Hz y fast ripples de 250-500 Hz **(el PDF extrae "8-250 Hz" para las ripples,
│     │  casi con seguridad un 80 truncado; verificar sobre el original)**
│     │  ├─ La presencia de fast ripples antes y después de la cirugía predijo MAL resultado
│     │  ├─ Adaptar la resección para eliminar las HFO, particularmente las de mayor
│     │  │  frecuencia, mejoró el resultado quirúrgico, y así lo confirma un metaanálisis de
│     │  │  más de 170 procedimientos con ECoG
│     │  └─ Pero el número pequeño de pacientes por estudio sigue limitando las conclusiones
│     │     sobre utilidad clínica, como señala una revisión Cochrane reciente
│     └─ En investigación: análisis de phase locking entre regiones, conectividad basada en
│        teoría de grafos, algoritmos de aprendizaje automático, e imagen óptica
│        intraoperatoria en tiempo real
├─ CAUSAS DE CAMBIO NO QUIRÚRGICO
│  ├─ CAMBIO DE PLANO ANESTÉSICO: el principal factor de confusión, porque MIMETIZA el
│  │  enlentecimiento isquémico → exige plano estable en los momentos críticos
│  ├─ Hipotermia
│  └─ Basal ya anormal, por ictus previo, hasta en el 40% de los pacientes, lo que añade
│     dificultad interpretativa desde el minuto cero
├─ TROUBLESHOOTING
│  ├─ Comparar HEMISFERIOS entre sí, no valores absolutos: es lo único que separa efecto
│  │  anestésico global de isquemia unilateral
│  ├─ Confirmar con el anestesiólogo que el plano no ha cambiado ANTES de interpretar un
│  │  enlentecimiento
│  ├─ El EEG cuantitativo es solo adyuvante: ante la duda, volver al EEG crudo multicanal
│  └─ En ECoG, artefacto rítmico en un electrodo concreto → sospechar proximidad a un vaso
├─ LIMITACIONES
│  ├─ Genera de forma continua grandes cantidades de datos crudos, que exigen interpretación
│  │  por un experto
│  ├─ Es sensible a los cambios corticales inducidos tanto por hipoperfusión como por
│  │  embolización, PERO la isquemia y los infartos embólicos de estructuras SUBCORTICALES, y
│  │  los infartos de zona limítrofe (watershed), pueden NO detectarse
│  ├─ Los cambios son inespecíficos, y la anestesia o la hipotermia dificultan la
│  │  interpretación
│  ├─ En ECoG: la correlación entre espigas residuales y resultado quirúrgico es inconsistente
│  │  entre series → es una herramienta de LOCALIZACIÓN, no una alarma de seguridad como el
│  │  EEG isquémico
│  └─ Solo informa de corteza: no dice nada de estructuras profundas
└─ Referencia
   └─ Deletis cap.25 (Malcharek/Schneider/Dinkel, "Carotid endarterectomy") §25.2.1
      pp.339-340 — EEG frente a PE, criterios de amplitud y frecuencia, Tabla 25.1 con los
      seis criterios publicados, inespecificidad y necesidad de plano constante, índices de
      simetría temporal y espacial con los umbrales 15-20% y >20%, CSA, DSA y SEF95
      (Fig. 25.3), clasificación de las guías para EEG crudo frente a cuantitativo,
      limitaciones · cap.32 ("Surgery for epilepsy") §32.4 pp.446-451 — historia de los
      registros corticales, estado de la ECoG clásica y los cuatro factores de discrepancia
      (Tabla 32.1), HFO y metaanálisis, §32.4.4 amplitudes de 100-1000 µV frente a 10-50 µV y
      artefacto de pulso, §32.5 consideraciones anestésicas · Deletis cap.19 (Bello et al.)
      p.— ECoG combinada con estimulación para valorar estado anestésico y crisis
      electrográficas
```
