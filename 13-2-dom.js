/* The classList property returns the CSS classnames of an element.
   The classList property returns a DOMTokenList object.
*/
const myContainerDiv = document.getElementById("myDiv");
console.log(myContainerDiv); // div#myDiv.container.test
console.log(myContainerDiv.classList);
/* output:
-----------
DOMTokenList(2) ['container', 'test', value: 'container test']
0: "container"
1: "test"
length: 2
value: "container test"
*/
//
console.log(typeof myContainerDiv.classList); // object
console.log(myContainerDiv.classList.length); // 2
console.log(myContainerDiv.classList[0]); // container
console.log(myContainerDiv.classList[1]); // test
console.log(myContainerDiv.classList.value); // container test
console.log(myContainerDiv.classList.item("0")); // container
console.log(myContainerDiv.classList.item("1")); // test
console.log(myContainerDiv.classList.item("2")); // null

//
console.log(myContainerDiv.classList.contains("test")); // true
console.log(myContainerDiv.classList.contains("show")); // false

//
function addClassToM(){
    myContainerDiv.classList.add("overall");
}

console.log(myContainerDiv.children);
console.log(myContainerDiv.children[0]);
function addClassToO(){
    // myContainerDiv.children.array.forEach(element => {
    //     element.classList.add("otherdiv");
    // });
    for(let i=0; i<myContainerDiv.children.length; i++){
        myContainerDiv.children[i].classList.add("otherdiv");
    }
}
//
function removeFromM(){
    myContainerDiv.classList.remove("test", "overall");
}
// toggle("single ClassName") -> remove the class if it found, add it if not found.
function swapInM(){
    myContainerDiv.classList.toggle("overall");
}