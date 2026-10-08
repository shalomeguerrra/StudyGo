let trabajos = [];
let tiempo = 300;
let temporizador = null;
let trabajosGuardados =
    localStorage.getItem("trabajosStudyGo");
if (trabajosGuardados) {
    trabajos = JSON.parse(trabajosGuardados);
}
function guardarTrabajos() {
    localStorage.setItem(
        "trabajosStudyGo",
        JSON.stringify(trabajos)
    );
}
function agregarTrabajo() {
    let nombre =
        document.getElementById("nombreTrabajo").value;
    let materia =
        document.getElementById("materia").value;
    let fecha =
        document.getElementById("fecha").value;
    if (nombre == "" || fecha == "") {
        alert(
            "Completa el nombre del trabajo y la fecha."
        );
        return;
    }
    let trabajo = {
        nombre: nombre,
        materia: materia,
        fecha: fecha,
        pasos: [
            false,
            false,
            false,
            false
        ]
    };
    trabajos.push(trabajo);
    guardarTrabajos();
    document.getElementById("nombreTrabajo").value = "";
    document.getElementById("fecha").value = "";
    mostrarTrabajos();
    mostrarAlertas();
}
function mostrarTrabajos() {
    let lista =
        document.getElementById("listaTrabajos");
    if (trabajos.length == 0) {
        lista.innerHTML = `
            <p class="vacio">
                Todavía no tienes trabajos registrados.
            </p>
        `;
        return;
    }
    lista.innerHTML = "";
    for (
        let i = 0;
        i < trabajos.length;
        i++
    ) {
        let trabajo = trabajos[i];
        let completados = 0;
        for (
            let j = 0;
            j < trabajo.pasos.length;
            j++
        ) {
            if (trabajo.pasos[j] == true) {
               completados++;
            }
        }
        let porcentaje =
            completados * 25;
        let html = `
            <div class="trabajo">
                <h3>
                    ${trabajo.nombre}
                </h3>
                <p>
Materia:
                    <strong>
                        ${trabajo.materia}
                    </strong>
                </p>
                <p>
Fecha de entrega:
                    <strong>
                        ${trabajo.fecha}
                    </strong>
                </p>
                <div class="progreso">
                    <div
                        class="barra"
                        style="width: ${porcentaje}%"
                    >
                    </div>
                </div>
                <p>
Progreso:
                    <strong>
                        ${porcentaje}%
                    </strong>
                </p>
                <div class="check">
                    <label>
                        <input
                            type="checkbox"
                            onchange="
                                cambiarPaso(
                                    ${i},
                                    0
                                )
                            "
                            ${
                                trabajo.pasos[0]
                                    ? "checked"
                                    : ""
                            }
                        >
                        Entendí qué tengo que hacer
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            onchange="
                                cambiarPaso(
                                    ${i},
                                    1
                                )
                            "
                            ${
                                trabajo.pasos[1]
                                    ? "checked"
                                    : ""
                            }
                        >
                        Tengo los materiales
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            onchange="
                                cambiarPaso(
                                    ${i},
                                    2
                                )
                            "
                            ${

                                trabajo.pasos[2]
                                    ? "checked"
                                    : ""

                            }

                        >

                        Ya hice una parte

                    </label>



                    <label>

                        <input
                            type="checkbox"
                            onchange="
                                cambiarPaso(
                                    ${i},
                                    3
                                )
                            "

                            ${

                                trabajo.pasos[3]
                                    ? "checked"
                                    : ""

                            }

                        >

                        Revisé y está listo

                    </label>


                </div>



                <button
                    class="secundario"
                    onclick="
                        ayudarEmpezar(${i})
                    "
                >

                    💡 Ayúdame a empezar

                </button>



                <button
                    onclick="
                        eliminarTrabajo(${i})
                    "
                >

                    🗑 Eliminar trabajo

                </button>


            </div>

        `;



        lista.innerHTML += html;

    }

}
function cambiarMaterias() {

    let grado = document.getElementById("grado").value;

    let materia = document.getElementById("materia");

    materia.innerHTML = "";


    if (grado == "6") {

        materia.innerHTML = `
            <option>Matemáticas</option>
            <option>Lenguaje</option>
            <option>Biología</option>
            <option>Sociales</option>
             <option>Lab. Inglés</option>
            <option>Inglés</option>
             <option>Cátedra</option>
              <option>Democracia</option>
               <option>Educación física</option>
                <option>Fisicoquímica</option>
                 <option>Pire</option>
                  <option>Gestión empresarial</option>
                   <option>Tecnología</option>
                    <option>Estadística</option>
                     <option>Geometría</option>
                      <option>Artes</option>
                       <option>Lectura Crítica</option>
        `;

    }


    else if (grado == "7") {

        materia.innerHTML = `
                <option>Matemáticas</option>
            <option>Lenguaje</option>
            <option>Biología</option>
            <option>Sociales</option>
             <option>Lab. Inglés</option>
            <option>Inglés</option>
             <option>Cátedra</option>
              <option>Democracia</option>
               <option>Educación física</option>
                <option>Fisicoquímica</option>
                 <option>Pire</option>
                  <option>Gestión empresarial</option>
                   <option>Tecnología</option>
                    <option>Estadística</option>
                     <option>Geometría</option>
                      <option>Artes</option>
                       <option>Lectura Crítica</option>
        `;

    }


    else if (grado == "8") {

        materia.innerHTML = `
                   <option>Álgebra</option>
            <option>Lenguaje</option>
            <option>Biología</option>
            <option>Sociales</option>
             <option>Lab. Inglés</option>
            <option>Inglés</option>
             <option>Cátedra</option>
              <option>Democracia</option>
               <option>Educación física</option>
                <option>Fisicoquímica</option>
                 <option>Pire</option>
                  <option>Gestión empresarial</option>
                   <option>Tecnología</option>
                    <option>Estadística</option>
                     <option>Geometría</option>
                      <option>Artes</option>
                       <option>Lectura Crítica</option>
        `;

    }


    else if (grado == "9") {

        materia.innerHTML = `
        <option>Álgebra</option>
            <option>Lenguaje</option>
            <option>Biología</option>
            <option>Sociales</option>
             <option>Lab. Inglés</option>
            <option>Inglés</option>
             <option>Cátedra</option>
              <option>Democracia</option>
               <option>Educación física</option>
                <option>Fisicoquímica</option>
                 <option>Pire</option>
                  <option>Gestión empresarial</option>
                   <option>Tecnología</option>
                    <option>Estadística</option>
                     <option>Geometría</option>
                      <option>Artes</option>
                       <option>Lectura Crítica</option>
        `;

    }


    else if (grado == "10") {

        materia.innerHTML = `
            <option>Trigonometría</option>
            <option>Física</option>
            <option>Química</option>
            <option>Filosofía</option>
            <option>Inglés</option>
                    <option>Lenguaje</option>
            <option>Lógica de Automatización</option>
            <option>Biología</option>
            <option>Sociales</option>
             <option>Lab. Inglés</option>
            <option>Economía y política</option>
             <option>Cátedra</option>
              <option>Estadística</option>
               <option>Educación física</option>
                <option>Dibujo técnico</option>
                 <option>Pire</option>
                  <option>Proyecto de investigación</option>
                   <option>Tecnología</option>
                    <option>Aplicación de la automatización</option>
                     <option>Lectura Crítica</option>
          }
        `;

    }


    else if (grado == "11") {

        materia.innerHTML = `
                  <option>Cálculo</option>
            <option>Física</option>
            <option>Química</option>
            <option>Filosofía</option>
            <option>Inglés</option>
                    <option>Lenguaje</option>
            <option>Lógica de Automatización</option>
            <option>Biología</option>
            <option>Sociales</option>
             <option>Lab. Inglés</option>
            <option>Economía y política</option>
             <option>Cátedra</option>
              <option>Estadística</option>
               <option>Educación física</option>
                <option>Dibujo técnico</option>
                 <option>Pire</option>
                  <option>Proyecto de investigación</option>
                   <option>Tecnología</option>
                    <option>Aplicación de la automatización</option>
                     <option>Lectura Crítica</option>
        `;

    }

}


