console.log("hiii");

let local = {
    name: "thetoy",
    age:"23",
    phone: "8980***"
};
let toyData ={
    name:"toy",
    age:"non",
    phone:"NaN"
}
localStorage.setItem("data",JSON.stringify(toyData));
localStorage.setItem("pavan",JSON.stringify(local));


let getData = localStorage.getItem("local");

console.log("this true",getData);