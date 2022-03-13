function schoolSupplies(input){
    let paketiHimikali = Number(input[0]);
    let broiMarkeri = Number(input[1]);
    let litriDuska = Number(input[2]);
    let namalenie = Number(input[3])

    let cenaHimikali = paketiHimikali * 5.80;
    let cenaMarkeri = broiMarkeri * 7.20;
    let cenaPreparati = litriDuska * 1.20;

    let cenaSum = cenaHimikali + cenaMarkeri + cenaPreparati;
    let cenaNamalenie = cenaSum - (cenaSum * (namalenie / 100));
    console.log(cenaNamalenie);
}
schoolSupplies(["2","3","4","25"])