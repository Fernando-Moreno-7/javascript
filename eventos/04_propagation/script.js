let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let package = document.querySelector('#package'); // Supondo que seja um parágrafo <p>

function msg(e) {
    console.log('Clicou no botão');
    e.stopPropagation(); // Impede a propagação do evento para elementos pais
}

btn1.addEventListener('click', msg);

btn2.addEventListener('click', function (event) {
    console.log('Clicou no botão 2:', event);
});

package.addEventListener('click', function () {
    console.log('Clicou no parágrafo');
});
