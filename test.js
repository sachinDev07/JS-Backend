// function download(url, callback){
//     console.log("Starting download from the ", url);
//     setTimeout(function() {
//         console.log("Download complete ");
//         const data ="dummy data";
//         callback(data);
//     }, 5000)
// }
// function writeFile( data, callback){
//     console.log("Starting writing a file with", data);
//     setTimeout(function write(){
//         console.log("complete writing a data in a file");
//         const fileName = "file.txt";
//         callback(fileName);
//     })
// }
// function upload(url, filename, callback){
//     console.log("Starting uploading the data at ", url, "from a file", filename);
//     setTimeout(function up(){
//         console.log("Uploading the data completed");
//         callback("SUCCESS");
//     }, 3000);
// }
// download("www.xyz.com", function process(data){
//     console.log("Downloaded data is : ", data);
//     writeFile(data, function write(filename){
//         console.log("writed the data in a ", filename);
//         upload("www.upload.com", filename, function upload(response){
//             console.log("Uploaded the data with the response ", response);
//         })
//     })
// })


function download(url){
     new Promise(function resolve(){
        console.log("Starting download from the ", url);
        setTimeout(function() {
            const data = "dummy data";
            resolve(data);
        }, 5000)
    })
}
download("www.example.com")
.then(function fulHandler(data){
    console.log("Download complete");
    
})
