let x = -0;
console.log(x === 0);
console.log(Object.is(x, -0)); // true
console.log(Object.is(x, 0)); // false

console.log(Math.sign(-3));
console.log(Math.sign(2));
console.log(Math.sign(-0));
console.log(Math.sign(0));

console.log(x < 0);

/*
    Can we write a custom function that can give us sign of a number properly ? expected -> -1, 1
*/