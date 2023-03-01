function download(url) {
    console.log("started downloading content form ", url);
    return new Promise(function exec(res, rej) {
        setTimeout(function p() {
            console.log("COmpelted downloading data in 5s");
            const content = "ABCDEF";
            res(content);
        }, 5000);
    })
}

x = download("www.xyz.com");
x
.then(
    function fulfillHandler1(value) {
        console.log("Content downloaded is1", value);
        return "New promise string";
    },
    function rejectHandler1(value) {
        console.log("rejected with", value);
    }
)
.then(
    function newFullFillHandler(value) {
        console.log("value from chained then promsie", value);
    }
)