function* fetchNextElement() { // generator function 
    console.log("I am inside the generator function");
    yield 1;
    yield 2;
    console.log("somewhere in the middle");
    yield 3;
    yield 4;
} 

const iter = fetchNextElement();

console.log("1st",iter.next());
console.log("2nd",iter.next());
console.log("3rd",iter.next());
console.log("4th",iter.next());
console.log("5th",iter.next());
console.log("6th",iter.next());