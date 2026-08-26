---
codigo: PE-B5
titulo: Criterios de anormalidad y factores del sujeto
area: PPEE
bloque: B — Bases técnicas de registro
plantilla: D
estado: completo
---

# PE-B5 — Criterios de anormalidad y factores del sujeto

```
Criterios de anormalidad y factores del sujeto
├─ Definición y alcance
│  ├─ Llamar "anormal" a un PE exige dos cosas: un límite de normalidad construido con
│  │  método, y haber descartado antes que lo que se ve lo explique un factor del sujeto
│  ├─ Los factores del sujeto son la principal fuente de falsos positivos del laboratorio
│  │  de PE — más que la técnica
│  └─ Regla de oro que atraviesa el tema: las LATENCIAS INTERPICO son mucho más robustas
│     frente a los factores del sujeto que las latencias absolutas, y por eso son las
│     recomendadas para valorar anormalidad clínicamente relevante
├─ CÓMO SE CONSTRUYEN LOS DATOS NORMATIVOS
│  ├─ Es preferible obtenerlos en el propio laboratorio si se hace un volumen
│  │  significativo de estudios
│  │  ├─ Si se "toman prestados" de otra institución, es obligatorio replicar
│  │  │  instrumentación y técnica de registro lo más fielmente posible
│  │  ├─ El PEV es el caso extremo: sus normativos deben obtenerse SIEMPRE en el propio
│  │  │  laboratorio, porque varias variables del registro producen gran variabilidad
│  │  │  entre laboratorios
│  │  └─ El PEATC es el caso opuesto: si los normativos se recogen en un grupo de edad y
│  │     sexo similares y con la misma frecuencia de estimulación y los mismos filtros,
│  │     las latencias e IPL son extremadamente parecidas de un laboratorio a otro
│  ├─ Muestra: 30 o más sujetos normales, sin síntomas ni signos referidos al sistema
│  │  aferente responsable de ese PE
│  ├─ Se calcula media y desviación estándar (SD); el límite superior de latencia se fija
│  │  habitualmente en media + 2.5 SD o media + 3.0 SD
│  ├─ Estadística de UNA COLA: en clínica las latencias del extremo corto de la campana
│  │  no se consideran anormales, solo las largas son clínicamente relevantes
│  ├─ Con muestra muy grande (próxima a las características poblacionales), 2.0, 2.5 y
│  │  3.0 SD sobre la media incluyen aproximadamente el 97.7%, 99.4% y 99.9% de los
│  │  valores normales
│  │  └─ Con muestras pequeñas (≈30) esos porcentajes son algo menores
│  ├─ Problema de fondo: muestras normales distintas dan medias y SD ligeramente
│  │  distintas, así que "media + 2.5-3.0 SD" puede no reflejar con exactitud el límite
│  │  superior real de la población
│  └─ LÍMITES DE TOLERANCIA — la solución recomendada por la ACNS (2006)
│     ├─ Concepto (introducido por Shewhart en 1931): intervalo que incluye una proporción
│     │  determinada de la población total con un nivel de confianza dado
│     ├─ Tienen en cuenta la variabilidad de la media y la SD entre distintas muestras
│     │  tomadas de la misma población
│     ├─ En PE solo el límite SUPERIOR es clínicamente relevante → basta el límite de
│     │  tolerancia de UN SOLO LADO
│     ├─ Convenio habitual: límite de tolerancia del 99% con nivel de confianza de al
│     │  menos el 95%
│     ├─ Factor de tolerancia K de una cola (Tabla 1.1, adaptada de Lieberman 1957), para
│     │  confianza γ=0.95: n=10 → K 2.911 (tolerancia 95%) y 3.981 (99%) · n=20 → 2.396 y
│     │  3.295 · n=30 → 2.220 y 3.064 · n=50 → 2.065 y 2.863
│     ├─ Ejemplo trabajado: media de IPL I-V del PEATC 3.97 ms con SD 0.19 ms en 30
│     │  normales. Para n=30, confianza 95% y tolerancia 99%, K = 3.064 → límite =
│     │  3.97 + (3.064 × 0.19) = 4.54 ms
│     │  └─ Lectura correcta de ese número: el 99% de los valores poblacionales de IPL I-V
│     │     está por debajo de 4.54 ms, y de esa afirmación se tiene un 95% de confianza
│     ├─ Con muestras mayores (100 o más) el K es menor y el límite superior algo más corto
│     └─ ATAJO ÚTIL: para n=30 el K de una cola está cerca de 3, así que con 30 sujetos
│        media + 3 SD equivale al límite de tolerancia del 99% al 95% de confianza
├─ DOS ADVERTENCIAS ESTADÍSTICAS QUE SE INCUMPLEN A MENUDO
│  ├─ Los dos lados de un mismo individuo están CORRELACIONADOS: la latencia izquierda de
│  │  un componente no es independiente de la derecha
│  │  └─ Agrupar los valores de ambos lados infraestima ligeramente la SD. Lo correcto es
│  │     calcular media y SD de cada lado POR SEPARADO, o promediar los dos lados de cada
│  │     sujeto antes de promediar entre sujetos
│  └─ Las AMPLITUDES no siguen una distribución normal, así que media + 3 SD NO sirve para
│     ellas
│     ├─ Que la amplitud absoluta caiga fuera del rango normal del laboratorio constituye,
│     │  como mucho, una anormalidad "débil"
│     ├─ Criterio de amplitud habitual: asimetría interlado mayor del 50%
│     └─ En PEATC se usa en su lugar la RAZÓN de amplitudes V/I
├─ TIPOS DE ANORMALIDAD — marco general aplicable a las tres modalidades
│  ├─ 1. PROLONGACIÓN DE LATENCIA (absoluta o interpico)
│  │  ├─ Criterio clásico: prolongación de al menos 2.5-3.0 SD sobre la media
│  │  └─ Criterio probablemente mejor: prolongación más allá del límite de tolerancia del
│  │     99% al 95% de confianza
│  ├─ 2. AUSENCIA DE UN COMPONENTE OBLIGADO — se considera una anormalidad de amplitud
│  │  ├─ Puede deberse a disfunción del propio generador o a que el generador no recibe la
│  │  │  aferencia (deaferentación). Ejemplo: ausencia de respuesta cortical con
│  │  │  estimulación de tibial posterior puede ser lesión de corteza somatosensorial o
│  │  │  deaferentación de esa corteza
│  │  ├─ CONDICIÓN INDISPENSABLE: solo es diagnósticamente significativa si el estudio es
│  │  │  de calidad óptima, sin artefactos significativos, con los electrodos de registro
│  │  │  correctamente colocados y con estimulación periférica adecuada firmemente
│  │  │  establecida
│  │  └─ Cautela específica: los componentes subcorticales en general, y los cervicales y
│  │     lumbares en particular, están mal resueltos con frecuencia en un paciente
│  │     despierto, tenso e incapaz de relajarse — su ausencia NO puede tomarse como
│  │     anormalidad inequívoca
│  ├─ 3. REDUCCIÓN DE AMPLITUD
│  │  ├─ La amplitud absoluta tiene significado diagnóstico limitado por su marcada
│  │  │  variabilidad intersujeto
│  │  ├─ Una reducción del 50% en un lado se considera a menudo anormalidad "blanda"
│  │  └─ Solo es interpretable si los electrodos de registro están colocados
│  │     simétricamente y los nervios de ambos lados están estimulados de forma óptima
│  └─ 4. DIFERENCIA INTERLADO / INTERAURAL de latencias interpico, no explicada por
│     asimetría periférica documentada
├─ CRITERIOS DE ANORMALIDAD DEL PEATC (ACNS 2006) — los más fiables para disfunción
│  retrococlear
│  ├─ Ausencia de TODAS las ondas I a V no explicada por hipoacusia extrema demostrada por
│  │  audiometría formal
│  ├─ Ausencia de todas las ondas posteriores a la I, a la II o a la III
│  ├─ Prolongación anormal de las IPL I-III, III-V o I-V
│  │  └─ Las IPL I-III o III-V pueden estar anormalmente prolongadas incluso con IPL I-V
│  │     normal
│  ├─ Disminución anormal de la razón de amplitud V/I, sobre todo si se acompaña de otras
│  │  anormalidades
│  ├─ Aumento anormal de las diferencias interaurales de las IPL I-III, III-V e I-V, no
│  │  explicado por disfunción de oído medio o interno unilateral o asimétrica demostrada
│  │  por pruebas audiométricas apropiadas
│  └─ Umbrales prácticos orientativos del capítulo
│     ├─ IPL I-III >2.5 ms, III-V >2.25 ms o I-V >4.6 ms → altamente sospechoso de
│     │  anormalidad de latencia
│     ├─ Diferencia interaural >0.4 ms en esas IPL → anormalidad, si la audición de los
│     │  dos oídos no es muy asimétrica
│     ├─ Razón V/I por debajo de 2/3 (0.66) con estimulación a 70 dB SL → anormalidad de
│     │  amplitud. Es fiable porque casi todas las alteraciones auditivas periféricas
│     │  disminuyen la onda I y por tanto AUMENTAN la razón V/I; una razón V/I disminuida
│     │  sugiere alteración pontomesencefálica, sobre todo si se acompaña de latencia
│     │  prolongada de la onda V
│     │  ├─ A 70 dB SL, solo el 10% de los oídos normales tienen onda I mayor que la V
│     │  ├─ La razón V/I varía con la intensidad efectiva y con la forma del audiograma:
│     │  │  solo puede usarse si los umbrales al clic son más o menos normales. Ante la
│     │  │  duda, hay que pedir audiograma
│     │  └─ Si la onda V está reducida en amplitud pero con latencia normal, se recomienda
│     │     interpretación conservadora
│     ├─ Onda I simétrica en latencia en ambos oídos pero III y/o V prolongadas, con IPL
│     │  I-III y/o I-V prolongadas → sugiere fuertemente conducción anormal en la vía
│     │  auditiva central; la I-III localiza en puente caudal y la III-V en tronco rostral
│     └─ Si pese a todos los intentos la onda I no queda bien delineada, con latencia
│        absoluta de la onda V menor de 6.0 ms se puede excluir con seguridad un defecto
│        de conducción central
├─ FACTOR — Edad
│  ├─ PEATC en el neonato
│  │  ├─ Antes de las 30 semanas de edad concepcional (EC) los PEATC varían mucho y solo
│  │  │  se obtiene respuesta consistente en el 50% de los neonatos con clics de 60 dBHL;
│  │  │  subiendo a 70 dBHL o más a veces se consigue
│  │  │  └─ La ausencia no se debe a hipoacusia (con esas mismas intensidades sí se
│  │  │     obtienen respuestas corticales tardías) sino a FALTA DE SINCRONIZACIÓN de las
│  │  │     vías auditivas del tronco
│  │  ├─ Entre 30 y 40 semanas EC los componentes se hacen más consistentes y
│  │  │  reproducibles: I, III y V identificables, II y IV variables. Todas las latencias
│  │  │  bajan al aumentar la EC, con máximo cambio en la onda V; la IPL I-V baja de
│  │  │  6.05 ms a las 30-32 semanas a 4.92 ms a término
│  │  └─ En el neonato a término: I, III y V bien resueltas, II/IV/VI variables o no
│  │     registrables; todas las latencias e IPL más largas que en el adulto (IPL I-V de
│  │     media 0.9-1.4 ms más larga); amplitud de la onda I generalmente MAYOR que en el
│  │     adulto → usar la razón V/I con cautela en esta edad
│  ├─ PEATC en la maduración postnatal
│  │  ├─ La latencia absoluta de la onda I alcanza el valor adulto a los 3-6 meses, cuando
│  │  │  madura del todo el aparato auditivo periférico
│  │  ├─ Entre los 6 y los 12 meses hay un ligero AUMENTO de la latencia de la onda I, el
│  │  │  llamado "otitis bulge", atribuido a la alta incidencia de otitis media a esa edad
│  │  ├─ Las latencias de III y V y las IPL alcanzan valores adultos más tarde,
│  │  │  habitualmente al final del segundo año; a partir de los 2 años son similares a
│  │  │  las del adulto
│  │  └─ No hay diferencias por sexo en neonatos ni niños: aparecen solo después de los
│  │     8-10 años
│  ├─ PEATC en el anciano: efecto variable. Las latencias de pico individuales se retrasan
│  │  en algunos ancianos, pero la IPL I-V permanece inalterada → el envejecimiento tiene
│  │  muy poco efecto sobre la conducción auditiva CENTRAL. La prolongación de las
│  │  latencias absolutas se debe probablemente al retraso de la onda I por la presbiacusia
│  ├─ PESS en el niño — dos factores en COMPETENCIA
│  │  ├─ (a) Maduración de las estructuras neurales (mielinización, desarrollo sináptico)
│  │  │  → disminución progresiva de latencia y aumento de amplitud, sobre todo en
│  │  │  lactancia y primera infancia
│  │  ├─ (b) Crecimiento corporal y alargamiento de las vías desde los 5-6 años en
│  │  │  adelante → aumento de las latencias
│  │  ├─ La respuesta cortical bien resuelta puede no registrarse hasta en un TERCIO de
│  │  │  los neonatos a término, mientras N9 y N13 están más consistentemente presentes;
│  │  │  hacia los 2 meses ya se identifican todas las ondas obligadas
│  │  ├─ Serie de 240 niños de 1 día a 18 años: las latencias de todos los componentes
│  │  │  obligados disminuyen desde el nacimiento hasta los 4 años, y antes para los
│  │  │  componentes periféricos (N9 y N13), porque la maduración periférica se completa
│  │  │  primero
│  │  │  ├─ N9: media 6.4 ms al nacer; N13: media 9.8 ms al nacer. Ambas bajan durante el
│  │  │  │  primer año y se mantienen bastante estables hasta los 4-5 años
│  │  │  ├─ N20 cortical: media 29.5 ms al nacer; baja rápidamente durante los primeros
│  │  │  │  6 meses y luego más lentamente hasta los 4-5 años
│  │  │  └─ A partir de los 4-5 años las latencias de todos los componentes empiezan a
│  │  │     AUMENTAR con el crecimiento corporal, alcanzando valores adultos a mitad de la
│  │  │     segunda década
│  │  └─ Intervalos: el N9-N13 permanece estable en lactancia e infancia. El N13-N20
│  │     (conducción central) tiene cambio unidireccional: parte de 14-25 ms a término,
│  │     baja rápido el primer año y más lentamente después, y alcanza el valor adulto con
│  │     límite superior de 7 ms entre los 5 y los 10 años
│  │     └─ Refuerza la regla: en niños mayores hay que usar IPL, porque ya tienen valores
│  │        similares a los del adulto
│  ├─ PESS en el anciano: poco efecto sobre la latencia absoluta del N20 de mediano,
│  │  aunque algunos estudios describen latencias prolongadas en el PESS de tibial. Hay
│  │  evidencia de enlentecimiento periférico (N22 retrasado) y además posible
│  │  enlentecimiento central
│  └─ PEV: la latencia alcanza valores de adulto AL AÑO con cuadros grandes (~1°) y a los
│     5 AÑOS con cuadros pequeños (15′). En el adulto, el P100 disminuye entre los 5 y los
│     19 años, es estable de los 20 a los 59 y aumenta ligeramente a partir de los 60 sin
│     afectarse significativamente la amplitud
├─ FACTOR — Sexo
│  ├─ PEATC: latencias de las ondas III y V significativamente MÁS CORTAS en la mujer, de
│  │  forma más consistente para la onda V
│  │  ├─ La IPL III-V no difiere entre sexos, pero I-III e I-V sí son significativamente
│  │  │  más cortas en la mujer — la I-V hasta 0.2 ms más corta con estimulación a
│  │  │  60-70 dB SL
│  │  ├─ La amplitud, sobre todo la de la onda V, es un 40-50% MAYOR en la mujer
│  │  ├─ Por debajo de los 8 años no hay diferencias significativas por sexo en las IPL
│  │  └─ Algunos autores recomiendan por ello mantener valores normales separados por sexo
│  ├─ Mecanismo aceptado: el menor tamaño craneal y la consiguiente menor longitud de la
│  │  vía neural explican la mayor parte de las diferencias por sexo en el adulto
│  │  └─ Factor adicional: la temperatura corporal. La temperatura central más alta de la
│  │     mujer acorta las IPL; 1 °C de temperatura oral puede bastar para explicar 0.2 ms
│  │     de diferencia en la latencia de la onda V
│  └─ PEV: diferencias probablemente menores — P100 algo más corto en mujeres (~4 ms) y
│     amplitud algo mayor (~5 µV), atribuido también a menor tamaño craneal y vía visual
│     más corta
├─ FACTOR — Temperatura
│  ├─ PEATC e hipotermia CENTRAL
│  │  ├─ Al bajar la temperatura corporal central aumentan las latencias de TODOS los
│  │  │  componentes y también las IPL → la hipotermia puede producir alteraciones del
│  │  │  PEATC similares a las de una lesión estructural central
│  │  ├─ Serie de 10 pacientes de cirugía cardíaca abierta con enfriamiento de 36 °C a
│  │  │  20 °C: los PEATC eran siempre registrables a 23 °C o más, y la onda V persistía a
│  │  │  menudo hasta los 20 °C
│  │  ├─ La relación temperatura-latencia NO es lineal: se describe mejor por una curva
│  │  │  exponencial
│  │  ├─ Cifra clave: las latencias de I, III y V y la IPL I-V aumentan aproximadamente un
│  │  │  7% por cada 1 °C de descenso, y se DUPLICAN en torno a los 26 °C
│  │  ├─ Factor de corrección práctico: 0.2-0.3 ms por cada 1 °C de descenso por debajo de
│  │  │  37 °C — estimación aproximada útil en pacientes propensos a hipotermia leve, como
│  │  │  en monitorización intraoperatoria o en coma
│  │  ├─ Efecto sobre la amplitud, más complejo: puede haber un aumento INICIAL al bajar
│  │  │  de 37 °C a 25 °C, seguido de descenso progresivo y desaparición final
│  │  └─ El efecto de la hipertermia sobre el PEATC no está bien estudiado
│  └─ PESS y extremidad fría
│     ├─ Un miembro hipotérmico conduce más lento → latencia prolongada del N9 o del N7 y,
│     │  en consecuencia, de todos los componentes centrales que vienen detrás
│     ├─ Las IPL permanecen NORMALES salvo hipotermia profunda con temperatura corporal
│     │  central por debajo de 30 °C
│     └─ Buena práctica: si las extremidades están frías al tacto, calentarlas envolviendo
│        con toallas calientes ANTES de registrar el PESS
├─ FACTOR — Talla y longitud del miembro
│  ├─ Las latencias absolutas del PESS están directamente relacionadas con la talla y la
│  │  longitud del miembro; las IPL NO se afectan
│  ├─ Por eso las IPL son más útiles: eliminan la variación ligada a la talla
│  └─ Cuando los componentes periféricos no son registrables hay que apoyarse solo en las
│     latencias absolutas, y eso obliga a un grado extra de cautela en la interpretación
├─ FACTOR — Estado del sujeto, sueño y fármacos
│  ├─ PEATC: NO se afectan por el sueño ni por cambios en la atención, ni por el alcohol
│  │  ni por fármacos sedantes/hipnóticos — es lo que permite sedar al paciente para
│  │  obtener un buen registro
│  └─ PESS: cambios sutiles pero definidos en la morfología y la latencia del N20
│     ├─ En alerta plena hay múltiples inflexiones superpuestas al ascenso inicial del
│     │  N20, que desaparecen durante el sueño
│     ├─ La latencia del N20 se prolonga una media de 0.6 ms en sueño no REM fase II
│     └─ El efecto es más marcado en lactantes y niños, y puede explicar en parte que el
│        componente cortical no sea registrable en neonatos y lactantes, en los que el
│        registro se hace habitualmente durante el sueño
├─ FACTOR — Déficit auditivo periférico (PEATC)
│  ├─ Principio general: el déficit auditivo periférico tiene el mismo efecto que
│  │  disminuir la intensidad del clic — aumenta la latencia de todos los componentes
│  │  obligados
│  ├─ Lo decisivo para el neurólogo: las IPL se afectan muy poco, si acaso nada, por
│  │  déficits conductivos, neurosensoriales o mixtos. Con todos los componentes bien
│  │  identificados, las IPL siguen siendo utilizables con confianza para valorar la vía
│  │  auditiva central
│  ├─ Hipoacusia NEUROSENSORIAL, patrón característico
│  │  ├─ (a) Prolongación de la latencia de la onda I y de todos los componentes
│  │  │  siguientes
│  │  ├─ (b) Prolongación MÁS SEVERA de la onda I, de modo que el intervalo I-V se ACORTA;
│  │  │  con pérdida más grave la onda I puede desaparecer
│  │  ├─ (c) Razón V/I AUMENTADA, por descenso de amplitud de la I con preservación
│  │  │  relativa de la V
│  │  └─ (d) Diferencia de latencia relativamente mayor entre las respuestas a clics de
│  │     condensación y de rarefacción
│  ├─ Hipoacusia CONDUCTIVA: efecto no muy distinto del anterior; equivale a reducir la
│  │  intensidad, porque la energía sonora llega disminuida a la cóclea
│  │  └─ Subir la intensidad del estímulo lo suficiente (por la cuantía de la pérdida)
│  │     tiende a NORMALIZAR los PEATC
│  └─ En pacientes con deterioro auditivo grave se recomienda obtener audiograma ANTES de
│     registrar e interpretar los PEATC por un problema neurológico
├─ FACTOR — Intensidad del estímulo (PEATC)
│  ├─ Las latencias absolutas de todos los picos AUMENTAN al bajar la intensidad del clic,
│  │  aproximadamente 0.03 ms por dB
│  │  └─ La onda V pasa de 5.5 ms a 80 dB HL a 8.2 ms a 10 dB HL (umbral auditivo habitual)
│  ├─ Como todas las latencias aumentan por igual, las IPL cambian muy poco; a veces la
│  │  prolongación es mayor para la onda I que para las tardías, lo que produce un ligero
│  │  ACORTAMIENTO de la IPL I-V
│  ├─ Que las IPL no cambien con la intensidad es de importancia capital, porque la
│  │  intensidad EFECTIVA es difícil de controlar: depende del ajuste del auricular, la
│  │  forma del conducto auditivo externo, la presencia de cerumen y el estado de la
│  │  membrana timpánica
│  └─ Efecto sobre la morfología, útil para identificar picos: al bajar la intensidad se
│     pierden primero las ondas II, IV y VI; después desaparecen la III y la I; la onda V
│     es la última y puede seguir siendo discernible con intensidades tan bajas como
│     10 dB SL
├─ FACTOR — Agudeza visual, refracción y ojo (PEV)
│  ├─ Con agudeza de 20/200 o mejor y sin disminución de la iluminación retiniana, hay
│  │  poco efecto sobre el PEV obtenido con cuadro grande (50′)
│  ├─ Los cuadros pequeños (15′) pueden verse borrosos y dar un PEV de menor amplitud
│  ├─ Con error refractivo grave y agudeza <20/200 hay descenso significativo de la
│  │  amplitud del P100 pero cambio mínimo de la latencia
│  ├─ La miosis grave disminuye la amplitud; con pupilas muy asimétricas puede haber
│  │  diferencia interocular de amplitud y/o latencia (una unidad logarítmica de
│  │  diferencia puede alterar unos 10 ms la latencia del P100)
│  └─ Movimientos oculares, nistagmo, opacidades corneales o del cristalino y desenfoque
│     intencionado disminuyen la amplitud con poco efecto sobre la latencia del P100
├─ Aplicación práctica — orden de razonamiento ante un PE "anormal"
│  ├─ 1. ¿Es un registro técnicamente óptimo, con réplicas superpuestas y estimulación
│  │  demostrada? Si no, no hay anormalidad que interpretar
│  ├─ 2. ¿Está la anormalidad en las IPL o solo en las latencias absolutas? Si solo en las
│  │  absolutas, buscar factor del sujeto: edad, talla, temperatura, déficit periférico,
│  │  intensidad efectiva
│  ├─ 3. ¿La asimetría de amplitud se explica por colocación asimétrica de electrodos,
│  │  estimulación desigual, anisocoria o hipoacusia unilateral?
│  └─ 4. Solo entonces, comparar con el límite de tolerancia del laboratorio
├─ Errores y confusiones frecuentes
│  ├─ Aplicar media + 3 SD a las AMPLITUDES, que no siguen distribución normal
│  ├─ Agrupar los valores de ambos lados al construir los normativos, infraestimando la SD
│  ├─ Llamar anormal la ausencia de un componente subcortical en un paciente tenso y
│  │  despierto
│  ├─ Interpretar unas IPL prolongadas en un neonato o un lactante con normativos de
│  │  adulto
│  ├─ Usar la razón V/I sin comprobar antes que los umbrales auditivos son normales, o
│  │  usarla en un neonato, donde la onda I es de mayor amplitud que en el adulto
│  ├─ Atribuir a lesión de tronco unas latencias prolongadas en un paciente hipotérmico
│  │  (o unas latencias prolongadas de PESS en un miembro frío)
│  └─ Importar normativos de PEV de otro laboratorio
├─ Limitaciones
│  ├─ Los límites estadísticos solo definen lo infrecuente, no lo patológico: un valor
│  │  fuera del límite de tolerancia del 99% aparece por definición en un 1% de los
│  │  normales
│  ├─ Los normativos son válidos solo para los parámetros con los que se obtuvieron:
│  │  cualquier cambio de filtros, intensidad, frecuencia o monitor obliga a rehacerlos
│  ├─ Los factores del sujeto pueden coexistir y sumarse (anciano + hipoacusia +
│  │  extremidad fría), y no hay forma de corregirlos todos con un factor único
│  └─ La normalidad de un PE nunca excluye enfermedad: solo dice que la vía aferente
│     estudiada conduce dentro de los límites de esa muestra normal
└─ Referencia
   └─ Markand2020 cap.1 pp.12-14 (datos normativos, SD, límites de tolerancia, Tabla 1.1,
      correlación entre lados, amplitudes) · cap.2 pp.34-43 (criterios de anormalidad del
      PEATC, criterios ACNS 2006, Tabla 2.4, factores del sujeto Tablas 2.5-2.6, sexo,
      edad, temperatura, audiograma, intensidad del clic) · cap.4 pp.164-168 (factores del
      sujeto y técnicos del PESS, criterios de anormalidad, conducción central) · cap.3
      pp.102-106 (factores del sujeto en el PEV, Tabla 3.7)
```
