// map() Method
//--------------
/* The map() method creates a new array populated with the results of
    calling a provided function on every element in the calling array.
*/

/*
- Arrow function
map( (element) => {  ...  } )
map( (element, index) => {  ...  } )
map( (element, index, array) => {  ...  } )

- Callback function
map(callbackFn)
map(callbackFn, thisArg)

- Inline callback function
map(function(element) {  ...  })
map(function(element, index) {  ...  })
map(function(element, index, array){  ...  })
map(function(element, index, array) {  ...  }, thisArg)
*/
//Notice:
/* The map() method take 2 parameters:
    array.map( function(currentValue, index, arr), thisArg )
      1- the first one: is the arrow or Callback or Inline callback function
         which take 3 parameters:
         1-1- currentValue: current element value. / Mandotary /
         1-2- index: the index of the current element. / Optionaly /
         1-3- arr: the array itself /original array/. / Optionaly /
      2- thisArg: Value to use as this when executing. / Optionaly /
*/
// Illustrative example:
//----------------------
let myNumsArr = [1,2,3];
let result = myNumsArr.map(function(currElement, index, arr){
    console.log(`Current Element: ${currElement}`); // Current Element: 1
    console.log(`Current Index: ${index}`); // Current Index: 0
    console.log(`Original Array: ${arr}`); // Original Array: 1,2,3
    console.log(`theArg: ${this}`); // theArg: 10
},10);
// This outpu is repeated for every element in the array./lokk at the console/

// Examples:
//----------
// Consider we have array: [1,4,9,16,25], to get a new array have a double values from the last
// we declare a new empty one and looping the last array :
let myArr = [1,4,9,16,25];
let myNewArr =[];
for(let i=0; i<myArr.length; i++){
    myNewArr.push(2 * myArr[i]);
}
console.log(myNewArr); // (5) [2, 8, 18, 32, 50]

//Now we will use the map() method:
const myArr1 = [1,4,9,16,25];
const myNewArr11 = myArr1.map( currenElement => currenElement*2);
console.log(myNewArr11); // (5) [2, 8, 18, 32, 50]
const myNewArr12 = myArr1.map( currenElement => Math.sqrt(currenElement));
console.log(myNewArr12); // (5) [1, 2, 3, 4, 5]

// using callback function
//------------------------
function addition(x){
    return 2*x;
}
let myTestArr = myArr1.map(addition);
console.log(myTestArr); // (5) [2, 8, 18, 32, 50]
//
const myNewArr13 = myArr1.map( Math.sqrt);
console.log(myNewArr13); // (5) [1, 2, 3, 4, 5]
//
let myStr1 = "Hello World!";
let myStr1Arr = myStr1.split("");
console.log(myStr1Arr); // (12) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!']
let myNewStr1Arr = myStr1Arr.map( char => char.charCodeAt());
console.log(myNewStr1Arr); // (12) [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]

/*This example shows how to use map on a String to get an array of bytes in the ASCII encoding
 representing the character values:*/
const map = Array.prototype.map;
const charCodes = map.call('Hello World', (x) => x.charCodeAt(0));
// (12) [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]

