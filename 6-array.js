// Arrays
//========

//Define new array variable:
let myFreinds = ["Sameh", "Mohammed", "Belal"];
// Type the Array
console.log(myFreinds); // (3) ['Sameh', 'Mohammed', 'Belal']
//Access element by index (it's sequence)
console.log(` Hello ${myFreinds[0]} `); //  Hello Sameh 
console.log(` Hello ${myFreinds[2]} `); //  Hello Belal 
console.log(` Hello ${myFreinds[myFreinds.length-1]} `); //  Hello Belal 
//Access element of element (nested):
console.log(myFreinds[1]); // Mohammed
console.log(myFreinds[1][3]); // a

//Array in Array (Nested Array):
let myFreinds2 = ["Sameh", "Mohammed", "Belal", ["Nader", "Ali"]];
console.log(myFreinds2[0]); // Sameh
console.log(myFreinds2[3]); // (2) ['Nader', 'Ali']
console.log(myFreinds2[3][1]); // Ali
console.log(myFreinds2[3][1][2]); // i

//Change element in the array
console.log(myFreinds2); // (4) ['Sameh', 'Mohammed', 'Belal', Array(2)] - look in inspect
myFreinds2[1] = "Jamal";
console.log(myFreinds2); // 4) ['Sameh', 'Jamal', 'Belal', Array(2)] /look in inspect/
myFreinds2[3] = "Emad";
console.log(myFreinds2); // (4) ['Sameh', 'Jamal', 'Belal', 'Emad']
myFreinds2[2] = ["Osama", "Aiman"];
console.log(myFreinds2); // (4) ['Sameh', 'Jamal', Array(2), 'Emad'] /look in inspect/

// What is data type of array variable? using typeof and Arraya.isArray()
console.log(typeof myFreinds); // object
console.log(Array.isArray (myFreinds)); // true

//Note: The string variable not Array, but it's a Sequence
let myName = "Belal";
console.log(typeof myName); // string
console.log(Array.isArray(myName)); // false

// Array and Length:
//-----------------
console.log(myFreinds); // (3) ['Sameh', 'Mohammed', 'Belal']
myFreinds[1] = "Ameen";
console.log(myFreinds.length); // 3
console.log(myFreinds); // (3) ['Sameh', 'Ameen', 'Belal']
// if the index not found:
myFreinds[6] = "Kasem";
console.log(myFreinds.length); // 7
console.log(myFreinds); // (7) ['Sameh', 'Ameen', 'Belal', empty × 3, 'Kasem']
//Adding new element in the end of Array:
myFreinds = ['Sameh', 'Mohammed', 'Belal'];
console.log(myFreinds); // (3) ['Sameh', 'Mohammed', 'Belal']
myFreinds[myFreinds.length] = "Hazem";
console.log(myFreinds); // (4) ['Sameh', 'Mohammed', 'Belal', 'Hazem']
// We can change the Length
// The length is 4, when we change it to 2 (less) the element 2 and 3 will removed
myFreinds.length = 2;
console.log(myFreinds); // (2) ['Sameh', 'Mohammed']
// Now we change the Length to 3(more) we get an empty element
myFreinds.length = 3;
console.log(myFreinds); // (3) ['Sameh', 'Mohammed', empty]
 
// Adding and Removing elements to Array by Methods
//--------------------------------------------------
// Adding elements at the First of Array, unshift():
let myStudents = ["Haytham", "Anan", "Ahmad"];
console.log(myStudents); // (3) ['Haytham', 'Anan', 'Ahmad']
myStudents.unshift("Aya", "Jawad");
console.log(myStudents); //  // (5) ['Aya', 'Jawad', 'Haytham', 'Anan', 'Ahmad']

// Adding elements at the Last of Array, push():
myStudents.push("Jana", "Nour");
console.log(myStudents); // (7) ['Aya', 'Jawad', 'Haytham', 'Anan', 'Ahmad', 'Jana', 'Nour']

//Removing the First element in the Array, shift():
myStudents.shift();
console.log(myStudents); // (6) ['Jawad', 'Haytham', 'Anan', 'Ahmad', 'Jana', 'Nour']
// We can save the removed element:
let removedEle1 = myStudents.shift();
console.log(myStudents); // (5) ['Haytham', 'Anan', 'Ahmad', 'Jana', 'Nour']
console.log(removedEle1); // Jawad

//Removing the Last element in the Array, pop():
let removedEle2 = myStudents.pop();
console.log(myStudents); // (4) ['Haytham', 'Anan', 'Ahmad', 'Jana']
console.log(removedEle2); // Nour

