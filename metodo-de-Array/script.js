//let lista = ['Ovo','Farinha','Manteiga','Acucar'];

//let lista2 = ['forno','forma','batedeira'];

//let res = lista.toString(); // transforma o array em uma string

//let res = lista.join('-'); // transforma o array em uma string

//let res = lista.indexOf('Ovos'); // retorna o indice do elemento

//lista.shift(); // remove o primeiro elemento do array

//lista.pop(); // remove o ultimo elemento do array

//lista.push('Leite'); // adiciona um elemento no final do array

//lista.unshift('Leite'); // adiciona um elemento no inicio do array

//lista.splice(2,0,'Chocolate'); // adiciona um elemento no indice 2 do array 

//lista.splice(2,1); // remove um elemento do indice 2 do array

//lista[0]= 'Leite'; // substitui o elemento do indice 0 pelo elemento 'Leite'

//lista.reverse(); // inverte o array (primeiro elemento vira o ultimo e o ultimo vira o primeiro)

//lista.sort(); // ordena o array em ordem alfabetica

//lista[lista.length] = 'Chocolate'; // adiciona um elemento no final do array

//delete lista[1]; // deleta o elemento do indice 1 do array, nao e recomendado

//let res = lista;

//let res = lista.concat(lista2); // concatena dois arrays

let lista = ['23','13','90','2'];

let lista2 = [];

/*
for (let i in lista) {
    lista2.push(lista[i] * 2);
}*/

/*
lista2 = lista.map(function(item){
    return item*3;
}); // transforma o array em um array com os elementos multiplicados por 3*/

/*lista2 = lista.filter(function(item){
    return item > 15;
}); // filtra o array, retorna os elementos que sao maiores que 15 */

/*
lista2 = lista.filter(function(item){
   if (item > 15) {
       return true;
   } else {
         return false;
    }
}); // filtra o array, retorna os elementos que sao maiores que 15 */

/*
lista2 = lista.reduce(function(total, item){
    return total + item;
}); // soma todos os elementos do array */

/*
lista2 = lista.every(function(item){
    return item > 10;
}); // retorna true se todos os elementos do array sao maiores que 10 */

/*
lista2 = lista.some(function(item){
    return item > 10;
}); // retorna true se pelo menos um elemento do array sao maiores que 10 */

/*
lista2 = lista.every(function(item){
    return (item > 10)? true : false;
}); // retorna true se todos os elementos do array sao maiores que 10 */

lista2 = lista.some(function(item){
    return (item > 10)? true : false;
});

let res = lista2;

console.log(res);