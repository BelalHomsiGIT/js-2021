
/*The hasAttributes() method returns true if a node has attributes, otherwise false.
 The hasAttributes() method always returns false if the node is not an element node.
    Syntax:  element.hasAttributes()  -or-   node.hasAttributes()
    Parameters: NONE
*/
const myDiv = document.getElementsByTagName("div")[0];
console.log(myDiv.hasAttributes()); // false

const myP1 = document.getElementsByTagName("p")[0];
console.log(myP1.hasAttributes()); // true

const myP2 = document.getElementsByTagName("p")[1];
console.log(myP2.hasAttributes()); // true
console.log(myP2.attributes); // at console

/*The hasAttribute() method returns true if the attribute exists, otherwise false.
    Syntax:   element.hasAttribute(name)
*/
console.log(myP1.hasAttribute("title")); // true
console.log(myP2.hasAttribute("title")); // false

if(myP2.hasAttribute("title")){
    console.log(myP2.getAttribute("title"));
}else{
    myP2.setAttribute("title", "Hello");
}
console.log(myP2.hasAttribute("title")); // true

/*The removeAttribute() method removes an attribute from an element.
    Syntax:    element.removeAttribute(name)
*/
function RemoveSeteAttrFromP1(){
    if(myP2.hasAttribute("style")){
        myP2.removeAttribute("style");
    }else{
        myP2.setAttribute("style", "color:green;");
    }
}
