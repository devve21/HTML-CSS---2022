function onTimeForTheExam_08(input) {

    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let examTime = (examHour * 60) + examMinutes;
    let arrivalTime = (arrivalHour * 60) + arrivalMinutes;

    let diff = Math.abs(examTime - arrivalTime);

    if (examTime < arrivalTime) {
        console.log("Late");
        if (diff >= 60) {
            let hour = Math.floor(diff / 60);
            let min = diff % 60;
            console.log(`${hour}:${min} hours after the start`);

        } else {
            console.log(`${diff} minutes after the start`);

        }

    } else if ((examTime === arrivalTime) || (diff >= 1 && diff <= 30)) {
        console.log("On time");
        if (diff >= 1 && diff <= 30) {
            console.log(`${diff} minutes before the start`);
        }

    } else {
        console.log("Early")
        if (diff >= 60) {
            let hour =Math.floor(diff / 60);
            let min = diff % 60;
            if (min < 10){
                console.log(`${hour}:0${min} hours before the start`);
            }else {
            console.log(`${hour}:${min} hours before the start`);
            }
        } else {
            console.log(`${diff} minutes before the start`);
        }
    }
}