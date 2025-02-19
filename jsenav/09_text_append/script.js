let novoElemento = document.createElement("h2");
let texto = document.createTextNode("subtitulo");

novoElemento.appendChild(texto);

let h2 = document.querySelector('#subtitulo-principal');
let pai = h2.parentNode;
pai.appendChild(novoElemento);
