function trainTheTrainers(input) {
    let index = 0;
    let people = Number(input[index++]);
    let command = input[index++];
    let sumOfGrade = 0;
    let counter = 0;

    while (command !== "Finish") {

        let name = command
        let tempSumOfGrade = 0;


        for (let i = 0; i < people; i++) {
            counter++;
            let grade = Number(input[index++]);
            tempSumOfGrade += grade;
            sumOfGrade += grade;
        }
        let avgTempGrade = tempSumOfGrade / people;
        console.log(`${name} - ${avgTempGrade.toFixed(2)}.`);


        command = input[index++];
    }
    let avgGrade = sumOfGrade / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}