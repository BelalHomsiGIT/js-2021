// Functions
//---------------
/* A JavaScript function is a block of code designed to perform a particular task.
   A JavaScript function is executed when "something" invokes it (calls it).
*/
  // without parameters, Void
  function sayHello1(){
      console.log("Hello Mr. Belal");
  }
  sayHello1(); // Hello Mr. Belal
  
  // with parameters
  function sayHello2(theName){
      console.log(`Hello Mr. ${theName}`);
  }
  sayHello2('Hani'); // Hello Mr. Hani
  sayHello2('Sami'); // Hello Mr. Sami

  // with parameters, what happen if we ommit one ?
  function sayHello3(theName, theAge){
      console.log(`Hello Mr. ${theName}, your age is ${theAge}`);
  }
  sayHello3(); // Hello Mr. undefined, your age is undefined (no error)
  sayHello3("Adnan"); // Hello Mr. Adnan, your age is undefined (no error)
  sayHello3("Ahmad", 50); // Hello Mr. Ahmad, your age is 50
  
  //
  function sayHello4(theName, theAge){
      if(theAge < 20){
          console.log("You are not accepted.");
      }else{
        console.log(`Hello Mr. ${theName}, your age is ${theAge}`);
      }
  }
  sayHello4("Ahmad", 50); // Hello Mr. Ahmad, your age is 50
  sayHello4("Karam", 19); // You are not accepted.

  // with retrurn statement
  function sayHello5(theName, theAge){
    if(theAge < 20){
        return "You are not accepted.";
    }else{
        return `Hello Mr. ${theName}, your age is ${theAge}`;
    }
}
sayHello4("Ahmad", 50); // nothing, we must use the returnd value from the function
console.log(sayHello5("Ahmad", 50)); // Hello Mr. Ahmad, your age is 50
let theRes = sayHello5("Belal", 105);
console.log(theRes); // Hello Mr. Belal, your age is 105

// Add tow numbers
function add1(n1, n2){
    return `${n1} + ${n2} = ${n1+n2}`;
}
console.log(add1(5,10)); // 5 + 10 = 15
console.log(add1(5)); // 5 + undefined = NaN

// Solving the ommit the parameter logicaly
function add2(n1, n2){
    if(n2 === undefined){
        n2=0;
    }
    return `${n1} + ${n2} = ${n1+n2}`;
}
console.log(add2(5,10)); // 5 + 10 = 15
console.log(add2(5)); // 5 + 0 = 5
// Or
function add3(n1, n2){
    n2 = n2 || 0;  //if n2 has no value, so it has zero
    return `${n1} + ${n2} = ${n1+n2}`;
}
console.log(add3(5,10)); // 5 + 10 = 15
console.log(add3(5)); // 5 + 0 = 5

// Solving the ommit a parameter using the Default (ES)
function add4(n1, n2=0){
    return `${n1} + ${n2} = ${n1+n2}`;
}
console.log(add4(5,10)); // 5 + 10 = 15
console.log(add4(5)); // 5 + 0 = 5

function add5(n1=0, n2=0){
    return `${n1} + ${n2} = ${n1+n2}`;
}
console.log(add5(5,10)); // 5 + 10 = 15
console.log(add5(5)); // 5 + 0 = 5
console.log(add5()); // 0 + 0 = 0

//The Rest Parameters
/* When we don't know the number of function parameters, we use the Rest Parameters
   which it's an array of parameters*/
/*
        function fun(a, b, ...theArgs) {  
        // statements  
        }
*/
function printNumbers(...numArr){
    for(let i=0; i<numArr.length; i++){
        console.log(numArr[i]);
    }
}
printNumbers(7,12,19,22,50,60,33);
printNumbers(60,2,23);
printNumbers(37);

function addNumbers1(...numArr){
    let sum=0;
    for(let i=0; i<numArr.length; i++){
        sum += numArr[i];
    }
    return sum;
}
console.log(addNumbers1(7)); // 7
console.log(addNumbers1(6,2,23)); // 31
console.log(addNumbers1(3,4,10,25,65)); // 107

/* Notes:
    1- only one Rest Parameter can found in function
    2- we can use many specific parameters with the Rest
    3- the Rest must be at the last
*/
function addNumbers2(a=0, b=0, ...numArr){
    let sum= a + b;
    for(let i=0; i<numArr.length; i++){
        sum += numArr[i];
    }
    return sum;
}
console.log(addNumbers1()); // 0
console.log(addNumbers1(7)); // 7
console.log(addNumbers1(6,2,23)); // 31
console.log(addNumbers1(3,4,10,25,65)); // 107

