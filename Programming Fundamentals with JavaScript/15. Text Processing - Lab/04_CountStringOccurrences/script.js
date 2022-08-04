function main(str, word) {
    let textArr = str.split(" ");
    let count = textArr.filter(x => x === word).length
    console.log(count);
}