// Search in Arrays
//------------------
myStudents.unshift("Ahmad"); 
console.log(myStudents); // (5) ['Ahmad', 'Haytham', 'Anan', 'Ahmad', 'Jana']
//indexOf()
console.log(myStudents.indexOf("Ahmad")); // 0
console.log(myStudents.indexOf("Ahmad", 2)); // 3
console.log(myStudents.indexOf("Saleem", 2)); // -1
//lastIndexOf()
console.log(myStudents.lastIndexOf("Ahmad")); // 3
console.log(myStudents.lastIndexOf("Ahmad", -3)); // 0
console.log(myStudents.lastIndexOf("Jana", -4)); // -1
//includes()
console.log(myStudents.includes("Ahmad")); // true
console.log(myStudents.includes("Ahmad", 2)); // true
console.log(myStudents.includes("Ahmad", 4)); // false

// Slicing the Array
//-------------------
/*
The slice() method returns selected elements in an array, as a new array.
The slice() method selects from a given start, up to a (Not Inclusive) given end.
The slice() method does not change the original array.
Syntax:
      array.slice(start, end)
        start	(Optional). Start position. Default is 0.
          Negative numbers select from the end of the array.
        end (Optional). End position. Default is last element.
          Negative numbers select from the end of the array.
          [End not Including].
Return Value: A new array containing the selected elements.
*/
let myNewArr = ["Adnan", "Jana", "Adam", "Nour", "Jehad"];
console.log(myNewArr); // (5) ['Adnan', 'Jana', 'Adam', 'Nour', 'Jehad']
console.log(myNewArr.slice()); // (5) ['Adnan', 'Jana', 'Adam', 'Nour', 'Jehad']
console.log(myNewArr.slice(2)); // (3) ['Adam', 'Nour', 'Jehad']
console.log(myNewArr.slice(1, 3)); // (2) ['Jana', 'Adam']
console.log(myNewArr.slice(1,myNewArr.length-1)); // (3) ['Jana', 'Adam', 'Nour']
console.log(myNewArr.slice(1,myNewArr.length)); // (4) ['Jana', 'Adam', 'Nour', 'Jehad']
console.log(myNewArr.slice(-3)); // (3) ['Adam', 'Nour', 'Jehad']
console.log(myNewArr.slice(-4, 3)); // (2) ['Jana', 'Adam']
console.log(myNewArr.slice(2, -1)); // (2) ['Adam', 'Nour']
console.log(myNewArr.slice(-4, -1)); // (3) ['Jana', 'Adam', 'Nour']
console.log(myNewArr.slice(2, -2)); // ['Adam']
console.log(myNewArr); // (5) ['Adnan', 'Jana', 'Adam', 'Nour', 'Jehad']

// Splicing the Array
//------------------
/*
The splice() method adds and/or removes array elements.
The splice() method overwrites the original array.
Syntax:
     array.splice(index, howmany-to-remove, item1, ....., itemX)
        index	Required, the position to add/remove items.
              Negative value defines the position from the end of the array.
        howmany	Optional, number of items to be removed.
        item1, ..., itemX	Optional, new elements(s) to be added.
Return Value: An array containing the removed items (if any).
*/
// Splice method changes the original array, Add and/or Remove elements.

console.log(myNewArr); // (5) ['Adnan', 'Jana', 'Adam', 'Nour', 'Jehad']

myNewArr.splice(0, 0,); 
console.log(myNewArr); // (5) ['Adnan', 'Jana', 'Adam', 'Nour', 'Jehad'] , (no changing)

let returnArr = [];
returnArr = myNewArr.splice(0, 0, "Salma", "Karam"); // adding tow elements at start
console.log(myNewArr); // (7) ['Salma', 'Karam', 'Adnan', 'Jana', 'Adam', 'Nour', 'Jehad']
console.log(returnArr); // [], (no deleted elements)

console.log(myNewArr); // (7) ['Salma', 'Karam', 'Adnan', 'Jana', 'Adam', 'Nour', 'Jehad']
returnArr = myNewArr.splice(0, 3, "Belal"); // remove three elements, and adding one element at start
console.log(myNewArr); // (5) ['Belal', 'Jana', 'Adam', 'Nour', 'Jehad']
console.log(returnArr); // (3) ['Salma', 'Karam', 'Adnan']

console.log(myNewArr); // (5) ['Belal', 'Jana', 'Adam', 'Nour', 'Jehad']
returnArr = myNewArr.splice(2, 2); // remove tow elements start with index=2, no adding.
console.log(myNewArr); // (3) ['Belal', 'Jana', 'Jehad']
console.log(returnArr); // (2) ['Adam', 'Nour']