//Challenge -1-
let testArr = [15, "Belal", true];
for(let i=0; i<testArr.length; i++){
    console.log(typeof testArr[i]);
}/* number
    string
    boolean */
  let rr=["bbb", 10, false];
  console.log(rr.sort()); // (3) [10, 'bbb', false]
  console.log(rr.sort().reverse()); // (3) [false, 'bbb', 10]
  let rrr=[true, 32,"bbb"];
  console.log(rrr.sort()); // (3) [32, 'bbb', true]

function showDEtails(...args){
    let showName="", showAge=0, showHire=true;
    for(let i=0; i<args.length; i++){
        if(typeof args[i] === "string"){
            showName = args[i];
        }else if(typeof args[i] === "number"){
            showAge = args[i];
        }else if(typeof args[i] === "boolean"){
            if(args[i]){
                showHire="You are available for hire.";
            }else{
                showHire="You are not available for hire.";
            }
        }
    }
    console.log(`Hello ${showName} Your Age is ${showAge}, ${showHire}`);
}
showDEtails("Belal", 100, true); // Hello Belal Your Age is 100, You are available for hire.
showDEtails(21, "Hani", false); // Hello Hanim Your Age is 21, You are not available for hire.
showDEtails(true, "Sami", 40); // Hello Samim Your Age is 40, You are available for hire.
showDEtails("Belal", true, 100); // Hello Belalm Your Age is 100, You are available for hire.

// Anonymous Functions
//---------------------
/* The meaning of the word 'anonymous' defines something that is unknown or has no identity.
   In JavaScript, an anonymous function is that type of function that has no name
   or we can say which is without any name.
   When we create an anonymous function, it is declared without any identifier.
   It is the difference between a normal function and an anonymous function.*/
//
/* We use it for specific event, or as inline function,, 
   don't use for function maybe used with many events.
   example: when we create function as a react for clicking specific buttomn,
   mean we don't use it for anything else,
   here the anonymous function is great choice.
*/

// Normal Function:
function calc1(a, b) { return a+b;}
console.log(calc1(5,6)); // 11

// A function expression of an anonymous function assigned to the variable:
/*  We have used the function keyword, which is used when we create any function in JavaScript,
    and the function is assigned to a variable x using 'let'. */
let calc2 = function() { return "Function Expression of Anonymous";}
console.log(calc2()); // Function Expression of Anonymous

let calc3 = function(a, b) { return a+b;}
console.log(calc3(1,2)); //3

// We can also use an Anonymous Function as an Argument
//-----------------------------------------------------
/* for another function. To understand better, 
   let's implement a code under which we will pass the anonymous function
   as an argument value for another function: 
*/
// we will pass an anonymous function as argument to a setTimeout function:
setTimeout(function () {  
    console.log('Execute later after 1 second')  
}, 1000);

// setTimeout(console.log('hhhh'), 1000);

/* About setTimeout()
    The global setTimeout() method sets a timer which executes
    a function or specified piece of code once the timer expires.
  Syntax
        var timeoutID = setTimeout(function[, delay, arg1, arg2, ...]);
        var timeoutID = setTimeout(function[, delay]);
        var timeoutID = setTimeout(code[, delay]);
*/

/* However, a name can be provided with a function expression. Providing a 
   name allows the function to refer to itself, and also makes it easier to
   identify the function in a debugger's stack traces.*/

const factorial = function fac(n) {
return n < 2 ? 1 : n * fac(n - 1);
}
console.log(factorial(5)); // 120
  
// Normal function, - recursive function -
function factorial2(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial2(n - 1);
    }
}
console.log(factorial2(4)); // 24

// Function inside another Function (Nested functions).
//----------------------------------------------------
// Example-1-
function fullMessage1(fName, lName){
    let greeting = 'Hello';
    function concatMsg(){
        let theMsg = `${greeting} ${fName} ${lName} .`;
        return theMsg
    }
    return concatMsg();
}
console.log(fullMessage1('Belal', 'Homsi')); // Hello Belal Homsi .

// Example-2-
function fullMessage2(fName, lName){
    let greeting = 'Hello';
    function concatMsg(){
        function getFullName(){
            return `${fName} ${lName} .`;
        }
    let theMsg = `${greeting} ${getFullName()}`;
    return theMsg
    }
    return concatMsg();
}
console.log(fullMessage2('Belal', 'Homsi')); // Hello Belal Homsi .

