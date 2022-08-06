//funcion que aplica el estil a la opcion sellecionada en el menu y quita la previamente seleccionado
function seleccionar(link){
    var opciones = document.querySelector('#links a')
    opciones[0].className="";
    opciones[1].className="";
    opciones[2].className="";
    opciones[3].className="";
    opciones[4].className="";
    link.className="seleccionado";

//hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
    var x = document.getElementById("nav");
    x.className="";
}

//funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className == ""){
        x.className = "responsive";
    }else{
        x.className="";
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("react").classList.add("barra-progreso3");
        document.getElementById("java").classList.add("barra-progreso4");
        document.getElementById("python").classList.add("barra-progreso5");
        document.getElementById("bd").classList.add("barra-progreso6");
        document.getElementById("ps").classList.add("barra-progreso7");

    }
}