/* ==================================================
   CAMBIAR CHECKLIST
================================================== */

function cambiarPaso(
    numeroTrabajo,
    numeroPaso
) {

    trabajos[numeroTrabajo].pasos[numeroPaso] =

        !trabajos[numeroTrabajo].pasos[numeroPaso];



    guardarTrabajos();



    mostrarTrabajos();

}



/* ==================================================
   ELIMINAR TRABAJO
================================================== */

function eliminarTrabajo(numero) {

    let confirmar =
        confirm(
            "¿Quieres eliminar este trabajo?"
        );



    if (confirmar == true) {

        trabajos.splice(numero, 1);


        guardarTrabajos();


        mostrarTrabajos();

        mostrarAlertas();

    }

}



/* ==================================================
   AYUDAR A EMPEZAR
================================================== */

function ayudarEmpezar(numero) {

    let trabajo =
        trabajos[numero];



    alert(

        "🚀 Vamos a empezar con: " +

        trabajo.nombre +

        "\n\n" +

        "Primeros pasos:" +

        "\n\n" +

        "1. Saca los materiales que necesitas." +

        "\n" +

        "2. Abre tu cuaderno o documento." +

        "\n" +

        "3. Haz solamente una pequeña parte." +

        "\n" +

        "4. Trabaja durante 5 minutos." +

        "\n" +

        "5. Marca tu progreso en StudyGo."

    );

}



