// Creating New HTML Elements
//---------------------------
/* The document.createElement() is used to dynamically create an HTML element node
   with the specified name via JavaScript. 
   This method takes the name of the element as the parameter and creates that element node.
*/
function createP1(){
    // create paragraph.
    let myNewP = document.createElement("p");
    // assign text-value to textContent attribute(directly).
    myNewP.textContent = "1-Hello, I'm here!"; 
    // append the paragraph to the body in document.
    document.body.appendChild(myNewP);
}
//or
function createP2(){
    // create paragraph.
    let myNewP = document.createElement("p");
    // crate node as text.
    let theContent = document.createTextNode("2-Hello, a new one.")
    //append the text-node to the paragraph
    myNewP.appendChild(theContent);
    //append the paragraph to the body in document.
    document.body.appendChild(myNewP);
}

//create div element:
let myDivElement = document.createElement("div");
//output myDivElement in console:
console.log(myDivElement); // <div></div>
//set the class attribute (directly):
myDivElement.className = 'main';
console.log(myDivElement); // <div class='main'></div>
//set the id attribute by setAttribute() method:
myDivElement.setAttribute("id", "div1");
console.log(myDivElement); // <div id="div1" class="main"></div>
//we can create a new attribute:
let myNewAttr = document.createAttribute("data-custom");
//now append it to my element:
myDivElement.setAttributeNode(myNewAttr);
//now set the value for this new attribute:
myDivElement.setAttribute("data-custom", "Test");
console.log(myDivElement); // <div id="div1" class="main" data-custom="Test"></div>
//now, define a text node:
let myText = document.createTextNode("Hello my DIV");
//now append the text to div:
myDivElement.appendChild(myText);
console.log(myDivElement); // <div id="div1" class="main" data-custom="Test">Hello my DIV</div>
//we can adding comment in the div:
let myComment = document.createComment("This is HTML comment");
myDivElement.appendChild(myComment);
//now, append the div to the body in our document
document.body.appendChild(myDivElement);
//got to inspire -> elements.


