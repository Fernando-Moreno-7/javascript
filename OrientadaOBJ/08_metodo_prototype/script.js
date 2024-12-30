function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    
    
}
Cachorro.prototype.uivar = function (){
    console.log("AUuu");
}
let husky = new Cachorro("husky", 4, "cinza");
husky.uivar();