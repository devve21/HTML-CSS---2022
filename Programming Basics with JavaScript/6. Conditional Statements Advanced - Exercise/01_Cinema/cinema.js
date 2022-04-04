function cinema(input) {
  let projection = input[0];
  let rows = Number(input[1]);
  let cols = Number(input[2]);

  let Premiere = 12.0;
  let Normal = 7.5;
  let Discount = 5.0;
  let income = 0;

  if (projection === "Premiere") {
    income = Premiere * (rows * cols);
  }else if(projection === "Normal"){
    income = Normal * (rows * cols);
  }else if(projection === "Discount"){
    income = Discount * (rows * cols);
  }
  console.log(`${income.toFixed(2)} leva`);
}
cinema(["Premiere","10","12"]);