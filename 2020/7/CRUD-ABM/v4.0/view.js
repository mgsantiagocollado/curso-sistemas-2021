/*
	Example: UserView Module // CRUD-Development
	Autor: Matías Gastón Santiago
	Versión: 4.0
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

class UserView
{
	constructor( id, model )
	{
		this.innerModel = model;
		this.id = id;
		this.update();
	}

	update()
	{
		let innerHTML = 
		`<h1>CRUD Users</h1>
		<table>
		<tr>
			<th>Username</th>
			<th>Nombre de usuario</th>
			<th>Contraseña</th>
			<th>Acciones</th>
		<tr>`;

		for( let user of this.innerModel.getAll() )
		{
			innerHTML += 
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

		innerHTML +=
		`</table>
		<br>
		<button id="${this.id}btnNewUser">Nuevo Usuario</button>
		<button id="${this.id}btnTest">TestButton</button>`;

		document.getElementById( this.id ).innerHTML = innerHTML;
		document.getElementById( this.id + 'btnNewUser').addEventListener('click', event => this.onNewUserButtonClick(event) );
		document.getElementById( this.id + 'btnTest').addEventListener('click', event => this.onTestButtonClick(event) );
	}

	onNewUserButtonClick()
	{
		console.log('onNewUserButtonClick()');
		let username = window.prompt('Ingrese username para el nuevo usuario');
		this.innerModel.create({username:username, name:"Ana", password:"a46546546547hK$"});
	}

	onEditButtonClick()
	{
		console.log('onEditButtonClick()');
		window.prompt('Editando el usuario', 'Datos del usuario');
	}

	onTestButtonClick()
	{
		console.log('onTestButtonClick()');
		let username = window.prompt('Ingrese username para eliminar');
		window.confirm('¿Está seguro de borrar el usuario?');
		this.innerModel.delete(username);
	}

}

export { UserView };
