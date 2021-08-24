/*
	Example: GenericViewModule
	Autor: Matías Gastón Santiago
	Versión: 1.0
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

import { GenericController } from "./controller.js"

class GenericView
{
	constructor( id, model )
	{
		this.id = id;
		this.innerModel = model;

		this.innerController = new GenericController(model, this);

		this.show();		
	}

	show()
	{
		let innerHTML = 
		`<h1>GenericApplicationTest</h1>
		 <button id="${this.id}clientBtn">ClientTest</button>
		 <button id="${this.id}serverBtn">ServerTest</button>`;

		document.getElementById(this.id).innerHTML = innerHTML;

		//Controller attach
		document.getElementById(this.id+'clientBtn').addEventListener('click', event => this.innerController.onClientBtnClick(event) );
		document.getElementById(this.id+'serverBtn').addEventListener('click', event => this.innerController.onServerBtnClick(event) );
	}
	
}

export { GenericView };
