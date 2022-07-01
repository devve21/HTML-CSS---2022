function sumEvenNumbers(numbers) {
    let sum = 0;
    let arrNum = 0;
    for (let i = 0; i < numbers.length; i++) {
        arrNum = Number(numbers[i]);
        if (arrNum % 2 == 0) {
            sum += arrNum;
        }
    }
    console.log(sum);
}
sumEvenNumbers(['1','2','3','4','5','6'])