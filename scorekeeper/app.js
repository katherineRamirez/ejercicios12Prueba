var score = {carolina : 0, katty : 0}

function puntaje (nombre, puntos){
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