const datos = {

    walala: {
        password: "193049179",
        imagen: "img/walala.jpeg",
        texto: `Wena Víctor.

                    Si ves esto, significa que ya te he dado acceso a la página que he creado. Espero que te guste lo que voy a escribir.

                    Socio, te quiero caleta, aunque no lo voy a demostrar ni a palo (la wea tsundere XDDD). Muchas gracias por ser mi amigo.

                    Gracias por estar ahí en las buenas y en las malas. Cuando nadie más apaña a salir, tú sí lo haces.

                    Cuando estoy mal, me das consejos, y cuando estoy bien, lo potencias. Gracias por wearme tanto xD.`
    },

    mila: {
        password: "194375911",
        imagen:"uwu.jpg",
        texto: "Este es el mensaje de Mila."
    },

    suricata: {
        password: "109470815",
        imagen: "suricata.jpg",
        texto: "Este es el mensaje de Suricata."
    },

    toti: {
        password: "874310289",
        imagen: "anto.jpeg",
        texto: "Este es el mensaje de Toti."
    },

    pelao: {
        password: "916238977",
        imagen: "pelao.jpg",
        texto: "Este es el mensaje de Pelao."
    },

    liza: {
        password: "908714329",
        imagen: "liza.jpg",
        texto: "Este es el mensaje de Liza."
    },

    mama: {
        password: "913121296",
        imagen: "mama.jpeg",
        texto: "Este es el mensaje para máma."
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

    let pass = document.getElementById("password").value;

    if (pass === datos[usuario].password) {

    ocultarLogin();

    document.getElementById("nombreModal").textContent = usuario.toUpperCase();
    document.getElementById("imagen").src = datos[usuario].imagen;
    document.getElementById("texto").textContent = datos[usuario].texto;

    document.getElementById("modal").style.display = "flex";
    }else {

        document.getElementById("error").textContent = "Contraseña incorrecta";

    }

}

function cerrarModal() {

    window.location.href = "index.html";

}
