function pegarTemperatura(){
    return new Promise(function(resolve, reject){
        console.log("Pegando a temperatura...");

        setTimeout(function(){
            resolve('40 graus na sombra');
        }, 2000);
    });
}
// Usando a promise
console.log("Iniciando o programa...");
let temp = pegarTemperatura();
console.log("Aguardando a temperatura...");
temp.then(function(resultado){
    console.log(`temperatura: ${resultado}`);
});
temp.catch(function(erro){
    console.log(`Deu um ${erro}`);
});
console.log("Fim do programa...");



/*let temp = pegarTemperatura();
temp.then(function(resultado){
    console.log(`temperatura: ${resultado}`);
});*/

/*let temp = pegarTemperatura();
console.log(temp);*/

//pegarTemperatura();


/*pegarTemperatura().then(function(temperatura){
    
    console.log("Temperatura: " + temperatura);

}).catch(function(erro){
    console.log(erro);
}); */