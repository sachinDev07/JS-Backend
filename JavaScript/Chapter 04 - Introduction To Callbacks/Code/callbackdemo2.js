function fun(x, fn) {
    for(let i = 0; i < x; i++) {
        console.log(x);
    }

    fn(x*x);
}

fun(10, function exec(num) {
    console.log(num);
}); // calling fun