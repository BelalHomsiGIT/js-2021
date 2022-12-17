//we use the qiutes to tell the engine this string is not from instructions language
// so the write is from the language, but "write" is string.

//string
console.log("Hello JS"); // Hello JS
console.log(typeof "Hello JS");  //string
//same as, with brackets:
console.log(typeof ("Hello JS"));  //string

//number
console.log(typeof 350);  //number
console.log(typeof 350.89);  //number
console.log(typeof 350.89 + 400); //number400
console.log(typeof (350.89 + 400));  //number
console.log(350.89 + 400 , typeof (350.89 + 400));  //750.89 'number'

//array as object
console.log( [20, 3 ,45]); // (3) [20, 3, 45] 
console.log(typeof [20, 3 ,45]);  // object (array)
console.log(['Belal', 'Ahmad', 'Ali']); // (3) ['Belal', 'Ahmad', 'Ali']
console.log(typeof ['Belal', 'Ahmad', 'Ali']);  // object (array)

//object
console.log( { name: 'Belal', age: 50, country: 'Sy'}); // {name: 'Belal', age: 50, country: 'Sy'}
console.log(typeof { name: 'Belal', age: 50, country: 'Sy'});  //object

//boolean
console.log(true); // true
console.log(typeof true);  //boolean
console.log(false); // false
console.log(typeof false);  //boolean

//undefined
console.log(undefined); // undefined
console.log(typeof undefined);  //undefined

//null as object
console.log(null); // null
console.log(typeof null);  //object
////////////////////////

// variables
//----------
var x // declaration 
x = 5; //assignment 5 to x
var y = 10; //declaration & initialization at same time
var a=1, b=4, name='Omar'; // many variables in same var

// id attribute is a global variable in window scope
// we have paragraph with id='p_test', so we can catch it as variable
p_test.innerHTML = "Bye --- instead of 'Hello p_test'";
console.log(p_test); //  <p id="p_test">Bye, istead of 'Hello p_test'</p>

// Notes:
//--------
// 1- Loosely Typed mean that we must'nt define the type of the variable as c++ or pascal:
//    var x:intger; 'pascal' , int x; 'c++',,,,  var x; 'Javascript' 
// 2- search for: Loosely Typed and strongly Typed.

// 3- we cann't use the variable before we declare it:
//    Error:
//       console.log(x); Undefined
//       var x;
//      
//       console.log(x); Error
//       let x;
//    the right is:
//       var x;
//       x=5;

// 4- most programmers use the camelCase naming as: myName - firstNumber ...

/////////////////////////

// var and let
//-------------
//1)
// when we use the var, so we can redeclare the same variable:
var v1=15;
console.log(v1); // 15
var v1=78;  // no problem
console.log(v1); // 78
//but this make us confused about our variables.

// in ES6 the let isn't redeclarable:
let v2=100;
console.log(v2); // 100
// let v2=200;  we get Error
console.log(v2); // 100

//2)
//when we use: var x=10; the x will be in window scope (drama variables).
//when we use: let x=10; the x will not be in window scope (no drama variables).

////////////////////////////////

// escape character (back slash \)
//----------------------------------
// we use \ to tell that the next character isn't from the language, but it's string:
console.log("Belal Homsi"); // Belal Homsi
console.log('Belal Homsi'); // Belal Homsi
console.log('Belal "Homsi"'); // Belal "Homsi"
console.log("Belal 'Homsi'"); // Belal 'Homsi'
//
//console.log('Belal 'Homsi''); wrong
console.log('Belal \'Homsi\''); // Belal 'Homsi'
console.log("Belal \"Homsi\""); // Belal "Homsi"
console.log("Belal \\ Homsi"); // Belal \ Homsi

// use the \ for continue line:
console.log("Hello \
to JS \
Language");  // Hello to JS Language

// use the \n to make new line:
console.log("Hello\nBelal\nHomsi");
/* output:
    Hello
    Belal
    Homsi
*/

////////////////////////////////////////
// use the backticks character ` ` (template literals/strings):
console.log(`Hello fronend: 'HTML', "CSS", ""JavaScript""`); // Hello fronend: 'HTML', "CSS", ""JavaScript""
console.log(`Hello frontend:
HTML
CSS
JavaScript`);
/* output:
    Hello frontend:
    HTML
    CSS
    JavaScript
*/
console.log(`Hello frontend: HTML/ CSS/ JavaScript`); // Hello frontend: HTML/ CSS/ JavaScript

let fName = "Belal", lName = "Homsi", age = 50;
console.log(fName + " " + lName + " is " + age + " years."); // Belal Homsi is 50 years.
console.log(`${fName} ${lName} is ${age} years.`); // Belal Homsi is 50 years.

let n1=1 , n2=5;
console.log(` n1=${n1} , n2=${n2}`); //  n1=1 , n2=5
console.log(`${n1} + ${n2} = ${n1+n2}`); // 1 + 5 = 6
console.log(`${n1} + ${n2} Equal to ${n1+n2}`); // 1 + 5 Equal to 6
console.log(n1++); // 1
console.log(n1); // 2
console.log(++n1); // 3
console.log(` ${++n2+20}`); // 26
//repeat string
console.log("Belal ".repeat(5)); // Belal Belal Belal Belal Belal 

//create elements in the document using write(), Backtiks, variables
let myElements = `
    <div class="card">
        <div class="child">
            <p>create elements in the document using write(), Backtiks, variables</p>
            <h1>Title</h1>
            <p>paragraph</p>
        </div>
    </div>
`
document.write(myElements);
//

let myTilte = "Hello JS";
let myParagraph = "JavaScript"

let myElementsWithVars = ` 
    <div class="card">
        <div class="child">
            <h1>${myTilte}</h1>
            <p>${myParagraph}</p>
        </div>
    </div>
`
document.write(myElementsWithVars);
//
//
let myLine = ` <hr> `;
document.write(myLine.repeat(2));
document.write(myElementsWithVars.repeat(2));