// String Methods
//---------------
/*
String as "Belal" is a sequence of characters, in JS this sequence is indexed by zero 0,
so the 'B' character in "Belal" indexed by 0, and 'e' by 1, ... , and 'l' by 4.
The length of "Belal" is 5.
Note: the array as A[5,8,7,2,3] is sequence of numbers.
*/

//  Extracting String Characters
//---------------------------------
let myName = "Belal";
let myList = [5,8,7,2,3,14,-21];
//1-Access with index for String, Array :
console.log(myName[0]); // B
console.log(myName[3]); // a
console.log(myList[3]); // 2
console.log(myName[10]); // undefined, undefined if the index is invalid.
console.log(myList[10]); // undefined, undefined if the index is invalid.

//2-Access with charAt() for String only, string.charAt(index)
//  The charAt() method returns the character at a specified index (position) in a string.
console.log(myName.charAt(0)); // B
console.log(myName.charAt(3)); // a
console.log(myName.charAt(5)); // "", empty string ("") if the index is invalid.

//3-charCodeAt(), string.charCodeAt(index) 
//  returns the Unicode of the character at a specified index (position) in a string.
console.log(myName.charCodeAt(0)); // 66 , its to 'B'
console.log(myName.charCodeAt(3)); // 97 , its to 'a'
console.log(myName.charCodeAt(9)); // NaN , invalid position

//----------------------------------
//4-Length of the string or sequence, string.length
console.log(myName); // 5
console.log(myList); // 7
console.log(myName[myName.length - 1]); // 'l' last character
console.log(myList[myList.length - 1]); // -21 last number

//5-Trim(), string.trim()
//Trim method removes whitespace from both sides of a string. No parameters.
let testStr = "  Sami "; // tow whitesace in begin and one in the end.
console.log(testStr); // '  Sami '
console.log(testStr.trim()); // 'Sami'

//6-toUpperCase(), toLocaleLowerCase()
console.log(myName.toUpperCase()); // BELAL
console.log(myName.toLocaleLowerCase()); // belal

//Note: these methods are Chain Methods
console.log(testStr.trim().charAt(2).toUpperCase()); // M
console.log(myName.charAt(1).toUpperCase().charCodeAt()); // 69 , for 'E'

//7-repeat(), returns a new string which contains the specified number
//  of copies of the string on which it was called, concatenated together.
console.log(myName.repeat(3)); // BelalBelalBelal
console.log(myName.repeat(1)); // Belal
console.log(myName.repeat(0)); // ""
// console.log(myName.repeat(-1)); // RangeError: Invalid count value

//  JavaScript String Search
//-----------------------------
//8-indexOf(), string.indexOf( searchvalue [mandatory], start [optional] )
/* Method returns the position of the first occurrence of a value in a string,
   returns -1 if the value is not found,
   is case sensitive.
*/
let fullName = "Belal Mohammed Homsi";
console.log(fullName.length);// 20
console.log(fullName.indexOf("Homsi")); // 15
console.log(fullName.indexOf("m")); // 10
console.log(fullName.indexOf("m", 14)); // 17
console.log(fullName.indexOf("a")); // 3
console.log(fullName.indexOf("a", 5)); // 9
console.log(fullName.indexOf("a", 10)); // -1 , not found
console.log(fullName.indexOf("f")); // -1 , not found

//9-lastIndexOf(), string.lastIndexOf( searchvalue [mandatory], start [optional] ) 
/* Method returns the index (position) of the last occurrence of a specified value in a string.
   The lastIndexOf() searches the string from the end to the beginning.
   The lastIndexOf() returns the index from the beginning (position 0).
   The lastIndexOf() returns -1 if the value is not found.
   The lastIndexOf() is case sensitive.
*/
// fullName = "Belal Mohammed Homsi";
console.log(fullName.lastIndexOf("m")); // 17
console.log(fullName.lastIndexOf("o")); // 16
console.log(fullName.lastIndexOf("a", 12)); // 9
console.log(fullName.lastIndexOf("a", 8)); // 3
console.log(fullName.lastIndexOf("h")); // 8
console.log(fullName.lastIndexOf("h", 7)); // -1 , not found
console.log(fullName.lastIndexOf("h", 10)); // 8

