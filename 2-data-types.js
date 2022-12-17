/*
    Arithmatic Operators:
      + Addition and Concatenate
      - Subtraction
      * Multiplication
      / Division
      % Modulus (Division Remainder)
      ** Exponentiation
      ++ Increment (pre / post)
      -- Decrement (pre / post)
*/

//   +
//-----
console.log(10 + 20);  // 30 , addition
console.log(10 + "20");  // 1020 , cncatenate
console.log("Belal" + 20);  // Belal20 , cncatenate
console.log("Belal" + " is Programmer");  // Belal is Programmer , cncatenate
//
//   -
//-------
console.log(20 - 10);  // 10 , subtract
console.log(10 - 35);  // -25 , subtract
console.log(10 - "35");  // -25 , subtract , so we get NaN (Not a Number)
console.log("typeof(NaN) " + typeof(NaN));
//
//  *
//------
console.log(10 * 20);  // 200
console.log(10 * -20);  // -200
console.log(-10 * -4);  // 40
//
//  /
//----
console.log(50 / 10); // 5
console.log(50 / 9); // 5.555555555
//
// **
//-----
console.log(3 ** 2); // 9
console.log(2 ** -2); // 0.25
console.log((-2) ** -3); // -0.125
//
//  %
//------
console.log(10 % 5); // 0
console.log(10 % 9); // 1
//
//  post ++
//---------
let x=5;
console.log(x); // 5
console.log(x++); // 5
console.log(x); // 6
// ++ pre
//--------
console.log(x);  // 6
console.log(++x); // 7
console.log(x);  // 7
//
// -- post/pre
console.log(x); // 7
console.log(x--); // 7
console.log(x);  // 6
console.log(--x);  // 5
console.log(x); // 5
//
let num1=7, num2 ;
console.log(num1); // 7
num2 = num1++; // num2 <- 7, num1 <- 8
console.log(num2); // 7
console.log(num1); // 8
let num3 = ++num2; // num2 <- 8, num3 <- 8
console.log(num3);// 8
console.log(num2);// 8
