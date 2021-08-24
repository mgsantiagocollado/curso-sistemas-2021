//Estrategia 2 (Matriz)

let table = 
[
	[ 'Mes', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo' ],
	[ 'Temperatura Máx Abs (ºC)', 39.3, 38.1, 36.3, 32.5, 27.4 ],
	[ 'Temperatura Min Abs (ºC)', 26.3, 25.8, 23.7, 20.5, 16.8 ],
	[ 'Temperatura Media (ºC)', 20.3, 19.9, 18.0, 14.6, 11.3 ],
	[ 'Temperatura Media (ºC)', 20.3, 19.9, 18.0, 14.6, 11.3 ],
	[ 'Temperatura Media (ºC)', 20.3, 19.9, 18.0, 14.6, 11.3 ],
	[ 'Temperatura Media (ºC)', 20.3, 19.9, 18.0, 14.6, 11.3 ],
	[ 'Temperatura Media (ºC)', 20.3, 19.9, 18.0, 14.6, 11.3 ],
	[ 'Temperatura Media (ºC)', 20.3, 19.9, 18.0, 14.6, 11.3 ],
	[ 'Temperatura Media (ºC)', 20.3, 19.9, 18.0, 14.6, 11.3 ],
	[ 'Temperatura Media (ºC)', 20.3, 19.9, 18.0, 14.6, 11.3 ],
	[ 293.2, 'abc', 'ABC', 99999 ]
];

function TableToHTML( matrix )
{
	let html = "";

	html += '<h1>Parámetros climáticos</h1>';

	html += '<table>';

	for( row of matrix )
	{
		html += '<tr>';

		for ( column of row )
		{
			html += '<td>'+column+'</td>';
		}

		html += '</tr>';
	}

	html += '</table>';

	return html;
}

document.getElementById('ui').innerHTML = TableToHTML(table);
