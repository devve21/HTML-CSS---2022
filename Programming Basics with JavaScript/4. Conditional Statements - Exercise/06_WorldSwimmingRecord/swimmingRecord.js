function swimmingRecord(input){
    let recordInSecs = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let totalSecs = distanceInMeters * timeForMeter;
    let delay = Math.floor(distanceInMeters / 15)* 12.5;
    let finalTime = totalSecs + delay;

    if(finalTime < recordInSecs){
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`)
    }else{
        console.log(`No, he failed! He was ${(finalTime - recordInSecs).toFixed(2)} seconds slower.`)
    }
}
swimmingRecord(["55555.67","3017","5.03"])