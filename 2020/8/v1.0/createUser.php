<?php
	
	//Conexión al motor de Bases de Datos
	$connection = null;
	
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
	$data = json_decode($json_body);

	//Construímos el comando que queremos enviar al motor de base de datos
	$SQLCode = "INSERT INTO user(username,password,name,surname,email,phone_number,country,address) VALUES('$data->username','$data->password','$data->name','$data->surname','$data->email','$data->phone_number','$data->country','$data->address' )";

	//Enviamos el comando para su ejecución
	$connection->query($SQLCode);
?>