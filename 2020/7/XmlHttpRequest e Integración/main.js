

function ConvertServerResponse( responseObject )
{
	let table_datos = 
	[
		['OFICIAL', 'BLUE', 'CONTADO', 'PROMEDIO', 'BOLSA', 'TURISTA'],
		['Compra', '--', 11, 12, 13, 14, 12],
		['Venta', '--', 25.8, 23.7, 20.5, 16.8, 22.4],
		['Variacion', 26, 19.9, 18.0, 14.6, 11.3, 33],
		['fecha_act', "03/03/20", "06/03/20", "09/03/20", "25/03/20", "05/04/20", "25/06/20"],
	];

	//Dolar Oficial
	//Compra :  table_datos[1][1];

	if ( responseObject != null )
	{
		table_datos[1][1] = responseObject[0].casa.compra;
		table_datos[2][1] = responseObject[0].casa.venta;
		table_datos[4][1] = Date().toString();
		table_datos[3][1] = '---';		
	}

	return table_datos;
}

function HTMLUsdDashboard(table)
{
  let html = "";
  html += `<table class=" w3-border w3-round w3-container w3-display-topmiddle">
          <tr>`
  for (var i = 0; i < table.length + 1; i++) {
    html += `<td>
     <table class="w3-border w3-round w3-centered">
      <tr>
       <td colspan="2" class=" w3-round w3-dark-grey w3-medium">DOLAR ` + table[0][i];
    html += `</td>
      </tr>
       <tr class="w3-light-grey">
           <td class=" w3-half w3-tiny">` + table[1][0];
    html += `</td>
           <td class=" w3-half w3-tiny">` + table[2][0];
    html += `</td>
        </tr>
        <tr class="w3-light-grey">
          <td class="w3-half w3-xlarge">$` + table[1][i + 1];
    html += `</td>
           <td class="w3-half w3-xlarge">$` + table[2][i + 1];
    html += `</td>
       </tr>
       <tr>
      <td colspan="2" class="w3-round">Variacion:` + table[3][i + 1] + "%";
    html += `</td>
          </tr>
          <tr>
           <td colspan="2" class="w3-dark-grey w3-round w3-tiny" style="height:8px;">Actualizado el: ` + table[4][i + 1];
    html += `</td>
         </tr>
      </table>
    </td>`;
    if (i == 2) { // son 3 columnas x fila 0,1,2 //y bajo a la siguiente fila
      html += `</tr>
      <tr>`
    } //del if
  } //del for
  html += `</tr>
     </table>`;
  return html;
}

function onUpdateButtonClick()
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
		if ( event.currentTarget.status == 200 )
		{
			let serverResponse = event.currentTarget.responseText;

			//Conversión de texto a Objeto (JSON->Object)
			let serverResponseObject = JSON.parse(serverResponse);

			document.getElementById('app').innerHTML = HTMLUsdDashboard( ConvertServerResponse(serverResponseObject) );
		}
	}

	//Asociar el nombre del evento (MDN XMLHttpRequest) y su acción para cuando ésta ocurra
	request.addEventListener('loadend', onCompletedRequest );

	//Se envía la petición de manera asincrónica
	request.send();
}

document.getElementById('app').innerHTML = HTMLUsdDashboard( ConvertServerResponse(null) );

let updateButton = document.createElement('button'); //--<button>Actualizar Cotización</button>
updateButton.innerHTML = 'Actualizar Cotización';
document.getElementById('body').appendChild( updateButton );

updateButton.addEventListener('click', onUpdateButtonClick );