//10-search(), string.search(searchValue)
/* This method searches a string for a specified value and returns the position of the match.
   It is case sensitive.
*/
console.log(fullName.search("Belal")); // 0
console.log(fullName.search("Moham")); // 6
let sameWord = "Mr. Pink Pantehr has a pink skin, pinkpanther!";
console.log(sameWord.search("Pink")); // 4
console.log(sameWord.search("pink")); // 23
console.log(sameWord.search(/pink/)); // 23
console.log(sameWord.search(/pink/i)); // 4
console.log(sameWord.search(/pink/g)); // 23

//11-match(), string.match(regexp)
/* This method searches a string for a match against a regular expression, 
   and returns the matches, as an Array object.
*/
console.log(sameWord.match("Pink")); // ['Pink', index: 4, input: 'Mr. Pink Pantehr has a pink skin, pinkpanther!', groups: undefined]
console.log(sameWord.match(/pink/g)); // (2) ['pink', 'pink']
let text = "Is this all there is?";
let result = text.match(/is/g);
console.log(result); // (2) ['is', 'is']
// JavaScript Regular Expressions    https://www.w3schools.com/js/js_regexp.asp

//12-includes(), string.includes( searchvalue [Mandotary], start position [Optional] )
/* The includes() method returns true if a string contains a specified string.
   Otherwise it returns false.
   The includes() method is case sensitive.
*/
console.log(fullName.includes("Homsi")); //true
console.log(fullName.includes("lal")); //true
console.log(fullName.includes("lal",10)); //false

//13-startswith(), string.startsWith( searchValue[Mandotary], start[Optional] )
/* The startsWith() method returns true if a string starts with a specified string.
   Otherwise it returns false.
   The startsWith() method is case sensitive.
*/
// fullName = "Belal Mohammed Homsi";
console.log(fullName.startsWith("B")); // true
console.log(fullName.startsWith("M")); // false
console.log(fullName.startsWith("M",6)); // true
console.log(fullName.startsWith("Moh",6)); // true
console.log(fullName.startsWith("si",6)); // false
console.log(fullName.startsWith("si",18)); // true

//14-endswith(), string.endsWith( searchvalue[Mandotary], length[Optional] )
/* The endsWith() method returns true if a string ends with a specified string.
   Otherwise it returns false.
   The endsWith() method is case sensitive.
*/
console.log(fullName.endsWith("a")); // false
console.log(fullName.endsWith("i")); // true
console.log(fullName.endsWith("l")); // false
console.log(fullName.endsWith("l",5)); // true
//---------------------------

//15-slice(), string.slice( start [Mandatory], end [Optional] / 'End Not Including')
/* extracts a part of a string and returns the extracted part in a new string.
   The method takes 2 parameters: the start position, and the end position (End Not Included).
   If a parameter is negative, the position is counted from the end of the string.
   If you omit the second parameter, the method will slice out the rest of the string.
   Must be start < end.
   If start > end the method will return "".
*/
// fullName = "Belal Mohammed Homsi";
console.log(fullName.slice(6)); // Mohammed Homsi
console.log(fullName.slice(2)); // lal Mohammed Homsi
console.log(fullName.slice(0)); // Belal Mohammed Homsi
console.log(fullName.slice(0,4)); // Bela
console.log(fullName.slice(0,5)); // Belal
console.log(fullName.slice(6,14)); // Mohammed
console.log(fullName.slice(6,2)); // "", nothing
console.log(fullName.slice(-5)); // Homsi
console.log(fullName.slice(-2)); // si
console.log(fullName.slice(-14)); // Mohammed Homsi
console.log(fullName.slice(-14,-6)); // Mohammed
console.log(fullName.slice(-14,9)); // Moh

