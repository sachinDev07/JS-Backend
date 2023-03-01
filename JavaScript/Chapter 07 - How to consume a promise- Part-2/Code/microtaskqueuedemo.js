function createPromise() {
    return new Promise(function exec(resolve, reject) {
        setTimeout(function () {
            console.log("rejecting the promise");
            reject("Done");
        }, 1000);
    });
}


let p = createPromise();
p.then(function fulfillHandler1(n) {
    console.log("we fulfilled1 with a value", n);
}, function rejectHandler(value) {
    console.log("we reject1 with a value", value);
});
p.then(function fulfillHandler2(value) {
    console.log("we fulfilled2 with a value", value);
}, function rejectHandler(value) {
    console.log("we reject2 with a value", value);
});

p.then().then().then().then();


for(let i = 0; i < 10000000000; i++) {}

console.log("ending");
