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
		username:"78",
		password:null,
		name:"Laura",
		surname:null,
		email:null,
		phoneNumber:null,
		country:null,
		address:null
	},
	{
		username:"78",
		password:null,
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

	return true;
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

function getUserByUsername( currentTable, username )
{
	for ( user of currentTable )
	{
		if ( username === user.username )
		{
			return user;
		}
	}

	//Si no lo encuentra, debería retornar un nulo.
	return null;
}

function getAllUsers( currentTable, condition = null )
{
	return currentTable;
}





