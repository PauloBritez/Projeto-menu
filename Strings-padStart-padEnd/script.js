//let telefone = '0973';

//console.log(telefone.padStart(10, '^')); // imprime 05 (não altera o valor do telefone) 

//console.log(telefone.padEnd(10, '*')); // imprime 0973****** (não altera o valor do telefone)



let cartao = '1234-5678-9012-3456';

let ultimos4 = cartao.slice(-4);

let cartaoMask = ultimos4.padStart(16, '*');

console.log('Este e o seu cartao? '+cartaoMask.padStart(16, '*')); // imprime *****1234-5678-9012-3456











