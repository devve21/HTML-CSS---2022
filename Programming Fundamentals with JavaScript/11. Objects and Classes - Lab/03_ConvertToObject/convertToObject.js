function main(jsonData) {
    let person = JSON.parse(jsonData)

    for(let key of Object.keys(person)){
        console.log(`${key}: ${person[key]}`);
    }
}