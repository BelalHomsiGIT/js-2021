
/*  A javaScript object is an entity having states and behaviors (properties and methods). 
    For example: car, pen, bike, chair, glass, keyboard, monitor etc.
    JavaScript is an object-based language. Everything is an object in JavaScript.
    JavaScript is template based not class based. Here, we don't create class to get the object. 
    But, we direct create objects.
*/
/*  There are 3 ways to create objects.
        By object literal.
        By creating instance of Object directly (using new keyword).
        By using an object constructor (using new keyword).
*/

// 1) Create Object by object literal
//---------------------------------------
/*    Syntax:   object-name={property1:value1,property2:value2.....propertyN:valueN}  
      As you can see, property and its value is separated by : (colon).
*/
let user = {
    //properties
    firstName : "Belal",
    lastName : "Homsi",
    Age : 101,
    //methods
    fullName : function(){
        return `${this.firstName} ${this.lastName}`
    },
    sayHello : function(){
        return 'Helloooo';
    }
};

//You can access the value of a property by using its key.
// 1. Using dot Notation:
//-----------------------
// objectName.key , as: user.firstName
console.log(user.firstName); // Belal
console.log(user.lastName); //Homsi
console.log(user.Age); // 101
//2. Using bracket Notation:
//--------------------------
// objectName["propertyName"], as: 
console.log(user['firstName']);
console.log(user['lastName']);
console.log(user['Age']);
// access the methods:
console.log(user.fullName()); // Belal Homsi
console.log(user.sayHello()); // Helloooo
//Note: we use the bracket notation when the key name contains space or something like it.
let testObj = {
    'First Name' : 'Sameh',
    'Last Name' : 'Abeed',
    age:100,
}
console.log(testObj['First Name']); // Sameh
console.log(testObj['Last Name']); // Abeed
console.log(testObj['age']); // 100
console.log(testObj.age); // 100
// and when the key name is a variable
var aKey = 'age';
console.log(testObj[aKey]); // 100

// Nested Objects
//---------------
let emp = {
    fName : 'Belal',
    lName : 'Homsi',
    age : 105,
    work : false,
    skills : ['HTML', 'CSS', 'JS', 'PHP', 'MySql', 'Pascal', 'Algorithm'],
    skllsDetails : {
        programing : 'Developer',
        front : {
            html : 'Good',
            css : 'Good',
            js : 'Very Good',
        },
        back : {
            mysql : 'Perfect',
            php : 'Very Good',
            laravel : 'Good',
        },
    },
    chkForWork : function(){
        if(this.work === true){
            return 'Ok';
        }else{
            return 'Opps';
        }
    }
};
console.log(emp.fName); // Belal
console.log(emp.age); // 105
console.log(emp.skills[0]); // HTML
console.log(emp.skills.join(' | ')); // HTML | CSS | JS | PHP | MySql | Pascal | Algorithm
console.log(emp.skllsDetails.programing); // Developer
console.log(emp.skllsDetails.front.js); // Very Good
console.log(emp['skllsDetails'].back.laravel); // Good
console.log(emp['skllsDetails']['back']['mysql']); // Perfect
console.log(emp.chkForWork()); // Opps
//Note: when we omit the brackets:
console.log(emp.chkForWork);
/* output: the function definition
ƒ (){
        if(this.work === true){
            return 'Ok';
        }else{
            return 'Opps';
        }
    }
*/
// Note: we can add new property and method to the object later:
emp.address = 'Syria';
emp.info = function(){
    return this.fName + ' ' + this.address;
}
console.log(emp.info()); // Belal Syria

// we can create empty objet, then add the properties:
let emptyObj = {};
console.log(emptyObj); // {}
emptyObj.pro1 = 15;
emptyObj.meth1 = function(){
    return this.pro1+20;
}
console.log(emptyObj.pro1); // 15
console.log(emptyObj.meth1()); // 35

// What about -this-
// In JavaScript, the this keyword refers to an object.
console.log(this); // we get window object
console.log( this === window); // true
myVar = 2022;
console.log(myVar); // 2022
console.log(window.myVar); // 2022
console.log(this.myVar); // 2022
// go to references

