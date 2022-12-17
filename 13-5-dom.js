// Traversing over Elements
//--------------------------
//1- nextSibling:
/* The nextSibling property returns the next node on the same tree level.
   The nextSibling returnes a node object, it's read-only.
  Important: nextSibling returns the next sibling node: An element node, a text node, or a comment node.
            Whitespace between elements are also text nodes.
*/
//2- previousSibling:
/* The previousSibling property returns the previous node on the same tree level.
   The previousSibling property returns a node object, it'sread-only.
Important: previousSibling returns the previous sibling node: An element node, a text node, or a comment node.
           Whitespace between elements are also text nodes.
*/
//3- nextElementSibling:
/* The nextElementSibling property returns the next element in the same tree level, it's read-only.*/
//4- previousElementSibling:
/* The previousElementSibling property returns the previous element in the same tree level, it's read-only.*/
//5- parentNode:
/* The parentNode property returns the parent node of an element or node, it's read-only.*/
//6- parentElement:
/* The parentElement property returns the parent element of the specified element.*/

const sp1 = document.getElementById("sp1");
console.log(sp1.nextSibling); // <!--Comment after span one-->
console.log(sp1.nextElementSibling); // <span id="sp2">Span TOW/</span>
console.log(sp1.parentNode); // <div class="my-div">...</div>
console.log(sp1.parentElement); // <div class="my-div">...</div>

const sp2 = document.getElementById("sp2");
console.log(sp2.nextSibling); // <!--Comment after span tow-->
console.log(sp2.nextElementSibling); // <span id="sp3">Span THREE</span>
console.log(sp2.previousSibling); // <!--Comment after span one-->
console.log(sp2.previousElementSibling); // <span id="sp1">Span ONE/</span>
console.log(sp2.parentNode); // <div class="my-div">...</div>
console.log(sp2.parentElement); // <div class="my-div">...</div>

const spcnsl = document.getElementById("cnsl");
console.log(spcnsl.nextSibling); // null
console.log(spcnsl.nextElementSibling); // null
console.log(spcnsl.previousSibling); // Look in JS file, and
console.log(spcnsl.previousElementSibling); // null
console.log(spcnsl.parentNode); // <p>..</p>
console.log(spcnsl.parentElement); // <p>..</p>