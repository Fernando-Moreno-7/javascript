let pessoa = {
    nome: "MATHEUS"
}
let pessoa2 = pessoa;
console.log(pessoa == pessoa2);

pessoa2.nome = "PEDRO";
console.log(pessoa.nome);

pessoa.nome = "MARIA";
console.log(pessoa2.nome);