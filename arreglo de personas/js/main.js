function Persona(nombre,usuario,fecha){
	this.name = nombre;
	this.nick = usuario;
	//Asumo que fecha por parametro es un Array
	this.date = fecha;

	this.getName = function(){
		return res = this.name + " - @" + this.nick;
		return res;
	}

	this.getAge = function(){
		var hoy = new Date();
		var edad = hoy.getFullYear() - this.date
		[2];
	if ((hoy.getMonth() + 1) < this.date[1]){
		edad--;
	}else if(this.date[1] == (hoy.getMonth() + 1)){
		if(hoy.getDate() < this.date[0]){
			edad--;
		}
	}
     return edad;
	};
}
function pedirDatos(mensaje){
	var valor = "";
	do{
		valor = prompt(mensaje);
	}while(valor == "")
	return valor;
}

function mainControl(){
	var numPer = pedirDatos("Ingrese el número de personas");
	var arregloPersonas = [];
	var nameAux, nickAux, diaAux, mesAux, anioAux;

	if(isNaN(numPer)){
		numPer = 2;
	}
    for(var i = 1 ; i <= parseInt(numPer) ; i++){
       nameAux = pedirDatos("Nombre de la persona: " + i);
       nickAux = pedirDatos("Usuario de la persona: " + i);
       diaAux = pedirDatos("DD persona: " + i);
       mesAux = pedirDatos("MM persona: " + i);
       anioAux = pedirDatos("AAAA persona: " + i);

       personaAux = new Persona(nameAux, nickAux, [diaAux, mesAux, anioAux]);
       arregloPersonas.push(personaAux);
    }
    console.log(arregloPersonas);
   
   arregloPersonas.forEach(function(valorActual){
   	document.write(valorActual.getName() + " - " + "Tiene " + valorActual.getAge() + " años <br>");
   });
}