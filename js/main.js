// etiquetas del index


//FUNCION
function activar(){
    var menu = document.getElementById('menu');
    var ico_menu = document.getElementById('ico_menu');
    var ico_menu2 = document.getElementById('ico_menu2');
    menu.classList.add("activar");
    ico_menu.classList.add("desactivar");
    ico_menu2.classList.remove("desactivar");
    
}
function desactivar(){
    var menu = document.getElementById('menu');
    var ico_menu = document.getElementById('ico_menu');
    var ico_menu2 = document.getElementById('ico_menu2');
    menu.classList.remove("activar");
    ico_menu.classList.remove("desactivar");
    ico_menu2.classList.add("desactivar");
    
}
function activar2(){
    var carp = document.getElementById('carp');
    carp.classList.remove("desactivar");
    
   
    
}
function cerrar(){
    var carp = document.getElementById('carp');
    carp.classList.add("desactivar");
    
   
    
}
var ico_archiv = document.getElementById('ico_archiv');

//Evento
ico_menu.addEventListener('click',activar);
ico_archiv.addEventListener('click',activar2);