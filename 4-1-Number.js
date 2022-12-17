// Number
//--------
/* The Number in JS is Double Precision
    Double Precision refers to a type of floating-point number that has more precision
    (that is, more digits to the right of the decimal point) than a single-precision number. ...
    The word double derives from the fact that a double-precision number uses twice
    as many bits as a regular floating-point number.
*/
//1-Min and Max value of Numbers:
//-----------------------------
console.log(Number.MIN_VALUE); // 5e-324 means 5 * 10^-324
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// if we add any number to the MAX_VALUE we get the MAX_VALUE:
console.log(Number.MAX_VALUE + 100050020); // 1.7976931348623157e+308

//2-Syntactic Suger:
//----------------
//it's mean the some of characters added to number when writing it. as _ :
console.log(1000000);
console.log(1_000_000); // 1000000, the _ is ignored

//Scientific Notation, using e :
console.log(1e6); // 1000000

//or using the Exponential Notation , using ** :
console.log(10**6); // 1000000

//Safe Integer number (BigInt).
console.log(Number.MAX_SAFE_INTEGER);// 9007199254740991

//3-Number Methods
//-----------------
// .toString() , return string
console.log(100); // 100 (number)
console.log( (100).toString() ); // 100 (string)
console.log( (100.5).toString() ); // 100.5 (string)
console.log( 100..toString() ); // 100 (string), write .. to refer that no floating dot
console.log( 100.1.toString() ); // 100.1 (string)

// .toFixed() , return string
console.log((21.35687.toFixed(2))); // 21.36 (string)
console.log((21.35472.toFixed(2))); // 21.35 (string)

// parseInt(), parse the value and return Integer number from number or string
console.log(parseInt(100)); // 100 (number)
console.log(parseInt(100.25)); // 100 (number)
console.log(parseInt(100.75)); // 100 (number)
console.log(parseInt("100")); // 100 (number)
console.log(parseInt("100.325")); // 100 (number)
console.log(parseInt("100.325 Heloooo")); // 100 (number)
console.log(parseInt("Hello 100.325 Heloooo")); // NaN

// parseFloat(), parse the value and return Float number from number or string
console.log(parseFloat(100)); // 100 (number)
console.log(parseFloat(100.25)); // 100.25 (number)
console.log(parseFloat("100.25")); // 100.25 (number)
console.log(parseFloat("100.325")); // 100.325 (number)
console.log(parseFloat("100.325 Heloooo")); // 100.325 (number)
console.log(parseFloat("Helloo 100.325 Heloooo")); // NaN

// Number.isInteger(), check the value if it Integer number or not
console.log(Number.isInteger("100")); // false
console.log(Number.isInteger(100.25)); // false
console.log(Number.isInteger(100)); // true

// Number.isNaN()
console.log(Number.isNaN("Hello")); // false, it's string
console.log(Number.isNaN(100)); // false, it's number
console.log(Number.isNaN("Hello" + 5)); // false, it's string
console.log(Number.isNaN("Hello" - 5)); // true, it's NaN
console.log(Number.isNaN(5 - "Hello")); // true, it's NaN
console.log(Number.isNaN("Hello" / 5)); // true, it's NaN

//4-Math Object
//--------------
//round , as we know ...
console.log(Math.round(50.3)); // 50
console.log(Math.round(50.5)); // 51
//ceil , get the up (ceil mean top)
console.log(Math.ceil(55.3)); // 56
console.log(Math.ceil(55.7)); // 56
//floor , get the down (floor mean down)
console.log(Math.floor(55.3)); // 55
console.log(Math.floor(55.7)); // 55
console.log(Math.floor(-55.7)); // -56
console.log(Math.floor(-55.3)); // -56
//min and max
console.log(Math.min(10,-5,4,33)); // -5
console.log(Math.max(10,-5,4,33)); // 33
//pow , mean power as **
console.log( 2**3); // 8
console.log(Math.pow(2,3)); // 8
//trunc , cut the decimal part
console.log(Math.trunc(99.1)); // 99
console.log(Math.trunc(99.8)); // 99
console.log(Math.trunc(-99.8)); // -99
console.log(Math.trunc(-99.1)); // -99
console.log(Math.floor(-99.8)); // -100
console.log(Math.floor(-99.1)); // -100

//Challenge
//------------
let a =1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// smallest, as integer
console.log(Math.trunc(Math.min(a,b,c,d)));

// get 10000 from a,d
console.log(Math.pow(a,Math.trunc(d)));

// get 2 form d
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));