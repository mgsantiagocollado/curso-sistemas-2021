/*
	Example: UserViewController Module // CRUD-Development
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


class UserViewController
{
	constructor( model, view )
	{
		this.innerView = view;
		this.innerModel = model;
		this.innerView.update();
	}

	onNewUserButtonClick()
	{
		window.alert('Por implementar...');
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
		window.alert('Por implementar...');
	}

}

export { UserViewController };
