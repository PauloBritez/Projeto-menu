// FOR LOOP
/*

let texto = "";

for(let i = 1 ; i <= 10; i++){
    texto = texto + i + " Oi, eu sou o Goku! <br>";
}
    



document.getElementById("demo").innerHTML = texto;
*/




// FOR LOOP ARRAY


let carros = ["Fusca", "Gol", "Palio", "Uno", "Celta", "Fox"];

let html = '</ul>';

for(let i in carros){
    html += '<li>' + carros[i] + '</li>';
}

html += '</ul>';






document.getElementById("demo").innerHTML = html;















