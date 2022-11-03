
let profes = document.getElementById("boton")

profes.addEventListener('click', () => {

    let seguir, apuesta, plata
    let opcion1 = Math.floor(Math.random()*2)+1;

    let juego = (document.getElementById("juego").value);

    //valor predertiminado: 5000



    do {
        apuesta = prompt("¿cuanto desea apostar?");
        alert("La maquina esta girando la moneda, presione aceptar para saber su resultado");
        let opcion1 = Math.floor(Math.random()*2)+1;
        if (juego == "num1" && opcion1 == 1) {
            plata = 5000 + apuesta * 2;
            alert("Usted ha ganado la opción de la maquina es " + opcion1);
            alert("fue un buen juego, la cantidad de dinero que tiene es   " + plata);
        }
        else if (juego != "num1" && opcion1 == 1) {
            plata = 5000 - apuesta - 1000;
            alert("Usted ha perdido la opción de la maquina es " + opcion1);
            alert("fue un buen juego, la cantidad de dinero que tiene es   " + plata);
        }
        else if (juego == "num2" && opcion1 == 2) {
            plata = 5000 + apuesta * 2;
            alert("Usted ha ganado la opción de la maquina es " + opcion1);
            alert("fue un buen juego, la cantidad de dinero que tiene es   " + plata);
        }
        else if (juego != "num2" && opcion1 == 2) {
            plata = 5000 - apuesta - 1000;
            alert("Usted ha perdido la opción de la maquina es " + opcion1);
            alert("fue un buen juego, la cantidad de dinero que tiene es   " + plata);
        }


        seguir = prompt("Para volver a jugar digite 1 o si desea salir digite 3");
        alert("El total de dinero ganado en el juego  es " + plata);
    } while (seguir != 3);
})

