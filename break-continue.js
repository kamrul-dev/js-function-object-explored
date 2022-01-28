// var i = 0;
// while(i < 10){
//     console.log(i);
//     if(i == 5){
//         break;
//     }
//     i++;
// }



// for(var i = 0; i <= 20; i++){
//     console.log(i);
//     if(i == 10){
//         break;
//     }
// }

// for(var i = 0; i <= 20; i++){
//     console.log(i);
//     if(i > 10){
//         break;
//     }
// }


var numbers = [23, 34, 67,15, 13, 14, 12, 11, 101, 20, 36, 200, 203];
// for(var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     console.log(number);
//     if(number > 100){
//         break;
//     }
// }

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 90){
        continue;
    }
    console.log(number);
}