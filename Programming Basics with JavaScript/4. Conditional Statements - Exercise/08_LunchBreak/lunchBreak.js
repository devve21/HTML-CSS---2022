function lunchBreak (input){
    let showName = input[0];
    let showLength = Number(input[1]);
    let holidayLength = Number(input[2]);

    let lunchTime = holidayLength * 1/8;
    let chillTime = holidayLength * 1/4;
    
    let timeLeft = holidayLength - lunchTime - chillTime;

    if(timeLeft >= showLength){
        console.log(`You have enough time to watch ${showName} and left with ${Math.ceil(timeLeft - showLength)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${showName}, you need ${Math.ceil(showLength - timeLeft)} more minutes.`)
    }
}
lunchBreak(["Teen Wolf","48","60"]);
