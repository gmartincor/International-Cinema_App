# README

## Login UOC
gmartincor@uoc.edu

## Nombre y Apellidos
Guillermo Martin Correa

## Descripción de la PEC
En esta PEC se ha configurado un repositorio Git para gestionar el código y se ha añadido un archivo README.md con los detalles de la práctica. Respecto a las dificultades, he cometido algunos errores al renombrar mi nombre de usuario y mi correo en git pero lo he podido solucionar usando el comando "$ git config --global --remove-section user" y volviendo a introducir el nombre y el correo.

 **Ejercicio 2, apartado 1**  
 Consiste en un formulario de registro de usuario construido con HTML, CSS y JavaScript. El formulario recopila información esencial del usuario, como nombre de usuario, edad, correo electrónico, contraseña y confirmación de contraseña. Se ha añadido un campo para la edad, que incluye validación para asegurar que el valor ingresado esté entre 0 y 999. Además, se han reforzado los requisitos de la contraseña, estableciendo que debe tener un mínimo de 8 caracteres e incluir al menos una letra mayúscula, una letra minúscula, un número y un carácter especial permitido.

 **Ejercicio 2, apartado 2** 
Consiste en una calculadora de tasas de cambio que permite al usuario seleccionar dos monedas y calcular el tipo de cambio entre ellas, mediante consultas a la API para obtener las tasas de cambio en tiempo real. El código incluye un Documento HTML, a través del cual se estructura la página, un documento CSS para darle diseño  y un documento javascript para agregarle funcionalidad.

Respecto al enunciado original de la actividad se incluyeron 3 mejoras importantes:

- <u>Indicador de carga</u>: Se añadió un div que muestra el mensaje "Loading..." cuando se realiza la consulta al API. Este indicador se activa antes de la consulta y se oculta al finalizar, lo que proporciona al usuario una señal visual mientras espera la respuesta del API.

- <u>Manejo de errores</u>: Se implementó un bloque `try-catch` para capturar y gestionar los errores que puedan ocurrir durante la consulta al API. Si hay un problema, como la falta de conexión o una respuesta incorrecta, se muestra un mensaje de error claro al usuario, evitando que la aplicación falle sin notificación.

- <u>Prevención de números negativos</u>: Se añadió la validación para evitar que el usuario ingrese cantidades negativas. Los campos de entrada fueron configurados con el atributo `min="0"` y, en el caso de que se detecte un valor negativo, el sistema lo corrige automáticamente, mejorando la precisión de los cálculos.


**Ejercicio 2, apartado 3** 
Para realizar el ejercico se ha utilizado HTML, CSS y Javascript. Esta actividad consiste en un sistema de reserva de asientos de cine que permite a los usuarios seleccionar una película, elegir asientos y calcular el precio final en función del número de asientos seleccionados y película seleccionada. El sistema también almacena las selecciones del usuario (película y asientos) en el almacenamiento local (localStorage) para que los datos persistan entre recargas de página. La aplicación realiza un seguimiento del número de asientos seleccionados y actualiza el precio total de forma dinámica.

Como mejora significativa, la aplicación ha sido configurada para integrar un conversor de moneda en tiempo real. Ahora, los usuarios pueden seleccionar no solo una película, sino también la moneda en la que desean visualizar los precios. Esta mejora se ha implementado añadiendo un menú desplegable que permite elegir entre varias monedas (USD, EUR, GBP, entre otras). Al seleccionar una moneda, el sistema consulta una API externa para obtener las tasas de cambio actuales y convierte tanto los precios de las películas como el total calculado a la moneda seleccionada. Los precios de las películas se muestran en la moneda correspondiente y el símbolo de la moneda se actualiza en la interfaz. La conversión se realiza en tiempo real y se almacena la selección de moneda en localStorage para que los usuarios mantengan su preferencia al recargar la página.
 