let obj = {};

console.log(10 - obj); // obj.valueOf -> object, toString -> [object Object]

let obj1 = {x: 9, y: 8};

console.log(100 - obj1);

let obj2 = {x: 7, valueOf() {return 99}};
console.log(100 - obj2);

let obj3 = {x: 8, toString() {return "88"}};
console.log(90 - obj3);

let obj4 = {x: 7, toString() {return {}}};
console.log(100 - obj4);