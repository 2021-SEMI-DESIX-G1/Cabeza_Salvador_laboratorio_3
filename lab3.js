var cadena;
function operacion1(){
    
    document.getElementById("p1").addEventListener('click', function(){
        
        cadena = document.getElementById("palindromo").value;
    
   cadena=cadena.replace(/ /g, "");
       
    for (var i = 0; i < cadena.length; i++) {
        if (cadena[i] != cadena[cadena.length-i-1]) {
            return false;
        }
        
    }
    return true;
        
              })
    }
    
    
function operacion3(){
    var ano;
    ano = document.getElementById("ano").value;
    if(((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0)){
        alert("El año: "+ano+" es Bisiesto")
    }else{
        alert("El año no es Bisiesto")
    }
}

var c = document.getElementById("primo").value;
var j = 2;
var numerosPrimos = [];

for (; j < c; j++) {

  if (primo(j)) {
    numerosPrimos.push(j);
  }
  
}

console.log(numerosPrimos);

function primo(numero) {
//var numero = document.getElementById("primo").value;
  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}


    
  // alert(cadena);