/* ==================================================
   ALERTAS
================================================== */

function mostrarAlertas() {

    let alertas =
        document.getElementById("alertas");



    alertas.innerHTML = "";



    if (trabajos.length == 0) {

        alertas.innerHTML = `

            <p>

                No tienes alertas todavía.

            </p>

        `;

        return;

    }



    let hoy = new Date();

    hoy.setHours(0, 0, 0, 0);



    let cantidadAlertas = 0;



    for (
        let i = 0;
        i < trabajos.length;
        i++
    ) {

        let trabajo =
            trabajos[i];



        let fechaEntrega =
            new Date(
                trabajo.fecha + "T00:00:00"
            );



        let diferencia =
            fechaEntrega - hoy;



        let dias =
            Math.ceil(
                diferencia /
                (1000 * 60 * 60 * 24)
            );



        if (dias < 0) {

            alertas.innerHTML += `

                <div class="alerta roja">

                    🔴 El trabajo

                    <strong>
                        ${trabajo.nombre}
                    </strong>

                    está vencido.

                </div>

            `;


            cantidadAlertas++;

        }



        else if (dias == 0) {

            alertas.innerHTML += `

                <div class="alerta roja">

                    🚨 El trabajo

                    <strong>
                        ${trabajo.nombre}
                    </strong>

                    se entrega HOY.

                </div>

            `;


            cantidadAlertas++;

        }



        else if (dias == 1) {

            alertas.innerHTML += `

                <div class="alerta">

                    ⚠️ El trabajo

                    <strong>
                        ${trabajo.nombre}
                    </strong>

                    se entrega mañana.

                </div>

            `;


            cantidadAlertas++;

        }



        else if (dias <= 3) {

            alertas.innerHTML += `

                <div class="alerta">

                    🟡 El trabajo

                    <strong>
                        ${trabajo.nombre}
                    </strong>

                    se entrega en
                    ${dias}
                    días.

                </div>

            `;


            cantidadAlertas++;

        }

    }



    if (cantidadAlertas == 0) {

        alertas.innerHTML = `

            <div class="alerta verde">

                ✅ No tienes entregas próximas.

            </div>

        `;

    }

}



/* ==================================================
   TEMPORIZADOR
================================================== */

function mostrarTiempo() {

    let minutos =
        Math.floor(tiempo / 60);



    let segundos =
        tiempo % 60;



    document.getElementById("tiempo").innerText =

        String(minutos).padStart(2, "0")

        +

        ":"

        +

        String(segundos).padStart(2, "0");

}



/* ==================================================
   INICIAR TEMPORIZADOR
================================================== */

function iniciarTemporizador() {

    if (temporizador != null) {

        return;

    }



    document.getElementById(
        "mensajeTemporizador"
    ).innerText =

        "🔥 Concéntrate en una sola cosa.";



    temporizador = setInterval(

        function() {


            tiempo--;


            mostrarTiempo();



            if (tiempo <= 0) {


                clearInterval(
                    temporizador
                );


                temporizador = null;



                document.getElementById(
                    "mensajeTemporizador"
                ).innerText =

                    "🎉 ¡Terminaste tus 5 minutos!";

            }


        },

        1000

    );

}



