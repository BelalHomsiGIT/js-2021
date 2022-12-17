// when we write:
console.log("Hello Window Object");
// in fact the console is member in the window object:
window.console.log("Hello Window Object");
// it's the same for the document:
document.title   = "BOM 1";
// it's :
window.document.title = "BOM 1";

// When we in the global space, the codes is the same:
// alert is a message:
window.alert("Hellooooooooo");
this.alert("Hellooooooo");
alert("helloooo");
//to get instead of alert method, go to sweetalert2 website:
// https://sweetalert2.github.io/


//confirm is a message with yes or no, it'e return true or false:
let cnfrmMsg = confirm("Are you sure you'll do this?");
if(cnfrmMsg === true){
    console.log("OOOOOk ;)");
}else{
    console.log("Canceled!");
}

//prompt is a message with input-box:
let prmptMsg = prompt("Enter your NAME:","user");
console.log(`Your Name is: ${prmptMsg}`);