function addAndSubtract(num1, num2, num3) {

    let sumFirstAndSecond = sum(num1, num2);

    let finalResult = subtract(sumFirstAndSecond, num3);

    console.log(finalResult);

    function sum(num1, num2){
        return num1 + num2;
    }

    function subtract(sumFirstAndSecond, num3) {
        return sumFirstAndSecond - num3;
    }
}