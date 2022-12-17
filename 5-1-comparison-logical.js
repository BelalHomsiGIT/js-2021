// Comparison Operators
//----------------------

// 1-Equal (==)
// It's compare values only rgardless of the data type
console.log( 10 == 10 ); // true
console.log( 10 == "10" ); // true
console.log( -23 == "-23" ); // true
console.log( "Belal" == "belal" ); // false
console.log( "Belal" == "Belal" ); // true

// 1-Not Equal (!=)
// It's compare values only rgardless of the data type
console.log( 10 != 10 ); // false
console.log( 10 != "10" ); // false
console.log( 10 != -10 ); // true

// 3-Equla Value and Equal Type (===) "Identical"
// It's compare values and data type
console.log( 10 === 10 ); // true
console.log( 10 === "10" ); // false
console.log( -23 === "-23" ); // false
console.log( "Belal" === "belal" ); // false
console.log( "Belal" === "Belal" ); // true

// 3-Not Equla value and Not Equal Type (!==) "Not Identical"
// It's compare values and data type
console.log( 10 !== 10 ); // false
console.log( 10 !== "10" ); // true
console.log( -23 !== "-23" ); // true
console.log( "Belal" !== "belal" ); // true
console.log( "Belal" !== "Belal" ); // false

//4-Greater Than (>), Greater Than or Equal To (>=)
console.log( 10 > 8 ); // true
console.log( 10 > 10 ); // false
console.log( 10 > 15 ); // false
console.log( 10 > "15" ); // false
console.log( 10 > "5" ); // true
console.log( "10" > "5" ); // false
console.log( "5" > "10" ); // true
console.log( "Belal" > "Homsi" ); // false
//
console.log( 10 >= 8 ); // true
console.log( 10 >= 10 ); // true
console.log( 10 >= 15 ); // false
console.log( 10 >= "15" ); // false
console.log( 10 >= "5" ); // true
console.log( "10" >= "5" ); // false
console.log( "5" >= "10" ); // true
console.log( "Belal" >= "Homsi" ); // false

//5-Less Than (<), Less Than or Equal To  (<=)
console.log( 10 < 8 ); // false
console.log( 10 < 15 ); // true
console.log( 10 < "15" ); // true
console.log( 10 < "5" ); // false
console.log( "10" < "5" ); // true
console.log( "5" < "10" ); // false
console.log( "Belal" < "Homsi" );  // true
//
console.log( 10 <= 8 ); // false
console.log( 10 <= 15 ); // true
console.log( 10 <= "15" ); // true
console.log( 10 <= "5" ); // false
console.log( "10" <= "5" ); // true
console.log( "5" <= "10" ); // false
console.log( "Belal" <= "Homsi" );  // true

// Note:
//-----
console.log("Belal" === "Ameen"); //false
console.log(typeof "Belal" === typeof "Ameen"); //true

// Logical Operators
//-------------------

//1- NOT (!)
console.log(true); // true
console.log(!true); // false
console.log(false); // false
console.log(!false); // true
console.log( 10 == "10" ); // true
console.log( !(10 == "10") ); // false
console.log( (10 === "10") ); // false
console.log( !(10 === "10") ); // true

//2- AND (&&)
console.log( 10 == "10" && 10 > 8 ); // true
console.log( 10 == "10" && 10 > 8 && 10 >= 10 ); // true
console.log( 10 == "10" && 10 > 8 && 10 >= 12 ); // false

//3- OR (||)
console.log( 10 == "10" || 10 > 20 ); // true
console.log( 10 === "10" || 10 > 15 || 10 >= 10 ); // true
console.log( 10 == "10" || 10 > 8 || 10 >= 12 ); // true
console.log( 10 === "10" || 10 > 15 || 10 >= 1 ); // true
console.log( 10 === "10" || 10 >= 15 || 10 <= 1 ); // false

