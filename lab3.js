 

        
function operacion3(){
    var ano;
    ano = document.getElementById("ano").value;
    if(((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0)){
        alert("El año: "+ano+" es Bisiesto")
    }else{
        alert("El año no es Bisiesto")
    }
}

