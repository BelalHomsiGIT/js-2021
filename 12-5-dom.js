
function createAll(){
    const myMainDiv = document.createElement("div");
    myMainDiv.className = 'main';

    const myHeading1 = document.createElement("h1");
    const headingText = document.createTextNode("What is DOM?");
    myHeading1.appendChild(headingText);

    const myParagraph = document.createElement("p");
    const paragraphText = document.createTextNode("Document Object Model");
    myParagraph.appendChild(paragraphText);

    myMainDiv.appendChild(myHeading1);
    myMainDiv.appendChild(myParagraph);

    document.body.appendChild(myMainDiv);
}
//Note: lines 11+12 <=> myParagraph.textContent = "Document Object Model"
//                  !<=> myParagraph.innerHTML = "Document Object Model"
