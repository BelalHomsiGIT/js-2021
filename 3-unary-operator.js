/*A unary operation is an operation with only one operand.
This operand comes either before or after the operator. */
//Note: there is Binary Operators as the Adding : x+y ,,, + apply on tow operands.
/*
Operator	                    Explanation
------------------    -----------------------------------------------
Unary plus (+)	      Tries to convert the operand into a number
Unary negation (-)	  Tries to convert the operand into a number and negates after
Increment (++)	      Adds one to its operand
Decrement (--)	      Decrements by one from its operand
Logical NOT (!)	      Converts to boolean value then negates it
Bitwise NOT (~)	      Inverts all the bits in the operand and returns a number
typeof	              Returns a string which is the type of the operand
delete	              Deletes specific index of an array or specific property of an object
void	              Discards a return value of an expression.
*/

// 1- Unary plus (+)
//-------------------
/* The unary plus operator (+) precedes its operand and evaluates to its operand
 but attempts to convert it into a number if it isn’t already. */
console.log(100); // 100
console.log(+100); // 100
console.log(+"100"); // 100,, convert the string into number
console.log(+"-100"); // -100,, convert the string into number
console.log(+"Hello"); // NaN ,, conn't convert this string into the number
console.log(+"15.2"); // 15.2
console.log(+"-15.2"); // -15.2
console.log(+0xff); // 255
console.log(+false); // 0
console.log(+true); // 1
console.log(+null); // 0

// 2-Unary negation (-)
//----------------------
//The unary negation operator (-) precedes its operand and negates it.
console.log(25); // 25
console.log(-25); // -25
console.log(-"25"); // -25,, convert the string into number
console.log(-"-25"); // 25,, convert the string into number
console.log(-"Hello"); // NaN ,, conn't convert this string into the number
console.log(-"15.2"); // -15.2
console.log(-"-15.2"); // 15.2
console.log(-0xff); // -255
console.log(-false); // -0
console.log(-true); // -1
console.log(-null); // -0
console.log(""); // nothing !?

//Note: Number() function do the same:
console.log(Number("136")); // 136
console.log(Number("-136")); // -136
console.log(Number("Hello")); // NaN
console.log(Number(-"-136")); // 136
//****************************************** */
// Type Coercion (Type Casting)
let a="50";
let b=8;
let c=true;
console.log( a + b); // 508,, + is concatenation not adding
console.log( +a + b); // 58 ,, casting a which it's string
console.log( -a + b); // -42 ,, casting a which it's string
console.log( a - b); // 42 ,, automatic casting  a which it's string
console.log( "" - 2 );// -2,, it's convert to : 0 - 2 -> -2
console.log( a + "");// 50 concatenation,, "50" + "" -> "50"
console.log( +a + +"");// 50 adding,, 50 + 0 -> 50
console.log( typeof (+a + +""));// number

console.log(false + true); // 0 + 1 -> 1
console.log(false - true); // 0 - 1 -> -1
console.log( a + true); // 50true ,, concatenate
console.log( a - true); // 49 ,, 50 - 1
console.log( +a + true); // 51

console.log( a + b + c ); // a is string, so the all after become string,, 508true
console.log( +a + b + c ); // 50 + 8 + 1 -> 59
console.log( a - b - c ); // 50 - 8 - 1 -> 41
console.log( a - b + c ); // 50 - 8 + 1 -> 43
//*************************************************** */
// Assignment Operators
//-----------------------
let x = 25;
console.log(x); // 25

x = x + 15;
console.log(x); // 40

x += 17;
console.log(x); // 57

x -= 21;
console.log(x); // 36

x *= 2;
console.log(x); // 72

x /= 4;
console.log(x); // 18

x %= 10;
console.log(x); // 8

x **=2;
console.log(x); // 64
