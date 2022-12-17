 /* html:
 ----------
    <article>
        <h2>h2 in artcle element</h2>
        <p>Hello World!</p>
        <!--This is test comment in article-->
    </article>
 */

/* children property:
----------------------
 returns a collection of an element's child elements.
 The children property returns an HTMLCollection object. */
const myArticleElement = document.querySelector('article');
console.log(myArticleElement.children);
/* output in console:
    HTMLCollection(3) [h2, p, button]
    0: h2
    1: p
    2: button
    length: 3
*/
const myH2Element = document.querySelector('article > h2');
console.log(myH2Element.children);
/*
    HTMLCollection []
    length: 0
*/
function changeText(){
    console.log(myArticleElement.children[1]); // p
    myArticleElement.children[1].textContent = "Bye sad World.";
}
/* childNodes property:
-----------------------
    The childNodes property returns a collection (list) of an elements's child nodes.
    The childNodes property returns a NodeList object.
    The childNodes property is read-only.
    childNodes[0] is the same as firstChild.*/
console.log(myArticleElement.childNodes);
/* output in console:
    NodeList(9) [text, h2, text, p, text, button, text, comment, text]
    0: text
    1: h2
    2: text
    3: p
    4: text
    5: button
    6: text
    7: comment
    8: text
    length: 9
*/
/*Important!
------------
childNodes returns nodes: Element nodes, text nodes, and comment nodes.
Whitespace between elements are also text nodes.
in above output; 0,2,4,6,8 are text, everyone is a Whitespace or breakline in HTML*/
console.log(myArticleElement.childNodes[7]); // #comment 
//Note: in console look at properties of every node, as nodeValue: 
console.log(myArticleElement.childNodes[7].nodeValue); // This is test comment in article
myArticleElement.childNodes[3].style.backgroundColor = "yellow";
/*childNodes vs children
-------------------------
childNodes returns child nodes (element nodes, text nodes, and comment nodes).
children returns child elements (not text and comment nodes).*/
//
/* hasChildNodes() method
--------------------------
Returns true if the specified node has any child nodes, otherwise false.
The hasChildNodes() method is read-only.
Important!
----------
Whitespace between nodes are considered child nodes (text nodes).
*/
console.log(myArticleElement.hasChildNodes()); // true
//
/* firstChild:
--------------
    The lastChild property returns the first child node of a node.
    The firstChild property returns a node object.
    The firstChild property is read-only.
    The firstChild property is the same as childNodes[0].*/
console.log(myArticleElement.firstChild); // #text (Whitespace)
console.log(myArticleElement.firstChild.innerHTML); // undefiend
/* lastChild:
-------------
The lastChild property returns the last child node of a node.
The lastChild property returns returns a node object.
The lastChild property is read-only*/
console.log(myArticleElement.lastChild); // #text (Whitespace)
//Note: make the article element in HTML file in one line without Whitespace.
//
/* firstElementChild:
---------------------
firstElementChild property returns the first child element of the specified element.
The firstElementChild property is read-only.
The firstElementChild property returns the same as children[0].
*/
console.log(myArticleElement.firstElementChild); // <h2>h2 in artcle element</h2>
console.log(myArticleElement.firstElementChild.innerHTML); // h2 in artcle element
/*firstChild vs firstElementChild
----------------------------------
firstChild returns the first child node (an element node, a text node or a comment node). Whitespace between elements are also text nodes.
firstElementChild returns the first child element (not text and comment nodes).*/
//
/* lastElementChild:
---------------------
The lastElementChild property returns the last child element of an element.
The lastElementChild property is read-only.*/
console.log(myArticleElement.lastElementChild); // <button onclick="changeText()">change P content</button>
console.log(myArticleElement.lastElementChild.innerHTML); // change P content
/*lastChild vs lastElementChild
--------------------------------
lastChild returns the last child node (an element node, a text node or a comment node). Whitespace between elements are also text nodes.
lastElementChild returns the last child element (not text and comment nodes).*/