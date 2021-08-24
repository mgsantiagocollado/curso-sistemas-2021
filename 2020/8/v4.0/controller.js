/*
	Example: UserViewController Module // CRUD-Development
	Autor: Matías Gastón Santiago
	Versión: 7.0
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

import {UserModel} from './model.js';

function formDataToObject( formData )
{
	let result = {};

	for ( let key of formData.keys() ) 
	{
		obj[key] = formData.getAll(key);
	}
	return obj;
}

class UserViewController
{
	constructor( model, view )
	{
		this.innerView = view;
		this.innerModel = model;
	}

	onNewUserConfirmButtonClick()
	{
		//Traer los datos del form de la vista.
		let formViewData = new FormData( document.getElementById("frmNewUserData") );
		let formUserData = Object.fromEntries(formViewData);

		//Validaciones tempranas (Cliente)
		let success = true;

		if ( !this.innerModel.isValidUserData( formUserData ) )
		{
			window.alert("ClientError: Los datos del usuario no cumplen con la especificación requerida.");
			success = false;
		}

		//Superadas todas las validaciones tempranas del cliente, invocar el modelo (despacho)
		if ( success )
		{
			//Modelo es asincrónico, al final de la cadena se chequea si hubo errores.
			this.innerModel.create( formUserData )
			.then( response => response.json() )
			.then( response => {if ( response != null && response.hasOwnProperty('status') ) window.alert("ServerError: " + response.description )} )
			.then( () => this.innerView.update() );
		}
		

		//Ocultar el modal
		document.getElementById('id01').style.display='none';
		//this.innerView.hideNewUserModal();
	}

	onNewUserCancelButtonClick()
	{
		//Ocultar el diálogo modal como consecuencia de la cancelación del pedido.
		document.getElementById('id01').style.display='none';
	}

	onNewUserButtonClick()
	{
		//window.alert('Por implementar...');
		//Desplegar el diálogo modal que solicita los datos para el nuevo usuario.

		document.getElementById('id01').style.display='block';
	}

	onEditButtonClick()
	{
		window.alert('Por implementar...');
	}

	onDeleteButtonClick()
	{
		window.alert('Por implementar...');
	}

	onDeleteByUsernameButtonClick()
	{
		let id = window.prompt('Indique el ID del usuario a borrar');
		this.innerModel.delete(id).then( response => this.innerView.update() );
	}

}

export { UserViewController };
