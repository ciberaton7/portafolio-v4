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
/*botonTema.addEventListener("click", alternarTema);

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
);*/

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

// entender la visibilidad de las variables y la memoria de las funciones
function crearContadorDeProyectos(inicial)
{
    let contador = inicial; //variable local a la función, no es accesible desde fuera
    
    return{
            incrementar: function(){//definimos una función dentro de la función, esta función tiene acceso a la variable contador por el closure
                contador++;
                return `Ahora tienes ${contador} proyectos.`;
            },
            obtenerTotal: () => contador// funcion flecha para obtener el valor actual del contador
    };
}

const miContador = crearContadorDeProyectos(4);
console.log(miContador.incrementar()); // Muestra el valor inicial del contador
console.log(miContador.contador); // No es accesible, devuelve undefined

//otro ejemplo
function crearRastreador(){
    //local /function scope: solo vive aquí dentro de la función
    let conteo = 0;// variable privada, no es accesible desde fuera de la función
    return function() // CLOSURE QUE MANTIENE ACCESO A CONTEO función anónima que se devuelve, es la función que se va a ejecutar cada vez que se llame al rastreador
    {
        conteo++;
        return `has intentado ver los proyectos ${conteo} veces.`;
    };
}

const rastrearclick = crearRastreador();
console.log(rastrearclick()); // Muestra el valor inicial del conteo
console.log(rastrearclick()); // has intentado ver los proyectos 2 veces.

//mutaciones
const misProyectos = [
    {nombre: "E-commerce", techs: ["React","Node.js"]},
    {nombre: "Blog Personal", techs: ["Gatsby","GraphQL"]},
    {nombre: "App de Tareas", techs: ["Vue","Gatsby"]},
];

//usaremos reduce para contar ocurrencias de cada tecnología en los proyectos
const stackStats = misProyectos
    .flatMap (p=> p.techs) //extraemos todas las techs en un solo array
    .reduce((acc, tech) => {
                    acc[tech] = (acc[tech] || 0) + 1;
                    return acc;
                }, {});
console.log(stackStats); // { React: 1, 'Node.js': 1, Gatsby: 2, GraphQL: 1, Vue: 1 }

//filter() creamos un nuevo array con los proyectos que usan React
const proyectosReact = misProyectos.filter( p=> p.techs.includes("React"));

//map(): creamos un nuevo array con solo los nombres de los proyectos
const nombresProyectos = misProyectos.map(p => p.nombre);

//ejemplo de carga de portafolio con fetch() y async/await
async function cargarProyectos(){
    try{
        const response = await fetch("https://api.github.com/users/ciberaton7/repos");//"https://api.github.com/users/tu-usuario/repos"); //simulamos una llamada a una API o archivo local
        //const response = await fetch("https://thesimpsonsapi.com/api/characters/1");//"https://api.github.com/users/tu-usuario/repos"); //simulamos una llamada a una API o archivo local
        if (!response.ok) {
            throw new Error("Error al cargar los proyectos");
        }
        const proyectos= await response.json();
        const contenedorProyectos = document.getElementById("contenedor-proyectos");
        


        contenedorProyectos.innerHTML = "";//limpiar el contenedor antes de agregar los proyectos
        
        proyectos.forEach(proyecto => {
            contenedorProyectos.innerHTML += `
                <div class="proyecto-card">
                    <h3>${proyecto.name}</h3>
                    <p>${proyecto.description || "Sin descripción"}</p>
                    <a href="${proyecto.html_url}" target="_blank">Ver en GitHub</a>
                </div>
                    `;
                    
        
        });
        
        } catch (error) {
            console.error("Error:", error);
            //https://api.github.com/users/tu-usuario/repos
            //https://api.github.com/users/loquendo2309/repos
        }
        document.querySelectorAll(".proyecto-card a").forEach(tarjeta => {
            tarjeta.style.boxShadow = "4px 4px 8px rgba(176, 174, 174, 0.2), -4px -4px 8px rgba(176, 174, 174, 0.2)";                                                         
        
        });
    }   
cargarProyectos();
    
/*
color del fondo del body normalmente: #252525
color del texto para contrastar normalmente: #dddddd;
color del fondo dentro el contenedor (encima el body) background-color: #1e1e1e;
borde de alrededor de las etiquetas mas grandes contenedoras border: #333333 1px solid;
color del brillo de alrededor normal #b0aeae33*/
    //modularidad
    //controlador de interfaz
