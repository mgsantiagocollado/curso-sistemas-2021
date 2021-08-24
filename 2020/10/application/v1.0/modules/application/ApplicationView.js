/*
	Example: ApplicationView
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

import { ApplicationController } from "./ApplicationController.js"
import { LoginView } from "../login/LoginView.js"
import { LoginModel } from "../login/LoginModel.js"

class ApplicationView
{
	constructor( id, model )
	{
		this.id = id;
		this.innerModel = model;

		this.innerController = new ApplicationController(model, this);

		this.navbarButtonArray = new Array();

		this.show();		
	}

	clear()
	{
		document.getElementById('login').innerHTML = '';
		document.getElementById("navbar").innerHTML = '';
		document.getElementById("sidebar").innerHTML = '';
		document.getElementById("body").innerHTML = '';
		document.getElementById("footer").innerHTML = '';
	}

	normal()
	{
		this.clear();

		this.navbar();
		this.sidebar();
		this.body();
		this.footer();
	}

	login()
	{
		this.clear();
		
		let loginModel = new LoginModel();
		let loginView = new LoginView('login',loginModel);
		loginView.show();
		loginView.addEventListener('login', event => this.innerController.onlogin() );
	}

	navbar()
	{
		let innerHTML =
		`<div class="w3-top">
		  <div class="w3-bar w3-theme w3-top w3-left-align w3-large">
		    <a id="navbarButton" class="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1"><i class="fa fa-bars"></i></a>
		    <a href="#" class="w3-bar-item w3-button w3-theme-l1">Start</a>`;

		for( let button of this.navbarButtonArray )
		{
			innerHTML+=`<a id="${button.id}" href="${button.href}" class="w3-bar-item w3-button w3-hide-small w3-hide-medium w3-hover-white">${button.title}</a>`;
		}
		
		innerHTML += `</div></div>`;

		document.getElementById("navbar").innerHTML = innerHTML;
		document.getElementById("navbarButton").addEventListener('click', event => this.showSidebar() );

		//se vuelve a efectuar la misma iteración:
		//for(let button of this.navbarButtonArray)
		//document.getElementById(button.id).addEventListener(button.eventName, functionName)

		return innerHTML;
	}

	addButtonToNavbar( buttonData )
	{
		/*
		{
			id:
			title:'Etiqueta'
			href:''
			controllerHandler:{'eventName', functionName }
		}*/

		this.navbarButtonArray.push(buttonData);
		this.navbar();
	}

	sidebar()
	{
		let innerHTML =
		`<nav class="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left" id="mySidebar">
		  <a id="sidebarButton" class="w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large" title="Close Menu">
		    <i class="fa fa-remove"></i>
		  </a>
		  <h4 class="w3-bar-item"><b>Menu</b></h4>
		  <a class="w3-bar-item w3-button w3-hover-black" href="#">Link</a>
		  <a class="w3-bar-item w3-button w3-hover-black" href="#">Link</a>
		  <a class="w3-bar-item w3-button w3-hover-black" href="#">Link</a>
		  <a class="w3-bar-item w3-button w3-hover-black" href="#">Link</a>
		</nav>
		<div class="w3-overlay w3-hide-large" style="cursor:pointer" title="close side menu" id="myOverlay"></div>`;

		document.getElementById("sidebar").innerHTML = innerHTML;
		document.getElementById("sidebarButton").addEventListener('click', event => this.showSidebar() );
		document.getElementById("myOverlay").addEventListener('click', event => this.hideSidebar() );

		return innerHTML;
	}

	body()
	{
		let innerHTML = 
		`<div id="appBody" class="w3-main">
		  <div class="w3-row w3-padding-64">
		    <div class="w3-twothird w3-container">
		      <h1 class="w3-text-teal">Heading</h1>
		      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
		        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		    </div>		   
		  </div>
		</div>`;

		document.getElementById("body").innerHTML = innerHTML;

		return innerHTML;
	}

	footer()
	{
		let innerHTML =
		`<footer id="myFooter">
		    <div class="w3-container w3-theme-l2 w3-padding-32">
		      <h4>Footer</h4>
		    </div>

		    <div class="w3-container w3-theme-l1">
		      <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
		    </div>
		  </footer>`;

		document.getElementById("footer").innerHTML = innerHTML;

		return innerHTML;
	}

	showSidebar()
	{
		let mySidebar = document.getElementById("mySidebar");
		let overlayBg = document.getElementById("myOverlay");

		if (mySidebar.style.display === 'block')
		{
			mySidebar.style.display = 'none';
			overlayBg.style.display = "none";
		} 
		else 
		{
			mySidebar.style.display = 'block';
			overlayBg.style.display = "block";
		}
	}

	hideSidebar()
	{
		let mySidebar = document.getElementById("mySidebar");
		let overlayBg = document.getElementById("myOverlay");

		mySidebar.style.display = "none";
		overlayBg.style.display = "none";
	}

	show()
	{
		this.login();
	}
	
}

export { ApplicationView };
