# Oriontek-Cypress-Test

Para el desarrollo de esta prueba de utilizo la herramienta Cypress versión 9.5.4 con el Sistema Operativo Mac OS.

En esta prueba se realizó la automatización de "Calcular el factorial" de la página web http://qainterview.pythonanywhere.com/ 


# Casos de pruebas positivo:

Calcular el factorial si el numero es valido.

Descripción:

Validar que al ingresar un valor numerico valido en el campo "Enter an Interger" y hacer clic en el boton de "Calculate!", el sistema pueda calcular
el factorial y mostrar el resultado en pantalla.

Pasos de ejecución:

- Paso 1: Navegar a la URL: "http://qainterview.pythonanywhere.com/"
- Paso 2: Ingresar un valor numerico valido en el campo: "Enter an Interger".
- Paso 3: Clic en el boton "Calculate!".

Resultado esperado:

El sistema mueste el factorial del valor ingresado.


# Casos de pruebas negativo:

Validar que el sistema muestra un error cuando se intenta calcular el factorial sin introducir un valor.

Descripción:

Validar que al no ingresarr un valor en el campo "Enter an Interger" y hacer clic en el boton de "Calculate!", el sistema muestre un error en pantalla.

Pasos de ejecución:

- Paso 1: Navegar a la URL: "http://qainterview.pythonanywhere.com/"
- Paso 2: Clic en el boton "Calculate!".

Resultado esperado:

El sistema muestre el error: Please enter an integer

--------------------------------------------------------------------
# Reporte de Bugs:

Se muestra valor infinito al ingresar cantidad mayor a 171.

Descripción:
Al ingresar el valor 171 en el campo "Enter an Interger" y calcular su factorial, el sistema muestra como resultado "The factorial of 171 is: Infinity".

Pasos de ejecución:

- Paso 1: Navegar a la URL: "http://qainterview.pythonanywhere.com/"
- Paso 2: Ingresar un valor numerico  171 en el campo: "Enter an Interger".
- Paso 3: Clic en el boton "Calculate!".

Resultado recibido: 

"The factorial of 171 is: Infinity".

Resultado esperado:

1.24101807 E+309

(https://www.calculatorsoup.com/calculators/discretemathematics/factorials.php?n=171&action=solve)

Evidencias:

![image](https://user-images.githubusercontent.com/13717057/164563276-8bb4fe1d-6485-42e1-b75d-763c13220c42.png)

----------------------------------------------------

Error 500 cuando el valor del factorial es igual o mayor a 990.

Descripción:

Al ingresar un valor igual o mayor a 990 "Enter an Interger" y calcular su factorial, el sistema muestra como resultado Infinity 
y en consola error 500 "Internal Server Error".

- Paso 1: Navegar a la URL: "http://qainterview.pythonanywhere.com/"
- Paso 2: Ingresar un valor numerico igual o mayor a 990 en el campo: "Enter an Interger".
- Paso 3: Clic en el boton "Calculate!".

Resultado recibido: 

The factorial of 989 is: Infinity

Nota: Cuando se revisa la consola en el navegador el API devuelve error 500 "Internal Server Error".

Resultado esperado:

4.209685539 E+2537

Nota: Se espera tambien que el API devuelva un codigo 200 "OK".

Evidencias:

![image](https://user-images.githubusercontent.com/13717057/164564358-8b8b211a-9d20-49fc-8f3f-8c43e7b8d5c4.png)


