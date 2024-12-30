function saudacao(){
    if(typeof nome != "String"){
        throw new Error("O parametro nome precisa ser uma string ")

    }else{
        console.log(`Ola ${nome}.`)

    }
}
saudacao("Mathues");
saudaçao(5);
console.log("teste");