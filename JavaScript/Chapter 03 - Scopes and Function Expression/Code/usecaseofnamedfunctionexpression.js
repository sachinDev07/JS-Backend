function fun(fn) {
    console.log("Welcome to fun");
    fn();
}

fun(function () {
    console.log("Wow so much fun");
    console.trace();
});


// for recursive cases named function expression are also helpful