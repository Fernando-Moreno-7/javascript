let nums = [1, 2, 3, 4, 5, 6];
let nomes = ["joao", "ricardo", "maria"];
function verificarArray(arr){
    if(arr.length <= 5){
        console.log("poucos elementos");
    }else{
        console.log("muitos elemntos");
    }
}
verificarArray(nums);
verificarArray(nomes);
