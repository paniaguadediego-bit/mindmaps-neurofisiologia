---
codigo: B2
titulo: Columna — degenerativa / instrumentación
area: IONM
bloque: B — Contextos quirúrgicos
plantilla: B
estado: completo
---

# B2 — Columna — degenerativa / instrumentación

> Pendiente: sin dato cuantitativo propio en las fuentes del proyecto sobre el riesgo
> específico de la retracción de raíz (el riesgo descrito se asocia al abordaje y al
> tornillo, no a la retracción en sí), ni sobre protección ocular y de plexo braquial en
> prono.

```
Columna — degenerativa / instrumentación
├─ LA PREGUNTA PREVIA: ¿monitorizar o no?
│  ├─ Aquí la indicación NO es automática, y el debate es real. El gradiente publicado
│  │  ├─ Descompresión lumbar simple → INNECESARIA
│  │  ├─ Mielopatía cervical espondilótica → OPCIÓN, con series publicadas de cirugía SIN
│  │  │  monitorización
│  │  └─ Deformidad, tumor intramedular y fusión intersomática lateral → ESTÁNDAR DE CUIDADO
│  ├─ El criterio que ordena el gradiente: la monitorización es atractiva cuando existe la
│  │  posibilidad de REVERTIR la maniobra que causó el cambio, es decir cuando el cambio es
│  │  "arreglable"
│  ├─ Donde no hay reversión posible ni intervención directa —descompresión pura o fusión
│  │  lumbar simple sin corrección de deformidad— no está respaldada por la evidencia ni por
│  │  las guías, y puede incluso afectar ADVERSAMENTE el curso quirúrgico por falsos positivos
│  ├─ Hay debate sobre si tiene valor SABER de antemano que la lesión ya ha ocurrido, pero el
│  │  cirujano debe entender el contexto del cambio y si existe una solución estructural
│  └─ Aviso sobre la literatura: hay sesgo considerable según la formación y las opiniones
│     académicas de quien la produce, y el asunto tiene implicaciones legales significativas
├─ COSTE-EFECTIVIDAD — la evidencia económica que ordena el debate de indicación
│  ├─ Por qué este tema y no otro: en columna degenerativa e instrumentación es donde la
│  │  indicación se discute de verdad, y donde la presión de los pagos "empaquetados" —que
│  │  incluyen todos los servicios asociados a la cirugía— va a llevar a suprimir lo que no
│  │  se considere necesario para hacer la operación
│  ├─ EL VOCABULARIO, PORQUE LOS CUATRO TIPOS DE ANÁLISIS NO SON INTERCAMBIABLES
│  │  ├─ ANÁLISIS DE COSTE-EFECTIVIDAD (CEA): marco general. Diferencia de costes dividida
│  │  │  entre diferencia de resultados en salud, entre la intervención y su comparador
│  │  ├─ COSTE-CONSECUENCIA (CCA): compara el coste con la capacidad de aportar UN beneficio
│  │  │  concreto o evitar UN resultado adverso concreto. Es análogo a un número necesario a
│  │  │  tratar, expresado como coste monetario por unidad de beneficio. Muy específico, pero
│  │  │  inútil para comparar intervenciones con beneficios distintos
│  │  ├─ COSTE-BENEFICIO (CBA): igual estructura, pero MONETIZA el beneficio en salud —
│  │  │  costes sanitarios directos evitados, más indirectos como salarios y prestaciones
│  │  │  perdidos, absentismo, presentismo, cuidadores y desplazamientos. El resultado es un
│  │  │  coste (positivo) o un ahorro (negativo) frente al comparador
│  │  └─ COSTE-UTILIDAD (CUA): mide el beneficio en UTILIDAD de salud, escala de 0 (muerte) a
│  │     1 (salud perfecta), multiplicada por tiempo → AVAC (año de vida ajustado por
│  │     calidad, QALY). Es lo que permite comparar iniciativas de gasto entre patologías
│  │     distintas, y lo que usa el NICE británico
│  │     └─ Umbral de disposición a pagar de referencia: 20.000-30.000 libras por AVAC en el
│  │        Reino Unido, 50.000 dólares por AVAC en EEUU
│  ├─ CÓMO SE CONSTRUYE UN MODELO Y POR QUÉ LA MIO ENCAJA EN ÁRBOL DE DECISIÓN
│  │  ├─ ÁRBOL DE DECISIÓN: nodo de decisión inicial (usar MIO o no) → nodos de azar → nodos
│  │  │  terminales donde se acumulan los costes. Bueno con pocos eventos y horizontes cortos
│  │  ├─ MODELO DE MARKOV: representa transiciones entre estados de salud (normal, enfermo,
│  │  │  muerte), bidireccionales, con información actuarial de esperanza de vida. Bueno para
│  │  │  horizontes largos, hasta toda la vida del paciente
│  │  ├─ La MIO es una intervención PUNTUAL en el tiempo, lo que la hace idónea para el árbol
│  │  │  en el postoperatorio inmediato; se le añaden nodos de Markov para proyectar a largo
│  │  │  plazo
│  │  ├─ La PERSPECTIVA y el HORIZONTE TEMPORAL cambian el resultado: el hospital y el
│  │  │  cirujano miran el postoperatorio inmediato, la aseguradora 2-3 años (lo que dura la
│  │  │  póliza), y el paciente y el gestor de políticas miran toda la vida
│  │  └─ La incertidumbre se testa con análisis de sensibilidad probabilístico (simulación de
│  │     Monte Carlo), que da "intervalos de incertidumbre" análogos a los intervalos de
│  │     confianza
│  ├─ LA ECUACIÓN DE EFECTIVIDAD, que es el esqueleto de todo modelo de MIO
│  │  ├─ P(evento adverso) = riesgo basal de la cirugía (BSR) × sensibilidad de la MIO ×
│  │  │  efectividad de las acciones tomadas tras la alerta (EoA)
│  │  ├─ Debilidad 1 — el BSR es difícil de cuantificar: la revisión sistemática de Fehlings
│  │  │  sobre series con MIO multimodal daba un 5%, sustancialmente MÁS ALTO que las grandes
│  │  │  series de cirujanos y que los datos administrativos. La definición de "déficit"
│  │  │  abarca desde adormecimiento hasta parálisis, y las bases retrospectivas
│  │  │  infranotifican complicaciones
│  │  ├─ Debilidad 2 — se asume MIO multimodal, cuando en la práctica la preferencia del
│  │  │  cirujano, la anestesia sin bloqueo neuromuscular o las dificultades técnicas pueden
│  │  │  impedir obtener MEP, bajando la sensibilidad real
│  │  ├─ Debilidad 3 — los falsos positivos NO tienen consecuencia en el modelo, porque no
│  │  │  hay evidencia de que causen complicaciones neurológicas; pero interrumpir el caso
│  │  │  para troubleshooting o incluso abortarlo sí tiene coste para el paciente
│  │  └─ Debilidad 4 — el EoA descansa en UN SOLO estudio alemán: de 84 cirugías con alerta,
│  │     la mitad fueron atendidas por el equipo y de esas 22 de 42 no tuvieron déficit,
│  │     frente al 100% de déficit en las 42 sin respuesta a la alerta. Mezclaba columna con
│  │     intracraneal y evaluaba SEP y respuestas auditivas de tronco, no MEP ni EMG — pero
│  │     sigue siendo el único estudio prospectivo con comparador sobre qué se gana actuando
│  ├─ LAS CIFRAS DE LOS MODELOS
│  │  ├─ CCA: coste de evitar UN déficit neurológico en cirugía electiva genérica de columna
│  │  │  = 63.387 dólares (USD 2009; IU 95% 61.939-64.836), con riesgo basal en torno al 5% y
│  │  │  un coste de MIO de 1.535 dólares por cirugía. Los parámetros más influyentes fueron
│  │  │  el riesgo basal y la tasa de prevención tras la alerta, NO el coste de la MIO
│  │  ├─ CBA con horizonte de por vida: 35.325 dólares de coste medio con MIO frente a 58.514
│  │  │  sin ella → AHORRO medio de 23.189 dólares. Tres puntos de paridad de coste: riesgo
│  │  │  basal del 0,3%, tasa de prevención tras alerta del 14,2%, o coste de MIO de 8.793
│  │  │  dólares
│  │  └─ CUA en columna CERVICAL, con riesgo basal del 0,3% tomado de una serie de más de
│  │     4.000 casos en 10 años y caso base de tetraparesia C5-C8 en un paciente de 50 años:
│  │     la MIO resultó NEUTRA en coste a lo largo de la vida (−23 dólares), con ganancia
│  │     significativa de utilidad (+0,009) y un coste por AVAC de −2.507 dólares. Todas las
│  │     réplicas quedaron por debajo del umbral de 50.000 dólares por AVAC
│  ├─ LOS ESTUDIOS DE "BIG DATA" — por qué se contradicen entre sí
│  │  ├─ Su promesa: con muestras de miles o millones, los datos administrativos pueden
│  │  │  detectar diferencias en desenlaces muy raros, por debajo del 1%, y con datos del
│  │  │  mundo real en lugar de un ensayo
│  │  ├─ Sus límites estructurales: la identificación de la cohorte depende de una
│  │  │  codificación diagnóstica y de procedimiento exacta, que no puede validarse contra la
│  │  │  historia porque los datos vienen anonimizados; solo se puede ajustar por la variación
│  │  │  OBSERVADA, sin tensión arterial ni radiología; y falta granularidad para saber la
│  │  │  calidad real de la monitorización o la cualificación de quien la hizo
│  │  ├─ LOS QUE NO ENCONTRARON BENEFICIO
│  │  │  ├─ Base MarketScan, cirugía de un solo nivel: sin reducción de complicaciones
│  │  │  │  neurológicas durante el ingreso y con 2.859-3.842 dólares MÁS de gasto. El
│  │  │  │  emparejamiento por propensión excluyó a la mayoría de los controles y los
│  │  │  │  subanálisis redujeron aún más la potencia
│  │  │  ├─ Nationwide Inpatient Sample 2007-2011: eligió como desenlace la lesión iatrógena
│  │  │  │  de raíz, que apareció solo 20 veces en más de 400.000 cirugías — es decir, 1 de
│  │  │  │  cada 20.000. El estudio no tenía potencia para eso
│  │  │  └─ 15.395 discectomías cervicales anteriores con fusión (2007-2014): sin diferencia
│  │  │     en la tasa BRUTA de lesión neurológica a 30 días entre los 2.627 con MIO y el
│  │  │     resto (0,23% frente a 0,27%) — pero sin ninguna regresión ni ajuste estadístico
│  │  └─ LOS QUE SÍ
│  │     ├─ NIS 2007-2012, cirugía electiva no compleja: la MIO se asoció a reducción global
│  │     │  de complicaciones neurológicas codificadas al alta (0,8% frente a 1,4%), robusta
│  │     │  en regresión logística multivariable (OR 0,6; IC 95% 0,47-0,76). Los cargos
│  │     │  hospitalarios fueron un 9% mayores con MIO, pero la estancia se redujo un 10%
│  │     │  (0,3 días)
│  │     └─ El más granular: columna cervical de un nivel a lo largo de 4 años, controlando
│  │        mielopatía preoperatoria y servicios auxiliares del hospital, con seguimiento a un
│  │        año → coste MAYOR en el ingreso índice (+1.229 dólares) pero MENOR en el año
│  │        siguiente (−1.615), con un neto de −387 dólares no significativo; reducción
│  │        RELATIVA del 80% de complicaciones neurológicas (0,4% absoluto al año), reducción
│  │        de reingresos (2,1% a 30 días) y de uso de opioides (1,7% al año)
│  │        └─ Hipótesis de los autores, que es la lectura interesante: la MIO es uno de un
│  │           conjunto de servicios intrahospitalarios que en bloque suben el coste, pero
│  │           solo ella se asocia a mejor resultado. Y alargar el horizonte captura déficits
│  │           como la radiculopatía C5 iatrógena o la lesión del recurrente laríngeo, que
│  │           pueden no codificarse bien al alta
│  └─ LA EQUIPOISE — por qué no hay ensayos aleatorizados y por qué el argumento ético cojea
│     ├─ La ausencia de ensayos aleatorizados sigue siendo el obstáculo mayor para determinar
│     │  la eficacia de la MIO
│     ├─ La objeción ética habitual —crear un grupo control privado de un servicio que puede
│     │  hacer la cirugía más segura— queda DESMENTIDA por la práctica real: en ninguno de los
│     │  estudios de datos administrativos el uso de MIO superó el 30% de las cirugías
│     │  elegibles
│     ├─ Los ensayos clínicos PRAGMÁTICOS pueden ser el camino para resolver lo más espinoso:
│     │  la capacidad real de prevenir déficits dada una alerta
│     └─ Lo que además haría falta medir y hoy no se mide: el efecto de los falsos positivos
│        en prolongar o abortar cirugías, el efecto de la MIO sobre la responsabilidad civil
│        del cirujano, y la contribución por separado de cada modalidad (EMG, SEP y MEP)
├─ MODALIDADES COMBINADAS
│  ├─ SEP + MEP transcraneal + EMG libre y estimulado — el mismo estándar multimodal que en
│  │  cirugía de deformidad
│  ├─ El SEP solo evalúa una porción pequeña de los fascículos medulares y no cubre bien los
│  │  tractos ANTERIORES; el MEP da evidencia de disrupción de esos tractos en segundos o un
│  │  par de minutos
│  ├─ El EMG ESTIMULADO de tornillo pedicular es la modalidad con más evidencia acumulada
│  │  específicamente en este contexto
│  └─ El EMG LIBRE aislado tiene pobre sensibilidad para la lesión de raíz y una tasa
│     significativa de falsos negativos: no sustituye al estimulado
├─ FASES DEL PROCEDIMIENTO
│  ├─ Exposición → colocación de tornillos pediculares → descompresión (laminectomía o
│  │  foraminotomía) con o sin osteotomía → artrodesis o fusión intersomática con cage
│  │  └─ Mismo esquema general que en deformidad, pero SIN una fase mayor de realineamiento
│  │     — y esa ausencia es justamente la que cambia el valor de monitorizar
│  └─ FUSIÓN INTERSOMÁTICA LATERAL TRANSPSOAS (XLIF/DLIF), técnica de principios de los 2000
│     ├─ Qué gana: aumenta rápidamente la altura foraminal y coloca un injerto intersomático
│     │  grande en varios niveles lumbares, con descompresión indirecta, evitando un abordaje
│     │  posterior amplio y la manipulación nerviosa dentro del canal
│     └─ Qué arriesga: usa un canal de trabajo A TRAVÉS DEL PSOAS, donde quedan expuestos a
│        lesión elementos del plexo lumbosacro y particularmente el NERVIO FEMORAL
├─ RIESGO NEUROLÓGICO ESPECÍFICO
│  ├─ La colocación de tornillos pediculares implica riesgo de lesionar raíces espinales y
│  │  posiblemente la médula: SIN monitorización, las incidencias publicadas de lesión
│  │  neurológica van del 1% al 11%, y otros factores pueden elevar la tasa de complicaciones
│  │  hasta el 40%
│  ├─ Abordaje transpsoas: aun con monitorización atenta, las tasas de déficit sensitivo y
│  │  motor TRANSITORIO son del 20-25%, y la mayoría se resuelven al año
│  ├─ Radiculopatía por retracción de raíz durante la descompresión **(verificar — sin dato
│  │  cuantitativo propio en estas fuentes)**
│  ├─ CAMBIO DE RIESGO POR NIVEL: en la región torácica y cervical el riesgo deja de ser solo
│  │  radicular y pasa a ser MEDULAR — un tornillo torácico desplazado medialmente puede
│  │  producir lesión de la médula, no solo de una raíz
│  └─ La fluoroscopia intraoperatoria es de uso común, pero tiene problemas en forma de
│     falsos positivos y falsos negativos: los métodos neurofisiológicos son MÁS EFECTIVOS
│     que las técnicas de imagen para guiar y evaluar la colocación del tornillo pedicular
├─ POSICIONAMIENTO
│  ├─ Prono estándar
│  ├─ MIO DE PREPOSICIONAMIENTO, aplicable cuando hay inestabilidad asociada —por ejemplo
│  │  degenerativa con listesis o estenosis grave que exige reducción antes de fijar
│  │  ├─ Se establecen los basales tras inducir la anestesia, frecuentemente con el paciente
│  │  │  todavía en la camilla, y se comparan con los obtenidos tras el prono y la manipulación
│  │  └─ Dos cautelas: condiciona la técnica anestésica, porque el paciente no puede estar
│  │     paralizado si se quieren MEP; y un falso positivo puede impedir completar el
│  │     procedimiento que iba a corregir la inestabilidad
│  └─ Protección ocular y de plexo braquial en prono **(verificar — sin dato propio en estas
│     fuentes de MIO; es manejo anestésico estándar de posicionamiento)**
├─ TÉCNICA DEL UMBRAL DE TORNILLO PEDICULAR — el detalle completo
│  ├─ Principio: se aplican impulsos eléctricos a través del tornillo (que se supone
│  │  eléctricamente conductor) y se registran potenciales de EMG estimulado en los grupos
│  │  musculares inervados por la raíz motora en riesgo
│  ├─ Por qué estimular en vez de manipular: la estimulación eléctrica del tornillo es
│  │  probablemente MEJOR que su manipulación mecánica, porque permite testar la PROXIMIDAD
│  │  del tornillo a la raíz determinando el umbral de estimulación
│  ├─ MONTAJE: cátodo en una sonda de punta de bola dentro del orificio del tornillo o sobre
│  │  la instrumentación; ánodo en una aguja colocada en músculo cerca del campo, que da el
│  │  camino de retorno a la corriente
│  ├─ DOS MOMENTOS DISTINTOS, CON DOS UMBRALES DISTINTOS (protocolo de Calancie)
│  │  ├─ FASE EXPLORATORIA, sobre el AWL antes de insertar el tornillo: impulsos cuadrados de
│  │  │  corriente constante, 200 µs de duración, a 3.1 pps, aplicados al instrumento con el
│  │  │  que se abre el pedículo, con corriente constante de 7 mA
│  │  │  └─ Si la pared ósea está penetrada, la corriente puede activar las raíces adyacentes
│  │  │     y producir respuestas de EMG estimulado
│  │  └─ TRAS INSERTAR EL TORNILLO, si no se encontró brecha: se retesta con los mismos
│  │     impulsos aplicados al tornillo, pero a 10 mA. Si aparecen respuestas, se recomienda
│  │     reposicionarlo
│  ├─ Práctica actual: se emite aviso cuando una estimulación a 10 mA da respuesta, y ese
│  │  valor sigue en uso general
│  │  └─ El razonamiento de por qué no se baja: bajar el umbral produciría MENOS falsos
│  │     positivos de brecha, pero AUMENTARÍA la probabilidad de falsos negativos — y el
│  │     falso negativo es el que deja al paciente con un déficit
│  ├─ Estudios indican que un umbral superior a 11 mA se asocia a mayor probabilidad de que
│  │  el tornillo esté correctamente colocado
│  ├─ EXCEPCIONES al umbral, que hay que conocer antes de aplicarlo
│  │  ├─ Región de la columna: para los tornillos TORÁCICOS pueden considerarse como guía
│  │  │  valores MÁS BAJOS
│  │  └─ Osteoporosis: los individuos con osteoporosis probablemente tienen umbrales MÁS
│  │     BAJOS
│  │     └─ ⚠️ CONTRADICCIÓN INTERNA de la fuente: unas líneas antes afirma que los pacientes
│  │        jóvenes tienen umbrales más altos que los mayores y que las mujeres mayores con
│  │        osteoporosis tienen umbrales "en decenas de mA" — lo que es incompatible con decir
│  │        después que la osteoporosis da umbrales más bajos. Lo coherente con la física del
│  │        problema (hueso menos denso, menor impedancia, más corriente que alcanza la raíz)
│  │        es que la osteoporosis BAJE el umbral **(verificar sobre el original)**
│  └─ UMBRAL ÓSEO BASAL antes de insertar: puede ser útil determinarlo estimulando la LÁMINA
│     cerca del pedículo con un electrodo de mano, registrando de los músculos inervados por
│     el segmento donde se va a colocar el tornillo. El umbral ronda los 25 mA, con variación
│     individual considerable, y la mayoría de investigadores usan corriente constante
├─ EL PROBLEMA DEL SHUNTING — y una discrepancia real entre las fuentes
│  ├─ La corriente aplicada al tornillo puede tomar MUCHOS caminos distintos del que atraviesa
│  │  la pared del orificio, y la conductividad de esos caminos VARÍA durante la operación
│  │  según lo mojado que esté el campo
│  ├─ Consecuencia grave: si el shunting es grande, la corriente que llega al tejido neural
│  │  puede no bastar para estimular la raíz, y la lesión por el tornillo puede NO detectarse
│  ├─ POSTURA A (Moller): el remedio es usar un estimulador de VOLTAJE CONSTANTE en lugar de
│  │  corriente constante, porque así la corriente que se entrega a la raíz queda independiente
│  │  del shunting por la humedad variable del campo
│  ├─ POSTURA B (Toleikis): es mejor la CORRIENTE CONSTANTE, porque lo que despolariza la
│  │  raíz es la densidad de corriente, y con voltaje constante esa densidad varía con la
│  │  impedancia del tejido — y la densidad ósea, y con ella la impedancia, varía entre
│  │  individuos por osteoporosis y otros factores
│  └─ Estado de la cuestión: la práctica general mayoritaria usa CORRIENTE constante, pero
│     conviene saber que las dos fuentes principales del proyecto razonan en sentidos
│     opuestos y que el argumento de cada una es válido para el factor que cada una prioriza
├─ CIRUGÍA MÍNIMAMENTE INVASIVA PERCUTÁNEA — por qué es más incierta
│  ├─ Pocos estudios han examinado los procedimientos mínimamente invasivos
│  ├─ Dificultad 1: el tornillo se coloca de forma percutánea, lo que NO permite al cirujano
│  │  visualizar el pedículo ni las estructuras vecinas
│  ├─ Dificultad 2: el tejido circundante deriva corriente de estimulación, y no queda claro
│  │  cuánta pasa realmente por el tornillo y cuánta se va a la pared ósea del orificio
│  └─ Esa incertidumbre, sumada a la práctica general de usar corriente constante, hace la
│     colocación percutánea de tornillos más difícil de validar que la cirugía abierta
├─ JERARQUÍA DE ALARMA
│  ├─ SEP: caída de amplitud mayor del 50% Y aumento de latencia mayor del 10%
│  ├─ MEP: todo-o-nada como regla, con aviso ante decremento del 80% en cualquier músculo en
│  │  eventos quirúrgicos críticos
│  ├─ tEMG del tornillo ya insertado: respuesta por debajo de 10 mA sugiere brecha de la
│  │  cortical; por encima de 11 mA, mayor probabilidad de colocación correcta
│  ├─ tEMG del awl en fase de apertura pedicular: 7 mA
│  ├─ Umbral óseo basal por estimulación laminar: en torno a 25 mA
│  └─ MATIZ QUE DEFINE ESTE CONTEXTO: en descompresión pura, sin maniobra reversible, el
│     valor ACCIONABLE de un cambio es menor — el hallazgo puede documentar la lesión sin
│     ofrecer nada que revertir
├─ PROTOCOLO DE REACCIÓN — en tres niveles, con el matiz propio de instrumentación
│  ├─ AWARENESS: pausa quirúrgica · todo el personal informado · parar descansos y cambios de
│  │  personal · llamar al adjunto de anestesia · pedir imagen · pedir hemoderivados · repetir
│  │  MEP en cada comprobación de nivel
│  ├─ PRIMER NIVEL
│  │  ├─ CIRUJANO: inspeccionar la anatomía · revertir la maniobra previa a la pérdida · y
│  │  │  sobre todo, SI EL IMPLANTE SE COLOCÓ INMEDIATAMENTE ANTES DE LA PÉRDIDA, RETIRARLO
│  │  │  └─ Esta es la acción de primer nivel MÁS relevante en este contexto, frente a
│  │  │     "revertir la maniobra de corrección" que es la clave en cirugía de deformidad
│  │  ├─ NEUROFISIOLOGÍA: contactar con el neurofisiólogo supervisor · comprobar electrodos y
│  │  │  conexiones · revisar la técnica anestésica
│  │  └─ ANESTESIA: PAM >80 mmHg · optimizar hematocrito, pH y pO2 con FiO2 al 100% ·
│  │     normotermia · nueva analítica · minimizar inhalados por debajo de 1/3 de CAM ·
│  │     reducir intravenosos en lo posible
│  ├─ SEGUNDO NIVEL
│  │  ├─ CIRUJANO: inspeccionar implantes · imagen 3D · inspeccionar y reducir tracción ·
│  │  │  consultar con un colega · considerar bloqueante de canales de calcio tópico
│  │  ├─ NEUROFISIOLOGÍA: revisar patrón y timing del cambio · preparar y sugerir MEP epidural
│  │  └─ ANESTESIA: preparar wake-up test · considerar bolo de esteroide
│  ├─ TERCER NIVEL: considerar wake-up test · abortar frente a continuar · reevaluar en
│  │  15 minutos · solicitar cama de UCI
│  └─ La fluoroscopia intraoperatoria NO sustituye a la monitorización electrofisiológica en
│     ninguno de estos niveles: se usa junto a ella, no en su lugar
├─ TÉCNICA DE MAPEO ESPECÍFICA
│  ├─ El EMG estimulado de tornillo pedicular es la técnica de mapeo PRINCIPAL de este
│  │  contexto, y no requiere mucho más montaje que el del MEP habitual más una sonda de
│  │  estimulación directa
│  ├─ Es muy útil para el tornillo LUMBAR; para el TORÁCICO la monitorización del recto
│  │  abdominal es menos factible y menos sensible
│  ├─ TRAMPA que no debe olvidarse: si el nervio está COMPLETAMENTE SECCIONADO, el EMG puede
│  │  seguir silente — la ausencia de respuesta no equivale a integridad
│  └─ EMG libre y estimulado al dilatar a través del psoas y al anclar el retractor en
│     XLIF/DLIF: es el mínimo exigible y es estándar de cuidado, no sustituible. Se usan
│     herramientas que permiten conducir la corriente a través de las palas del retractor, y
│     al final se inspecciona el campo buscando elementos neurales
├─ CAUSAS DE CAMBIO NO QUIRÚRGICO
│  ├─ Relajación muscular excesiva: eleva artificialmente el umbral del tornillo y produce
│  │  falsos negativos — comprobar el tren de cuatro en musculatura de la PIERNA antes de
│  │  testar, no fiarse del de anestesia hecho en mano o cara
│  ├─ Shunting por sangre, LCR o campo mojado: eleva el umbral (12-20 mA descritos)
│  ├─ Tornillo de titanio o cabeza poliaxial mal conductores
│  ├─ Radiculopatía crónica, diabetes u osteoporosis: alteran el umbral basal, que en raíces
│  │  crónicamente comprimidas puede superar los 20 mA
│  └─ Plano anestésico y posición del paciente, como en cualquier otra cirugía de columna
├─ LIMITACIONES
│  ├─ En descompresión sin corrección ni maniobra reversible, la evidencia NO respalda el uso
│  │  rutinario y puede perjudicar el curso quirúrgico por falsos positivos
│  ├─ El umbral del tornillo indica proximidad o brecha, pero no predice de forma fiable el
│  │  déficit
│  ├─ La definición de "brecha real" varía entre estudios, lo que dispersa mucho las cifras de
│  │  sensibilidad y especificidad publicadas
│  └─ En cirugía percutánea la incertidumbre sobre cuánta corriente llega al tornillo es
│     estructural, no corregible con mejor técnica de registro
└─ Referencia
   └─ Deletis cap.28 (Guiroy/Candocia/Fontes) pp.381-385 y §28.4 — gradiente de indicación,
      implantes y columnas de Denis, tEMG y hallazgo de Raynor, EMG libre y sus falsos
      negativos, nervio seccionado silente, XLIF con el 20-25% (Fig. 28.3), inestabilidad y
      preposicionamiento, protocolo de pérdida de señal y Tabla 28.1 · Moller2011 cap.10
      "Placement of Pedicle Screws for Spinal Fixation" pp.221-224 — incidencia del 1-11% y
      hasta 40%, límites de la fluoroscopia, protocolo de Calancie con los 7 mA del awl y los
      10 mA del tornillo, razonamiento del umbral, >11 mA, matices por región y osteoporosis
      con su contradicción interna, umbral óseo laminar de 25 mA, shunting por humedad y
      argumento a favor del voltaje constante (Figs. 10.8-10.10), cirugía percutánea ·
      cap.13 (Toleikis) pp.182-186 — argumento opuesto a favor de la corriente constante,
      montaje cátodo/ánodo, y falsos negativos por relajación y shunting · Deletis cap.42
      (Ney/van der Goes, "Costs and benefits of ION in spinal surgeries") §42.2 pp.597-599 —
      tipos de análisis económico (CCA, CBA, CUA), utilidad y AVAC, umbrales de disposición
      a pagar, árbol de decisión frente a modelo de Markov (Fig. 42.1), perspectiva y
      horizonte temporal, análisis de sensibilidad probabilístico · §42.3 pp.599-601 —
      ecuación de efectividad y sus cuatro debilidades, riesgo basal de Fehlings, estudio
      alemán, cifras del CCA, del CBA y del CUA cervical (Fig. 42.2) · §42.4 pp.601-603 —
      estudios de datos administrativos a favor y en contra y sus límites (Fig. 42.3) ·
      §42.5 p.603 — ensayos pragmáticos y equipoise
```

