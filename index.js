// this function for local variables

function myFast() {
    let message = "helow pavan..!\n\n [this is a normal function]";

    alert(message);
}
// myFast();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//====================================>Outer variables
let Outer = "pavan";

function outerFunc() {
    let inVer = 'second function\n\nhiii,' + Outer;

    alert(inVer);
}
// outerFunc();



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// aarow function 
let greet = () => console.log('Hello');
// greet(); // Hello


let sum = (num1, num2) => num1 * num2;
console.log(sum(9, 9), "this arrow function")

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//JavaScript return
let Return = returnFunction(9, 9)

function returnFunction(a, b) {

    return a * b;
}
returnFunction();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Arrow with return
let arrowReturn = () => {
    let data = {
     name:"pavan",
     age: "23",
     rooln:"0319",
    };
    return data;
    arrowReturn();
};

arrowReturn();