//16-split(), string.split(separator, limit) - Converting a String to an Array
/* Converting a String to an Array. A string can be converted to an array with the split() method.
   If the separator is omitted, the returned array will contain the whole string in index [0].
   If the separator is "", the returned array will be an array of single characters
*/
// fullName = "Belal Mohammed Homsi";
console.log(fullName.split()); // ['Belal Mohammed Homsi']
console.log(fullName.split(" ")); // (3) ['Belal', 'Mohammed', 'Homsi']
console.log(fullName.split("")); // (20) ['B', 'e', 'l', 'a', 'l', ' ', 'M', 'o', 'h', 'a', 'm', 'm', 'e', 'd', ' ', 'H', 'o', 'm', 's', 'i']
console.log(fullName.split(" ",2)); // (2) ['Belal', 'Mohammed']
console.log(fullName.split("",5)); // (5) ['B', 'e', 'l', 'a', 'l']
console.log(fullName.split("",7)); // (7) ['B', 'e', 'l', 'a', 'l', ' ', 'M']
let fullName2 = "Belal|Mohammed|Homsi";
console.log(fullName2.split("|")); // (3) ['Belal', 'Mohammed', 'Homsi']
let fullName3 = "Belal_Mohammed_Homsi";
console.log(fullName3.split("_")); // (3) ['Belal', 'Mohammed', 'Homsi']

//17-substring(), substring( start [mandotary], end [optional] 'End Not Including')
/* substring() is similar to slice().The difference is that 
   substring() cannot accept negative indexes.
   If you omit the second parameter, substring() will slice out the rest of the string.
   If the second parameter is negative, it's become 0 (zero)
   If start>end make swap.

*/
// fullName = "Belal Mohammed Homsi";
console.log(fullName.substring(6)); // Mohammed Homsi
console.log(fullName.substring(6,14)); // Mohammed
console.log(fullName.substring(14,6)); // Mohammed , swap the parameters (6,14)
console.log(fullName.substring(6,0)); // Belal , swap the parameter (0,6)
console.log(fullName.substring(-10)); // Belal Mohammed Homsi, -10 -> 0
console.log(fullName.substring(-10,6)); // Belal , (0,6)
console.log(fullName.substring(fullName.length - 1)); // i , last character
console.log(fullName.substring(fullName.length - 5)); // Homsi , last 5 characters
console.log(fullName.substring(fullName.length - 5, fullName.length - 2)); // Hom

//18-substr(), substr( start [mandotary], length [optional] )
/*substr() is similar to slice().The difference is that 
   the second parameter specifies the length of the extracted part.
   If you omit the second parameter, substr() will slice out the rest of the string.
   If the first parameter is negative, the position counts from the end of the string.
*/
// fullName = "Belal Mohammed Homsi";
console.log(fullName.substr(0));// Belal Mohammed Homsi
console.log(fullName.substr(6));// Mohammed Homsi
console.log(fullName.substr(0,5));// Belal
console.log(fullName.substr(20));// ""
console.log(fullName.substr(fullName.length));// ""
console.log(fullName.substr(-5));// Homsi
console.log(fullName.substr(-5,2));// Ho

//19-replace(), string.replace( searchValue, newValue )
/* The replace() method replaces a specified value with another value in a string.
   It does not change the string it is called on, and it returns a new string.
   It replaces only the first match, and it's case sensitive.
*/
// fullName = "Belal Mohammed Homsi";
console.log(fullName.replace("Belal", "Hani")); // Hani Mohammed Homsi
console.log(fullName.replace("belal", "Hani")); // Belal Mohammed Homsi , case sensitive
console.log(fullName.replace("m", "?")); // Belal Moha?med Homsi , replace only the first match

//20-string.concat( string1, string2, ..., stringX )
// The concat() method joins two or more strings, it does not change the existing strings, and returns a new string.
let text1 = "sea";
let text2 = "food";
console.log(text1.concat(text2)); // seafood
console.log(text1.concat(" ").concat(text2)); // sea food
console.log(text1.concat(" ", text2)); // sea food
let t1 = "Hello";
let t2 = "Programmers";
let t3 = "Have a nice methods";
console.log(t1.concat(" ", t2, " ", t3, ".")); // Hello Programmers Have a nice methods.

