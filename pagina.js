const datos = {
    walala: {
        password: "193049179",
        imagen: "walala.jpeg",
        texto: `Wena Víctor.

                    Si ves esto, significa que ya te he dado acceso a la página que he creado. Espero que te guste lo que voy a escribir.

                    Socio, te quiero caleta, aunque no lo voy a demostrar ni a palo (la wea tsundere XDDD). Muchas gracias por ser mi amigo.

                    Gracias por estar ahí en las buenas y en las malas. Cuando nadie más apaña a salir, tú sí lo haces.

                    Cuando estoy mal, me das consejos, y cuando estoy bien, lo potencias. Gracias por wearme tanto xD.`
    },

    suricata: {
        password: "109470815",
        imagen: "suricata.jpg",
        texto: `Esto es para mi querida hermana mayor :D.
        
                Hola, se que en general no hablamos tanto cómo antes, debido a qeu tu ahora trabajas y yo estoy en el Tp.
                
                Por esa razon, y debido a que no se extresar mis sentimientos (XD), es que hago esto.
                
                Te quiero mucho, eres una de las personas más importantes para mi, espero que sigas teniendo exito en tu vida.
                
                Que te vaya bien, tkm, Adious :D`
    },

    toti: {
    password: "874310289",
    imagen: "anto.jpeg",
    textoHTML: `
        <p>Holi, este es un pequeño texto con musica y videos para la vampira (toti) :3.</p>

        <button id="btnMusica" onclick="reproducirCancion()">
            Toti escucha esto por mientras lees :3
        </button>

        <p>Hola toti, como estas?, espero que muy bien :D, yo ando escribiendote esto, un dia lunes, casi a las 2 AM.</p>

        <p>Porque escribiria algo y me daria la paja de estar a altas horas de la noche en el pc?</p>

        <p>Porque como ya te lo eh dicho, y te lo seguire diciendo... Te Quiero Mucho :3.</p>

        <p>Eres una persona muy especial para mi y una de las más importantes en mi vida.</p>

        <p>Despues de todo, nosotros dos hemos pasado por muchas cosas juntos. tanto buenas como malas.</p>

        <p>Pero pese a ello, hemos seguido siendo amigos, y eso es algo que te quiero agraceder de la forma mas sincera que puedo, te pregunatras como.</p>

        <p>Bien, de la siguiente forma:</p>

        <p>-Escribiendote esto.</p>

        <p>-Haciendolo con el cariño que te mereces</p>

        <p>-Llorando en el proceso (ahora mismo XD)</p>

        <p>-Escuchando musica que se que te gusta :3</p>

        <p></p>
        
        <p></p>

        <p></p>

        <p></p>

        <p></p>

        <video controls width="400" height="300">
            <source src="thank_you_music_ahora_viendote.mp4" type="video/mp4">
            Tu navegador no puede reproducir este video.
        </video>
        <p></p>
        <p></p>
        <p></p> 
         <video controls width="400" height="300">
            <source src="thank_you_music_toma_el_mundo.mp4" type="video/mp4">
            Tu navegador no puede reproducir este video.
        </video>
    `
    },

    pelao: {
        password: "916238977",
        imagen: "img/pelao.jpg",
        texto: `Esto es para el pelao.
        
                Wena pelao, como tai?, espero que estes bien :P.
                
                Se que en general, no hablamos tanto, sino que principalmente webeamos.
                
                Pese a ellos, somos amigos, llevamos siendo amigos más de 10 años.
                
                Posiblemente, nuestra amistad, sea perduradera en el tiempo.
                
                Weno, eso, queria que sepas, que eres una persona importante para mi, cuidate.
                
                Adious :D 🗣️`
    },

    liza: {
        password: "908714329",
        imagen: "img/liza.jpg",
        texto: `Hola Profesora Liza.
        
                Hago este texto debido a mi nula capacidad de expresion (el loco tea).
                
                Quiero que sepa que usted es una persona relativamente importante para mi.
                
                No porque sea mi profesora jefe, sino por lo que me mostro y enseño, usted me enseño la programacion.
                
                Me mostro un nuevo mundo, que yo desconocia casi que totalmente, gracias a usted, ahora puedo crear cosas cómo esta.
                
                Adicionalmente, otro punto más a favor para usted, es que usted, cómo casi ningun/a profesor/a, se preocupa por la estabilidad mental de sus alumnos.`
    },

    mama: {
        password: "913121296",
        imagen: "img/mama.jpeg",
        texto: `Hola, esto es para usted mamá.
        
                Este es un texto que le estoy escribiendo (me tuve que poner a programar para decirlo) debido a que no se cómo expresarme.
                
                Bien ya sabe, que soy tengo nula capacidad de habilidades sociales, debidoa ello, no se cómo demostrar afecto.
                
                Le queria decir que la quiero mucho, aunque no se note debido a mi forma de ser :D.`
    }

};

let usuario = "";


function abrirLogin(nombre) {

    usuario = nombre;

    document.getElementById("login").style.display = "flex";
    document.getElementById("titulo").textContent = "Contraseña para " + nombre;
    document.getElementById("password").value = "";
    document.getElementById("error").textContent = "";

}


function cerrarLogin() {

    alert("¿Para qué te devuelves? xd");

    ocultarLogin();

}


function ocultarLogin() {

    document.getElementById("login").style.display = "none";

}


function verificar() {

    const pass = document.getElementById("password").value;

    if (pass === datos[usuario].password) {

        ocultarLogin();

        document.getElementById("nombreModal").textContent = usuario.toUpperCase();

        const img = document.getElementById("imagen");
        img.src = datos[usuario].imagen;

        const texto = document.getElementById("texto");

        // Si la persona tiene textoHTML, muestra HTML
        if (datos[usuario].textoHTML) {

            texto.innerHTML = datos[usuario].textoHTML;

        } else {

            texto.textContent = datos[usuario].texto;

        }

        document.getElementById("modal").style.display = "flex";

    } else {

        document.getElementById("error").textContent = "Contraseña incorrecta";

    }

}


function reproducirCancion() {

    const musica = document.getElementById("musica");
    const boton = document.getElementById("btnMusica");

    if (musica.paused) {

        musica.play()
            .then(() => {
                boton.textContent = '⏸ Pausar "Nos keremos tanto"';
            })
            .catch(error => {
                console.error("No se pudo reproducir la canción:", error);
                alert("No se pudo reproducir la canción. Revisa que el archivo MP3 esté disponible.");
            });

    } else {

        musica.pause();
        boton.textContent = '▶ Reproducir "Nos keremos tanto"';

    }
}

function cambiarModo() {
    const cuerpo = document.body;
    const boton = document.getElementById("btnModoOscuro");

    cuerpo.classList.toggle("modo-oscuro");

    if (cuerpo.classList.contains("modo-oscuro")) {
        boton.textContent = "☀️ Modo claro";
        localStorage.setItem("modo", "oscuro");
    } else {
        boton.textContent = "🌙 Modo oscuro";
        localStorage.setItem("modo", "claro");
    }
}

window.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("btnModoOscuro");

    if (localStorage.getItem("modo") === "oscuro") {
        document.body.classList.add("modo-oscuro");
        boton.textContent = "☀️ Modo claro";
    }
});
