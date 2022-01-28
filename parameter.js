function bringSingara(taka){
    console.log('Singarar jonno taka dise',taka);
    console.log('Mama singara den');
    var singaraPrice = 10;
    var singaraQty = taka / singaraPrice;
    return singaraQty;
}

var money = 250;
// bringSingara(money);
var singara = bringSingara(money);
// bringSingara(250);
console.log('Ay nen Singara ', singara);