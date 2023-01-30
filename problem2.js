function make_avg(num1, num2, num3){
    var sum = num1 + num2 + num3;
    var average = sum / 3;
    return average
}

var num1 = 10;
var num2 = 20;
var num3 = 30;

var totalAverage = make_avg(num1, num2, num3);

console.log('Total average: ', totalAverage);