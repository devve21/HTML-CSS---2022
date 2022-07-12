function main(num1, num2) {
    let factorial = 1;

    for (let i = 1; i < num1 + 1; i++) {
        factorial *= i;
    }
    console.log((factorial / num2).toFixed(2));
}
main(5, 2);