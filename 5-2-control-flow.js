// Conditional Statements
//------------------------
//1- JavaScript if else and else if
    /*
    Use if to specify a block of code to be executed, if a specified condition is true
    Use else to specify a block of code to be executed, if the same condition is false
    Use else if to specify a new condition to test, if the first condition is false
    */
   let price = 1000;
   let discount = true;
   let discountAmount = 0.15;
   let nationality = "Syria";
// The if Statement
    /*
        if (condition) {
          block of code to be executed if the condition is true
        }
    */
   if( discount ){
       price -= price * discountAmount;
   }
   console.log(price); // 850
   
   price = 1000;
   if( discount && price>1000 ){
       price -= price * discountAmount;
   }
   console.log(price); // 1000
   
   price = 1000;
   if( discount || price>1000 ){
       price -= price * discountAmount;
   }
   console.log(price); // 850

// The else Statement
   /*
        if (condition) {
          block of code to be executed if the condition is true
        } else {
          block of code to be executed if the condition is false
        }
   */
    price = 1000;
    if( discount ){
        price -= price * discountAmount;
    } else {
        price -= price * 0.05;
    }
    console.log(price); // 850
  
    price = 1000;
    discount = false;
    if( discount ){
        price -= price * discountAmount;
    } else {
        price -= price * 0.05;
    }
    console.log(price); // 950
    
    price = 1000;
    discount = false;
    if( discount || price>=1000 ){
        price -= price * discountAmount;
    } else {
        price -= price * 0.05;
    }
    console.log(price); // 850

// The else if Statement
    /*
        if (condition1) {
          block of code to be executed if condition1 is true
        } else if (condition2) {
          block of code to be executed if the condition1 is false and condition2 is true
        } else {
          block of code to be executed if the condition1 is false and condition2 is false
        }
    */
    price = 1000;
    discount = true;
    if( discount ){
        price -= price * discountAmount;
    } else if( nationality == "Syria"){
        price -= price * (discountAmount + 0.1);
    } else {
        price -= 75;
    }
    console.log(price); // 850
   
    price = 1000;
    discount = false;
    if( discount ){
        price -= price * discountAmount;
    } else if( nationality == "Syria"){
        price -= price * (discountAmount + 0.1);
    } else {
        price -= 75;
    }
    console.log(price); // 750

    price = 1000;
    discount = false;
    nationality = "Germany";
    if( discount ){
        price -= price * discountAmount;
    } else if( nationality == "Syria"){
        price -= price * (discountAmount + 0.1);
    } else {
        price -= 75;
    }
    console.log(price); // 925

    // Nested Conditions
    price = 1000;
    discount = true;
    discountAmount = 0.1;
    nationality = "Syria";
    let student = true;
    let employee = true;
    if( discount ){
        if ( nationality == "Syria"){
            if( student ){
                price -= price * (discountAmount + 0.2);
            } else if( employee){
                price -= price * (discountAmount + 0.1);
            } else {
                price -= price * discountAmount;
            }
        } else {
            price -= price * (discountAmount - 0.05);
        }
    }
    console.log(price); // 700
    
    price = 1000;
    discount = true;
    discountAmount = 0.1;
    nationality = "Syria";
    student = false;
    employee = true;
    if( discount ){
        if ( nationality == "Syria"){
            if( student ){
                price -= price * (discountAmount + 0.2);
            } else if( employee){
                price -= price * (discountAmount + 0.1);
            } else {
                price -= price * discountAmount;
            }
        } else {
            price -= price * (discountAmount - 0.05);
        }
    }
    console.log(price); // 800
    
    price = 1000;
    discount = true;
    discountAmount = 0.1;
    nationality = "Syria";
    student = false;
    employee = false;
    if( discount ){
        if ( nationality == "Syria"){
            if( student ){
                price -= price * (discountAmount + 0.2);
            } else if( employee){
                price -= price * (discountAmount + 0.1);
            } else {
                price -= price * discountAmount;
            }
        } else {
            price -= price * (discountAmount - 0.05);
        }
    }
    console.log(price); // 900
    
    price = 1000;
    discount = true;
    discountAmount = 0.1;
    nationality = "Jordan";
    student = false;
    employee = false;
    if( discount ){
        if ( nationality == "Syria"){
            if( student ){
                price -= price * (discountAmount + 0.2);
            } else if( employee){
                price -= price * (discountAmount + 0.1);
            } else {
                price -= price * discountAmount;
            }
        } else {
            price -= price * (discountAmount - 0.05);
        }
    }
    console.log(price); // 950
    
    price = 1000;
    discount = false;
    discountAmount = 0.1;
    nationality = "Jordan";
    student = false;
    employee = false;
    if( discount ){
        if ( nationality == "Syria"){
            if( student ){
                price -= price * (discountAmount + 0.2);
            } else if( employee){
                price -= price * (discountAmount + 0.1);
            } else {
                price -= price * discountAmount;
            }
        } else {
            price -= price * (discountAmount - 0.05);
        }
    }
    console.log(price); // 1000
    
    price = 1000;
    discount = false;
    discountAmount = 0.1;
    nationality = "Jordan";
    student = false;
    employee = false;
    if( discount ){
        if ( nationality == "Syria"){
            if( student ){
                price -= price * (discountAmount + 0.2);
            } else if( employee){
                price -= price * (discountAmount + 0.1);
            } else {
                price -= price * discountAmount;
            }
        } else {
            price -= price * (discountAmount - 0.05);
        }
    } else {
        price -= 20;
    }
    console.log(price); // 980