// 2) Create Object by -create- method
//------------------------------------
let myObj = Object.create({}); // empty object
console.log(myObj); // {}
// we can add properties to it:
myObj.p1 = 500;
console.log(myObj); // {p1: 500}
console.log(myObj.p1); // 500
// we will create a new object:
let objCar1 = Object.create({
    brand : 'BMW',
    model : 'x700',
    color : 'Black',
    horn : 'Beep',
    sayHorn : function(){
         return objCar1.brand + ' say ' + objCar1.horn;
     }
})
console.log(objCar1.brand); // BMW
console.log(objCar1.sayHorn()); // BMW say Beep
// let us create new one depend on the objCar1 (prototype):
let newobjCar1 = Object.create(objCar1);
console.log(newobjCar1); // note: open the prototype in console
console.log(newobjCar1.sayHorn()); // BMW say Beep
// if we change property for the original object:
objCar1.brand = 'WOLGSVAGEN';
console.log(newobjCar1.sayHorn()); // WOLGSVAGEN say Beep
// ok, we will undo the change:
objCar1.brand = 'BMW';
console.log(newobjCar1.sayHorn()); // BMW say Beep
// now we change property for new one:
newobjCar1.brand = "OPEL";
// what it say:
console.log(newobjCar1.sayHorn()); // BMW say Beep
// the output for the original !! open the prototype in console.
console.log(newobjCar1);
// how we solve this problem? using this instead of object name:
let objCar2 = Object.create({
    brand : 'BMW',
    model : 'x700',
    color : 'Black',
    horn : 'Beep',
    sayHorn : function(){
        return this.brand + ' say ' + this.horn; // using this
    }
})
console.log(objCar2.brand); // BMW
console.log(objCar2.sayHorn()); // BMW say Beep
let newobjCar2 = Object.create(objCar2);
console.log(newobjCar2); // note: open the prototype in console
console.log(newobjCar2.sayHorn()); // BMW say Beep
objCar2.brand = 'WOLGSVAGEN';
console.log(newobjCar2.sayHorn()); // WOLGSVAGEN say Beep
newobjCar2.brand = 'OPEL';
newobjCar2.horn = 'Toot';
console.log(newobjCar2.sayHorn()); // OPEL say Toot
console.log(newobjCar1.sayHorn()); // BMW say Beep

// 2) Creating instance of Object
//----------------------------------
/*    Syntax:   var objectname=new Object();  
      Here, 'new' keyword is used to create object.
*/
let myInsObj = new Object({
    pro1 : 10,
    pro2 : 'Hi',
    M : function(){
        return this.pro2 + ' ' + this.pro1;
    }
});
console.log(myInsObj); // {pro1: 10, pro2: 'Hi', M: ƒ}
console.log(myInsObj.pro2); // Hi
console.log(myInsObj.M()); // Hi 10
// Note: we can create empty object, then add properties:
let myEmpObj = new Object();
console.log(myEmpObj); // {}
myEmpObj.p1 = 101,
myEmpObj.p2 = 'Hello';
myEmpObj.Go = function(){
    return `You are ${this.p1} ${this.p2}`;
}
console.log(myEmpObj); // {p1: 101, p2: 'Hello', Go: ƒ}
console.log(myEmpObj.Go()); // You are 101 Hello

// 3) Create Object by Object.assign()
//-------------------------------------
//Syntax: Object.assign(target, ...sources)
const target1 = { a: 1, b: 2 };
const source1 = { c: 4, d: 5 };
const returnedTarget1 = Object.assign(target1, source1);
console.log(target1); // {a: 1, b: 2, c: 4, d: 5}
console.log(source1); // {c: 4, d: 5}
console.log(returnedTarget1); // {a: 1, b: 2, c: 4, d: 5}

//Note: if there are the same property, it takes the value of last one(as in source):
const target2 = { a: 1, b: 2 };
const source2 = { b: 4, c: 5 };
const returnedTarget2 = Object.assign(target2, source2);
console.log(target2); // {a: 1, b: 4, c: 5}
console.log(returnedTarget2); // {a: 1, b: 4, c: 5}

//Cloning an object
const obj = { a: 1 };
const copy = Object.assign({}, obj); // target is nothing
console.log(copy); // {a: 1}
console.log(obj); // {a: 1}

// Merging objects
let box = {
    height: 10,
    width: 20
};
let style = {
    color: 'Red',
    borderStyle: 'solid'
};
console.log(box); // {height: 10, width: 20}
console.log(style); // {color: 'Red', borderStyle: 'solid'}

let styleBox = Object.assign({}, box, style);
console.log(styleBox); // {height: 10, width: 20, color: 'Red', borderStyle: 'solid'}

// Clone and adding owner properties:
let valObj = {
    a : 1,
    b : 2,
};
let newobj = Object.assign({}, valObj, {
    c : 15,
    d: 100,
    s : function(){
        return this.a+this.b+this.c+this.d;
    }
});
console.log(valObj); // {a: 1, b: 2}
console.log(newobj); // {a: 1, b: 2, c: 15, d: 100}
console.log(newobj.s()); // 118

// 3) By using an Object constructor
//----------------------------------
/* Here, you need to create function with arguments. 
   Each argument value can be assigned in the current object by using this keyword.
*/