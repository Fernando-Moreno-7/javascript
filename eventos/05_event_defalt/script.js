let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

let a = document.querySelector('a');

function msg(e) {
    console.log('Clicou no botão');
    e.stopPropagation(); // Impede a propagação do evento para elementos pais
}

btn1.addEventListener('click', msg);

btn2.addEventListener('click', function (event) {
    console.log('Clicou no botão 2:', event);
});



a.addEventListener('click', function (e) {
    e.preventDefault(); // Impede a navegação do link
    console.log('Não vai mudar de link');
});


