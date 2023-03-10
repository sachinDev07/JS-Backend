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


async function steps() {
    try {
        console.log("starting steps");
        const downloadedData = await download("www.xyz.com");
        return downloadedData;
    } catch(error) {
        console.log("we have handled the error", error);
    } finally {
        console.log("ending")
    }
   
}

steps();