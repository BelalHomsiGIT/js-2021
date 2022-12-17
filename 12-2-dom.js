// const ps = document
let myDivElement1 = document.querySelector(".js1");
let myDivElement2 = document.querySelector(".js2");
console.log(myDivElement1); // at console

//the attributes for div element: id, className, innerHTML, textContent, innerText, ..

//we can Get the attribute value of element directly:
//Difference Between textContents, innerText, and innerHtml
console.log(myDivElement1.innerHTML); // JavaScript <span>Div</span> &lt;SPAN&gt; 
console.log(myDivElement1.textContent); // JavaScript Div <SPAN> 
console.log(myDivElement1.innerText); // JavaScript Div <SPAN> 
myDivElement1.id = "test"; // at Elements in browser.

//we can Set the attribute value of element directly:
function setAttrDirectly1(){
    myDivElement1.innerHTML = "We changed the TEXT from <span> JS </span> file.(innerHtml)";
    myDivElement2.textContent = "We changed the TEXT from <span> JS </span> file.(textContent)";
}

function setImgAttrDirectly1(){
    document.images[0].src = "12-dom-images/1.png";
}

function setImgAttrDirectly2(){
    document.images[0].src = "";
}

function setImgAttrDirectly3(){
    document.images[0].title = "Test title";
}

function setLinkAttrDirectly4(){
    document.links[0].innerText = "coll_doc_links";
    document.links[0].href = "https://www.w3schools.com/jsref/coll_doc_links.asp";
}
function setParagraphAttrDirectly5(){
    let myPs = document.querySelectorAll("p");
    for(let i=0; i<myPs.length; i++){
        myPs[i].className = "myParagraph";
    }
}

function getAttrValueDirectly(){
    let myP = document.getElementById("demo");
    myP.innerHTML = document.links[0].href;
}

// use getAttribute() , setAttribute()
function getIdParagraph(){
    let myP = document.getElementById("demo");
    let myPs = document.querySelectorAll("p");
    myP.innerHTML = myPs[2].getAttribute("id");    
}

function setClassParagraph(){
    // let myP = document.getElementById("demo");
    let myPs = document.querySelectorAll("p");
    myPs[1].setAttribute("class", "myParagraph");    
}