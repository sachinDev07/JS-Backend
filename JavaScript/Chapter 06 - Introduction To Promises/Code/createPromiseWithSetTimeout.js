
// 🔥 Run this code in the browser console section for better output

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithSetTimeout() {
    return new Promise(function executor(resolve, reject) {
        setTimeout(function () {
            let num = getRandomInt(10);
            if(num % 2 == 0) {
                // if the random number is even, we fulfill the promise
                resolve(num);
            }
            else{
                // otherwise we reject the promise
                reject(num);
            }
        }, 10000);
    });
}

let x = createPromiseWithSetTimeout();
console.log(x);


// Output the results ( it can be different in your case)


// Promise {<pending>}                      // state -> pending
//     [[Prototype]]: Promise
//     [[PromiseState]]: "fulfilled"
//     [[PromiseResult]]: 2                

                                            // but after finishing the setTimeout function


// Promise {<fulfilled>: 2}                 // state -> fulfilled
//     [[Prototype]]: Promise
//     [[PromiseState]]: "fulfilled"
//     [[PromiseResult]]: 2


// Run above code in the browser console section for better output