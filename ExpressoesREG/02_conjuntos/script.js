const reg1 = /[12345]/;
console.log(reg1.test("Temos o numero 6"));
console.log(reg1.test("Temos o numero 2"));
console.log(reg1.test("Temos o numero 23"));
console.log(reg1.test("Temos o numero 60"));
console.log(reg1.test("Temos o numero 69"));
const reg2 = /[0-9]/;
console.log(reg2.test("Temos o numero 65443443434"));
console.log(reg2.test("temos o numero"));