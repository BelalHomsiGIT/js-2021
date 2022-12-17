// HTML DOM Element cloneNode()
/* The cloneNode() method creates a copy of a node, and returns the clone.
   The cloneNode() method clones all attributes and their values.
   Set the deep parameter to true if you also want to clone descendants (children).
*/
const theP = document.getElementsByTagName("p");
console.log(theP); // HTMLCollection [p]
console.log(theP.length); // 1
console.log(theP[0]); // p
// clone the paragraph without the content
let myCloneP = theP[0].cloneNode();
console.log(myCloneP); // p (without the textcontent)
document.body.append(myCloneP); // it's empty

function CloneP(){
    let myP = document.getElementById("para");
    let myCloneNewP1 = myP.cloneNode(true);
    let myCloneNewP2 = myP.cloneNode(true);
    let theDiv2 = document.getElementById("div2");
    theDiv2.appendChild(myCloneNewP1);
    document.body.append(myCloneNewP2);
}