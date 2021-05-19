var palabra= parseInt(prompt("Ingrese una cadena"));
var binario = palabra.toString(2);
console.log(binario);
function texto()
{
 
	// eliminamos los espacios en blanco
	//palabra=palabra.replace(/ /g, "");
 
	for (var i=0;i<palabra.length;i++){
		if(palabra[i]!=palabra[palabra.length-i-1]){
			return false;
		}
	}
	return true;
}
 
function texto2()
{
    
    
	// eliminamos los espacios en blanco
	//binario=binario.replace(/ /g, "");
 
	for (var i=0;i<binario.length;i++){
		if(binario[i]!=binario[binario.length-i-1]){
			return false;
		}
	}
	return true;
}

if(texto())
{
	alert("Esto es palíndromo en Base 10");
}else{
	alert("Esto no es palíndromo en Base 10")
}

if (texto2()) {
    alert("Esto es palíndromo en Base 2");
}else{
	alert("Esto no es palíndromo en Base 2")
}