//Nested functions and closures:
function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  // 3 as x, 5 as y:
  const result1 = outside(3)(5); // returns 8

  // Think of it like: give me a function that adds 3 to whatever you give it( 3 as x)
  const fnInside = outside(3); 
  // Now we call the fnInside(5), 5 as y:
  const result = fnInside(5); // returns 8

// Arrow Function
//----------------
/* ES6 arrow functions provide you with an alternative way to write 
   a shorter syntax compared to the function expression.
*/
// The following example defines a regular function that returns the sum of two numbers:
function addTowNums1(a, b){
    return a+b;
}
console.log(addTowNums1(20,15)); // 35
// The following example defines a function expression that returns the sum of two numbers:
let addTowNums2 = function(a, b){
    return a+b;
}
console.log(addTowNums2(20,15)); // 35
// The following example is equivalent to the above function expression but use an arrow function instead:
// Note that we didn't use function as reserved word.
let addTowNums3 = (a, b) => { return a+b};
console.log(addTowNums3(20,15));// 35
// because we have one statement we ommit the return and the block brackets {}
let addTowNums4 = (a, b) =>  a+b;
console.log(addTowNums4(20,15));// 35

// if we have only one parameter, we can skip the parentheses:
let printNum = num => num;
console.log(printNum(100)); // 100
// so if we have no any parameters, we we use ():
let print10 = () => 10;
console.log(print10()); // 10
// if we have many statements in function body, we must use th {}:
let testArrFun = (x) => {
    x *= x;
    return x;
}
console.log(testArrFun(5)); // 25

// Scope - Global and Local Scope
//--------------------------------
var a=60; // global
let b=70; // global

console.log(`Global: a=${a} b=${b}`); // Global: a=60 b=70
function myScope1(){
    console.log(`Global - From Function: a=${a} b=${b}`);
}
myScope1(); // Global - From Function: a=60 b=70

function myScope2(){
    var a=15; // local
    let b=40; // local
    console.log(`Local - From Function: a=${a} b=${b}`);
}
myScope2(); // Local - From Function: a=15 b=40

function myScope3(){
    var x=75; // local
    let y=89; // local
    console.log(`Global - From Function: a=${a} b=${b}`);
    console.log(`Local - From Function: x=${x} y=${y}`);
}
myScope3(); // Global - From Function: a=60 b=70 // Local - From Function: x=75 y=89

// Block Scope
//-------------
/* The Block is any code inside block brackets {}
   so the if, loop, switch, all is Block.
*/

// var is not a Block Scope
var myNum1 = 10;
console.log(myNum1); // 10
if( myNum1 == 10){
    var myNum1 = 20;
}
console.log(myNum1); // 20

var myNum2 = 10;
console.log(myNum2); // 10
if( myNum2 == 10){
    var myNum2 = 20;
    console.log(myNum2); // 20
}
console.log(myNum2); // 20

// let is a Block Scope
let myNum3 = 10;
console.log(myNum3); // 10
if( myNum3 == 10){
    let myNum3 = 20;
}
console.log(myNum3); // 10

let myNum4 = 10;
console.log(myNum4); // 10
if( myNum4 == 10){
    let myNum4 = 20;
    console.log(myNum4); // 20
}
console.log(myNum4); // 10

// Lexical Scope
//---------------
// Easily it means the varibles scope in a many nested blocks.

/* Multiply-nested functions
 Functions can be multiply-nested. For example:
 A function (A) contains a function (B), which itself contains a function (C).
 Both functions B and C form closures here. So, B can access A, and C can access B.
 In addition, since C can access B which can access A, C can also access A.
 Thus, the closures can contain multiple scopes; they recursively contain the scope of the functions containing it. This is called scope chaining.
 (The reason it is called "chaining" is explained later.)
*/
function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1); // 6 (1 + 2 + 3)


// Challenge
//-----------
// -1-
let names1 = function(...theNames){
    return `String [${theNames.join("], [")}] => Done !`
}
console.log(names1('Belal', 'Hani', 'Bassem', 'Sameer')); // String [Belal], [Hani], [Bassem], [Sameer] => Done !

let names2 = (...theNames) => `String [${theNames.join("], [")}] => Done !`;
console.log(names2('Abdo', 'Nour', 'Jana')); // String [Abdo], [Nour], [Jana] =>Done !

// -2-
// let myNumbers = [20, 50, 10, 60];
// let calc = (one, tow, ...nums) => 
// console.log(calc(10, ));