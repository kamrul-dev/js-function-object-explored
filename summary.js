var skyColor = 'white';

var phone = ['iphone', 'xiaomi', 'samsung', 'lg', 'htc'];

phone[3] = 'walton';

//check oppo phone is missing
if(phone.indexOf('oppo') == -1){
    console.log('oppo is missing');
}


// lg is available
if(phone.indexOf('lg') != -1){
    console.log('lg is available now');
}


// loop
var num = 0;
while(num <= 10){
    num++;
}

for(var i = 0; i < phone.length ; i++){
    console.log(i);
}

// function

function addThreeNumbers (number1, number2, number3){
    var total = number1 + number2 + number3;
    return total;
}
addThreeNumbers(5, 10, 15);


// object

var microphone = {
    brand: 'blue yeti',
    price: 120,
    color: 'black'
}