function soma(a, b){
    if(a === undefined || b === undefined){
        console.log("Esta funçao precisa ter os dois argumentos")
    }else{
        return a + b;
    }
}

console.log(soma(1));
console.log(soma(1,2));