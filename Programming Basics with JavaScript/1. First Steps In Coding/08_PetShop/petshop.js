function petshop(input){
    let hranaKucheta = input[0];
    let hranaKotki = input[1];
    let zadacha = (hranaKucheta * 2.50) + (hranaKotki * 4);
    console.log(`${zadacha} lv.`);
}
petshop(['5', '4'])