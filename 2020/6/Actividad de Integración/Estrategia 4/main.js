/*
 1º Enfoque
 Construir la base en HTML, y dejar la puerta abierta para completar posteriormente la parte dinámica 
 que es la que cambia.

 2º Enfoque
 Es que el HTML no tenga nada, y que JS se encargue completamente de construir el código HTML procesando
 la información, y que posteriormente, al terminar, inserte ese fragmento de HTML dentro del <body>

 3º Enfoque (Antiguo)
 El HTML es el resultado del procesamiento del lado del servidor. <-- OBSOLETO

 4º Enfoque (Avanzado, no lo vamos a ver todavía)
 No se escribe HTML, ni en index.html, ni en JS. Directamente se programa la interfaz gráfica, mediante código JS

 */

 /* Resolución tomando la estrategia de datos 4 y el enfoque 2 */

let datos_mdp =
{
	enero:
	{
		temp_max_abs: 39.3,
		temp_min_abs: 39.3,
		temp_media: 39.3,
		temp_min_media:14,
		temp_min_abs:4.7,
		precipitacion_total:100.1,
		dias_de_precipitaciones:9,
		horas_de_sol:288.3,
		humedad_relativa:76
	},
	febrero:
	{
		temp_max_abs: 39.3,
		temp_min_abs: 39.3,
		temp_media: 39.3,
		temp_min_media:14,
		temp_min_abs:4.7,
		precipitacion_total:100.1,
		dias_de_precipitaciones:9,
		horas_de_sol:288.3,
		humedad_relativa:76
	},
	marzo:
	{
		temp_max_abs: 39.3,
		temp_min_abs: 39.3,
		temp_media: 39.3,
		temp_min_media:14,
		temp_min_abs:4.7,
		precipitacion_total:100.1,
		dias_de_precipitaciones:9,
		horas_de_sol:288.3,
		humedad_relativa:76
	},
	abril:
	{
		temp_max_abs: 39.3,
		temp_min_abs: 39.3,
		temp_media: 39.3,
		temp_min_media:14,
		temp_min_abs:4.7,
		precipitacion_total:100.1,
		dias_de_precipitaciones:9,
		horas_de_sol:288.3,
		humedad_relativa:76
	},
	mayo:
	{
		temp_max_abs: 39.3,
		temp_min_abs: 39.3,
		temp_media: 39.3,
		temp_min_media:14,
		temp_min_abs:4.7,
		precipitacion_total:100.1,
		dias_de_precipitaciones:9,
		horas_de_sol:288.3,
		humedad_relativa:76
	}
};

function TableToHTML( table )
{
	let html = "";

	html += '<h1>Parámetros climáticos</h1>';

	html += `<table>
	<tr>
		<th>Mes</th>
		<th>Enero</th>	
		<th>Febrero</th>	
		<th>Marzo</th>	
		<th>Abril</th>	
		<th>Mayo</th>	
	</tr>`;

	//Codigo

	let meses = Object.keys(table);

	html += '<tr>';
	html += '<td>Temperatura Máx Abs (ºC)</td>';
	for ( mes of meses )
	{
		html += '<td>'+table[mes].temp_max_abs+'</td>';
	}
	html += '</tr>';

	html += '<tr>';
	html += '<td>Temperatura Media (ºC)</td>';
	for ( mes of meses )
	{
		html += '<td>'+table[mes].temp_media+'</td>';
	}	
	html += '</tr>';
	
	html += '<tr>';
	html += '<td>Humedad Relativa (%)</td>';
	for ( mes of meses )
	{
		html += '<td>'+table[mes].humedad_relativa+'</td>';
	}	
	html += '</tr>';
	
	

	html += '</table>';

	//API_DOM
	document.getElementById('ui').innerHTML = html;
}

TableToHTML(datos_mdp);

