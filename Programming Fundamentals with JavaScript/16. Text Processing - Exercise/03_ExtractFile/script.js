function main(input) {

    let extracted = input.split('\\');
    let fileName = extracted[extracted.length - 1].split(".");
    let extension = fileName[fileName.length - 1];
    fileName.pop();
    fileName = fileName.join('.');

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}