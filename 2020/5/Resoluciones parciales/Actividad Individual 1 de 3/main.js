//Mi primer programa en JavaScript

let tabla = 
[ 
	{
		lacteo:"Leche",
		porcion:"200cc",
		contenido_calcio:280
	}, 
	{
		lacteo:"Yogurt Bebible",
		porcion:"200cc",
		contenido_calcio:180
	}, 
	{
		lacteo:"Yogurt Firme",
		porcion:"190g",
		contenido_calcio:203
	}, 
	{
		lacteo:"Postre",
		porcion:"125g",
		contenido_calcio:143
	}, 
	{
		lacteo:"Queso Rallado",
		porcion:"8g",
		contenido_calcio:104
	}
];

/* NOTA: Identificar los tipos de dato de la estructura es importante, porque si nuestra
intención es escribir una función que se encargue de procesarla, debemos saber qué podemos hacer
y que no. 

La lectura comprensiva de "tabla" es:
"...es un array de objetos de 3 propiedades cuyos tipos son string, string y number..."

El array lo identificamos por la sintaxis del símbolo []
El objeto por {}
El String por "" (Comillas)
Los Number por ser números literales.

*/

/*
Función que se encarga de hacer lo que expresa su nombre
Las funciones procesan información, la intención es suministrar como entrada la tabla que 
acabamos de construir*/

function identificarLacteoDeMayorContenidoDeCalcio( tabla_de_datos )
{
	//tabla_de_datos es el nombre del parámetro de entrada de la función

	/* Creamos la respuesta que retornaremos luego de procesar tabla_de_datos
	   Hasta este punto, no sabemos la respuesta, entonces vale null (nula) */

    let respuesta = null;

    /* Existen muchas maneras de resolver esto, veremos algunas propuestas:

    Propuesta 1: Recorrer el array y comparar los valores de calcio
    Propuesta 2: Ordenar el array de menor a mayor según el valor de calcio y tomar el último elemento.
    */

    /*Resolución Propuesta 1:
    Tomamos el primer elemento del array como referencia,
    luego vamos analizando si el siguiente elemento cumple con la condición de
    tener mayor contenido de calcio que el actual, en dicho caso, entonces
    nuestra respuesta se actualiza a este elemento, y se repite el ciclo
    continuamente hasta el final*/

    respuesta = tabla_de_datos[0];
   
   	//Lectura de este código: "Para cada lacteo de la tabla_de_datos... "
    for ( lacteo of tabla_de_datos )
    {
    	//Si el contenido de calcio del lacteo es mayor (>) que el contenido de calcio de la respuesta que tengo hasta este momento...
    	if ( lacteo.contenido_calcio > respuesta.contenido_calcio  )
    	{
    		//Entonces mi respuesta se actualiza
    		respuesta = lacteo
    	}

    	//... luego vuelve a realizarse la operación para el siguiente lacteo del array sucesivamente hasta llegar al último.
	}
	   
	//... cuando termina de ejecutarse, ya la estructura de la tabla quedó completamente analizada

	//... devolvemos la respuesta que logramos
    return respuesta;
}

//Ejecutamos la prueba. Si está todo bien, debería devolver Leche
//Intente modificar los valores de calcio y ejecutar nuevamente el programa para obtener diferentes respuestas..
console.log( identificarLacteoDeMayorContenidoDeCalcio(tabla).lacteo );
