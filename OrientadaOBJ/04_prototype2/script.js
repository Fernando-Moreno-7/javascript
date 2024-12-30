const pessoa = {
    maos: 2,
}
console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.pessoa);
console.log(pessoa.hasOwnPropeerty("maos"));

const pessoaNova = Object.create(pessoa);
console.log(pessoaNova.maos);