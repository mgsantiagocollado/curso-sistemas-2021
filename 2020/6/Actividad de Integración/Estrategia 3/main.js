//Datos disociados
let mes = [	'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo' ];
let temp_max_abs = [39.3, 38.1, 36.3, 32.5, 27.4 ];
let temp_min_abs = [26.3, 25.8, 23.7, 20.5, 16.8 ];
let temp_media = [20.3, 19.9, 18.0, 14.6, 11.3 ];
let hum_relativa = [20.3, 19.9, 18.0, 14.6, 11.3 ];

//Unificando en un solo objeto. <--- Estrategia 3
let table =
{
	mes: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo' ],
	temp_max_abs: [39.3, 38.1, 36.3, 32.5, 27.4 ],
	temp_min_abs: [26.3, 25.8, 23.7, 20.5, 16.8 ],
	temp_media: [20.3, 19.9, 18.0, 14.6, 11.3 ],
	humedad_relativa: [20.3, 19.9, 18.0, 14.6, 11.3 ]
}

function ArrayToHTMLRow( property_name, array )
{
	let html = '<tr>';

	html += '<td>'+property_name+'</td>';

	for( dato of array )
	{
		html += '<td>'+dato+'</td>';
	}

	html += '</tr>';

	return html;
}


function TableToHTML( data_table )
{
	let html = "";

	html += '<h1>Parámetros climáticos</h1>';

	html += '<table>';

	html += ArrayToHTMLRow('Mes', data_table.mes );
	html += ArrayToHTMLRow('Temperatura Máx Abs (ºC)', data_table.temp_max_abs );
	html += ArrayToHTMLRow('Temperatura Min Abs (ºC)', data_table.temp_min_abs );
	html += ArrayToHTMLRow('Temperatura Media (ºC)', data_table.temp_media );
	html += ArrayToHTMLRow('Humedad Relativa (%)', data_table.humedad_relativa );

	html += '</table>';

	return html;
}

document.getElementById('ui').innerHTML = TableToHTML(table);