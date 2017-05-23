function translate (){

var title = document.getElementById("form-signin-heading");
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var remember = document.getElementsByTagName("span")[0];
var button = document.getElementsByClassName("btn")[0];

title.innerHTML = "Por favor inicia sesión";
email.placeholder = "Correo Electrónico";
password.placeholder = "Contraseña";
remember.innerHTML = "Recordar datos";
button.innerHTML = "Iniciar Sesión";

}

translate();

function datos(){
	var mail = document.getElementById("inputEmail").value;
	var contrasena = document.getElementById("inputPassword").value;
	formulario.innerHTML= "<h3>Datos de Formulario</h3>" + "El correo electronico ingresado es" + "<br>" + mail + "<br>" + "La clave ingresada es" + "<br>" + contrasena;
}

datos();
