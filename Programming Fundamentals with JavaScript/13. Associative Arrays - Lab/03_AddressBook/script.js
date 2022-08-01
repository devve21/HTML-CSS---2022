function main(data) {
    let result = {};

    for (let line of data) {
        let [name, address] = line.split(":");
        result[name] = address;
    }

    // drug nachin:

    // let unsortedKey = Object.keys(result);
    // let sortKey = unsortedKey.sort((a,b) => a.localeCompare(b));

    // for(let key of sortKey){
    //     console.log(key, "->", result[key]);
    // }


    let entries = Object.entries(result);
    let sortEntries = entries.sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB);
    });

    for (let [name, address] of sortEntries) {
        console.log(name, "->", address);
    }
}