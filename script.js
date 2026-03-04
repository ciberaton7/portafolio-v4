function cepillarDientes() 
{
    console.log("1. Cepillando los dientes... (entra y sale de cepillarDientes())");
}
function bañarse()
{
    cepillarDientes(); //llamamos a otra función dentro
    //se apila encima de bañarse() y se ejecuta primero
    //console.log("Cuerpo Limpio");
    console.log("2. Cuerpo limpio (bañarse termina ahora)");
}
function empezarDia()
{
    bañarse();//se apila encima de empezarDia
    //console.log("¡Listo para trabajar!");
    console.log("3. Listo para trabajar! (la pila esta vacia ahora)");
}
empezarDia(); //se apila empezarDia() y se ejecuta primero
// Hasta acá es la lógica que se maneja a través del JS
/*
function mezclarIngredientes(n)
{
    if (n <= 0) {
        console.log("No hay ingredientes para mezclar.");
        return;
    }

    console.log(`Mezclando ingrediente ${n}...`);
}*/

//El DOM nos permite interactuar con los elementos de la página, como botones, imágenes, etc.
//Podemos usar el método getElementById para obtener un elemento específico por su ID
const botonProyectos = document.getElementById("ver-proyectos");    
//Luego, podemos agregar un evento de clic al botón para que ejecute una función cuando se haga clic en él

function mostrarProyectos() 
{
    const proyectosSection = document.getElementById("proyectos");
    proyectosSection.scrollIntoView({ behavior: "smooth" }); // Desplaza suavemente a la sección de proyectos
}

botonProyectos.addEventListener("click", mostrarProyectos);

//cambiar tema
const botonTema = document.getElementById("btn-tema");
const cuerpoPagina = document.body;
function alternarTema() 
{ 
    if(cuerpoPagina.style.backgroundColor === "black")
    {
        cuerpoPagina.style.backgroundColor = "white";
        cuerpoPagina.style.color = "black";
    }
    else
    {
        //si no es negro, lo cambiamos a tema negro
        cuerpoPagina.style.backgroundColor = "black";
        cuerpoPagina.style.color = "white";
    }
}
botonTema.addEventListener("click", alternarTema);

//ejemplo: alerta al hacer clic de un proyecto
const todasLasTarjetas = document.querySelectorAll(".proyecto-card"); //me trae todos los elementos que pertenezcan a una clase
//para cada uno de estos elementos si o si se va a hacer algo

todasLasTarjetas.forEach
(tarjeta=>
{ 
    tarjeta.addEventListener
    (
        "click", function() 
        {
            const nombreProyecto =  tarjeta.querySelector("h3").innerText;
            alert("Haz hecho clic en el proyecto: " + nombreProyecto);
        }
    );
}
);

/*const imagenesBienvenida = document.querySelectorAll("#img-bienvenida img");
imagenesBienvenida.forEach
(imagenesB=>
{
    imagenesB.addEventListener
    (
        "mouseover", function() 
        {
            //alert("Haz hecho clic en una imagen de bienvenida");
            imagenesB.style.boxShadow = "4px 4px 8px rgba(176, 174, 174, 0.2),-4px -4px 8px rgba(176, 174, 174, 0.2)";
            
        }
    ); 


    imagenesB.addEventListener
    (
        "mouseout", function() 
        {
            //alert("Haz hecho clic en una imagen de bienvenida");
            imagenesB.style.boxShadow = "none";
            
        }
    ); 

    
});*/



//variables: let (que puede cambiar) - const (es fino no cambia)

const nombreDev = "Ahmed Centellas"; //FIJO no cambia
let proyectosCompletados = 4; //puede aumentar o disminuir o variar en el tiempo dependiendo del scope

//tipos primitivos
let esInstructor = true; //booleano
let edad = 34; //número
let saludo = "Hola, soy " + nombreDev; //string

//tipos de datos complejos
let habilidades = ["IoT", "Desarrollo Web", "Inteligencia Artificial"]; //array
let experiencia = 
{ //objeto
    años: 10,
    áreas: ["Electrónica", "Desarrollo de Software", "Domótica"]
};

const proyectoNuevo = 
{
    nombre : "Portafolio Personal",
    descripción : "Un sitio web para mostrar mis proyectos y habilidades",
    tecnologías : ["HTML", "CSS", "JavaScript"],
    completado: false

};