function main(data) {
    let phoneBooks = {};

    for (let line of data) {
        let tokens = line.split(" ");
        let name = tokens[0];
        let phoneNumber = tokens[1];
        phoneBooks[name] = phoneNumber;
    }

    for (const key in phoneBooks) {
        console.log(key, "->", phoneBooks[key]);
    }
}