---
codigo: C6
titulo: Troubleshooting general
area: IONM
bloque: C — Transversales
plantilla: C
estado: completo
---

# C6 — Troubleshooting general

```
Troubleshooting general
├─ Concepto central
│  └─ Ante cualquier cambio de señal, la secuencia lógica de descarte es técnico →
│     anestésico/fisiológico → quirúrgico (real) — pero el aviso al cirujano se da en
│     PARALELO a ese descarte, no después de completarlo (ver C5)
├─ A qué modalidades afecta
│  └─ Todas — el marco es transversal, aunque cada modalidad tenga sus causas
│     técnicas específicas ya documentadas en A1-A9 (ej. artefacto de bisturí en
│     SEP/A1, plano superficial en EMG libre/A4)
├─ Parámetros clave
│  ├─ 5 vías de entrada de interferencia eléctrica: (1) acoplamiento capacitivo por
│  │  el aire a cables sin apantallar · (2) inyección por vía común/bucles de tierra
│  │  (acoplamiento galvánico) · (3) conducción galvánica por otros electrodos o
│  │  líneas de infusión en contacto con el paciente · (4) acoplamiento capacitivo
│  │  directo al paciente (mantas térmicas, mesas motorizadas) · (5) fuga directa por
│  │  la línea de alimentación a los amplificadores
│  ├─ Identificación de la fuente: frecuencia de red (50/60 Hz) = interferencia de
│  │  línea · forma de onda rica en armónicos = acoplamiento magnético típico de
│  │  transformadores · apagar equipos sospechosos uno a uno · usar un cable como
│  │  "antena" en un canal libre para localizar el origen por proximidad
│  └─ Calentadores de sangre y bombas de infusión: causa clásica de interferencia que
│     "aparece de la nada" a mitad de cirugía, porque se encienden o se cambian
│     bolsas después del inicio
├─ Aplicación práctica
│  ├─ Principio KISS (Keep It Simple): minimizar canales/complejidad del montaje
│  │  reduce el riesgo de error sin perder información útil real
│  ├─ Checklist de montaje al estilo aviación — hoy el error humano es más frecuente
│  │  que el fallo de equipo
│  ├─ Conectar cada electrodo al box UNO A UNO justo tras colocarlo, no colocar todos
│  │  y conectar al final — reduce errores de asignación de canal
│  ├─ Mantener electrodos de repuesto ya colocados en zonas de manipulación
│  │  quirúrgica prevista
│  └─ Adquirir la señal basal lo antes posible, no esperar al momento de riesgo —
│     deja margen para optimizar electrodo/montaje si la basal es de mala calidad
├─ Errores frecuentes
│  ├─ Estimular el lado equivocado por electrodo mal conectado — ejemplo clásico:
│  │  electrodo auricular de BAEP en ambos oídos, estimulación aplicada por error al
│  │  lado NO operado; la forma de onda es indistinguible entre lados, el error pasa
│  │  inadvertido y produce un falso negativo TOTAL e indetectable (ver C2)
│  ├─ Relajación neuromuscular no monitorizada confundida con lesión neural real
│  │  (ver C4)
│  ├─ Plano anestésico superficial confundido con patología en EMG libre (A4)
│  ├─ Retrasar el aviso al cirujano mientras se descarta causa técnica, perdiendo
│  │  tiempo de reacción real (ver C5)
│  └─ Mordedura/lesión lingual por bite block inadecuado en TES con montaje C3/C4
│     (ver C2)
├─ Conexión con otros nodos
│  └─ C2 (electrodo mal colocado/mal conectado como causa técnica clásica), C5 (marco
│     de alarma, cuándo avisar vs. cuándo descartar lo técnico), A1/A4/A7/A8 (causas
│     de cambio no quirúrgico específicas de cada modalidad), C3/C4 (causas
│     farmacológicas de cambio de señal)
└─ Referencia
   └─ Moller2011, cap. 17, "General Considerations About Intraoperative
      Neurophysiology and Monitoring", secciones "Mistakes and Errors", "How to
      Reduce the Risk of Mistakes", "Electrical and Magnetic Interference in the
      Operating Room", pp.329-339 · Moller2011, cap. 2, p.17 · Deletis, cap. 41
      (MacDonald/Seidel/Shils), "Safety", §41.3.6.1, pp.590-591
```
