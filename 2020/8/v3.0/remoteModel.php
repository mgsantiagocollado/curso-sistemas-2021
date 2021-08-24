<?php
	
	//Conexión al motor de Bases de Datos
	$connection = new PDO('mysql:host=127.0.0.1:3306;dbname=abm', 'root', '987654' );
	
	//Ejecutando la conexión en un bloque protegido. En caso de falla X al conectar, se atrapa la excepción
	try
	{
		$connection = new PDO('mysql:host=127.0.0.1:3306;dbname=abm', 'root', '987654' );
	}
	catch (PDOException $connectionException) 
	{
		//Contestamos al cliente que su petición no se puede efectuar por un problema
		$status = array( status=>'error', description=>$connectionException->getMessage() );
	    echo json_encode($status);

	    //Cortamos la ejecución del programa del servidor de forma forzada
	    die();
	};

	//Si no hubo problemas, obtenemos el cuerpo de la petición del cliente.
	//Pactamos que el intercambio es vía texto en formato JSON
	$json_body = file_get_contents('php://input');

	//Transformamos texto JSON en objeto PHP para poder manipularlo con el lenguaje
	$object = json_decode($json_body);

	//Tomamos la información necesaria del objeto recibido
	$action = $object->action;
	$data = $object->body;


	function create( $connection, $data )
	{
		//Construímos el comando que queremos enviar al motor de base de datos
		$SQLCode = "INSERT INTO user(username,password,name,surname,email,phone_number,country,address) VALUES('$data->username','$data->password','$data->name','$data->surname','$data->email','$data->phone_number','$data->country','$data->address' )";

		//Enviamos el comando para su ejecución
		$connection->query($SQLCode);
	} 

	function edit( $connection, $data )
	{
		$SQLCode = "UPDATE user
					SET username='$data->username', password='$data->password',	name='$data->name',	surname='$data->surname', email='$data->email', phone_number='$data->phone_number', country='$data->country', address='$data->address'
					WHERE username='$data->username'";

		$connection->query($SQLCode);
	};

	function delete( $connection, $data )
	{
		$SQLCode = "DELETE FROM user WHERE username='$data->username'";

		$connection->query($SQLCode);
	};
	
	function getByUsername( $connection, $data )
	{
		$SQLCode = "SELECT * FROM user WHERE username='$data->username'";

		$result = $connection->query($SQLCode)->fetchAll();

		return $result;
	};

	function getAll($connection)
	{
		$SQLCode = "SELECT * FROM user ORDER BY name ASC LIMIT 1000";

		$result = $connection->query($SQLCode)->fetchAll();

		return $result;
	};

	function isUsernameAlreadyExists( $username )
	{
		//Por implementar...
	};

	function isValidUserData( $userData )
	{
		//Por implementar...	
	};


	/*La siguiente línea tiene mucho significado:
	"Ejecuta la función correspondiente al nombre de acción enviado por el cliente, le suministra
	el argumento basado en el cuerpo del mensaje recibido en la petición, y a la respuesta la codifica
	en texto formato JSON e imprime este texto como respuesta al cliente"

	$action es el texto(string) del nombre de la función a invocar.
	$action() --> Invoca la función cuyo nombre coincide con la que existe programada aquí.
	Ejemplo: Si $action es 'create', entonces la línea se convierte en create()
	Como esto está generalizando la invocación de cualquier función, es peligroso
	dado que no todas las funciones tienen la misma cantidad de parámetros y no todas tienen
	datos de retorno. Por cuestión de simplificación se aborda así.*/
	
	echo json_encode( $action( $connection, $data ) );

?>