class Carro{
    constructor(marca, cor, gasolina , consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
        this.consumo = consumo;
        
    }
    dirigir(km){
        let litrosConsumidos = km / this.consumo;
        this.gasolina -= litrosConsumidos;
    }
    abastercerCarro(colocar){
        this.gasolina = gasolina + colocar;
    }

}
let carro = new Carro("BMW", "Azul", 100, 14);
dirigir(100);
console.log(carro);
abastercerCarro(20);
console.log(carro);

