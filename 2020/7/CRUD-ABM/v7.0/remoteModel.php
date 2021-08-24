<?php
	
	/*
	Example: RemoteModel // CRUD-Development
	Autor: Matías Gastón Santiago
	Versión: 6.0
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
	*/

	/*function create( userData )
	{
		
	}

	function edit( username, newUserData )
	{
		
	};

	function delete( username )
	{
		
	};

	function getByUsername( username )
	{
		
	};

	function getAll()
	{
		
	};

	function isUsernameAlreadyExists( username )
	{
		
	};

	function isValidUserData( userData )
	{
		
	};*/

	$response = array();

	array_push( $response, array(username=>'001', name=>'ExampleName1', password=>'aPa$$wordExam4le') );
	array_push( $response, array(username=>'002', name=>'ExampleName2', password=>'aPa$$wordExam4le') );
	array_push( $response, array(username=>'003', name=>'ExampleName3', password=>'aPa$$wordExam4le') );
	array_push( $response, array(username=>'004', name=>'ExampleName4', password=>'aPa$$wordExam4le') );
   	
   	echo json_encode($response);

?>