//TODO ESTO ES LO QUE HICIMOS EN CLASE
    /*const UI ={
        cuerpo : document.body,
        cajaBienvenida : document.getElementById("texto-bienvenida"),
        contProyectos : document.getElementById("contenedor-proyectos"),
        tarjProy : document.getElementsByClassName("proyecto-card"),
        tituloMisProyectos : document.querySelector("#proyectos h2"),

        alternarColor: function(){
            const esOscuro = this.cuerpo.style.backgroundColor ==="black";

            
            this.cuerpo.style.backgroundColor = esOscuro ? "#333333" : "black";
            this.cajaBienvenida.style.backgroundColor = esOscuro ? "#d8c5a6" : "#252525";
            this.contProyectos.style.backgroundColor = esOscuro ? "#1c1b1b" : "#1c1b1b";

            this.cajaBienvenida.style.color = esOscuro ? "#252525" : "#dddddd";
            this.cuerpo.style.color = esOscuro ? "#252525" : "#dddddd";
            this.tituloMisProyectos.style.color ="#dddddd";

            this.tarjProy = document.querySelectorAll(".proyecto-card");
            this.tarjProy.forEach(tarjeta => {
            tarjeta.style.backgroundColor = esOscuro ? "#dddddd" : "#333333";
            });

            this.tarjProy = document.querySelectorAll(".proyecto-card a");
            this.tarjProy.forEach(tarjeta => {
            tarjeta.style.color = esOscuro ? "#333333" : "#dddddd";
            });
  
            
        },
        irAseccion: function(id){
            document.getElementById(id).scrollIntoView({behavior: "smooth"});}
        };
        botonTema.addEventListener("click",() =>UI.alternarColor());
        //botonProyectos.addEventListener("click",() => UI.irAseccion("proyectos"));


        */
        //ACÁ HICE LA MODIFICACIÓN SEGÚN LO PEDIDO EN LA TAREA DE LA PLATAFORMA
        // ==========================================
// CONTROLADOR DE INTERFAZ (UI) MODULARIZADO
// ==========================================
    const UI = {
        cuerpo: document.body,

        alternarColor: function() {
            // classList.toggle hace la magia: si la clase está, la quita. Si no está, la pone.
            this.cuerpo.classList.toggle("modo-alternativo");
            
            // Guardamos la preferencia en el LocalStorage
            if (this.cuerpo.classList.contains("modo-alternativo")) {
                localStorage.setItem("temaPreferido", "alternativo");
            } else {
                localStorage.setItem("temaPreferido", "normal");
            }
        },
        
        irAseccion: function(id){
            document.getElementById(id).scrollIntoView({behavior: "smooth"});
        }
    };

    botonTema.addEventListener("click", () => UI.alternarColor());
    botonProyectos.addEventListener("click", () => UI.irAseccion("proyectos"));
        /*
        // ejemplo de carga de portafolio  con fetch() y async/await
cargarProyectos();
 
/// modularidad
// controlador de interfaz
 
const UI = {
    cuerpo: document.body,
 
    alternarColor: function() {
        const esOscuro = this.cuerpo.style.backgroundColor === "black";
        this.cuerpo.style.backgroundColor = esOscuro ? "white" : "black";
        this.cuerpo.style.color = esOscuro ? "black" : "white";
    },
    irAseccion: function(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" }); }
 
};
botonTema.addEventListener("click", () => UI.alternarColor());
        */

//local storage para guardar preferencias del usuario ESTO ES LO QUE REEMPLACÉ INGE PARA HACER LA TAREA TOMANDO EN CUENTA EL CAMBIO DEL MODO OSCURO Y NORMAL
/*function guardartema(color){
    localStorage.setItem("temaPreferido", color);
}

const temaGuardado = localStorage.getItem("temaPreferido");
if(temaGuardado){
    cuerpoPagina.style.backgroundColor = temaGuardado;
    cuerpoPagina.style.color = temaGuardado === "black" ? "white" : "black";
}*/

// 
// RECUPERAR PREFERENCIAS AL CARGAR LA PÁGINA
// 
// Al recargar la página, verificamos si el usuario había dejado el tema alternativo
const temaGuardado = localStorage.getItem("temaPreferido");

if (temaGuardado === "alternativo") {
    // Si era alternativo, le ponemos la clase directamente al body
    document.body.classList.add("modo-alternativo");
}

//delegacion de eventos: un solo escuchador para todo el contenedor de proyectos
const contenedor = document.getElementById("contenedor-proyectos");
contenedor.addEventListener("click", function(evento) {
// .target el elemento que fue clickeado y el .clsest busca el ancestro más cercano o el padre más cercano que coincida con el selector dado    
    const tarjeta = evento.target.closest(".proyecto-card");
    if(tarjeta){
        alert("UTILIZANDO DELEGACIÓN DE EVENTOS - Haz hecho clic en un proyecto: " + tarjeta.querySelector("h3").innerText);
 
    }
});