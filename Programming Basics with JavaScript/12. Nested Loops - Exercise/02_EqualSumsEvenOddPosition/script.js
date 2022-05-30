function equalSumsEvenOddPosition(input) {

    let firstNum = Number(input[0]);
    let endNum = Number(input[1]);
    let printLine = "";
    for (let i = firstNum; i <= endNum; i++) {
        let currentnum = i + "";
        let evenSum = 0;
        let oddSum = 0;
        for (let index = 0; index < currentnum.length; index++) {
            if (index % 2 === 0) {
                evenSum += Number(currentnum[index]);
            } else {
                oddSum += Number(currentnum[index]);
            }

        }
        if (evenSum === oddSum) {
            printLine += currentnum + " ";
        }

    }
    console.log(printLine);


}