console.log(myNewArr); // (3) ['Belal', 'Jana', 'Jehad']
returnArr = myNewArr.splice(1, 0, "Nour", "Maher") // adding tow elements at index=1, no deleting.
console.log((myNewArr)); // (5) ['Belal', 'Nour', 'Maher', 'Jana', 'Jehad']
console.log(returnArr); // []

console.log((myNewArr)); // (5) ['Belal', 'Nour', 'Maher', 'Jana', 'Jehad']
   // delete one element at position 3 from the end, add tow elements.
returnArr = myNewArr.splice(-3, 1, "Ziad", "Talal"); 
console.log((myNewArr)); // (6) ['Belal', 'Nour', 'Ziad', 'Talal', 'Jana', 'Jehad']
console.log(returnArr); // ['Maher']

// Concatenation
//---------------
/* The concat() method is used to merge two or more arrays.
   This method does not change the existing arrays,
   but instead returns a new array.
   The concat() method concatenates (joins) two or more arrays.
   The concat() method returns a new array, containing the joined arrays.
   The concat() method does not change the existing arrays.
 */
let lettersArr = ['a', 'b', 'c', 'd'];
let numbersArr = [1, 2, 3];
let merged2dArrs = lettersArr.concat(numbersArr);
console.log(lettersArr); // (4) ['a', 'b', 'c', 'd'] 
console.log(numbersArr); // (3) [1, 2, 3]
console.log(merged2dArrs); // (7) ['a', 'b', 'c', 'd', 1, 2, 3]

let wordsArr = ["Tree", "Music", "War"];
let mergede3Arrs = lettersArr.concat(numbersArr, wordsArr);
console.log(lettersArr); // (4) ['a', 'b', 'c', 'd'] 
console.log(numbersArr); // (3) [1, 2, 3]
console.log(mergede3Arrs); // (10) ['a', 'b', 'c', 'd', 1, 2, 3, 'Tree', 'Music', 'War']

console.log(numbersArr); // (3) [1, 2, 3]
let addingToArr = numbersArr.concat(10, 20, 30);
console.log(addingToArr); // (6) [1, 2, 3, 10, 20, 30]

let addArrEle = numbersArr.concat(lettersArr, "Hello", "Bye");
console.log(numbersArr); // (3) [1, 2, 3]
console.log(addArrEle); // (9) [1, 2, 3, 'a', 'b', 'c', 'd', 'Hello', 'Bye']

let addManyToArr = numbersArr.concat(lettersArr, "Belal", 5, ['z', 0]);
console.log(numbersArr); // (3) [1, 2, 3]
console.log(addManyToArr); // (11) [1, 2, 3, 'a', 'b', 'c', 'd', 'Belal', 5, 'z', 0]

let testArr = numbersArr.concat(lettersArr, "Hello");
console.log(numbersArr); // (3) [1, 2, 3]
console.log(lettersArr); // (4) ['a', 'b', 'c', 'd']
console.log(testArr); // (8) [1, 2, 3, 'a', 'b', 'c', 'd', 'Hello']
lettersArr.push(36);
console.log(lettersArr); // (5) ['a', 'b', 'c', 'd', 36]
console.log(testArr); // (8) [1, 2, 3, 'a', 'b', 'c', 'd', 'Hello']

// Sorting and Reverse
//---------------------
// By default, the sort() function sorts values as strings.
// sort the items as characters not as numbers.//
let arr1 = [5, 8, 1, 12, 10];
console.log(arr1); // (5) [5, 8, 1, 12, 10]
arr1.sort();
console.log(arr1); // (5) [1, 10, 12, 5, 8]
arr1.reverse();
console.log(arr1); // (5) [8, 5, 12, 10, 1]

let arr2 = ['f', 5, 13, 'a', 'B', 11, 20];
console.log(arr2); // (7) ['f', 5, 13, 'a', 'B', 11, 20]
console.log((arr2.sort())); // (7) [11, 13, 20, 5, 'B', 'a', 'f']
console.log((arr2.reverse())); // (7) ['f', 'a', 'B', 5, 20, 13, 11]

let arr3 = ["Omar", "Belal", "Ali", "Basem", "Mazen"];
console.log(arr3); // (5) ['Omar', 'Belal', 'Ali', 'Basem', 'Mazen']
console.log(arr3.sort()); // (5) ['Ali', 'Basem', 'Belal', 'Mazen', 'Omar']
console.log(arr3.reverse()); // (5) ['Omar', 'Mazen', 'Belal', 'Basem', 'Ali']

