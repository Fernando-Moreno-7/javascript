let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto");

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector("#titulo-principal"); // Correção na id
let elementoPai = document.querySelector("#container-principal");

if (elementoPai && elementoAlvo) {
    elementoPai.insertBefore(novoElemento, elementoAlvo);
} else {
    console.error("Elemento não encontrado!");
}