// Solving some problems using map()
//--------------------------------
// 1- Swapping cases for letters: a->A , B->b

    let myString = "bELalhoMSi"; // we must convert into BelALHOmsI

    // 1-1- using map(callback function)
    // Convert string to array:
    let resultSwap1 = myString.split("");
    console.log(resultSwap1); // (10) ['b', 'E', 'L', 'a', 'l', 'h', 'o', 'M', 'S', 'i']
    // function swapCase, get character, and return it in another case:
    function swapCase(chr){
        if( chr === chr.toUpperCase()){
            return chr.toLowerCase();
        }else{
            return chr.toUpperCase();
        }
    } // or: function swapCase(chr){ return chr === chr.toUpperCase() ? chr.toLowerCase() : chr.toLowerCase(); }
    // now we use map with the last function:
    let resultSwap2 = resultSwap1.map(swapCase);
    console.log(resultSwap2); // (10) ['B', 'e', 'l', 'A', 'L', 'H', 'O', 'm', 's', 'I']
    // now we convert the araay to string by join():
    let finalResultArr = resultSwap2.join("");
    console.log(finalResultArr); // BelALHOmsI
    //or :
    let finalRes1 = myString.split("").map(swapCase).join("");
    console.log(finalRes1); // BelALHOmsI

    // 1-2- using map(inline callback function)
    let finalRes2 = myString.split("").map(function(chr){
        return chr === chr.toUpperCase() ? chr.toLowerCase() : chr.toLowerCase();
    }).join("");
    console.log(finalRes2); // belalhomsi

    // 1-3- using map(arrow function)
    let finalRes3 = myString.split("").map(chr => chr === chr.toUpperCase() ? chr.toLowerCase() : chr.toUpperCase()).join("");
    console.log(finalRes3); // BelALHOmsI

// 2- Inverting Numbers (positive->minus, minus->positive)
    let myNumers = [5, -20, -13, 40, 100, -7];
    let myInvertedNums = myNumers.map( num => -num);
    console.log(myInvertedNums); // (6) [-5, 20, 13, -40, -100, 7]

// 3- Ignor the numbers in string ( Ja5va6S01cr7ipt12 -> JavaScript )
let myStrNum = "Ja5va6S01cr7ipt12";
let myOnlyStr = myStrNum.split("").map( chr => isNaN(parseInt(chr)) ? chr : "").join("");
console.log(myOnlyStr); // JavaScript
//about isNaN and parseInt:
/*  console.log(isNaN("A")); // true
    console.log(isNaN("5")); // false
    console.log(isNaN(5)); // false
    console.log(parseInt("A")); // NaN
    console.log(parseInt("5")); // 5
    console.log(parseInt(5)); // 5
    console.log(isNaN(parseInt("A"))); // true
    console.log(isNaN(parseInt("5"))); // false  */

// Array.from()
console.log(Array.from('foo')); // ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x)); // [2, 4, 6]

// filter() Method
//----------------
/* The filter() method creates a new array with all elements that 
    pass the test (if true) implemented by the provided function.
*/

/*
- Arrow function
filter( (element) => {  ...  } )
filter( (element, index) => {  ...  } )
filter( (element, index, array) => {  ...  } )

- Callback function
filter(callbackFn)
filter(callbackFn, thisArg)

- Inline callback function
filter(function(element) {  ...  })
filter(function(element, index) {  ...  })
filter(function(element, index, array){  ...  })
filter(function(element, index, array) {  ...  }, thisArg)
*/
//Notice:
/* The filter() method (like map()) take 2 parameters:
    array.filter( function(currentValue, index, arr), thisArg )
      1- the first one: is the arrow or Callback or Inline callback function
         which take 3 parameters:
         1-1- currentValue: current element value. / Mandotary /
         1-2- index: the index of the current element. / Optionaly /
         1-3- arr: the array itself /original array/. / Optionaly /
      2- thisArg: Value to use as this when executing. / Optionaly /
*/

// With filter() it test condition for each element and return true or false
// With map() it apply action for each element in the array and return result.
let testNums = [5, 7, 10, 25, 4, 32];
let mapResult = testNums.map( function(e){
    return 2 * e;
} );
console.log(testNums); // (6) [5, 7, 10, 25, 4, 32]
console.log(mapResult); // (6) [10, 14, 20, 50, 8, 64]
let filterResult = testNums.filter(function(e){
    return 2 * e;    
});
console.log(filterResult); // (6) [5, 7, 10, 25, 4, 32]

// Now if we need to get the only even numbers:
// by map():
let evenMap = testNums.map(function(e){
    if(e%2 === 0 ) return e;
});
console.log(evenMap); // (6) [undefined, undefined, 10, undefined, 4, 32]

