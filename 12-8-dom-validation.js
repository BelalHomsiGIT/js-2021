// Validate Form
//---------------

//test:
document.links[0].onmouseenter = function(e){
    console.log(e); // e is the event.
}
/* we get in console:
MouseEvent {isTrusted: true, screenX: 122, screenY: 146, clientX: 54, clientY: 39, …}
got to console an take a look. */

/* If we want to prevent the link to go to the target, 
   we use preventDefault() method for event object*/
document.links[0].onclick = function(e){
    console.log(e); // e is the event.
    e.preventDefault();
}
/* When we fill the form element, we click on submit,
   which pass the data to PHP file in action attribute.*/

//now we deal with form validation when we click submit:
//------------------------------------------------------
//first, we must hold the input elements, name and age:
let userName = document.querySelector("[name='username']");
let userAge = document.querySelector("[name='userage']");
// look at console:
//<button onclick="testInputs()">Test Inputs</button>
function testInputs(){
    console.log(userName);
    console.log(userName.value);
    console.log(userName.value.length);
    console.log(userAge);
    console.log(userAge.value);
    console.log(userAge.value.length);
}

// check the name and age:
//Note: e is refere to the event itself (onsubmit), 
//(it's an object), so we can control it as preventDefault()
document.forms[0].onsubmit = function(e){
    let result = document.getElementById("notice");
    let nameValidate = false;
    let ageValidate = false;
    if(userName.value !== "" && userName.value.length<10){
        nameValidate = true;
    }
    if(userAge.value !== ""){
        ageValidate = true;
    }
    if(nameValidate === false || ageValidate === false){
        e.preventDefault();
        result.style.color = "red"
        result.innerText = "Submit isn't work !";
    // }else{
    //     result.style.color = "green"
    //     result.innerText = "Submit done.";
    }
}

// Prevent the google link work:
let lastLink = document.links.length -1;
document.links[lastLink].onclick = function(e){
    e.preventDefault();
    document.getElementById("prevent").innerText = "Not Alloed !"
}
