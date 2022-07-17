function main(cityInfo) {
    for(let key of Object.keys(cityInfo)){
        console.log(`${key} -> ${cityInfo[key]}`);
    }
}