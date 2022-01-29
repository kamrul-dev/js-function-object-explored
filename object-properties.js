var computer = {
    price: 29000,
    storage: '256gb',
    color: 'silver',
    processor: 'intel i5'
}
// console.log(computer);
// console.log(computer.processor);
var computerPrice = computer.price;
console.log(computer.color);
console.log(computer['price']);

// set a object value

// console.log(computer);
// console.log(computerPrice);

// difference ways to set a value of an object property
var pricePropertyName = "price";

computer.price = 22000;
computer['price'] = 23000;
computer[pricePropertyName] = 20000;



var  storageProperty = "storage";

computer[storageProperty] = '512gb'
computer['storage'] = '1tb';
computer.storage = '2tb';



console.log(computer);

