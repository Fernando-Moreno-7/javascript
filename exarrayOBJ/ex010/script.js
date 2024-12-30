let nums = [1, 5, 20];

function numeroMaior(nums) {
    return Math.max(...nums);  // Usando o spread operator para passar os elementos do array
}

console.log(numeroMaior(nums));  // Exibe o maior número
