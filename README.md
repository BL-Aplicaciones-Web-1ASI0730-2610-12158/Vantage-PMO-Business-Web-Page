# Sitio Web de Vantage PMO

## Descripción General

Vantage PMO es una plataforma de oficina de gestión de proyectos (PMO) diseñada para centralizar datos de proyectos, proporcionar visibilidad en tiempo real y permitir la toma de decisiones basada en datos para líderes de proyectos. Este repositorio contiene el sitio web estático de landing page para Vantage PMO, construido con tecnologías web modernas para mostrar las características clave y beneficios de la plataforma.

El sitio web es una aplicación de página única (SPA) con soporte de internacionalización para inglés y español, diseño responsivo y animaciones de desplazamiento suave.

## Características

- **Diseño Responsivo**: Optimizado para escritorio, tablet y dispositivos móviles usando CSS Grid y Flexbox.
- **Internacionalización (i18n)**: Soporte para idiomas inglés y español con detección automática de idioma y persistencia en almacenamiento local.
- **Desplazamiento Suave**: Implementación nativa de JavaScript para navegación de enlaces ancla.
- **Animaciones de Desplazamiento**: Animaciones basadas en Intersection Observer para secciones de contenido.
- **Navegación Interactiva**: Menú hamburguesa amigable para móviles con características de accesibilidad.
- **Contador de Características Fijas**: Sistema de numeración dinámica que se actualiza basado en la posición de desplazamiento en la sección de características.

## Tecnologías Utilizadas

| Tecnología | Propósito | Versión |
|------------|-----------|---------|
| HTML5 | Marcado semántico y estructura | - |
| CSS3 | Estilos, diseño y animaciones | - |
| JavaScript (ES5+) | Interactividad y manipulación del DOM | - |
| Google Fonts (Sora, Inter) | Tipografía | - |
| Local Storage API | Persistencia de preferencias de idioma | - |
| Intersection Observer API | Animaciones basadas en desplazamiento | - |

## Estructura del Proyecto

```
/
├── index.html                 # Archivo HTML principal
├── README.md                  # Documentación del proyecto
└── public/
    ├── assets/
    │   └── images/
    │       ├── hero/          # Imágenes de la sección hero
    │       └── pillars/       # Imágenes de la sección pillars
    ├── i18n/
    │   ├── en.json            # Traducciones en inglés
    │   ├── es.json            # Traducciones en español
    │   └── i18n.js            # Módulo de internacionalización
    ├── js/
    │   ├── main.js            # Lógica principal de la aplicación
    │   └── nav.js             # Funcionalidad específica de navegación
    └── styles/
        └── style.css          # Hoja de estilos unificada
```

## Descripciones de Archivos

### Archivos Principales

- **`index.html`**: El documento HTML principal que contiene toda la estructura del sitio web. Utiliza elementos HTML5 semánticos y atributos de datos para internacionalización.

- **`public/styles/style.css`**: Hoja de estilos completa con propiedades personalizadas CSS (tokens de diseño) para temas consistentes. Organizada por secciones de componentes.

### Módulos JavaScript

- **`public/js/main.js`**: Archivo JavaScript principal que maneja la inicialización de la aplicación, navegación, desplazamiento suave, animaciones de características y revelaciones de contenido basadas en desplazamiento.

- **`public/js/nav.js`**: Módulo dedicado a la funcionalidad del menú de navegación, incluyendo comportamiento de alternancia móvil.

- **`public/i18n/i18n.js`**: Sistema de internacionalización que gestiona el cambio de idioma, carga de traducciones y actualizaciones del DOM.

### Archivos de Traducción

- **`public/i18n/en.json`**: Traducciones en inglés para todo el texto de la interfaz de usuario.
- **`public/i18n/es.json`**: Traducciones en español para todo el texto de la interfaz de usuario.

### Recursos

- **`public/assets/images/`**: Directorio que contiene imágenes estáticas utilizadas en todo el sitio web.

## Soporte de Navegadores

- Chrome 58+
- Firefox 55+
- Safari 11+
- Edge 79+

Navegadores modernos con soporte para:
- JavaScript ES5+
- CSS Grid y Flexbox
- Intersection Observer API
- Fetch API

## Guías de Desarrollo

### Estilo de Código

- **HTML**: Marcado semántico y accesible con atributos ARIA apropiados.
- **CSS**: Convención de nomenclatura tipo BEM, propiedades personalizadas CSS para temas.
- **JavaScript**: Patrón IIFE para encapsulación de módulos, modo estricto habilitado.

### Agregar Nuevo Contenido

1. Actualice las traducciones en ambos archivos `en.json` y `es.json`.
2. Agregue HTML correspondiente con atributos `data-i18n`.
3. Actualice CSS si se agregan nuevos componentes.
4. Pruebe la responsividad en múltiples dispositivos.

### Internacionalización

Para agregar un nuevo idioma:
1. Cree un nuevo archivo JSON en `public/i18n/` (ej. `fr.json`).
2. Agregue el código de idioma a `SUPPORTED_LANGS` en `i18n.js`.
3. Actualice la lógica del conmutador de idioma si es necesario.

## Consideraciones de Rendimiento

- **Carga Diferida**: Las imágenes no se cargan de forma diferida; considere implementar para producción.
- **Tamaño del Paquete**: Todo JavaScript se sirve como archivos separados; considere empaquetar para producción.
- **Carga de Fuentes**: Las fuentes de Google se cargan vía `<link>`; considere autoalojar para mejor rendimiento.

## Accesibilidad

- Estructura HTML semántica
- Etiquetas y roles ARIA
- Soporte de navegación por teclado
- Cumplimiento de contraste de color
- Amigable para lectores de pantalla

## Licencia

© 2026 Vantage PMO. Todos los derechos reservados.

## Contribución

1. Bifurque el repositorio
2. Cree una rama de característica
3. Realice cambios siguiendo los patrones establecidos
4. Pruebe en múltiples navegadores y dispositivos
5. Envíe una solicitud de extracción

## Contacto

Para preguntas o soporte, contacte al equipo de desarrollo.