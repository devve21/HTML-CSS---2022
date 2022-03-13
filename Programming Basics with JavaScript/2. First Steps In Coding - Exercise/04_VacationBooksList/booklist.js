function bookList(input){
    let bookPages = Number(input[0]);
    let pagesRead = Number(input[1]);
    let days = Number(input[2]);
    let hoursRead = bookPages / pagesRead;
    let hoursToComplete = hoursRead / days;
    console.log(`${hoursToComplete}`)
}
bookList(["212","20","2"])