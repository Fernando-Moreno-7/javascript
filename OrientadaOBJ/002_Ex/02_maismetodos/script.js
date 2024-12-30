const cachorro = {
    raca: "SRD",
    uivar: function(){
        console.log("Auuuuuuuuuuuuuuu")
    },
    rosnar: function(){
        console.log("grrrrrrrr")
    },
    setRaca : function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raça e" + this.raca;
    }
}
console.log(cachorro.raca);
cachorro.setRaca("Pastor Alemao");
console.log(cachorro.raca);
console.log(cachorro.getRaca());

const carro = {
    modelo: "nao tem",
    acelarar: function(){
        console.log("vrummmmmmmm")
    },
    setModelo : function(modelo){
        this.modelo = modelo;
    }

}
console.log(carro.modelo);
carro.setModelo("BMW");
