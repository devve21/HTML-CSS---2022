function main(input) {
    let currentTown = {};

    for(let city of input){

        let cityElements = city.split(' | ')
        let townName = cityElements[0];
        let townLatitude = Number(cityElements[1]);
        let townLongitude = Number(cityElements[2]);
        
        currentTown.town = townName;
        currentTown.latitude = townLatitude.toFixed(2);
        currentTown.longitude = townLongitude.toFixed(2);
        console.log(currentTown);
    }
}