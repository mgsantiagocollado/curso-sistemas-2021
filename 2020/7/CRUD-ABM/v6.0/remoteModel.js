/*
	Example: RemoteModelJS // CRUD-Development
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

class RemoteModel extends EventTarget
{
	constructor( url )
	{
		super();
		this.url = url;
	}

	create( userData )
	{
		//Por implementar...
	}

	edit( username, newUserData )
	{
		//Por implementar...
	};

	delete( username )
	{
		//Por implementar...
	};

	getByUsername( username )
	{
		//Por implementar...
	};

	getAll()
	{
		return fetch( this.url, { method:'GET' } ).then( response=>response.json() );
	};

	isUsernameAlreadyExists( username )
	{
		//Por implementar...
	};

	isValidUserData( userData )
	{
		//Por implementar...
	};
}

export { RemoteModel };
