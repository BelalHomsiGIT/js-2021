// Events - addEventListener()

//1- HTML Event Attributes:
//--------------------------
//  We can write code as a react to the click event using onclick as HTML attribute:
//  onclick="JavaScript" :
//      <p id="testp1" onclick="console.log('Test1')">Click here, look at console</p>
//      <h2 onclick="this.innerHTML = 'WoW' ">Click me</h2>
//  onclick = "function-calling" :
function myFun1(){
    console.log('Test Paragraph-2-');
}

function myFun2(obj){
    obj.innerHTML = "Heloooooooooooo";
    obj.style.backgroundColor = "green";
    obj.style.color = "yellow"; 
}
function myFun3(obj){
    obj.innerHTML = "Mouse Over Me !";
    obj.style.backgroundColor = "";
    obj.style.color = "";
}

//2- Assign Events Using the HTML DOM
//------------------------------------
const p3 = document.getElementById("testp3");
p3.onclick = function(){
    p3.innerHTML = "anonymous/inline function expression."
}
//  when we attach the same event handler twice, the second one will overwrite...
const p4 = document.getElementById("testp4");
p4.onclick = fun1;
p4.onclick = fun2; // this will done, not fun1
function fun1(){
    p4.innerHTML = "fun1";
}
function fun2(){
    p4.innerHTML = "fun2";
}
//
const input1 = document.getElementById("input1");
input1.onkeyup = function(){
    input1.value = input1.value.toUpperCase();
}
input1.onchange = function(){
    input1.value += " - done ;)"
}

//3- HTML DOM EventListener
//--------------------------
//  element.addEventListener(event, function/inline);
const p5 = document.getElementById("testp5");
p5.addEventListener("click", function(){
    p5.innerHTML = `const p5 = document.getElementById("testp5");
    p5.addEventListener("click", function(){ ... });`
})
//
const p6 = document.getElementById("testp6");
p6.addEventListener("mouseover", overFun);
function overFun(){
    p6.style.color = "red";
}
p6.addEventListener("mouseout", outFun);
function outFun(){
    p6.style.color = "";
}

//We can addin tow addEventListener for the same event to the specified element:
const p7 = document.getElementById("testp7");
p7.addEventListener("click", function(){console.log("Hello P7");});
p7.addEventListener("click", function(){console.log("Bye P7");});
//
const p8 = document.getElementById("testp8");
p8.onclick = function(){
    const p8clone = p8.cloneNode(true);
    p8.after(p8clone);
    // myDiv = document.getElementById("div2");
    // myDiv.appendChild(p8clone);
    // document.body.appendChild(p8clone);
}
//
const p9 = document.getElementById("testp9");
p9.onclick = function(){
    const p9clone = p9.cloneNode(true);
    p9clone.className = "p9cloned";
    p9.after(p9clone); // inspect->elements, and note the class for it.
}
//
const p10 = document.getElementById("testp10");
p10.onclick = function(){
    const p10clone = p10.cloneNode(true);
    p10clone.className = "p10cloned";
    p10.after(p10clone); // inspect->elements, and note the class for it.
}
// we add event listener to the document, and check the target:
document.addEventListener("click", function(eve){
    // console.log(eve.target); // get me the element i clicked on it. look at console
    if(eve.target.className === "p10cloned"){
        eve.target.innerHTML = "I'm the cloned paragraph -:)";
        eve.target.style.color = "green";
    }
})