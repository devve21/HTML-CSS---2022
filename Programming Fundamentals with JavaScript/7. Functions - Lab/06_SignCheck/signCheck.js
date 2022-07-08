function signCheck(num) {
    let negative = 0;
    let positive = 0;
    for (let i = 0; i < num.length; i++) {
        if(num[i] < 1){
            negative -= num[i];
        }else{
            positive += num[i];
        }
    }
    if(negative > positive){
        console.log("Negative");
    }else{
        console.log("Positive");
    }
}