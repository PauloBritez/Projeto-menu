/* 
function somar(x, y) { // function declaration  
    return x + y;
} */  // somar(x, y) = x + y = somar(5, 10) = 15 
/*
let somar = function(x, y) { // function declaration 
    return x + y; 
}*/
/*
let somar = (x, y) => x + y; // arrow function */

/*
let somar = (x, y) => { // arrow function
    return x + y;
} */

/*
let letraNoNome = (nome) => { // arrow function
    return nome.length;
}*/

//let letraNoNome = (nome) => nome.length; // arrow function 

let letraNoNome = nome => nome.length;


console.log(letraNoNome('João'));