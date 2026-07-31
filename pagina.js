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

    mila: {
        password: "194375911",
        imagen:"uwu.jpg",
        texto: `Holi mila.

                    Si ves esto, significa finalmente termine de hacer tu parte :D.

                    Señortia mila, la quiero mucho, posiblemente mucho más de lo que imaginas (bueno, no por nada comence a salir contigo en mayo).

                    Tu personalidad, si bien a veces es un poco agresiva y cambiante, tambien tienes otro lado, que es el lado que más me gusta.

                    Y ese es el lado cariñoso, aunque lo haces con verguenza, a veces eres una persona muy cariñosa, que le gusta abrazar a sus seres queridos.

                    Se que solo te conozco desde hace unos poco meses (5), pero en el poco tiempo que llevo contigo, puedo decir que eres una persona en la cual:
                    
                    Confio, Aprecio, y llegue a amar profundamente, eso es debido a tu forma de ser conmigo.
                    
                    I would i hug you :D hehehe, i like you to much, sorry for not be too expresive.
                    
                    I can promise something to you, (my promise, are important to me), until you don't do something bad to me or a friend, i don't leave you.
                    
                    beacuse i love you but i don't show it "hmm" (insert tsundere sound).
                    
                    Pero bueno, eso, te quiero mucho, y cómo ya dije, eres una de las personas más importantes en mi vida.`
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
        texto: `Wenas, este es un mensaje para la vampira.
                
                Hola toti, este es un texto que te estoy escribiendo debido a mi *incapacidad, para expresarme.
                
                Quiero que sepas, que pese a la casi nula comuniacion que hay actualmente, sigues siendo una de las personas mas importantes de mi vida.
                
                Te quiero mucho, espero que te vaya bien en la vida y en el psicologo :D.
                
                Tambien te queria decir, que la cancion "Un rayo de luz", es muy linda y triste.
                
                Esa cancion me hizo tener una introspectiva, y sinceramente, no se cómo pudiste pasar por todo eso (marzo>).
                
                Tu eres muy fuerte, has pasado por muchas cosas, pero pese a ello, sigues adelante, estoy seguro que nada ni nadie te podra detener de cumplir tus sueños.
                
                Recuerdalo, somos amigos, si alguna vez te sientes mal, recuerda que mi promesa sigue en pie.
                
                Bueno, eso, chau, tkm, cuidate :P.
                
                (<Esto lo agregue despues>).
                
                No nada Xd`
    },

    pelao: {
        password: "916238977",
        imagen: "pelao.jpg",
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
        imagen: "liza.jpg",
        texto: `Hola Profesora Liza.
        
                Hago este texto debido a mi nula capacidad de expresion (el loco tea).
                
                Quiero que sepa que usted es una persona relativamente importante para mi.
                
                No porque sea mi profesora jefe, sino por lo que me mostro y enseño, usted me enseño la programacion.
                
                Me mostro un nuevo mundo, que yo desconocia casi que totalmente, gracias a usted, ahora puedo crear cosas cómo esta.
                
                Adicionalmente, otro punto más a favor para usted, es que usted, cómo casi ningun/a profesor/a, se preocupa por la estabilidad mental de sus alumnos.`
    },

    mama: {
        password: "913121296",
        imagen: "mama.jpeg",
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

    let pass = document.getElementById("password").value;

    if (pass === datos[usuario].password) {

    ocultarLogin();

    document.getElementById("nombreModal").textContent = usuario.toUpperCase();
    console.log("Usuario:", usuario);
    console.log(datos[usuario]);
    console.log("Imagen:", datos[usuario].imagen);
    document.getElementById("imagen").src = datos[usuario].imagen;
    const img = document.getElementById("imagen");
    img.src = datos[usuario].imagen;
    console.log("SRC final:", img.src);
    document.getElementById("texto").textContent = datos[usuario].texto;

    document.getElementById("modal").style.display = "flex";
    }else {

        document.getElementById("error").textContent = "Contraseña incorrecta";

    }

}

function cerrarModal() {

    window.location.href = "index.html";

}
