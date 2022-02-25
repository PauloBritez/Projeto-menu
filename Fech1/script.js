function loadPost() {
    document.getElementById('post').innerHTML = 'Carregando...';

    fetch('https://jsonplaceholder.typicode.com/posts') 
        .then(function(resultado) {
            return resultado.json();
            })
        .then(function(json) {
           document.getElementById('post').innerHTML = json.length+' posts';
        
        })
            .catch(function(error) {
                console.log("deu ruim");
            });
         
    
}