//2- Ternary Operator (conditional operator)
/*The ternary operator is a simplified conditional operator like if / else.
     condition ? <expression if true> : <expression if false></expression>
*/
let theName = "Belal";
let theGender = "male";

if( theGender == "male"){
    console.log("Mr.");
}else{
    console.log("Mrs."); // Mr.
}
theGender == "male" ? console.log("Mr.") : console.log("Mrs."); // Mr.

let result = theGender == "male" ? "Mr." : "Mrs."; // result <- Mr.
console.log( `Hello ${result} ${theName}` ); // Hello Mr. Belal

console.log( `Hello ${theGender == "male" ? "Mr." : "Mrs."} ${theName}` ); // Hello Mr. Belal

theName = "Jana";
theGender = "female";
console.log( `Hello ${theGender == "male" ? "Mr." : "Mrs."} ${theName}` );  // Hello Mrs. Jana

// Now: as IF ELSE IF
//-------------------
let theMark = 67;
theMark<60
? console.log("Fail")
: theMark>=60 && theMark<=69
? console.log("Good")
: theMark>=70 && theMark<80
? console.log("Ver Good")
: theMark>=80 && theMark<90
? console.log("Excellent")
: console.log("WOW");
// will get Good

theMark = 85;
theMark<60
? console.log("Fail")
: theMark>=60 && theMark<=69
? console.log("Good")
: theMark>=70 && theMark<80
? console.log("Ver Good")
: theMark>=80 && theMark<90
? console.log("Excellent")
: console.log("WOW");
// will get Excellent

// Nested ternary operators
//--------------------------
let a = 3;
let newResult = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${newResult}.`); // The number is positive.

a = 0;
newResult = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${newResult}.`); // The number is zero.

a = -5;
newResult = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${newResult}.`); // The number is negative.

a = -5;
newResult = a >= 0 ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${newResult}.`); // The number is negative.

//3- Switch Statement
// Use the switch statement to select one of many code blocks to be executed.
/*
    switch(expression) {
        case x:
          code block
          break;
        case y:
          code block
          break;
        default:
          code block
    }
*/
let dayInWeek = 1;
switch (dayInWeek){
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
} // Saturday

switch (dayInWeek){
    case 1:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday");
        break;
} // Saturday

switch (dayInWeek){
    case 1:
        console.log("Saturday");
        // break;
    case 1:
        console.log("Sunday");
        break;
} // Saturday - Sunday

dayInWeek = 5;
switch (dayInWeek){
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    default:
        console.log("Unknown");
} // Unknown

let myVal = 0;
switch (myVal){
    case 0:
    case 1:
    case -1:
        console.log(0);
        break;
    case 2:
    case 3:
    case 4:
        console.log(Math.sqrt(myVal));
        break;
    default:
        console.log(myVal + 100);
} // 0

myVal = 4;
switch (myVal){
    case 0:
    case 1:
    case -1:
        console.log(0);
        break;
    case 2:
    case 3:
    case 4:
        console.log(Math.sqrt(myVal));
        break;
    default:
        console.log(myVal + 100);
} // 2

myVal = 18;
switch (myVal){
    case 0:
    case 1:
    case -1:
        console.log(0);
        break;
    case 2:
    case 3:
    case 4:
        console.log(Math.sqrt(myVal));
        break;
    default:
        console.log(myVal + 100);
} // 118

//Note: we can put the default wherever, and we must adding the break
myVal = -1;
switch (myVal){
    default:
        console.log(myVal + 100);
        break;
    case 0:
    case 1:
    case -1:
        console.log(0);
        break;
    case 2:
    case 3:
    case 4:
        console.log(Math.sqrt(myVal));
        break;
} // 0

//4- Logical OR || , and Nullish Coaliscing Operator ??
//----------------------------------------------------
//1- Treating with null, undefined, Falsy Value - using OR (||)
let thePrice1 = 100; // right value
let thePrice2; // undefined
let thePrice3 = null; // null
let thePrice4 = 0; // falsy value (as a Boolean it's false)
console.log(`The Price is ${thePrice1}`); // 100
console.log(`The Price is ${thePrice2}`); // undefined
console.log(`The Price is ${thePrice3}`); // null
console.log(`The Price is ${thePrice4}`); // 0

console.log(`The Price is ${thePrice1 || 25 }`); // 100
console.log(`The Price is ${thePrice2 || 25 }`); // 25
console.log(`The Price is ${thePrice3 || 25 }`); // 25
console.log(`The Price is ${thePrice4 || 25 }`); // 25

//2- Treating with  null, undefined, not with falsy value - using Nullish Coaliscing Operator (??) 
console.log(`The Price is ${thePrice1 ?? 25 }`); // 100
console.log(`The Price is ${thePrice2 ?? 25 }`); // 25
console.log(`The Price is ${thePrice3 ?? 25 }`); // 25
console.log(`The Price is ${thePrice4 ?? 25 }`); // 0

//Note: the Boolean type is object!, and we can note the next:
console.log(Boolean(100)); // true
console.log(Boolean(-100)); // true
console.log(Boolean(undefined)); // false (falsy value)
console.log(Boolean(null)); // false
console.log(Boolean(0)); // false