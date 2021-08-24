/*
	Example: UserView Module // CRUD-Development
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

import { UserViewController } from "./controller.js"

function createNewUserDataForm( id, defaultValues )
{
	let innerHTML = 
	`<form id="frmNewUserData" >
		<table>
			<tr>
				<td>
					<label>Nombre de Usuario:</label>
					<input type="text" name="username" value="${defaultValues.username}"></input>					
				</td>
			</tr>
			<tr>
				<td>
					<label>Contraseña:</label>
					<input type="password" name="password" value="${defaultValues.password}"></input>					
				</td>
			</tr>
			<tr>
				<td>
					<label>Nombre:</label>
					<input type="text" name="name" value="${defaultValues.name}"></input>					
				</td>
			</tr>
			<tr>
				<td>
					<label>Apellido:</label>
					<input type="text" name="surname" value="${defaultValues.surname}"></input>					
				</td>
			</tr>
			<tr>
				<td>
					<label>Email:</label>
					<input type="email" name="email" value="${defaultValues.email}"></input>					
				</td>
			</tr>
			<tr>
				<td>
					<label>Teléfono/Celular:</label>
					<input type="text" name="phone_number" value="${defaultValues.phone_number}"></input>	
				</td>
			</tr>
			<tr>
				<td>
					<label>País:</label>
					<input type="text" name="country" value="${defaultValues.country}"></input>	
				</td>
			</tr>
			<tr>
				<td>
					<label>Dirección:</label>
					<input type="text" name="address" value="${defaultValues.address}"></input>	
				</td>
			</tr>
		</table>
	</form>`;

	return innerHTML;
}

class UserView
{
	constructor( id, model )
	{
		this.id = id;
		this.innerModel = model;

		this.innerController = new UserViewController(model, this);

		this.update();

		this.newUserDataDefaultsTest =
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
	}

	update()
	{
		this.innerModel.getAll().then( response => this.updateFrom(response.json()) );		
	}

	
	updateFrom( userArrayPromise )
	{
		userArrayPromise.then( userArray =>
		{
			let innerHTML = 
			`<h1>CRUD Users</h1>
			<table id="${this.id}UserTable">
			<tr>
				<th>Username</th>
				<th>Nombre de usuario</th>
				<th>Contraseña</th>
				<th>Acciones</th>
			<tr>`;

			if ( userArray.length > 0 )
			{
				for( let user of userArray )
				{
					innerHTML += 
					`<tr>
						<td>${user.username}</td>
						<td>${user.name}</td>
						<td>${user.password}</td>
						<td>
							<button btnEditUser>Editar</button>
							<button btnDeleteUser>Borrar</button>
						</td>
					<tr>`
				}
			}
			else
			{
				innerHTML += `<tr><td colspan="4">No hay datos disponibles</td></tr>`;
			};

			innerHTML +=
			`</table>
			<br>
			<button id="${this.id}btnNewUser">Nuevo Usuario</button>
			<button id="${this.id}btnDeleteUserById">Borrar Usuario Puntual</button>

			<div id="id01" class="w3-modal">
				<div class="w3-modal-content">
					<div class="w3-container">
						<span id="${this.id}btnNewUserCancel" class="w3-button w3-display-topright">&times;</span>
						${createNewUserDataForm(this.id, this.newUserDataDefaultsTest)}
						<button id="${this.id}btnNewUserConfirm">Confirmar</button>
					</div>
				</div>
			</div>`;

			//Incrustation
			document.getElementById( this.id ).innerHTML = innerHTML;

			//Controller-Attach (Need to be refactored)
			document.getElementById( this.id + 'btnNewUser').addEventListener('click', event => this.innerController.onNewUserButtonClick(event) );
			
			document.getElementById( this.id + 'btnDeleteUserById').addEventListener('click', event => this.innerController.onDeleteByUsernameButtonClick(event) );

			document.getElementById( this.id + 'UserTable').addEventListener('click', event =>
			{
				if ( event.target.hasAttribute('btnEditUser') )
					this.innerController.onEditButtonClick(event);

				if ( event.target.hasAttribute('btnDeleteUser') )
					this.innerController.onDeleteButtonClick(event);
			});

			//Added controllers
			document.getElementById( this.id + 'btnNewUserCancel').addEventListener('click', event => this.innerController.onNewUserCancelButtonClick(event) );
			document.getElementById( this.id + 'btnNewUserConfirm').addEventListener('click', event => this.innerController.onNewUserConfirmButtonClick(event) );
			
			
		});
	}

	
}

export { UserView };
