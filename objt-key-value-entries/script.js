/*let lista = [1, 2, 3, 4, 5];

console.log(typeof lista); // imprime object (array) */

//let lista = ['ovo', 'banana', 'maçã', 'pera', 'uva'];

//console.log(Object.keys(lista)); // imprime [0, 1, 2, 3, 4]

//console.log(Object.values(lista)); // imprime [ 'ovo', 'banana', 'maçã', 'pera', 'uva' ]

//console.log(Object.entries(lista)); // imprime [ [ 0, 'ovo' ], [ 1, 'banana' ], [ 2, 'maçã' ], [ 3, 'pera' ], [ 4, 'uva' ] ]


let pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 20,
    peso: 80
};

//newFunction(); // imprime [ 'nome', 'sobrenome', 'idade', 'peso' ]  

//console.log(Object.keys(pessoa)); // imprime [ 'nome', 'sobrenome', 'idade', 'peso' ]

//console.log(Object.values(pessoa)); // imprime [ 'João', 'Silva', 20, 80 ]

console.log(Object.entries(pessoa)); // imprime [ [ 'nome', 'João' ], [ 'sobrenome', 'Silva' ], [ 'idade', 20 ], [ 'peso', 80 ] ]















function newFunction() {
    console.log(Object.keys(pessoa));
}

