function process() {
    let i = 0;
    function innerProcess() {
        i += 1; // i = 0
        return i;
    }
    return innerProcess; // we are not calling the function, we are just returning
}

let res = process();

console.log(res);

console.log("first time calling res", res());
console.log("second time calling res", res());
console.log("third time calling res", res());