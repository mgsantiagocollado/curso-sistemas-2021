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

fetch( './createUser.php', { method:'POST', body:JSON.stringify(userTest) } );