//21-String.fromCharCode(), this method converts Unicode values to characters.
/* The String.fromCharCode() is a static method of the String object.
   The syntax is always String.fromCharCode().
   You cannot use myString.fromCharCode().
*/
console.log(String.fromCharCode(65)); // A
console.log(String.fromCharCode(97)); // a
console.log(String.fromCharCode((65+32))); // a , we adding 32 to Capital to get Small for the same letter
console.log(String.fromCharCode(66)); // B
console.log(String.fromCharCode(72, 69, 76, 76, 79)); // HELLO

//Chalenge
let myStr = "Alkamel Web Development";
console.log(myStr.charAt(2).toUpperCase() + myStr.substr(3,4)); // Kamel
console.log("B".repeat(8)); // BBBBBBBB
console.log(myStr.split(" ",1)); // ['Alkamel']
console.log(myStr.charAt(0).toLowerCase() + 
            myStr.substring(1, myStr.length-1).toUpperCase() + 
            myStr.charAt(myStr.length-1).toLowerCase());       // aLKAMEL WEB DEVELOPMENt

/*22-The valueOf() method returns the primitive value of a string, string.valueOf()
   The valueOf() method does not change the original string.
   **The valueOf() method can be used to convert a string object into a string.
   Note: The valueOf() method is the default method for JavaScript strings.
         It is used internally by JavaScript.
      *Normally, you will not use it in your code.
   see: https://www.w3schools.com/jsref/jsref_valueof_string.asp
*/
/*23-The toString() method returns a string as a string, string.toString()
   The toString() method does not change the original string.
   **The toString() method can be used to convert a string object into a string.
   Note: Every JavaScript object has a toString() method.
         The toString() method is used internally by JavaScript when an object needs to 
         be displayed as a text (like in HTML), or when an object needs to be used as a string.
      *Normally, you will not use it in your own code.
   see: https://www.w3schools.com/jsref/jsref_tostring_string.asp
*/

/*24-JavaScript RegExp Reference
   see: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
*/

//25-padStart(), padEnd()
/* ECMAScript 2017 - added two String methods: 
   padStart and padEnd to support padding at the beginning and at the end of a string.
*/
let str1 = "Hello";
console.log(str1.padStart(13,"*")); //********Hello
console.log(str1.padEnd(13,"*")); //Hello********
console.log(str1.padStart(3,"*")); //Hello
console.log(str1.padEnd(5,"*")); //Hello
let x1 = "45";
console.log(x1.padEnd(4,0)); // 4500
console.log(x1.padStart(4,0)); // 0045
console.log(x1.padStart(4,"$")); // $$45

//  JavaScript Template Literals
//-------------------------------
      // Template Literals
      // Template Strings
      // String Templates
      // Back-Tics Syntax
let myTextUsingBACK_TICKS = `Hello back-ticks`;
document.getElementById('demo1').innerHTML = myTextUsingBACK_TICKS;
let myTextIncludeQuotes = ` We can type " and ' inside "back-ticks", it's perfect. `;
document.getElementById('demo2').innerHTML = myTextIncludeQuotes;

// Interpolation
/* Template literals provide an easy way to interpolate variables and expressions into strings.
   The method is called "String Interpolation".
   The syntax is:
         ${...}
*/
let firstSec = "Java";
let lastSec = "Script";
let fullTerm = `Welcome ${firstSec}${lastSec}!`;
document.getElementById('demo3').innerHTML += fullTerm;
let freind1 = "Belal";
let freind2 = "Hani";
let freinds = `Welcome ${freind1}, and ${freind2}!`;
document.getElementById('demo4').innerHTML += freinds;
//Template literals allow expressions in strings
let price = 100;
let tax = 0.25;
let totalPrice = `Total = ${price + price*tax} S.P`;
document.getElementById('demo5').innerHTML += totalPrice;
//HTML Templates
let header = "Frontend Track";
let tools = ["HTML5", "javascript & ES", "CSS3", "Frameworks"];
let html = `<h2>${header}</h2><ul>`;
for (const x of tools) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;
document.getElementById("demo6").innerHTML = html;
