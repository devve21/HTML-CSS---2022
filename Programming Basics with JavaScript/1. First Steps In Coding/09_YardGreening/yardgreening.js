function yardGreening(input){
    let squareMeters = input[0];
    let zadacha = squareMeters * 7.61;
    let otstupka = 0.18 * zadacha;
    let finalPrice = zadacha - otstupka;
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${otstupka} lv.`)
}
yardGreening(['550'])