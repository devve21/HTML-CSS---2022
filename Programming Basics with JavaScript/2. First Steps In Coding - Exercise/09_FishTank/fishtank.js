function fishTank(input){
    let lengthCM = Number(input[0]);
    let widthCM = Number(input[1]);
    let heightCM = Number(input[2]);
    let percent = Number(input[3]);

    let aquariumVolume = lengthCM * widthCM * heightCM;
    let volumeLiters = aquariumVolume * 0.001;
    let occupiedSpace = percent / 100;
    let requiredLeters = volumeLiters * (1-occupiedSpace);
    console.log(`${requiredLeters}`);
}
fishTank(["85","75","47","17"]);