let evenMap2 = testNums.map( ele => ele % 2 === 0 ? ele : '');
console.log(evenMap2); // (6) ["", "", 10, "", 4, 32]

// by filter():
let evenFilter = testNums.filter(function(e){
    return e%2 === 0;
});
console.log(evenFilter); // (3) [10, 4, 32]
// by filter() with arrow function
let evenFilterArrowFn = testNums.filter( e => e%2 === 0);
console.log(evenFilterArrowFn); // (3) [10, 4, 32]

// To get the names from array, which start with B:
let myNames = ['Belal', 'Sameh', 'Ali', 'Bassem', 'Laila'];
let myNamesB = myNames.filter( e => e.startsWith("B") );
console.log(myNamesB); // (2) ['Belal', 'Bassem']

// To get the words by length is 4 or less, from string:
let mySentence = "Hello Mr. Belal in Java Script";
let theRes = mySentence.split(" ").filter( ele => ele.length <=4).join(" ");
console.log(theRes); // Mr. in Java

// "Ja5va6S01cr7ipt12" -> "JavaScript" by filter:
let myStrNumm = "Ja5va6S01cr7ipt12";
let notNums = myStrNumm.split("").filter( ele => isNaN(parseInt(ele))).join("");
console.log(notNums); // JavaScript

// "a2b1c3" -> 419 (2*2->4, 1*1->1, 3*3->9)
let mix = "a2b1c3";
let numsMultiplayed = mix.split("").filter( ele => !isNaN(parseInt(ele)) ).map( ele => ele*ele).join("");
console.log(numsMultiplayed); // 419

// reduce() method
//----------------
//arr.reduce( callback(accumulator, currElementtValue, currElementtIndex, originalArray), initialValue )
//reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
/*
    A "reducer" function that takes four arguments:
            previousValue: the value resulting from the previous call to callbackFn. On first call,
                        initialValue if specified, otherwise the value of array[0].
            currentValue: the value of the current element. On first call, the value of array[0] 
                        if an initialValue was specified, otherwise the value of array[1].
            currentIndex: the index position of currentValue in the array. On first call, 
                        0 if initialValue was specified, otherwise 1.
            array: the array to traverse.
    initialValue Optional: 
            A value to which previousValue is initialized the first time the callback is called.
            If initialValue is specified, that also causes currentValue to be initialized to 
            the first value in the array. 
            If initialValue is not specified, previousValue is initialized to the first value 
            in the array, and currentValue is initialized to the second value in the array.
*/
/*
Return value:
    The value that results from running the "reducer" callback function to completion over the entire array.
Exceptions: TypeError
    The array contains no elements and initialValue is not provided.
*/
let numsArr1 = [15, 20, 30, 55];
let sumAllElements1 = numsArr1.reduce( function(accumulator, ele){
    return accumulator + ele;
} )
console.log(sumAllElements1); // 120

// More illustrate -1-:
//---------------------
let numsArr2 = [15, 20, 30, 55];
let sumAllElements2 = numsArr2.reduce( function(accumulator, currElementtValue, currElementtIndex, originalArray){
    console.log(`Accumulator = ${accumulator}`);
    console.log(`Current Value = ${currElementtValue}`);
    console.log(`Current Index = ${currElementtIndex}`);
    console.log(`Array = ${originalArray}`);
    console.log('****************************');
    return accumulator + currElementtValue;
} )
console.log(sumAllElements2);
/*
Accumulator = 15 // start with elelment[0] value.
 Current Value = 20
 Current Index = 1
 Array = 15,20,30,55
 ****************************
 Accumulator = 35
 Current Value = 30
 Current Index = 2
 Array = 15,20,30,55
 ****************************
 Accumulator = 65
 Current Value = 55
 Current Index = 3
 Array = 15,20,30,55
 ****************************
 120
*/

