function main(arrOfString) {

    let result = [];

    for (el of arrOfString) {
        el = Number(el);
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }
    console.log(result.join("\n"));

}