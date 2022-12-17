const inputOne = document.getElementById("one");
const inputTow = document.getElementById("tow");
console.log(inputOne);
console.log(inputTow);

window.onload = function(){
    inputOne.focus();
    inputOne.value = "focus when page loaded."
}
// const currElementId = document.activeElement.id;
// console.log(currElementId);
// const nextBtn = document.getElementById("next");

const oneF = document.getElementById("f");
const oneB = document.getElementById("b");
oneF.onclick = function(){
    inputOne.focus()
}
oneB.onclick = function(){
    inputOne.blur()
}

const myLink = document.links[0];
const doLink = document.getElementById("openURL");
doLink.onclick = () => myLink.click();
//
//
//
const allInputs = document.querySelectorAll("#serial");
console.log(allInputs);
console.log(allInputs[0]);
// console.log(allInputs[0].value);
allInputs.forEach( (ele,idx) =>  ele.addEventListener("input", () => {
    // console.log("hello");
    idx = (idx < allInputs.length -1) ? ++idx : 0;
    // if(++idx === allInputs.length) idx=0;
    allInputs[idx].focus();
    console.log(idx);
}))

//
// allInputsd[0].setAttribute("disabled", "disabled");
const allInputsd = document.querySelectorAll("#seriald");
const stratBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const bravoF = document.getElementById("bravo");

stratBtn.onclick = function(){
    allInputsd[0].removeAttribute ("disabled");
    allInputsd[0].focus();
}

resetBtn.onclick = function(){
    for(let idx=0; idx<allInputsd.length; idx++){
        allInputsd[idx].value="";
        console.log(allInputsd[idx]);
        allInputsd[idx].setAttribute("disabled", "disabled");
    }
    bravoF.textContent="-";
    this.setAttribute("disabled", "disabled");
    stratBtn.removeAttribute("disabled");
}

allInputsd.forEach( (ele,idx) =>  ele.addEventListener("input", () => {
    // idx = (idx < allInputsd.length -1) ? ++idx : 0;
    if(++idx === allInputsd.length){
        bravoF.textContent = "Bravooo";
        stratBtn.setAttribute("disabled", "disabled");
        resetBtn.removeAttribute("disabled");
        resetBtn.focus();
    }else{
        console.log(idx);
        allInputsd[idx].removeAttribute("disabled");
        allInputsd[idx].focus();
    }
}))
