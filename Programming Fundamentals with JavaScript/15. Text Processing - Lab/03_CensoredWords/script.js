function main(text, word) {

    while (text.indexOf(word) >= 0) {
        text = text.replace(word, "*".repeat(word.length));
    }
    console.log(text);
}