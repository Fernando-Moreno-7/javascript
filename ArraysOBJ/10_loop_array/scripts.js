let nomes = ["matheus", "maria", "joao"];
for(let i = 0; i <=nomes.length; i++){
    console.log(nomes[i]);
}

let numeros = [1, 5, 15];
for(let i =0; i <= numeros.length; i++){
    console.log(numeros[0]);
}
//let numPar = [1, 2, 5, 10, 20, 28, 33];
//for(let i = 0; i <= numeros.length; i++){
    //if(numPar.length % 2 == 0){
       // console.log(`os numeros ${numPar} e par`);
    //}else{
    //    console.log(`os numeros ${numPar} e impar`);
   // }
//}
let numPar = [1, 2, 5, 10, 20, 28, 33];

if (numPar.length % 2 == 0) {
    console.log(`Os números ${numPar} têm quantidade par.`);
} else {
    console.log(`Os números ${numPar} têm quantidade ímpar.`);
}