## Ampliación — profundizar

```
Columna degenerativa/instrumentación — ampliación
├─ Qué dice cada fuente sobre corriente frente a voltaje constante, con su razón
│  ├─ A favor del VOLTAJE constante: hace que la corriente entregada a la raíz sea
│  │  independiente del shunting causado por la humedad variable del campo quirúrgico, que es
│  │  el factor que cambia MINUTO A MINUTO durante la operación
│  └─ A favor de la CORRIENTE constante: lo que despolariza es la densidad de corriente, y
│     con voltaje constante esa densidad varía con la impedancia del tejido; como la densidad
│     ósea varía ENTRE PACIENTES por osteoporosis, haría falta más o menos voltaje para
│     producir la misma corriente en distintos individuos
│  └─ Lectura: cada fuente prioriza una fuente de variabilidad distinta — la
│     intraoperatoria (humedad) frente a la interindividual (hueso). No es un error de
│     ninguna de las dos, es un desacuerdo sobre qué variabilidad pesa más
├─ Por qué la anchura de pulso hace incomparables los umbrales publicados
│  ├─ Dos estímulos de igual intensidad con anchuras de 50 y 200 µs no son equivalentes: el
│  │  de 200 µs produce el DOBLE de densidad de corriente
│  └─ Para el mismo efecto, el de 50 µs necesitaría el doble de intensidad — así que comparar
│     cifras de mA entre series sin comparar la anchura de pulso no significa nada
└─ Estratificación de riesgo por umbral, más allá del sí/no de los 10 mA
   ├─ Por encima de 7 mA: sin brecha aparente, pedículo solo fisurado, o exposición medial
   │  ligera de una o dos roscas → generalmente se dejan colocados
   ├─ Entre 5 y 7 mA: en inspección visual, aproximadamente la mitad se dejaron colocados, y
   │  de esos solo uno se asoció a déficit postoperatorio nuevo
   └─ Igual o menor de 5 mA: son los que suponen la mayor amenaza y típicamente se retiran —
      aunque hay descritos tornillos de 4 y 5 mA dejados en su sitio sin déficit alguno
Referencia: Moller2011 cap.10 pp.222-223 · Deletis cap.13 (Toleikis) §13.2.2, pp.183-185
```
