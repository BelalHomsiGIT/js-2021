// HTML DOM Elements (Nodes) / Deal with Elements.
// <div class="test" id="test"> <span>In span</span></div>
const div1 = document.getElementById("test1");
// div1.innerHTML = "Hello" // the whole HTML in div is removed, Hello is instead of.
div1.innerHTML += " Hello" // adding Hello the HTML content in the div
div1.before("This Text is before the Div1-by: div1.before('')");
div1.after("This Text is after the Div1-by: div1.before('')");

// 1- Creating New HTML Elements (Nodes) - createElement():
/*  The createElement() method 
    Creates an element node.
    Syntax:     document.createElement(type)
    Return Value: Node - The created element node.
*/
// create new div, and create h1 inside it:
function createNewDiv1(){
    const newdiv1 = document.createElement("div");
    newdiv1.id = "newtst1";
    newdiv1.textContent = "Hello New Div1";
    document.body.appendChild(newdiv1);
}
//Note: innerHTML
function createNewDiv2(){
    const newdiv2 = document.createElement("div");
    newdiv2.innerHTML = "<h2> Inside Div2, by innerHTML</h2>";
    document.body.appendChild(newdiv2);
}
//Note: textContent
function createNewDiv3(){
    const newdiv3 = document.createElement("div");
    newdiv3.textContent = "<h2> Inside Div2, by innerHTML</h2>";
    document.body.appendChild(newdiv3);
}
//with afetr and before we put element after/before another one:
let myDiv = document.createElement("div");
myDiv.textContent = "Hello My Div";
myDiv.style.cssText="width: 100px; height:100px; background-color: yellow;"
document.body.append(myDiv); // at the last
let myPafter = document.createElement("p");
myPafter.textContent = "Hello My Paragraph - aftre Div";
let myPbefore = document.createElement("p");
myPbefore.textContent = "Hello My Paragraph - before Div";
myDiv.before(myPbefore);
myDiv.after(myPafter);

let myDiv2 = document.createElement("div");
myDiv2.textContent = "Hello My Div2";
myDiv2.style.cssText="width: 100px; height:100px; background-color: green;"
document.body.prepend(myDiv2); // at the begin
let myPafter2 = document.createElement("p");
myPafter2.textContent = "Hello My Paragraph - aftre Div2";
let myPbefore2 = document.createElement("p");
myPbefore2.textContent = "Hello My Paragraph - before Div2";
myDiv2.before(myPbefore2);
myDiv2.after(myPafter2);

// by append, preppend, after, before, 
// we can change the position for the element.

//remove element:
function removeElement(){
    myPafter.remove();
}
