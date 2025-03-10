let p = Promise.resolve(new Error("Nao deu certo "));
console.log("lalalal");
p.then(value => console.log(value))
.catch(reason => console.log("Falhou:" + reason));