//* Array
var shoppingCart = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];

//* Object
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// * var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName]
    // console.log(propertyValue);
}

//* for in loop
for(var propertName in shoppingCart){
    const value = shoppingCart[propertName];
    console.log(propertName, value);
}
