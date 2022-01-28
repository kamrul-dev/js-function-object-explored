
// Additon of two number usnig function
function addTwoNumbers(number1, number2){
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
    
}
var firstNuumber = 35;
var secondNumber = 47;
var result = addTwoNumbers(firstNuumber, secondNumber);
console.log('the add result value ', result);
// addTwoNumbers(21, 79);


// Multiplication of two numbers
function multiplyTwoNumbers(num1, num2){
    var result = num1 * num2;
    return result;
}
var total = multiplyTwoNumbers(5, 100);
console.log('multiplication result', total);

// Difference or subtraction between two numbers

function difference(difNumber1, difNumber2){
    var difResult = difNumber1 - difNumber2;
    return difResult;
}
var result = difference(20, 10);
console.log('Subtraction result ', result);


// Division between two numbers

function divisionTwoNumbers(divNumber1, divNumber2){
    var divResult = divNumber1 / divNumber2;
    return divResult;
}
var result = divisionTwoNumbers(10, 5);
console.log('division of two numbers', result);