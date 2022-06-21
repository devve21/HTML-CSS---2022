function requiredReading(pages, pagesHour, readDays) {
    let totalTime = 0;
    let requiredHours = 0;

    totalTime = pages / pagesHour;
    requiredHours = totalTime / readDays;
    
    console.log(requiredHours);
}
requiredReading(212,20,2)