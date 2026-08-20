---
name: mindmap
description: Genera el esquema ramificado (árbol de texto) de UN tema de estudio, listo para copiar a mano como mindmap en una página de libreta. Úsala siempre que el usuario invoque /mindmap, o pida "hazme un mindmap de X", "ramifica X", "dame las ramas de X para mi libreta", "esquema para dibujar de X", "cómo organizo X en un mapa mental", o cualquier variante de convertir un tema en una estructura jerárquica lista para memorizar a mano. No está atada a ningún área concreta: se adapta al tipo de tema (un concepto, un caso aplicado, un marco transversal) y a la disciplina de estudio del usuario, usando las fuentes del proyecto activo cuando existan y su propio criterio cuando no.
---

# Mindmap de un tema de estudio

Convierte un tema en el esquema ramificado de una sola página: el usuario lo dibujará a
mano en su libreta como ejercicio de memoria activa. Tu trabajo es decidir qué ramas
debe tener y rellenarlas con contenido real y correcto — no producir un dibujo, sino el
guion de texto que el usuario traduce a mapa mental.

## Paso 0: Identificar el tema y su tipo

Cada mindmap tiene UN tema central. Si el usuario da varios a la vez, trátalos como
mindmaps independientes, uno por uno.

Clasifica el tema en uno de tres tipos:

1. **Concepto o entidad** — algo que se define y funciona por sí mismo: un mecanismo,
   una estructura, una técnica, una ley, una fórmula.
2. **Caso aplicado o escenario** — una situación real donde se combinan varios
   conceptos: un procedimiento, un caso clínico, un supuesto práctico.
3. **Marco transversal** — algo que atraviesa varios temas sin ser un tema en sí: un
   principio general, una herramienta, un criterio metodológico.

Si el tipo es evidente, continúa sin preguntar y dilo en una línea. Si es genuinamente
ambiguo, haz una única pregunta aclaratoria rápida.

## Paso 1: Aplicar la plantilla de ramas según el tipo

**Tipo 1 — Concepto o entidad:** Definición / qué es → Cómo funciona o mecanismo/vía →
Parámetros o componentes clave → Cómo se reconoce o manifiesta → Qué lo modifica o
influye → Cuándo se considera anómalo o relevante → Errores o confusiones frecuentes →
Limitaciones / qué no cubre → Fuente.

**Tipo 2 — Caso aplicado o escenario:** Qué conceptos combina y por qué → Fases o pasos
del proceso → Objetivo o riesgo específico → Condicionantes prácticos → Jerarquía de
decisión si hay conflicto entre datos → Protocolo o pauta de actuación → Particularidad
técnica de este caso → Fuente.

**Tipo 3 — Marco transversal:** Concepto central → A qué otros temas afecta y cómo →
Datos o reglas clave → Aplicación práctica → Errores frecuentes o mitos → Conexión con
otros nodos del mapa de estudio → Fuente.

Si el tema real pide una rama más o una menos para no forzar contenido que no existe,
ajústala. No mezcles ramas de dos plantillas en el mismo árbol.

## Paso 2: Rellenar cada rama con contenido real

- Si el proyecto tiene documentos o fuentes propias sobre el tema, consúltalos antes de
  escribir y cita la fuente concreta en la rama "Fuente".
- Si no hay fuentes de proyecto, usa conocimiento propio fiable, pero marca
  explícitamente con "(verificar)" cualquier dato numérico o afirmación muy específica
  de la que no estés seguro al 100%. Nunca lo inventes.
- Profundidad: rama principal + 1-2 subniveles como máximo. Debe caber dibujado a mano
  en una página.
- Usa la terminología propia de la disciplina del tema.

## Paso 3: Formato de salida

Árbol en bloque de código monoespaciado con conectores.

    Tema central
    ├─ Rama 1
    │  ├─ Sub-rama 1a
    │  └─ Sub-rama 1b
    └─ Rama N
       └─ Fuente

**Anulación en este proyecto:** el resultado no se queda solo en el chat. Se escribe
siempre en el `.md` correspondiente de `mindmaps/` (con su front-matter completo según
`CLAUDE.md`), y después se ejecuta `node build.js`.

## Reglas

- Un mindmap = un tema central = una página.
- No inventes datos, cifras ni criterios que no controles con seguridad — usa
  "(verificar)" en vez de rellenar con una cifra dudosa.
- No fuerces todas las ramas de una plantilla si el tema no las tiene con sentido:
  mejor un árbol correcto y corto que uno completo y relleno.
- Respeta el idioma y el nivel técnico con el que el usuario plantea el tema.
