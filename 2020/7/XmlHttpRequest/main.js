function startApplication()
{
	//Creamos petición a un servidor Web
	let request = new XMLHttpRequest(); //Tipo de dato: object[XMLHttpRequest]

	/*Eventos propios de la funcionalidad que implementa.
	Para hacer una consulta, debemos especificar (dado que es el protocolo HTTP)
	a) El método HTTP para interactuar (GET; POST; PUT; ...)
	b) URL (Dirección<-Servidor)*/

	request.open('GET', 'https://www.dolarsi.com/api/api.php?type=valoresprincipales');

	//Adjuntar la información de la petición
	//..aún no implementado..

	//Definir las respuestas para cuando el objeto notifique que ha terminado
	function onCompletedRequest( event )
	{
		console.log( event );
	}

	//Asociar el nombre del evento (MDN XMLHttpRequest) y su acción para cuando ésta ocurra
	request.addEventListener('loadend', onCompletedRequest );

	//Se envía la petición de manera asincrónica
	request.send();	
}


startApplication();