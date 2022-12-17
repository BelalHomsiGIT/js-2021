/*
When the page is loaded, the browser creates an object contains everything in the page
the name of this object is Document, and it's a model, mean it's a copy of the page.
So we must learn how to locate the elements in the page (or in the model) to deal it
as editing, adding, removing,...
*/

/* DOM Selectors */
// 1- Selecting Elements by ID
//-----------------------------
/* You can select an element based on its unique ID with the getElementById() method.
   This is the easiest way to find an HTML element in the DOM tree.
   It returns an element with a specified value.
   It returns null if the element does not exist.
Note: Any id should be unique, but If two or more elements 
      with the same id exist, getElementById() returns the first.
*/
const myHeading1 = document.getElementById("header1");
console.log(myHeading1); // h1#header1
myHeading1.style.color="red";

// 2- getElementsByClassName()
//-----------------------------
/*
The getElementsByClassName() method returns a collection of elements with 
a specified class name(s). It returns an HTMLCollection.
The getElementsByClassName() property is read-only.
Note: An HTMLCollection is a collection of HTML nodes.
      An HTMLCollection is an array-like list of HTML elements.
      The elements in a collection can be accessed by index (starts at 0).
Note: An HTMLCollection is NOT an array!
      An HTMLCollection may look like an array, but it is not.
      You can loop through the list and refer to the elements with 
        a number (just like an array).
      However, you cannot use array methods like valueOf(), pop(), 
        push(), or join() on an HTMLCollection.
*/
const myDivs = document.getElementsByClassName("listdiv"); 
console.log(myDivs); // HTMLCollection(2) [div.listdiv, div.listdiv]
console.log(myDivs.length); // 2
console.log(myDivs[0]); // div.listdiv
// myDivs[0].innerHTML = "Heloo"
Array.from(myDivs).forEach( ele => {
    console.log(ele.tagName);
}) // 2 DIV

// 3- getElementsByTagName()
//--------------------------
/*
The getElementsByTagName() method returns a collection of all elements with
a specified tag name. It returns an HTMLCollection.
The getElementsByTagName() property is read-only.
Note:
      getElementsByTagName("*") returns all elements in the document.
*/
const myTags = document.getElementsByTagName("p");
console.log(myTags); // HTMLCollection(3) [p, p, p]
for(let i=0; i<myTags.length; i++) myTags[i].style.color = "blue";
Array.from(myTags).forEach( ele => {})

// 4 - querySelector()
//---------------------
/*     Syntax :     document.querySelector(CSS selectors)
Examples:
---------
Get the first <p> element in with class="example":
document.querySelector("p.example");

Change the text of the element with id="demo":
document.querySelector("#demo").innerHTML = "Hello World!";

Select the first <p> element with the parent is a <div> element.
document.querySelector("div > p");

Select the first <a> element that has a "target" attribute:
document.querySelector("a[target]");

Select the first <h3> or the first <h4>:
document.querySelector("h3, h4").style.backgroundColor = "red";
*/
/*
The querySelector() method returns the first element that matches a CSS selector.
To return all matches (not only the first), use the querySelectorAll() instead.
Both querySelector() and querySelectorAll() return a NodeList.
Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the
selector(s) is invalid.
*/
const myQrySlctr1 = document.querySelector(".about");
console.log(myQrySlctr1); // look at the console

/* we have tow div have listdiv class name, so by 
querySelector(".listdiv") we will get the FileSystemDirectoryEntry.*/
const myQrySlctr2 = document.querySelector(".listdiv");
console.log(myQrySlctr2); // look at the console

const myQrySlctr3 = document.querySelector("#header1");
console.log(myQrySlctr3); // look at the console

/* in div with class=about, there are three divs,
the first one is returned:  */
const frstDiv = document.querySelector(".about > div");
console.log(frstDiv);
// frstDiv.style.backgroundColor = "green";

// 5- The querySelectorAll():
//---------------------------
/* The querySelectorAll() method returns all elements that matches a CSS selector(s).
 It returns a NodeList, and throws a SYNTAX_ERR exception if the selector(s) is invalid */
 function lastP(){
       const singleP=document.querySelectorAll("p");
       lastPidx = singleP.length -1;
       console.log(singleP);;
       singleP[lastPidx].style.fontStyle = "italic";
 } //look at 'With the object model, JavaScript gets ....'
 
 function allP(){
       const allParagraphs = document.querySelectorAll("p");
       for(let i=0; i<allParagraphs.length; i++){
            allParagraphs[i].style.fontSize = "22px";
            allParagraphs[i].style.color = "brown";
       }
 }