let arr4 = ["Sami", "Adnan", "Maher", "Kamal"];
console.log(arr4.sort().reverse()); // (4) ['Sami', 'Maher', 'Kamal', 'Adnan']
console.log(arr4.reverse()); // (4) ['Adnan', 'Kamal', 'Maher', 'Sami']

// Numeric Sort
//--------------
/*
By default, the sort() function sorts values as strings.
This works well for strings ("Apple" comes before "Banana").
However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect result when sorting numbers.
You can fix this by providing a compare function:
*/
let numArr = [25, 20, 100, -10, 135];
console.log(numArr); // (5) [25, 30, 80, -10, 42]
console.log(numArr.sort()); // (5) [-10, 100, 135, 20, 25] (incorrect ordering!).
console.log(numArr.sort( function(a,b) { return a-b; } )); // (5) [-10, 20, 25, 100, 135] (correct).
/*
The Compare Function
----------------------
The purpose of the compare function is to define an alternative sort order.
The compare function should return a negative, zero, or positive value,
 depending on the arguments:
      function(a, b){return a - b}
When the sort() function compares two values, it sends the values to the compare function,
and sorts the values according to the returned (negative, zero, positive) value.
If the result is negative a is sorted before b.
If the result is positive b is sorted before a.
If the result is 0 no changes are done with the sort order of the two values.
Example:
--------
The compare function compares all the values in the array, two values at a time (a, b).
When comparing 40 and 100, the sort() method calls the compare function(40, 100).
The function calculates 40 - 100 (a - b), and since the result is negative (-60), 
 the sort function will sort 40 as a value lower than 100.
*/
console.log(numArr.sort(function(a,b){return a-b;}).reverse()); 
// (5) [135, 100, 25, 20, -10] (descending sorting).

// Max and Min value in Array
//---------------------------
//max and min with set of number:s
console.log( Math.max(1, 3, 2) ); // 3
console.log( Math.min(1, 3, 2) ); // 1
console.log(Math.max(5, 75, -3, 18)); // 75
console.log(Math.min(5, 75, -3, 18)); // -3

// Max and Min with Array of numbers:
// numArr = [25, 20, 100, -10, 135];
console.log( Math.max.apply(null, numArr) ); // 135
console.log( Math.min.apply(null, numArr) ); // -10

// Converting Arrays to Strings
//----------------------------
// toString() converts an array to a string of array values (comma separated).
console.log(arr4.toString()); // Adnan,Kamal,Maher,Sami

/* join() also joins all array elements into a string.
It behaves just like toString(), but in addition you can specify the separator.
*/
console.log(arr4.join()); // Adnan,Kamal,Maher,Sami
console.log(arr4.join("")); // AdnanKamalMaherSami
console.log(arr4.join(" ")); // Adnan Kamal Maher Sami
console.log(arr4.join(" - ")); // Adnan - Kamal - Maher - Sami

//Chalenge:
//---------
let zero= 0;
let counter = 3;
let my = ["Ahmaed", "Mazero", "Elaham", "Osama", "Jamal", "Ameer"];

// my = my.slice(0,4).reverse();
my = my.slice(zero, ++counter).reverse();
console.log(my); // (4) ['Osama', 'Elaham', 'Mazero', 'Ahmaed']

// console.log(my.slice(1,3)); // (2) ['Elaham', 'Mazero']
console.log(my.slice(++zero, --counter)); // (2) ['Elaham', 'Mazero']
my = my.slice(zero, counter);
console.log(my); // (2) ['Elaham', 'Mazero']

console.log(` zero=${zero} , counter=${counter}`); // zero=1 , counter=3
// console.log(my);
let El_Sec = my[--zero];
let zero_Sec = my[++zero];
console.log(`${El_Sec} ${zero_Sec}`); // Elaham Mazero

let Elzero_Sec = El_Sec.slice(--zero, --counter).concat(zero_Sec.slice(counter));
console.log(Elzero_Sec); // Elzero

console.log(` zero=${zero} , counter=${counter}`); // zero=0 , counter=2
let ro_Sec = Elzero_Sec.slice(Elzero_Sec.length - counter);
console.log(ro_Sec); // ro
// console.log(ro_Sec.charAt(zero).concat ((ro_Sec.charAt(++zero)).toUpperCase()) ); // rO
let rO_Sec = ro_Sec.charAt(zero).concat ((ro_Sec.charAt(++zero)).toUpperCase());
console.log(rO_Sec); // rO


