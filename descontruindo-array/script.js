/*let info = ['Juan Paulo', 'Juan', 'Paulo', '@Paulo']; // array com 4 elementos

//let [nomeCompleto,nome, sobrenome, instagram] = info; // desestruturando o array


let [nomeCompleto, , , instagram] = info; // desestruturando o array e ignorando o primeiro elemento do array (nome) 

console.log(nomeCompleto, instagram ); // imprimindo os elementos desestruturados do array */

/*
let [nome, sobrenome] = ['Juan', 'Paulo']; // desestruturando o array 

console.log(nome, sobrenome); // imprimindo os elementos desestruturados do array */

/*
function criar(){
    let a = [1,2,3]; // array com 3 elementos
    return a; // retornando o array a
}

let numeros = criar(); // criando uma variavel numeros e atribuindo a função criar()

let [x,y,z] = numeros; // desestruturando o array numeros

console.log(x,y,z); // imprimindo os elementos desestruturados do array */

function criar(){
    return [3,2,1];
}

let [a,b,c] = criar();

console.log(a,b,c);