// More illustrate -2- / with Initial Value / :
//---------------------------------------------
let numsArr3 = [15, 20, 30, 55];
let sumAllElements3 = numsArr3.reduce( function(accumulator, currElementtValue, currElementtIndex, originalArray){
    console.log(`Accumulator = ${accumulator}`);
    console.log(`Current Value = ${currElementtValue}`);
    console.log(`Current Index = ${currElementtIndex}`);
    console.log(`Array = ${originalArray}`);
    console.log('****************************');
    return accumulator + currElementtValue;
} , 0)
console.log(sumAllElements3);
/*
 Accumulator = 0 // start with initialValue which it's 0.
 Current Value = 15
 Current Index = 0
 Array = 15,20,30,55
 ****************************
Accumulator = 15
 Current Value = 20
 Current Index = 1
 Array = 15,20,30,55
 ****************************
 Accumulator = 35
 Current Value = 30
 Current Index = 2
 Array = 15,20,30,55
 ****************************
 Accumulator = 65
 Current Value = 55
 Current Index = 3
 Array = 15,20,30,55
 ****************************
 120
*/
/*
// More illustrate -3- / without Initial Value, empty array / :
//------------------------------------------------------------
let numsArr4 = [];
let sumAllElements4 = numsArr4.reduce( function(accumulator, currElementtValue, currElementtIndex, originalArray){
    console.log(`Accumulator = ${accumulator}`);
    console.log(`Current Value = ${currElementtValue}`);
    console.log(`Current Index = ${currElementtIndex}`);
    console.log(`Array = ${originalArray}`);
    console.log('****************************');
    return accumulator + currElementtValue;
} )
console.log(sumAllElements4);
/* Uncaught TypeError: Reduce of empty array with no initial value
    at Array.reduce (<anonymous>) */

// More illustrate -4- / with Initial Value 0, empty array / :
//------------------------------------------------------------
let numsArr5 = [];
let sumAllElements5 = numsArr5.reduce( function(accumulator, currElementtValue, currElementtIndex, originalArray){
    console.log(`Accumulator = ${accumulator}`);
    console.log(`Current Value = ${currElementtValue}`);
    console.log(`Current Index = ${currElementtIndex}`);
    console.log(`Array = ${originalArray}`);
    console.log('****************************');
    return accumulator + currElementtValue;
} ,0 )
console.log(sumAllElements5); // 0

// More illustrate -5- / with Initial Value 25, empty array / :
//------------------------------------------------------------
let numsArr6 = [];
let sumAllElements6 = numsArr6.reduce( function(accumulator, currElementtValue, currElementtIndex, originalArray){
    console.log(`Accumulator = ${accumulator}`);
    console.log(`Current Value = ${currElementtValue}`);
    console.log(`Current Index = ${currElementtIndex}`);
    console.log(`Array = ${originalArray}`);
    console.log('****************************');
    return accumulator + currElementtValue;
} ,25 )
console.log(sumAllElements6); // 25

// More illustrate -6- / with Initial Value 25 / :
//------------------------------------------------------------
let numsArr7 = [15, 20, 30, 55];
let sumAllElements7 = numsArr7.reduce( function(accumulator, currElementtValue, currElementtIndex, originalArray){
    console.log(`Accumulator = ${accumulator}`);
    console.log(`Current Value = ${currElementtValue}`);
    console.log(`Current Index = ${currElementtIndex}`);
    console.log(`Array = ${originalArray}`);
    console.log('****************************');
    return accumulator + currElementtValue;
} ,25 )
console.log(sumAllElements7); // 145
/*
 Accumulator = 25 // start with initialValue=25
 Current Value = 15
 Current Index = 0
 Array = 15,20,30,55
 ****************************
 Accumulator = 40
 Current Value = 20
 Current Index = 1
 Array = 15,20,30,55
 ****************************
 Accumulator = 60
 Current Value = 30
Current Index = 2
 Array = 15,20,30,55
 ****************************
 Accumulator = 90
 Current Value = 55
 Current Index = 3
 Array = 15,20,30,55
 ****************************
 145
*/
// reduce() practice:
//-------------------
// 1- Get the tallest word in array:
let myWords = ['hello', 'bye', 'JavaScript', 'PHP', 'Belal'];
let theTallestWord = myWords.reduce(function(acc, ele){
    return acc.length > ele.length ? acc : ele ;
});
console.log(theTallestWord); // JavaScript

