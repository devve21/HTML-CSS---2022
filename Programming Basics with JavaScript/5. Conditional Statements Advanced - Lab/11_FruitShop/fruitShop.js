function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let numberOfFruits = Number(input[2]);

  let banana = 0;
  let apple = 0;
  let orange = 0;
  let grapefruit = 0;
  let kiwi = 0;
  let pineapple = 0;
  let grapes = 0;

  if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday"
  ) {
    switch (fruit) {
      case "banana":
        banana = 2.5;
        console.log((banana * numberOfFruits).toFixed(2));
        break;
      case "apple":
        apple = 1.2;
        console.log((apple * numberOfFruits).toFixed(2));
        break;
      case "orange":
        orange = 0.85;
        console.log((orange * numberOfFruits).toFixed(2));
        break;
      case "grapefruit":
        grapefruit = 1.45;
        console.log((grapefruit * numberOfFruits).toFixed(2));
        break;
      case "kiwi":
        kiwi = 2.7;
        console.log((kiwi * numberOfFruits).toFixed(2));
        break;
      case "pineapple":
        pineapple = 5.5;
        console.log((pineapple * numberOfFruits).toFixed(2));
        break;
      case "grapes":
        grapes = 3.85;
        console.log((grapes * numberOfFruits).toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else if (day === "Saturday" || day === "Sunday") {
    switch (fruit) {
      case "banana":
        banana = 2.7;
        console.log((banana * numberOfFruits).toFixed(2));
        break;
      case "apple":
        apple = 1.25;
        console.log((apple * numberOfFruits).toFixed(2));
        break;
      case "orange":
        orange = 0.9;
        console.log((orange * numberOfFruits).toFixed(2));
        break;
      case "grapefruit":
        grapefruit = 1.6;
        console.log((grapefruit * numberOfFruits).toFixed(2));
        break;
      case "kiwi":
        kiwi = 3.0;
        console.log((kiwi * numberOfFruits).toFixed(2));
        break;
      case "pineapple":
        pineapple = 5.6;
        console.log((pineapple * numberOfFruits).toFixed(2));
        break;
      case "grapes":
        grapes = 4.2;
        console.log((grapes * numberOfFruits).toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  }else{
    console.log("error");
}
}
fruitShop(["apple", "Tuesday", "2"]);
