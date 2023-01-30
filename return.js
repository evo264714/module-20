function add(num1, num2){
    console.log(num1, num2);
    var sum = num1 + num2;
    return sum;
}
var total = add(80, 20);
// console.log('Total: ', total);

function bringShingara(money){
    var shingaraPrice = 10;
    var quantity = money/shingaraPrice;
    return quantity;
}
myTaka = 150;
var shingaras = bringShingara(myTaka);
console.log('Eating Shingaras: ', shingaras);
