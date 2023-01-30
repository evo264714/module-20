function odd_even(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let number = 10;
let result = odd_even(number);
console.log(result);
