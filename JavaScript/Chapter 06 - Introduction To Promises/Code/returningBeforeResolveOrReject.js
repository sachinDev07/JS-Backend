
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
                console.log("fulfilling");
               return num;

            }
            else{
                // otherwise we reject the promise
                console.log("rejecting");
                return num;
            }
        }, 10000);
    });
}

let x = createPromiseWithSetTimeout();
console.log(x);

/**
 *  REMEMBER :
 * 
 *  If we do not call anyone, the promise will stay forever in 'Pending' state.
 * 
 */


// output

// Promise {<pending>}                  // state -> pending
//     [[Prototype]]: Promise
//     [[PromiseState]]: "pending"
//     [[PromiseResult]]: undefined

//  rejecting

// Promise {<pending>}                  // state -> pending
//     [[Prototype]]: Promise
//     [[PromiseState]]: "pending"
//     [[PromiseResult]]: undefined



// 🔥 Run above code in the browser console section for better output