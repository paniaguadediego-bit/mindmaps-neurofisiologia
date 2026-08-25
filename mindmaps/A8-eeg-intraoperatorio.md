---
codigo: A8
titulo: EEG intraoperatorio
area: IONM
bloque: A — Modalidades de señal
plantilla: A
estado: en-progreso
---

# A8 — EEG intraoperatorio

> Pendiente: las fuentes del proyecto no tienen un capítulo dedicado al EEG
> intraoperatorio como modalidad única — el contenido de abajo combina el uso en
> endarterectomía carotídea (detección de isquemia) y electrocorticografía en cirugía
> de epilepsia. Burst-suppression como objetivo de profundidad anestésica, EEG
> cuantitativo tipo BIS/Entropía, y protocolos fuera de estos dos contextos quedan
> `(verificar)`.

```
EEG intraoperatorio
├─ Vía anatómica
│  └─ No aplica en sentido clásico — registro de actividad cortical ESPONTÁNEA, no
│     evocada; refleja actividad cortical, no subcortical
├─ Estimulación
│  └─ No aplica — registro pasivo continuo (excepción: la electrocorticografía puede
│     combinarse con estimulación cortical para mapeo, ver B7)
├─ Registro / montaje
│  ├─ Sistema 10-20 multicanal, comparación bihemisférica obligatoria (ver C2)
│  └─ ECoG (variante intracraneal, cirugía de epilepsia): amplitud 100-1000 µV vs.
│     10-50 µV del EEG de superficie, mucho menos artefacto muscular
├─ Morfología normal
│  └─ Actividad bilateral simétrica · predominio regional fisiológico (más beta
│     frontal, más theta/delta temporal)
├─ Efecto anestesia/fisiología
│  └─ MUY sensible, dosis-dependiente (a diferencia del BAEP) — enlentecimiento
│     progresivo hasta burst-suppression
│     └─ Efecto varía por fármaco: enflurano/metohexital/etomidato/fentanilo tienden
│        a aumentar la actividad epileptiforme · isoflurano/sevoflurano/propofol
│        relativamente neutros
├─ Criterios de alarma (contexto endarterectomía carotídea — isquemia)
│  ├─ Caída de amplitud >50-80% o pérdida completa · ↑actividad delta ≥2x · pérdida
│  │  de ritmos rápidos alfa/beta
│  └─ Asimetría interhemisférica: 15-20% moderada, >20% severa (brain symmetry index)
├─ Causas de cambio no quirúrgico
│  ├─ Cambio de plano anestésico — principal factor de confusión, MIMETIZA el
│  │  enlentecimiento isquémico → exige plano estable en momentos críticos
│  └─ Hipotermia · línea de base ya anormal (ictus previo) hasta en el 40% de los
│     pacientes
├─ Troubleshooting
│  └─ Comparar HEMISFERIOS entre sí, no valores absolutos · el EEG cuantitativo
│     (CSA/DSA/frecuencia de borde espectral) es solo adyuvante, con menor evidencia
│     que el EEG crudo multicanal
├─ Limitaciones
│  ├─ Gran volumen de datos crudos, requiere intérprete experto · no detecta isquemia
│  │  subcortical ni infartos de zona limítrofe (watershed)
│  └─ En ECoG: la correlación entre espigas residuales y resultado quirúrgico es
│     inconsistente entre series — es herramienta de localización, no de "alarma de
│     seguridad" como el EEG isquémico
└─ Referencia
   └─ Deletis, cap. 25 (Malcharek/Schneider/Dinkel), §25.2.1, pp.339-340 (isquemia en
      endarterectomía carotídea) · cap. 32, §32.4-32.6, pp.446-451 (ECoG en cirugía de
      epilepsia)
```
