function arrayRotation(array, rotations) {
    while (rotations > 0) {
        let elementToMove = array.shift();
        array.push(elementToMove);
        rotations--;
    }
    console.log(array.join(" "));
}