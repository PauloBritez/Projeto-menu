let html = '';

let c = 0;

while (c <= 10) {
  html += " Numero " + c + "<br>";
    c++;
}

document.getElementById("demo").innerHTML = html;