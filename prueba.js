
const numero = parseInt(prompt("Introduce un número"));
var j =1;
var numerosPrimos = [];
var suma=0;

for (; j <= numero; j++) {

    if (primo(j)) {
      numerosPrimos.push(j);
    }
    
  }
  
  
  for (let i = 0; i < numerosPrimos.length; i++) {
    suma =suma + numerosPrimos[i];
    
}
alert(suma);
//console.log(numerosPrimos);

function primo(numero) {
    
  for ( i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }
  

  return numero ;
}
