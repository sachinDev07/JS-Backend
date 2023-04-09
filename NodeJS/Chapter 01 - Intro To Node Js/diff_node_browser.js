const x = setTimeout(function exec() {
    console.log("completed timer");
}, 10000);

console.log(x);
clearTimeout(x);