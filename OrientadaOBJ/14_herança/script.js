class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}
let coiote = new Mamifero(4);
console.log(coiote.patas);

class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas, patas);
        this.raca = raca;
    }
    latir(){
        console.log("Au aAU");
    }
}
let pug = new Cachorro(4, "pug");
console.log(pug.patas);
let chitos = new Cachorro(4, "Chitos");
console.log(chitos.patas);

