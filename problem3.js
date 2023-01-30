function make_avg(arr, size) {
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum / size;
}

let numbers = [1, 2, 3, 4, 5];
let avg = make_avg(numbers, numbers.length);
console.log(avg);
