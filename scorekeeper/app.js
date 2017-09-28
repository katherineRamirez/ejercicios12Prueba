var score = {carolina : 0, katty : 0}

function puntaje (nombre, puntos){    // bien hecho
	var lista = Object.keys(score)
	if(nombre == lista[0]){
		score[lista[0]] += puntos
	}
	if(nombre == lista[1]){ 
		score [lista[1]] += puntos
	}
}

function total () {
	console.log(score);
}


// esto hice yo
/*var score = {carolina : 0, fernanda : 0}        //crear objeto yo y mi amiga

function sumarPuntaje(nombre, puntos){
	score[nombre] += puntos
}

function totalPuntos(){
	console.log(score)
}*/