function mergeArray(firstArr, secondArr) {

    let newArray = [];
    let inputL = firstArr.length;

    for (let i = 0; i < inputL; i++) {
        if (i % 2 === 0) {
            newArray[i] = Number(firstArr[i]) + Number(secondArr[i]);
        } else {
            newArray[i] = firstArr[i] + secondArr[i];
        }
    }
    console.log(newArray.join(' - '));
}