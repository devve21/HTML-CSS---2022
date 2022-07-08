function orders(product, n) {
    let res;
    switch(product){
        case "coffee": res = 1.50 * n; break;
        case "water": res = 1 * n; break;
        case "coke": res = 1.40 * n; break;
        case "snacks": res = 2.00 * n; break;
    }
    console.log(res.toFixed(2));
}