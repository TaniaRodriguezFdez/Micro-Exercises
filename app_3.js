
function sayHello(){
let nameUser = document.getElementById("user-name")
let userName = prompt('Escribe tu nombre');
nameUser.innerHTML = ("Hola " + userName)
}
sayHello();