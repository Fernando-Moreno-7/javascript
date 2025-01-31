const frutas = /\d+: (bananas|maças|laranjas)/;
console.log(frutas.test("10 bananas"));
console.log(frutas.test("25 batatas "));
console.log(frutas.test("8 laranjas"));