/**
 * fun -> HOF ? -> it takes fn (which is a function) as argument
 * 
 * x -> number
 * fn -> function
 */

function fun(x, fn) {
    for(let i = 0; i < x; i++) {
        console.log(i);
    }

    fn();
}

fun(10, function exec() { // callback
    console.log("I am executed also");
});