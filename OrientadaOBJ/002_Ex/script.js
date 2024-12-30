
const carro = {
    modelo: "nao tem",
    acelarar: function(){
        console.log("vrummmmmmmm")
    },
    setModelo : function(modelo){
        this.modelo = modelo;
    },
    getModelo: function (){
        return " O modelo do carro e" + this.modelo;


    }

}
console.log(carro.modelo);
carro.setModelo("BMW");
console.log(carro.modelo);
console.log(carro.getModelo());
