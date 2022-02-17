let timer; //Variable global

function comecar() { //Función comenzar
    timer = setInterval(showTime, 1000); //Llamamos a la función showTime cada segundo

}

function parar() { //Función parar
    clearInterval(timer); //Llamamos a la función clearInterval para detener el intervalo
}

function showTime(){ //Función mostrar hora
    let d = new Date(); //Creamos un objeto de tipo Date
    let h = d.getHours(); //Obtenemos la hora
    let m = d.getMinutes(); //Obtenemos los minutos
    let s = d.getSeconds(); //Obtenemos los segundos
    let txt = h +':' + m + ':' + s; //Creamos una cadena de texto con la hora

    document.querySelector('.demo').innerHTML = txt; //Mostramos la hora en el elemento con id reloj 
} 

