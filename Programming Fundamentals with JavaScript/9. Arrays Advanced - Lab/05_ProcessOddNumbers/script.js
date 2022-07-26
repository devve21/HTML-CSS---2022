// function main(numbers) {
//     let filteredElements = numbers.filter((el, i)=> i % 2 == 1);

//     let doubledNumbers = filteredElements.map(x => x * 2);

//     let reversedNumber = doubledNumbers.reverse();
//     console.log(reversedNumber.join(" "));
// }


(numbers) => numbers.filter((el, i)=> i % 2 == 1)
                    .map(x => x * 2)
                    .reverse()
                    .join(" ")