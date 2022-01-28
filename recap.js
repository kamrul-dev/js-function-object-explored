// 1. variable
var favouriteBook = '4 hour woek week';
var bookList = ['positioning', 'hooked', 'start with y', 'shoe dog'];

//2. array
var shoeDonIndex = bookList.indexOf('shoe dog');

bookList[1] = 'story brand';

bookList.push('smal giants');
bookList.pop();

//3. conditional

if(bookList[1] == 'hooked'){
    console.log('I am hooked');
}
else{
    console.log('I am not hooked');
}


//4. While loop
var i = 0;
while(i < 15){
    console.log(i);
    console.log("looping count");
    i++;
}

// 5. for loop

for (var i = 0; i < 15; i++){
    console.log(i);

}