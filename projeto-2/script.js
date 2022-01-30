    let dia = 7;
    let diaNombre = "";
    switch (dia) {
        case 1:
            diaNombre = "lunes";
            break;
        case 2:
            diaNombre = "martes";
            break;
        case 3:
            diaNombre = "miercoles";
            break;
        case 4:
            diaNombre = "jueves";
            break;
        case 5:
            diaNombre = "viernes";
            break;
        case 6:
            diaNombrediaNombre = "sabado";
            break;
        case 7:
            diaNombre = "domingo";
            break;
        default:
            diaNombre = "dia invalido";
            break;
    }
    document.getElementById("dia").innerHTML ="Hoy es: " +diaNombre;