// 2- Remove character from array:
let myChars1 = ['B', '$', '$', 'e', 'l', '$', 'a', '$', 'l']; // remove $ + return the rest as string
//by filter:
let myStrChars1 = myChars1.filter( ele => ele !== '$' ).join("");
console.log(myStrChars1); // Belal
//by map:
let myChars2 = ['B', '$', '$', 'e', 'l', '$', 'a', '$', 'l'];
let myStrChars2 = myChars2.map( ele => ele !== '$' ? ele : "").join("");
console.log(myStrChars2); // Belal
//by reduce / without join(""):
let myChars3 = ['B', '$', '$', 'e', 'l', '$', 'a', '$', 'l'];
let myStrChars3 = myChars3.reduce( function(acc, ele){
    return ele !== '$' ? acc + ele : acc ;
} , "" )
console.log(myStrChars3); // Belal

// forEach() method
//-----------------
/* The forEach() method calls a function for each element in an array.
   The forEach() method is not executed for empty elements.
*/
/* Syntax
// Arrow function
forEach((element) => {  ...  })
forEach((element, index) => {  ...  })
forEach((element, index, array) => {  ...  })

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function(element) {  ...  })
forEach(function(element, index) {  ...  })
forEach(function(element, index, array){  ...  })
forEach(function(element, index, array) {  ...  }, thisArg) */
/*
Parameters
----------
    callbackFn
       Function to execute on each element. It accepts between one and three arguments:
            element: The current element being processed in the array.
            index (Optional): The index of element in the array.
            array (Optional): The array forEach() was called upon.

    thisArg (Optional): Value to use as this when executing callbackFn.

Return value
------------
undefined /void .
*/
let testArr = [5, 7 ,3 , -10, 26];
// Type the elements & the sum:
// for loop:
let s1=0;
for(let i=0; i<testArr.length; i++){
    console.log(testArr[i]);
    s1 += testArr[i];
}
console.log(`Sum = ${s1}`);
// forEach() method, with inline function:
let s2=0;
testArr.forEach( function(e){
    console.log(e);
    s2 += e;
});
console.log(`Sum = ${s2}`);
// or with callback function:
let s3=0;
testArr.forEach( myCllBkFun );
console.log(`Sum = ${s3}`);
function myCllBkFun(e){
    console.log(e);
    s3 += e;
}
// or with arrow function:
let s4=0;
testArr.forEach( e => {
    console.log(e);
    s4 += e;
});
console.log(`Sum = ${s4}`);
/* output:
    5
    7
    3
    -10
    26
    Sum = 31
*/
// to type the positive elements:
testArr.forEach( e => e>0 ? console.log(e) : null);
/* output:
    5
    7
    3
    26
*/

// chalenge:
//-----------
let myMixString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
console.log( myMixString.split(",") );
console.log( myMixString.split(",").filter(e => isNaN(parseInt(e))) );
console.log( myMixString.split(",").filter(e => isNaN(parseInt(e))).map(e => e === '_' ? " " : e) );
console.log( myMixString.split(",").filter(e => isNaN(parseInt(e))).map(e => e === '_' ? " " : e).join("") );
//or
console.log( myMixString.split(",").filter(e => isNaN(parseInt(e))).map(e => e.replace('_', ' ')) );
console.log( myMixString.split(",").filter(e => isNaN(parseInt(e))).map(e => e.replace('_', ' ')).join("") );
