function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        console.log("Entering the executor callback in the promise constructor");
        setTimeout(function () {
            let num = getRandomInt(10);
            if(num % 2 == 0) {
                // if the random number is even we fullfill
                resolve(num);
            } else {
                // if the random number is odd we reject
                reject(num);
            }
        }, 1000);
        console.log("Exitting the executor callback in the promise constructor");
    });
}
console.log("Starting....");
const p = createPromiseWithTimeout();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like ... ", p);
console.log("Going to register my 1st set of handlers");
p
.then(
    function fulfillHandler1(value) { 
        console.log("Inside fulfill handler 1 with value", value); 
        console.log("Promise after fullfillment is", p);
        setTimeout(function t() {console.log("Ended 0s timer")}, 0);
        console.log("exitting the full handler 1");
    }, 
    function rejectionHandler1(value) {  
        console.log("Inside rejection handler 1 with value", value); 
        console.log("Promise after rejection is", p);
        setTimeout(function t() {console.log("Ended 0s timer")}, 0);
        console.log("exitting the reject handler 1");
    }
);
console.log("Going to register my 2nd set of handlers");

p
.then(
    function fulfillHandler2(value) { 
        console.log("Inside fulfill handler 2 with value", value); 
        console.log("Promise after fullfillment is", p);
    }, 
    function rejectionHandler2(value) {  
        console.log("Inside rejection handler 2 with value", value); 
        console.log("Promise after rejection is", p);

    }
);

console.log("Ending......");
setTimeout(function () {console.log("Global timer of 0s")}, 1000);


