/*HTML DOM Events
-----------------
Reacting to Events:
A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.

1)HTML Event Attributes
-------------------------
To execute code when a user clicks on an element, we add JavaScript code to an HTML event attribute,
here Event attribute is onclick attribute.
Then we write JS code as value for this attribute (bad behaviour - oops):
 example: put this code in HTML file:
      <button onclick="console.log('You clicked me!')">Click me</button> */

/* or with calling the function as a value for the Event attribute (bad behaviour - oops):
 example: put this code in HTML file:
     <button onclick="myFun()">Click me</button> */
function myFun(){
    console.log('Hello Event');
}

/* 
2)Assign Events Using the HTML DOM
----------------------------------
in HTML file: <button id="testBtn">Click me</button>
*/
const myBtn = document.getElementById("testBtn");
myBtn.onclick = function(){
    console.log('Hello HTML DOM');
}

//Examples:
// 1- reset margin for all buttons:  <button id="styleBtn">Inc margin</button>
const myStyleBtn = document.getElementById("styleBtn");
const myAllBtns = document.getElementsByTagName("button");
console.log(myAllBtns); // HTMLCollection(5) ...
myStyleBtn.onclick = function(){
    for(let i=0; i<myAllBtns.length; i++){
        myAllBtns[i].style.margin = "20px";
    }
}
// 2- reset styling when mouse-over, mouse-leave:
const head1 = document.getElementById("heading1");
head1.onmouseover = function(){
    this.style.color = "red"
    this.style.backgroundColor = "yellow"
    this.innerHTML = "mouseover WoW";
}
head1.onmouseleave = function(){
    this.style.color = "yellow"
    this.style.backgroundColor = "red"
    this.innerHTML = "mouseleave Bye";
}
// 3- Refresh the page:
const myRefreshBtn = document.getElementById("refresh");
myRefreshBtn.onclick = function(){
    location.reload();
}
//4- reset styling for h1 when scrolling page:
window.onscroll = function(){
    if(document.body.scrollTop > 50){
        head1.style.backgroundColor = "black";
        head1.style.color = "white";
    }else{
        head1.style.backgroundColor = "greenyellow";
        head1.style.color = "black";
    }
}
// 5- onfocus, onblur, and onkeyup examle: 
const textBox = document.getElementById("textbox");
textBox.onfocus = function(){
    textBox.setAttribute("placeholder", "type small chars")
    textBox.style.height = "30px";
}
textBox.onkeyup = function(){
    this.value = this.value.toUpperCase();
}
textBox.onblur = function(){
    textBox.setAttribute("placeholder", "try again")
    textBox.style.height = "12px";
}