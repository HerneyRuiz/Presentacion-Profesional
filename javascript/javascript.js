"use strict"

// Traigo las etiquetas del html y las pongo en variables
var abrir = document.getElementById('menu');
var menu = document.getElementById('nav');
var cerrado = true;

// evento click para el meunu
abrir.addEventListener('click', desplegar);


//creo el metodo para la animacion el menu

function desplegar(){
  
    if(cerrado == true){
    menu.style.width = "50%";
    cerrado = false;
    }else{
    menu.style.width = "0%";
    menu.style.overflow = "hidden";
    cerrado = true;
    }

}

// Evento window para resetiar los estilos

window.addEventListener("resize", resetiar);

// metodo para resetiar los estilos

function resetiar(){
    
    if(screen.width > 700){

        menu.style.removeProperty("overflow");
        menu.style.removeProperty('width');
    }
}




