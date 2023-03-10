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



download("www.xyz.com")
.then(
    function processDownload(value) {
        console.log("downloading done with following value", value);
        return writeFile(value);
    },
)
.then(
    function processWrite(value) {
        console.log("data written in the file with name", value);
        return uploadData(value, "www.upload.com");
    },
)
.then(
    function processUpload(value) {
        console.log("we have uploaded with", value);
    },
)
.catch(function f(err) {
    console.log("catching error", err);
})
.finally(function final() {
  console.log("executing finally")  
})