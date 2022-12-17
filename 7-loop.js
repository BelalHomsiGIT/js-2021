// For loop
//----------
/*  for (initialExpression; condition; updateExpression) 
        // code block to be executed (for loop body)
    }
*/
for(let i=0; i<5; i++) console.log("Hello Loops");
for(let i=0; i<5; i++) console.log(i);
for(let i=1; i<=5; i++) console.log(`I=${i}`);

for(let i=1, sum=0; i<=5; i++){
    sum+=i;
    console.log(`Sum(1,5)=${sum}`);
}

let sum=0;
for(let i=1; i<=5; i++) sum += i;
console.log(`Sum(1,5)=${sum}`);

let sum1 = 0;
let count1 = 1
for( ; count1<=5; count1++) sum1 += count1;
console.log(`Sum(1,5)=${sum1}`);

let sum2 = 0; 
let count2 = 1
for( ; count2<=5; ) {
    sum2 += count2;
    count2++;
}
console.log(`Sum(1,5)=${sum2}`);

let sum3 = 0;
let count3 = 1
for( ; ; ) {
    sum3 += count3;
    count3++;
    if(count3>5) break;
}
console.log(`Sum(1,5)=${sum3}`);

for(let i=0; i<=10; i++){
    if( i%2 != 0) continue;
    console.log(i);
}

for(let i=0; i<=10; i+=2) console.log(i);

//---------------------------------------------------------------
//Note: define the control variable for loop inside the head loop 
//      make this variable undefiend out the loop.
//      when we define it before the loop, it become global.

for(let x=1; x<=2; x++){
    console.log(x);
    console.log("Hello");
}
// console.log(x); // Uncaught ReferenceError: x is not defined

let x;
for(x=1; x<=2; x++){
    console.log(x);
    console.log("Hello");
}
console.log(x); // 3
//---------------------------------------------------------------

let myArr = ["Sameer", "Belal", "Adnan", "Nour", "Jana"];
let myElement = "<h2>My Array Elements:</h2>";
for(let idx=0; idx<myArr.length; idx++){
    console.log(myArr[idx]);
    myElement += `<p>${myArr[idx]}</p>`
}
document.write(myElement);

let myArr2 = [1, 5, "Sameer", 10, "Belal", "Adnan", 33, "Nour", "Jana"];
for(let i=0; i<myArr2.length; i++) console.log(myArr2[i]);
for(let i=0; i<myArr2.length; i++) if(typeof myArr2[i] === "string") console.log(myArr2[i]);
for(let i=0; i<myArr2.length; i++){
    if(typeof myArr2[i] === "number") continue;
    console.log(myArr2[i]);
}

let myArr3 = ["Sameer", "Belal", "Adnan", "Nour", "Jana"];
let myArr4 = [1, 3, 5, 8];
for(let i=0; i<myArr3.length; i++){
    console.log(myArr3[i]);
    for(let j=0; j<myArr4.length; j++){
        console.log(myArr4[j]);
    }
}

// let myArr3 = ["Sameer", "Belal", "Adnan", "Nour", "Jana"];
// let myArr4 = [1, 3, 5, 8];
for(let i=0; i<myArr3.length; i++){
    console.log(myArr3[i]);
    for(let j=0; j<myArr4.length; j++){
        console.log(myArr4[j]);
        if(myArr4[j] == 3) break;
    }
}

mainloop:for(let i=0; i<myArr3.length; i++){
    console.log(myArr3[i]);
    innerloop:for(let j=0; j<myArr4.length; j++){
        console.log(myArr4[j]);
        if(myArr4[j] == 3) break innerloop;
    }
}

mainloop2:for(let i=0; i<myArr3.length; i++){
    console.log(myArr3[i]);
    innerloop2:for(let j=0; j<myArr4.length; j++){
        console.log(myArr4[j]);
        if(myArr4[j] == 3) break mainloop2;
    }
}

for(let i=1; i<=5; i++){
    console.log(i);
    for(let j=1; j<=i; j++)
        console.log("*");
}

for(let i=1; i<=10; i++){
    // document.write(`<h3>${i}</h3>`)
    let myStars = "";
    for(let j=1; j<=i; j++) myStars += "* ";
    document.write(`<h3>${myStars}</h3>`)
}

let Langs = ["C++", "C#", "Pascal", "Java", "JavaScript", "PHP"];
let Details =["Basic", "Control Flow", "Loops", "Arrays", "Subroutines", "Objects", "OOP"];
let langNum = 5;
document.write(`<h1>Show ${langNum} Languages</h1>`);
for(let idx=0; idx < langNum; idx++){
    document.write(`<div>`);
    document.write(`<h3>${Langs[idx]}</h3>`);
    for(let j=0; j < Details.length; j++){
        document.write(`<p>${Details[j]}</p>`)
    }
    document.write(`<hr>`);
    document.write(`</div>`);
}
// Or
document.write(`<h1>Show ${langNum} Languages</h1>`);
for(let idx=0; idx < langNum; idx++){
    document.write(`<div>`);
    document.write(`<h3>${idx+1}- ${Langs[idx]}</h3>`);
    document.write(`<p>${Details.join(" * ")}</p>`)
    document.write(`<hr>`);
    document.write(`</div>`);
}

// The While Loop
//---------------
/* The while loop loops through a block of code as long as a specified condition is true.
        while (condition) {
             code block to be executed
        } */
let k=0;
while( k <= 10 ){
    console.log(k);
    k++;
}

let m=0;
while( m < 10 ) console.log(++m);

// The Do While Loop
/* The do while loop is a variant of the while loop.
   This loop will execute the code block once, before checking if the condition is true,
   then it will repeat the loop as long as the condition is true.
        do {
        // code block to be executed
        }
        while (condition); */

let n=0;
do{
    n++;
    console.log(n);
} while(n<10);
