function main(number) {

    let completed = '%'.repeat(number / 10);
    let incompleted = '.'.repeat(10 - completed.length);

    if (incompleted.length === 0) {
        console.log('100% Complete!');
    } else {
        console.log(`${number}% [${completed}${incompleted}]`);
        console.log('Still loading...');
    }
}