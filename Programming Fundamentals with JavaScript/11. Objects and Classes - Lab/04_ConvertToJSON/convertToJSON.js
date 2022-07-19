function main(name, lastName, hairColor) {
    let res = {
        name,
        lastName,
        hairColor
    };
    let resAsString = JSON.stringify(res);
    console.log(resAsString);
}