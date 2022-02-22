/*function adicionar(numeros) { // funcion que recibe un array de numeros 
    console.log(numeros); // imprime el array de numeros 
}

adicionar(5); */ // llamada a la funcion con un parametro 


/*function adicionar(...numeros) { // funcion que recibe un array de numeros 
    console.log(numeros); // imprime el array de numeros 
}

adicionar(5, 6, 7, 8, 9); // llamada a la funcion con un parametro */ 

/*function adicionar(...nomes) {
    console.log(nomes);
}

adicionar("Juan", "Maria", "Pedro", "Ana"); */

function adicionar(nome,...novosNomes) {
    let novoConjunto = [
    ...nome, 
    ...novosNomes];
    return novoConjunto;
}

let nomes = ["Juan", "Maria", "Pedro", "Ana"];

let outros = adicionar(nomes, "Jorge", "Jose", "José");

console.log(outros);


