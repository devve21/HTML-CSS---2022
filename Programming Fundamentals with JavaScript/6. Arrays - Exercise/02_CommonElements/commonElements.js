function commonElements(firstArr, secondArr) {
    for (const element of firstArr) {
        if (secondArr.includes(element)) {
            console.log(element);
        }
    }
}