//Escribe un programa que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

let btnCheck = document.getElementById("btn-take-numbers");
let resultado = document.getElementById("resultado");
btnCheck.addEventListener('click', sumar);
function sumar (){
    let numberOne = parseFloat(document.getElementById("input-one").value);
    let numberTwo = parseFloat(document.getElementById("input-two").value);
    let suma = (numberOne + numberTwo); 
    resultado.innerHTML=`la suma es ${suma}`;
}


