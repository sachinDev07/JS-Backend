
// 🔥 Run this code in the browser console section for better output

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithLoop() {
    return new Promise(function executor(resolve, reject) {
        for(let i = 0; i < 1000000 ; i++) {}
        let num = getRandomInt(10);
        if(num % 2 == 0) {
            // if the random number is even, we fulfill the promise
            resolve(num);
        }
        else{
            // otherwise we reject the promise
            reject(num);
        }
    });
}

let x = createPromiseWithLoop();
console.log(x);


// output the results ( it can be different in your case)

//  Promise {<fulfilled>: 6}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "fulfilled"             
//     [[PromiseResult]]: 6


// 🔥 Run above code in the browser console section for better output