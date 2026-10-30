# HANDOFF — Pase de guardia

> Último traspaso: 2026-10-30. Lee `CLAUDE.md` primero y después este archivo.

## 1. Estado

Proyecto de mindmaps de Neurofisiología. **Ninguna fase abierta a medias.**

El repo quedó parado el 2026-08-30 en un punto limpio y sigue así: 53 temas, los 53 en
`estado: completo`, cero esqueletos, cero en progreso, `main` igual a `origin/main`, build
reproducible (`node build.js` solo cambia el timestamp de `MAPA_MAESTRO.md`). Las dos fases
grandes —retrofit de IONM y repaso de contenido— están cerradas.

Volumen actual: IONM 27 temas / 8.717 líneas · PPEE 26 temas / 5.284 líneas.

La sesión del 2026-10-30 fue **solo auditoría**: no se tocó ningún `.md` de `mindmaps/`, ni
`build.js`, ni el contenido. El único cambio es este archivo.

## 2. Hecho en esta sesión

- Auditoría completa del estado del proyecto tras 2 meses parado. Sin cambios de contenido.
- Comprobado que `node build.js` es reproducible (diff limitado al timestamp; revertido).
- Comprobada la integridad de las claves de cita: las 7 fuentes de `fuentes/` están todas
  citadas en algún mindmap (Deletis 54 · Markand2020 24 · Moller2011 21 · Romstock2000 1 ·
  Boaro2026 4 · LimaMedeiros2024 2 · Urriza2025 2). **No hay claves inventadas** — el fallo
  de las 13 claves fantasma del bloque A no se ha repetido.
- Comprobado que no hay referencias sustitutivas (regla 5): los aciertos del grep son todos
  falsos positivos ("volver al EEG crudo", "nada que ver con").
- Inventariados los 9 `(verificar)` pendientes: A8, B1, B4 (×2), B7, PE-A4 (×3), PE-V1.
- Creado este `HANDOFF.md` (no existía, aunque el `CLAUDE.md` global lo exige por repo).

**Archivos tocados:** solo `HANDOFF.md`.

## 3. Siguiente paso exacto

**Retrofit de densidad del bloque V de PPEE (PE-V1 a PE-V9).**

Es el hallazgo principal de la auditoría. Media de líneas por tema:

| Bloque | Media |
|---|---|
| IONM (ya retrofitado) | 323 |
| PPEE A | 292 |
| PPEE M (el último escrito) | 282 |
| PPEE B | 205 |
| PPEE C | 171 |
| **PPEE V** | **138** |

Los 9 temas del PEV son los más finos del repo (104-200 líneas) y son la modalidad de
referencia del área. Se escribieron el 2026-08-25, **antes** del retrofit de IONM que subió
el estándar de densidad, y nunca pasaron por él. Mismo patrón que los 23 temas originales de
IONM.

Primera acción concreta: abrir `mindmaps/PE-V4-generadores-del-pev-por-damero.md` (104
líneas, el más fino de los 53) y densificarlo contra `Markand2020` cap.3, fuente ya
catalogada en `INDICE_FUENTES.md` (anatomía p.83 · protocolo PRVEP p.85 · PRVEP normal p.90 ·
generadores p.97 · criterios de anormalidad p.97 · factores p.102 · hemicampos p.106 · flash
VEP p.109 · aplicaciones clínicas p.112 · casos p.124). Extraer con `pdftotext -layout -f/-l`
al scratchpad, nunca al repo.

Después del bloque V, por este orden: los 9 `(verificar)` · la columna ✦ de nervio periférico
y cadera (Deletis cap.30+31, más el §18.6.2 del cap.18 que quedó sin usar) · la ✦ funcional
(cap.34-38, cinco capítulos que probablemente dan 2-3 temas, no 5) · la ✦ de la cara (material
sobrante del cap.24).

## 4. Decisiones abiertas — esperan respuesta de Pani

1. **El cambio de equipo ya ha pasado.** `CLAUDE.md` dice Inomed hasta mediados de octubre de
   2026 → Cadwell. Hoy es 2026-10-30. En los 53 mindmaps **no hay ni una mención** a Inomed ni
   a Cadwell: la regla nunca se aplicó a nada. Dos salidas, y la elige Pani: (a) actualizar
   `CLAUDE.md` al estado real y revisar contra Cadwell lo que lleve parámetros dependientes de
   equipo, o (b) reconocer que el contenido es agnóstico de equipo y rebajar la regla.
   **No tocar `CLAUDE.md` sin su respuesta.**
2. **Orden de trabajo:** la auditoría recomienda el retrofit del bloque V antes que la columna
   ✦, porque densifica el bloque más consultado del área menos madura con la fuente ya
   localizada, mientras que DBS/espasticidad amplían hacia territorio que no monitoriza a
   diario. Si Pani prefiere catálogo nuevo antes que densidad, manda ella.
3. **`ARRANQUE_MINDMAPS.md`** (17 KB): bootstrap original, redundante con `CLAUDE.md`, ya
   desfasado (dice "actualmente usa Inomed") y no figura en la estructura documentada del repo.
   Candidato a borrar, pendiente de su visto bueno.

## 5. Restricciones activas

- **No recodificar ningún tema ya publicado.** Puede tener la página dibujada a mano con ese
  código escrito. Al partir un tema, el código original se conserva.
- **Nunca inventar cifras, umbrales, latencias ni criterios de alarma.** Antes de dar por bueno
  un dato, comprobar que su clave de cita está en `INDICE_FUENTES.md`. Si no hay fuente, marcar
  `(verificar)` y decirlo.
- **Cada tema es autocontenido** (regla 5): prohibido remitir a otro tema para un dato. Si hace
  falta en dos temas, se repite con su cita.
- **`MAPA_MAESTRO.md`, `index.html`, `ionm.html`, `ppee.html` son GENERADOS.** Nunca a mano.
- **El repo es PÚBLICO.** No dejar nunca volcados de `pdftotext` en el repo; van al scratchpad
  del sistema y se borran al terminar. Verificar `git status` antes de cualquier `git add`.
  Ya pasó una vez y hubo que purgar el historial con force-push.
- **Windows.** No existe `python`/`python3`/`py`. `pdftotext` sí está (`/mingw64/bin`); la
  herramienta Read no renderiza PDFs. La página del PDF no coincide con la impresa: citar la
  impresa.
- **Sin frameworks, npm ni dependencias** en el build.

## 6. Verificación

```
node build.js
git status --short
```

El build debe dejar como único cambio el timestamp de `MAPA_MAESTRO.md`. Si aparece algo más,
revisarlo antes de seguir.

Después de tocar `mindmaps/`, comprobar además:

```
grep -c "(verificar)" mindmaps/*.md | grep -v ":0"
grep -rno "Deletis\|Moller2011\|Markand2020\|Romstock2000\|LimaMedeiros2024\|Urriza2025\|Boaro2026" mindmaps/ | wc -l
```

La primera lista no debe crecer sin motivo; la segunda no debe contener ninguna clave que no
esté en la tabla de `fuentes/INDICE_FUENTES.md`.
