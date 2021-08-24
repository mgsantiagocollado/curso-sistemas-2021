/*Simulación de petición al servidor para efectuar la prueba de carga de un nuevo usuario*/

let userTest =
{
	username:'juan123',
	password:"Pa$$word1234",
	name:'Juan',
	surname:'García',
	email:'email@email.com',
	phone_number:'12345678',
	country:'Argentina',
	address: 'Av. Falsa 123'
};

/*Efectuamos la petición. Lo hacemos vía POST, con lo cual especificamos el cuerpo del mensaje
transformando el objeto JavaScript en texto JSON vía JSON.stringify(...)*/

//Cuerpo de mensaje diferente
let message =
{
	action:null,
	body: userTest
};

//Create
/*message.action = 'create';
fetch( './remoteModel.php', { method:'POST', body:JSON.stringify(message) } );*/

//Edit
/*message.action = 'edit';
message.body.name = 'Ana';
fetch( './remoteModel.php', { method:'POST', body:JSON.stringify(message) } );*/

//Delete
/*message.action = 'delete';
fetch( './remoteModel.php', { method:'POST', body:JSON.stringify(message) } );*/

//Select
message.action = 'getAll';
message.body = null;
fetch( './remoteModel.php', { method:'POST', body:JSON.stringify(message) } ).then( response => console.log(response.json()) );



