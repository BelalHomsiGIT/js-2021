// DOM and CSS
const mainDiv = document.getElementById("main");
// 1- by style attribute for the element (inline style):
function cssWithStyle(){
    mainDiv.style.color = "green";
    mainDiv.style.backgroundColor = "yellow";
}

//2- by cssText, so write as css (inline style):
function cssWithcssText(){
    mainDiv.style.cssText = "font-family: verdana; color: green; ";
}

//3- by set/remove property (one property)
// inline style:
function cssWithSetProp(){
    mainDiv.style.setProperty("color", "blue");
    mainDiv.style.setProperty("font-size", "14px", "important");
}
function cssWithRemoveProp(){
    mainDiv.style.removeProperty("color");
}

//4- edit the css file (styleSheets)
    console.log(document.styleSheets); // look console - important
    console.log(typeof document.styleSheets); // object
    console.log(document.styleSheets.length); // 2
    console.log(document.styleSheets[0]); // style in head
    console.log(document.styleSheets[1]); // style in css file
    console.log(document.styleSheets[1].cssRules); // style in css file, is for one selector.
    console.log(document.styleSheets[1].cssRules.length); // 1
    console.log(document.styleSheets[1].cssRules[0]); // style in css file, is for one selector.

// document.styleSheets[1].cssRules[0].style.setProperty/removeProperty:
function cssWithStyleSheets1(){
    document.styleSheets[1].cssRules[0].style.setProperty("font-size", "22px");
}
function cssWithStyleSheets2(){
    document.styleSheets[1].cssRules[0].style.removeProperty("font-size");
}
