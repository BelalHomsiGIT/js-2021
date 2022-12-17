const allLisItems = document.querySelectorAll("ul li");
const allDivs = document.querySelectorAll(".container div");
console.log(allLisItems);
console.log(allDivs);

allLisItems.forEach( function(item,idx){
    item.onclick = function(){
        allLisItems.forEach(function(item){
            item.classList.remove('selected');
        })
        allDivs.forEach(function(div){
            div.classList.remove('active');
        })
    this.classList.add('selected');
    allDivs[idx].classList.add('active');
    }
})