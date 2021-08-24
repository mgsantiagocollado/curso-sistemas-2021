/*
Definir estructura de datos para operar

1) Arreglo de objetos
2) Matriz
3) JSON/XML (string con formato JSON)


Enfoque de resolución: Bottom -> Up

Arrancar desde los datos ----> Vista
Vista -----> Datos


*/


let data_option_a =
[
	{
		username:"1000",
		password:"abc987654$$",
		name:"Laura",
		surname:null,
		email:null,
		phoneNumber:null,
		country:null,
		address:null
	},
	{
		username:"1001",
		password:"abc987654$$",
		name:"Juan",
		surname:null,
		email:null,
		phoneNumber:null,
		country:null,
		address:null
	}
];



let data_option_b =
[
	[null,null,null,null,null,null,null,null],
	[null,null,null,null,null,null,null,null]
]

/*Creación de un nuevo usuario.
Modificación de un usuario ya cargado.
Eliminación de un usuario.
Consultar todos los usuarios cargados.*/

function validateExistingUser( currentTable, username )
{
	/*Forma alternativa de expresar un if.. if-ternario / ternary-if-operator
	 ( expression )? then-code-expression(boolean) : else-code-expression (boolean);
	 if ( getUserByUsername( currentTable, username ) == null )
		return true;
	   else
	    return false;
	*/

	return ( getUserByUsername( currentTable, username ) == null )? true : false;
}

function validateUserData( userData )
{
	/*Debo implementar el chequeo de existencia de todas las propiedades obligatorias
	  del usuario, y además cumplir con las condiciones de requerimiento.
	
	"La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, 
	al menos una minúscula y al menos una mayúscula.y no debe tener otros símbolos."*/

	let success = true;

	let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})");

	success = ( success && userData.hasOwnProperty('username') && userData.username != null );
	success = ( success && userData.hasOwnProperty('name') && userData.name != null );
	success = ( success && userData.hasOwnProperty('password') && userData.password.match(passwordRegex) );

	return success;
}

function createNewUser( currentTable, newUserData )
{
	/*Si hacemos cumplir la regla 1, entonces aquí debo efectuar la validación
	de que no exista otro usuario que cumpla con el mismo username.
	En otras palabras, tengo que implementar el código que me asegure que no exista
	nunca más de un objeto con el mismo valor de username*/

	if ( validateUserData(newUserData) && validateExistingUser(currentTable, newUserData.username) )
	{
		currentTable.push( newUserData );
	}
}

//1. Acceder por índice de la tabla
//2. Acceder por identificador (id) ---> No puede ser cualquiera, debe ser ÚNICO
//Regla 1: Considero, que username es como un identificador único para cada objeto.
//Consecuencia: Tendría que validar que no exista otro usuario con ese username.
function editAlreadyCreatedUser( currentTable, username, newUserData )
{
	let index = currentTable.findIndex( user => user.username === username );

	//Validaciones previas
	if ( index >= 0 && validateUserData(newUserData) && validateExistingUser(currentTable, newUserData.username) )
	{
		/*Traspasar los valores de newUserData a user. Uno por uno, ó utilizando Object.assign(target,source)
		Manual: currentTable[index].name = newUserData.name;

		Además, hay que validar que el cambio de username, no colisione con uno existente.
		Si todo sale bien, hay que actualizar efectivamente la componente del array de la tabla.
		*/

		Object.assign(currentTable[index], newUserData);
	}
}

function deleteUser( currentTable, username )
{
	let index = currentTable.findIndex( user => user.username === username );

	if ( index >= 0 )
	{
		currentTable.splice(index,1);
	}
}

function getUserByUsername( currentTable, username ) //OK
{
	if ( typeof(username) === 'string' )
	{
		let index = currentTable.findIndex( user => user.username === username );

		return ( index >= 0 )? currentTable[index] : null;
	}
	else
	{
		return null;
	}
}

function getAllUsers( currentTable, condition = null ) //OK
{
	return currentTable;
}

//----------------------------VIEW PART--------------------------------




function HTMLCRUD( userArray )
{
	let html = 
	`<h1>CRUD Users</h1>
	<table>
	<tr>
		<th>Username</th>
		<th>Nombre de usuario</th>
		<th>Contraseña</th>
		<th>Acciones</th>
	<tr>`;

	for( user of userArray )
	{
		html += 
		`<tr>
			<td>${user.username}</td>
			<td>${user.name}</td>
			<td>${user.password}</td>
			<td>
				<button>Editar</button>
				<button>Borrar</button>
			</td>
		<tr>`
	}

	html +=
	`</table>
	<br>
	<button id="btnNewUser">Nuevo Usuario</button>
	<button id="btnDeleteUser">Borrar Usuario</button>`;

	return html;

}

function onNewUserButtonClick()
{
	window.prompt('Ingrese datos para el nuevo usuario', 'sure');
}

function onEditButtonClick()
{

}

function onDeleteButtonClick()
{
	let resp = window.confirm('¿Está seguro de borrar el usuario id=?????');
}

document.getElementById('app').innerHTML = HTMLCRUD( getAllUsers(data_option_a) );

document.getElementById('btnNewUser').addEventListener('click', onNewUserButtonClick ); //callback function // handler // handler function
document.getElementById('btnDeleteUser').addEventListener('click', onDeleteButtonClick ); //callback function // handler // handler function



