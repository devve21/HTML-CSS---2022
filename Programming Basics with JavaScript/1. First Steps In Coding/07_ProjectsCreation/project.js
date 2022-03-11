function project (input){
    let name = input[0];
    let projects = input[1];
    let zadacha = projects * 3;
    console.log(`The architect ${name} will need ${zadacha} hours to complete ${projects} project/s.`)
}
project(['George', '4'])