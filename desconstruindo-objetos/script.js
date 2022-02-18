let pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 20, 
    social: {
        facebook: 'Camper oficial',
        instagram: {
            url: '@camper',
            seguidores: 1000
        }	
    }/*,
    nomeCompleto: function() { 
        return `${this.nome} ${this.sobrenome}`;//
    }*/
};

//console.log(pessoa.nomeCompleto()); // João Silva
/*
let nome = pessoa.nome; // nome = 'João' 
let sobrenome = pessoa.sobrenome; // sobrenome = 'Silva' 
let idade = pessoa.idade; */ // idade = 20

//let {nome:pessoaNome, sobrenome, idade = 0} = pessoa; // desestruturando o objeto pessoa 


//console.log(pessoaNome, sobrenome, idade); // João Silva 20

//let { facebook, instagram } = pessoa.social; // desestruturando o objeto social


//let {nome,idade, social:{instagram} } = pessoa; // desestruturando o objeto pessoa

//let {nome,idade, social:{instagram:{usuario:instagram,senha}} } = pessoa; // desestruturando o objeto pessoa e o objeto social 

//console.log(nome,idade, instagram,senha); // Camper oficial @camper

//let {nome,idade, social:{instagram} } = pessoa; // desestruturando o objeto pessoa e o objeto social

//console.log(nome,idade, instagram);

/*
function pegarNomeCompleto(objeto) { 
    let {nome, sobrenome} = objeto; // desestruturando o objeto pessoa
    return `${nome} ${sobrenome}`; // retornando o nome completo
}

function pegarNomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`; // retornando o nome completo
}*/

function pegarNomeCompleto({nome, sobrenome = 'Silva',social:{instagram:{url:instagram}}}) {
    return `${nome} ${sobrenome} (siga em ${instagram})`; // retornando o nome completo
}

console.log(pegarNomeCompleto(pessoa)); // João Silva












