---
codigo: PE-B1
titulo: Promediado y relación señal/ruido
area: PPEE
bloque: B — Bases técnicas de registro
plantilla: D
estado: completo
---

# PE-B1 — Promediado y relación señal/ruido

```
Promediado y relación señal/ruido
├─ Definición y alcance
│  ├─ En un registro de PE, "SEÑAL" es el potencial evocado y "RUIDO" es absolutamente
│  │  todo lo demás: EEG, EMG, EOG, ECG, ruido del electrodo y ruido electrónico del
│  │  equipo
│  ├─ El PE es una señal diminuta (0.1-10 µV) SUMERGIDA dentro de un ruido de mucha
│  │  mayor amplitud
│  ├─ Relación señal/ruido de partida: entre 1/5 y 1/100 según la modalidad de PE
│  ├─ El reto central del registro es mejorar la S/N lo bastante para que el PE sea
│  │  identificable sin confundirlo con elementos del ruido
│  └─ El promediado de señal (signal averaging) es LA técnica que se usa para ello
├─ Fundamento — por qué funciona el promediado
│  ├─ Se evoca la señal muchas veces; el promediador SUMA la actividad eléctrica
│  │  (PE + ruido) de cada barrido y luego la normaliza dividiendo por N
│  ├─ Aprovecha una asimetría fundamental entre las dos componentes de la suma
│  │  ├─ El PE está TIME-LOCKED: sigue al estímulo con un intervalo temporal constante,
│  │  │  así que en cada barrido cae en el mismo punto de la ventana y se suma en fase
│  │  └─ El ruido es ALEATORIO: no guarda relación temporal fija con el estímulo, así
│  │     que en cada barrido cae en un punto distinto y se cancela consigo mismo
│  ├─ Conforme avanza el promediado, el ruido decrece progresivamente aproximándose a
│  │  cero mientras el PE MANTIENE la misma amplitud
│  └─ Clave conceptual que hay que tener clarísima: el promediado mejora la S/N
│     REDUCIENDO la amplitud del ruido, no realzando la señal en absoluto
├─ La regla del 1/√N
│  ├─ Regla del promediado: el ruido decrece proporcionalmente a la raíz cuadrada del
│  │  número de barridos → ruido ∝ 1/√N
│  ├─ De ahí: señal/ruido ≈ (amplitud de señal / amplitud de ruido) × √N
│  ├─ Consecuencia práctica de la relación de raíz cuadrada: la mayor ganancia de S/N
│  │  se obtiene al PRINCIPIO de la serie de promedios
│  │  ├─ Mejora de S/N ×5 → 25 promedios
│  │  └─ Mejora de S/N ×10 → hacen falta 75 promedios MÁS (100 en total)
│  └─ Corolario económico: duplicar el número de promedios solo mejora la S/N un factor
│     √2 ≈ 1.41. Pasar de 1000 a 2000 barridos cuesta el doble de tiempo para una
│     ganancia de en torno al 40%
├─ Cuántos promedios hacen falta — depende de la S/N de partida
│  ├─ PEATC: el componente de menor amplitud puede ser 0.2 µV y el ruido 10 µV → S/N
│  │  1/50 → hacen falta ≈50² = 2500 barridos para un registro satisfactorio
│  │  └─ La Tabla 1.2 del capítulo da un rango práctico de 1000-4000 promedios
│  ├─ PEV: la S/N puede ser 1/10 → bastan 100-200 promedios (la Tabla 1.2 recoge
│  │  200-300)
│  ├─ PESS: 500-1000 promedios suelen ser adecuados
│  │  ├─ La repetición automática de estímulo se fija habitualmente en 1000 para un PESS
│  │  │  bien resuelto
│  │  ├─ Con paciente muy relajado o bajo anestesia, 500 estímulos pueden bastar
│  │  └─ Con paciente tenso y mucha actividad muscular pueden hacer falta VARIOS MILES
│  └─ No hay que aferrarse a estas cifras "idealizadas": lo que importa es obtener un PE
│     bien definido con el menor ruido posible, con más o con menos barridos
├─ Réplicas — el control de calidad obligatorio
│  ├─ Hay que obtener SIEMPRE dos o más réplicas y superponerlas
│  ├─ Solo las ondas CONSISTENTES entre réplicas pueden considerarse inequívocamente
│  │  relacionadas con el estímulo
│  ├─ Los picos que no se reproducen son probablemente ruido; con una sola réplica se
│  │  confundirían fácilmente con componentes reales del PE
│  ├─ Dos réplicas bastan en registros poco ruidosos; con registros ruidosos hacen falta
│  │  más de dos
│  └─ La superposición es lo que demuestra la reproducibilidad — no vale colocarlas una
│     debajo de otra sin superponer
├─ Rechazo automático de artefacto
│  ├─ Elimina los barridos individuales cuya amplitud supera un nivel preestablecido,
│  │  para que un barrido contaminado por artefacto de gran amplitud no llegue a formar
│  │  parte del promedio
│  ├─ Se implementa con un DISCRIMINADOR DE VENTANA: si un barrido genera una señal de
│  │  entrada fuera de la ventana fijada, queda eliminado del procesamiento posterior
│  │  por el conversor A/D
│  └─ Es un método importante para impedir que respuestas artefactuales acaben formando
│     parte de la respuesta promediada final
├─ Los cinco límites del promediado
│  ├─ A. El ruido puede NO ser aleatorio, y entonces no se elimina según la raíz de N
│  ├─ B. Si la frecuencia de estimulación es armónico o subarmónico de un artefacto
│  │  (típicamente el de red, 60 Hz), el artefacto se REALZA en vez de cancelarse y
│  │  deteriora la calidad del PE
│  ├─ C. Puede haber señales irrelevantes time-locked con el estímulo — p. ej. actividad
│  │  EMG disparada por el propio estímulo — que contaminan el PE y que el promediado no
│  │  puede distinguir del PE porque comparten la relación temporal fija
│  ├─ D. Con artefactos excesivos (movimientos oculares, parpadeo, EMG) puede no lograrse
│  │  la eliminación completa aunque se aumente el número de promedios
│  └─ E. Si el PE del propio sujeto VARÍA de un estímulo a otro, el promediado DEGRADA la
│     señal en vez de mejorarla. Tres formas: (a) jitter de latencia, (b) variación de
│     amplitud, (c) ambas a la vez
│     └─ Extensión de este límite al quirófano: el promediado asume que todas las
│        respuestas sumadas tienen la misma forma y la misma relación temporal con el
│        estímulo. Deja de ser cierto cuando el sistema está siendo afectado por
│        manipulación quirúrgica, calor o anoxia — si las respuestas cambian durante la
│        adquisición, la respuesta promediada sale distorsionada
├─ Estrategias para mejorar la S/N (las cinco del capítulo)
│  ├─ A. Reducir el ruido DE ENTRADA antes de nada: aplicación correcta de electrodos,
│  │  comodidad del paciente (para reducir EMG, EOG y movimientos) y, si hace falta,
│  │  sedación para PEATC y PESS
│  │  └─ Nunca se insistirá bastante en esto: es la medida de mayor rendimiento, porque
│  │     baja el denominador de la S/N en lugar de perseguirlo con más barridos
│  ├─ B. Presentar el tren de estímulos a una frecuencia NO relacionada con 60 Hz —
│  │  PEV 2.1/s, PEATC 11/s, PESS 4.7/s
│  │  ├─ En PESS se prefiere 4.8/s antes que 5/s exactos precisamente para que no sea
│  │  │  subarmónico de la frecuencia de red
│  │  └─ En PEATC, el artefacto de estímulo a alta intensidad se elimina eficazmente
│  │     usando clics de polaridad ALTERNANTE
│  ├─ C. Rechazo automático de artefacto por discriminador de ventana
│  ├─ D. Filtrado adecuado, que reduzca las frecuencias de ruido sin atenuar el propio PE
│  └─ E. Dos o más réplicas superpuestas
├─ Aplicación práctica
│  ├─ Un filtrado cuidadoso es esencial porque ACORTA de forma efectiva el número de
│  │  promedios necesarios para extraer el PE del ruido
│  ├─ Si el paciente está tenso o en movimiento, el camino correcto es relajarlo o
│  │  sedarlo, NO subir el número de promedios
│  ├─ Bajo anestesia (monitorización intraoperatoria) los artefactos son relativamente
│  │  menores y puede bastar un número de promedios menor que en el laboratorio
│  └─ Si con paciente tenso el PESS sigue sin salir: sedación oral previa al reintento —
│     lorazepam 1-2 mg, diazepam 5-10 mg, o hidrato de cloral
├─ Errores y confusiones frecuentes
│  ├─ Creer que el promediado "amplifica" el PE: no toca la señal, solo baja el ruido
│  ├─ Intentar arreglar un registro con artefacto subiendo el número de promedios —
│  │  no funciona: con el sujeto tenso o en movimiento, ni más promedios ni el rechazo
│  │  automático de artefacto limpian el registro lo suficiente
│  ├─ Elegir una frecuencia de estimulación "redonda" (5/s, 10/s) que resulta ser
│  │  subarmónico de la red y realza el artefacto en vez de cancelarlo
│  ├─ Interpretar picos de una sola réplica como componentes del PE
│  └─ Promediar durante una fase en la que la respuesta está cambiando (quirófano):
│     el resultado no representa ni el antes ni el después
├─ Limitaciones
│  ├─ La frecuencia de estimulación no puede subirse indefinidamente para acortar la
│  │  adquisición: las frecuencias muy rápidas deterioran la morfología del PE
│  ├─ Tampoco puede bajarse mucho: alarga la adquisición y con ella cambia el estado de
│  │  alerta y la cooperación del sujeto durante la prueba
│  ├─ Hay un suelo de ruido que el promediado no puede vencer, y en el 2-5% de los
│  │  pacientes la única solución es reprogramar la prueba para otro día
│  └─ El promediado no distingue señal fisiológica de señal parásita: solo distingue
│     time-locked de aleatorio
└─ Referencia
   └─ Markand2020 cap.1 pp.6-10 (promediado, límites, estrategias, problemas frecuentes),
      p.18 (nº de promedios por modalidad, Tabla 1.2) · cap.4 pp.143, 166 (promedios y
      sedación en PESS, 4.8/s frente a 5/s) · Moller2011 cap.3 (límite del promediado en
      quirófano cuando la respuesta cambia durante la adquisición)
```