/* ==================================================
   REINICIAR TEMPORIZADOR
================================================== */

function reiniciarTemporizador() {

    clearInterval(
        temporizador
    );


    temporizador = null;


    tiempo = 300;


    mostrarTiempo();


    document.getElementById(
        "mensajeTemporizador"
    ).innerText = "";

}



/* ==================================================
   TUTORIAL
================================================== */

let pasoTutorial = 0;



let tutoriales = [

    {

        titulo:
            "👋 ¡Bienvenido a StudyGo!",

        texto:
            "Aquí podrás organizar tus trabajos, controlar tus entregas y evitar dejar todo para última hora."

    },


    {

        titulo:
            "➕ Agregar un trabajo",

        texto:
            "En esta sección puedes escribir el trabajo que tienes que realizar, elegir la materia y colocar la fecha de entrega."

    },


    {

        titulo:
            "🔔 Alertas",

        texto:
            "StudyGo revisa las fechas de tus trabajos y te avisa cuando una entrega está cerca o ya está vencida."

    },


    {

        titulo:
            "📚 Mis trabajos",

        texto:
            "Aquí aparecen tus trabajos registrados. Puedes revisar su progreso y marcar las actividades que ya completaste."

    },


    {

        titulo:
            "🚀 No lo dejo para después",

        texto:
            "Cuando no tengas ganas de comenzar, usa el temporizador de 5 minutos. Solo necesitas empezar con una pequeña parte."

    },


    {

        titulo:
            "🎉 ¡Ya estás listo!",

        texto:
            "Ahora puedes comenzar a organizar tus trabajos y usar StudyGo para avanzar poco a poco."

    }

];



/* ==================================================
   MOSTRAR TUTORIAL
================================================== */

function mostrarTutorial() {

    let tutorial =
        tutoriales[pasoTutorial];



    document.getElementById(
        "tutorialTitulo"
    ).innerText =

        tutorial.titulo;



    document.getElementById(
        "tutorialTexto"
    ).innerText =

        tutorial.texto;



    document.getElementById(
        "numeroPaso"
    ).innerText =

        pasoTutorial + 1;



    /* PUNTOS */

    for (
        let i = 1;
        i <= 6;
        i++
    ) {

        document.getElementById(
            "punto" + i
        ).classList.remove(
            "activo"
        );

    }



    document.getElementById(
        "punto" + (pasoTutorial + 1)
    ).classList.add(
        "activo"
    );



    /* BOTÓN ATRÁS */

    if (pasoTutorial == 0) {

        document.getElementById(
            "tutorialAnterior"
        ).style.display = "none";

    }

    else {

        document.getElementById(
            "tutorialAnterior"
        ).style.display = "block";

    }



    /* BOTÓN SIGUIENTE */

    if (
        pasoTutorial ==
        tutoriales.length - 1
    ) {

        document.getElementById(
            "tutorialSiguiente"
        ).innerText =

            "Comenzar 🚀";

    }

    else {

        document.getElementById(
            "tutorialSiguiente"
        ).innerText =

            "Siguiente →";

    }

}



/* ==================================================
   SIGUIENTE
================================================== */

function tutorialSiguiente() {

    if (
        pasoTutorial <
        tutoriales.length - 1
    ) {

        pasoTutorial++;

        mostrarTutorial();

    }

    else {

        cerrarTutorial();

    }

}



/* ==================================================
   ANTERIOR
================================================== */

function tutorialAnterior() {

    if (pasoTutorial > 0) {

        pasoTutorial--;

        mostrarTutorial();

    }

}



/* ==================================================
   CERRAR TUTORIAL
================================================== */

function cerrarTutorial() {

    document.getElementById(
        "tutorial"
    ).style.display = "none";


    localStorage.setItem(
        "tutorialVisto",
        "si"
    );

}



/* ==================================================
   COMPROBAR SI YA VIO EL TUTORIAL
================================================== */

let tutorialVisto =
    localStorage.getItem(
        "tutorialVisto"
    );



if (tutorialVisto == "si") {

    document.getElementById(
        "tutorial"
    ).style.display = "none";

}

else {

    mostrarTutorial();

}



/* ==================================================
   MOSTRAR INFORMACIÓN AL ABRIR LA APP
================================================== */

mostrarTrabajos();

mostrarAlertas();

mostrarTiempo();