# Solución Ejercicio 1

## 1. La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno:

### ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.

El uso de etiquetas semánticas en HTML5 aporta muchas ventajas para los desarrolladores y usuarios. Aquí hay tres que considero muy importantes:

**Mejora la accesibilidad**


Las etiquetas semánticas como `<header>`, `<article>`, o `<footer>` permiten a las tecnologías de asistencia, como los lectores de pantalla, interpretar correctamente la estructura de la página web. Esto hace que la navegación para personas con discapacidades visuales sea mucho más fácil y efectiva, lo cual es fundamental para hacer la web más inclusiva.

**Código más organizado y claro**

Aunque aún no he tenido la oportunidad de trabajar en equipo, he comprobado que usar etiquetas semánticas hace que mi propio código sea mucho más fácil de leer y entender cuando regreso a él después de un tiempo. Por ejemplo, al usar etiquetas como `<nav>` o `<section>`, es muy sencillo identificar la función de cada bloque en la página. Esto me ayuda a mantener mi trabajo más ordenado y a realizar modificaciones sin perderme en el código.

**Mejora el SEO**

El uso adecuado de etiquetas semánticas también es beneficioso para los motores de búsqueda. Etiquetas como `<article>` y `<section>` les indican qué partes del contenido son más relevantes, lo que puede ayudar a mejorar el posicionamiento de la página en los resultados de búsqueda. Esto es crucial para aumentar la visibilidad de un sitio web en la web actual.


### Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.

Aunque aún no he utilizado ninguna API de HTML5 directamente en mis proyectos, he investigado sobre algunas de ellas y las posibilidades que ofrecen me parecen muy interesantes. A continuación menciono 3:

**Geolocation API**

Esta API permite obtener la ubicación geográfica del usuario. Me parece útil para aplicaciones que necesitan mostrar contenido basado en la ubicación del usuario, como mapas o servicios de entrega, donde saber la localización precisa es fundamental. Estoy construyendo la pagina web de mi boda actualmente y es algo que me gustaria incluir, para que calcule la ruta al invitado desde el lugar en el que se encuentra hasta el lugar de la celebracion.

**Canvas API**

Permite dibujar gráficos directamente en el navegador utilizando JavaScript. He visto cómo se utiliza para crear animaciones y gráficos. Es una API que me interesa explorar por su versatilidad.

**File API**

Esta API permite a las aplicaciones web interactuar con los archivos locales del usuario. Me ha parecido interesante cómo permite a las aplicaciones cargar archivos desde el dispositivo del usuario, leer sus contenidos o incluso manipularlos sin tener que depender de un servidor. La considero especialmente útil para formularios que requieren subida de archivos o aplicaciones web que trabajen con archivos multimedia, como editores de imágenes o documentos.


### Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).

La opción que ofrece para adaptar el diseño web a diferentes dispositivos son las media queries. Gracias a ellas, podemos aplicar diferentes estilos dependiendo del tamaño de la pantalla del dispositivo, lo que permite que las páginas web sean responsivas y se vean bien tanto en móviles como en pantallas grandes.

Aunque aún no he trabajado en proyectos muy grandes, he probado a utilizar media queries para ajustar el diseño de una página básica, y me parece una solución simple pero muy poderosa. Me sorprendió mucho al construir la interfac de usuario de una plataforma educatia para la asignatura "HTML y CSS" como son capaces de lograr  que un diseño que tiene múltiples columnas en pantallas grandes se convierta en una única columna cuando se visualiza en dispositivos móviles, consiguiendo mejorar  la experiencia del usuario en las diferentes plataformas.

### Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).

Algunas de las características más destacadas de TypeScript que me parecen importantes son:

**Tipado estático**

TypeScript permite definir tipos para variables, parámetros y funciones, lo que ayuda a detectar errores antes de que se ejecute el código. Esto es muy útil para prevenir errores comunes en tiempo de ejecución, algo que me  parece una ventaja sobre JavaScript.

**Compatibilidad con JavaScript**

Al ser un superconjunto de JavaScript, TypeScript es compatible con todo el código JavaScript. Esto permite empezar a utilizar TypeScript en proyectos JavaScript existentes sin tener que reescribir todo desde cero, lo cual me parece una gran ventaja.

**Transpilación a JavaScript**

TypeScript se transpila a JavaScript, lo que permite usar sus características avanzadas sin preocuparse por la compatibilidad con todos los navegadores. Esto es importante porque podemos trabajar con lo último en desarrollo sin sacrificar la compatibilidad.

**Interfaces y tipos personalizados**

TypeScript también permite crear interfaces y tipos personalizados, lo que mejora la claridad y la organización del código, especialmente cuando se manejan estructuras de datos más complejas. 


## 2. El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas.

### Cita al menos 2 de estos preprocesadores.

Algunos de los preprocesadores CSS más populares son:

- **Sass (Syntactically Awesome Stylesheets)**: Es uno de los preprocesadores más utilizados que añade funcionalidades como variables, anidamiento de reglas, mixins y herencia. Sass facilita la escritura y el mantenimiento del código CSS, permitiendo una mayor modularidad y reutilización de estilos.

