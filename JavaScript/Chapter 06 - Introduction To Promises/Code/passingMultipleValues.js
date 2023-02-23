
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
                resolve(num, 10, 20, 30);   // passing multiple values
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


// if we pass multiple values in 'resolve' or 'reject' , it will only take the first value
// output will be : num ( whatever in its inside)


// 🔥 Run above code in the browser console section for better output