function criarCachorro(raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    return cachorro;

}
let doberman = criarCachorro("Douberman", 4, "preta");
console.log(doberman);