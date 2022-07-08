function simpleCalculator(numOne, numTwo, op) {
    let res;
    switch(op){
        case "multiply": res = (numOne, numTwo) => numOne * numTwo; break;
        case "divide": res = (numOne, numTwo) => numOne / numTwo; break;
        case "add": res = (numOne, numTwo) => numOne + numTwo; break;
        case "subtract": res = (numOne, numTwo) => numOne - numTwo; break;
    }
    console.log(res(numOne, numTwo));
}