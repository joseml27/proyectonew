// etiquetas del index
var menu = document.getElementById('menu');
var ico_menu = document.getElementById('ico_menu');

//FUNCION
function activar(){
    menu.classList.add("activar");
}

//Evento
ico_menu.addEventListener('click',activar);