- **Less**: Otro preprocesador ampliamente empleado que permite el uso de variables, mixins, funciones y operaciones matemáticas dentro de las hojas de estilo. Less mejora la eficiencia en la escritura de CSS y promueve una estructura más organizada y escalable.

Estos preprocesadores ayudan a superar las limitaciones del CSS tradicional, ofreciendo herramientas avanzadas que mejoran la productividad y la calidad del código estilístico.

### Cita al menos 4 ventajas que ofrecen estos preprocesadores.

Algunas de las ventajas de los procesadores CSS son: 

1. **Uso de Variables**: Permiten definir y reutilizar valores como colores, fuentes o tamaños en múltiples lugares del código, facilitando cambios globales y manteniendo la consistencia en el diseño.
2. **Anidamiento de Reglas**: Facilitan la escritura de estilos de manera jerárquica, reflejando la estructura HTML, lo que hace el código más legible y organizado.
3. **Mixins y Funciones**: Permiten crear bloques de código reutilizables y realizar operaciones complejas, lo que reduce la redundancia y simplifica la gestión de estilos complejos.
4. **Modularidad y Organización del Código**: Facilitan la división del CSS en múltiples archivos o módulos, promoviendo una mejor organización y mantenibilidad del proyecto a medida que crece.


### Explica brevemente en qué consisten los sourcemaps.

Los sourcemaps son archivos que mapean el código transformado  al código fuente original, por ejemplo, el CSS generado a partir de un preprocesador. Esto permite a los desarrolladores depurar el código de manera más eficiente, ya que pueden ver y editar el código original en las herramientas de desarrollo del navegador, incluso cuando el navegador está interpretando el código compilado.

### Explica qué es un transpilador.

Un transpilador es una herramienta que convierte código escrito en un lenguaje de programación a otro lenguaje que tiene un nivel de abstracción similar. Un transpilador mantiene la estructura y características del lenguaje original, pero lo transforma para que sea compatible con diferentes entornos o para incorporar nuevas funcionalidades. Por ejemplo, Babel es un transpilador que convierte código moderno de JavaScript (ES6+) a una versión compatible con navegadores más antiguos.



## 3. El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos

### Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.

1. **Sistemas de Control de Versiones**:

- **Git**: Es el sistema de control de versiones distribuido más utilizado, que permite a múltiples desarrolladores trabajar en el mismo proyecto simultáneamente sin conflictos. Es utilizado para guardar diferentes versiones de un archivo, o conjunto de archivos, para que cualquier versión sea recuperable cuando lo desee. Es el que utilizo para las asignaturas del Master y en mis proyectos personales.

- **Subversion (SVN)**: Es un sistema de control de versiones centralizado que gestiona y almacena versiones de archivos de manera eficiente.Se basa en un sistema de control de versiones centralizado. Esto significa que existe un almacén central de datos (el repositorio) accesible a todos los usuarios. Dado que los cambios realizados no pueden ser fusionados entre sí, el sistema evita que dos usuarios puedan editar un mismo archivo al mismo tiempo.

2. **Herramientas de gestión de módulos** :
   
- **npm (Node Package Manager)**: Es el gestor de paquetes por defecto para Node.js, utilizado para instalar y gestionar dependencias de proyectos JavaScript. Permite ejecutar código JavaScript en el servidor. Está diseñado para construir aplicaciones que respondan a eventos, lo que lo hace ideal para aplicaciones en tiempo real, como chats o juegos online.
  
- **Yarn**: Es una alternativa a npm que ofrece mejoras en la velocidad y la gestión de dependencias, proporcionando una instalación más eficiente y determinística de paquetes. Utiliza un sistema de caché que permite instalar paquetes de manera más rápida que npm, ya que no necesita volver a descargarlos si ya han sido instalados anteriormente.
  

### Cita y explica al menos 3 comandos de Git.

Algunos de los comandos de git son:

- **git clone**: Este comando se utiliza para crear una copia local de un repositorio remoto. Este comando acompañado del enlace del repositorio descarga todo el historial del proyecto en la máquina local.

- **git commit**: Permite guardar los cambios realizados en el área de preparación (staging area) al historial del repositorio. Un ejemplo de uso sería git commit -m "Descripción de los cambios", donde el mensaje describe brevemente las modificaciones realizadas.

- **git push**: Envía los commits locales al repositorio remoto, actualizando así la versión central del proyecto. Se usa típicamente después de realizar commits locales, por ejemplo, git push origin main para enviar los cambios a la rama principal. 
  

### Cita y explica brevemente las características más definitorias de WebPack.

Algunas de las características de WebPack son: 

- **Bundling**: Webpack empaqueta múltiples módulos y dependencias en uno o varios archivos de salida, optimizando la carga de recursos en el navegador.

- **Loaders**: Permite procesar diferentes tipos de archivos, como CSS, imágenes, TypeScript, antes de incluirlos en el bundle, facilitando la integración de diversos formatos en el proyecto.

- **Plugins**: Extiende las funcionalidades de Webpack mediante la adición de tareas personalizadas durante el proceso de compilación, como optimización de código, generación de archivos HTML, y más.

- **Code Splitting**: Permite dividir el código en diferentes chunks que se cargan bajo demanda, mejorando el rendimiento y reduciendo el tiempo de carga inicial de la aplicación.
