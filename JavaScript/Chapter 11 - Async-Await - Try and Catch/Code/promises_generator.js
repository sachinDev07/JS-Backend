function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF"; // assume dummy download content
            resolve(content);
        }, 1000);
    });
}

function writeFile(data) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started writing a file with", data);
        setTimeout(function wrtie() {
            console.log("Completed writing the data in a file");
            const filename = "file.txt";
            resolve(filename);
        }, 5000);
    })
}

function uploadData(file, url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started uploading", file, "on", url);
        setTimeout(function up() {
            console.log("upload completed");
            const response = "SUCCESS";
            resolve(response);
        }, 2000);
    })
}

function doAfterReceiving(value) {

    let future = iter.next(value);
    console.log("future is", future);
    if(future.done) return;
    future.value.then(doAfterReceiving);
}

function* steps() {
    const downloadedData = yield download("www.xyz.com");
    console.log("data downloaded is", downloadedData);
    const fileWritten = yield writeFile(downloadedData);
    console.log("fiele written is", fileWritten);
    const uploadResponse = yield uploadData(fileWritten, "www.drive.google.com");
    console.log("Upload response is", uploadResponse);
    return uploadResponse;
}

const iter = steps();
const future = iter.next();
for(let i = 0; i < 10000000000; i++) {

}
future.value.then(doAfterReceiving);

