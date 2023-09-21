console.log("helow function");

function normal() {
  console.log("this is the nomal funcation");
}
// normal();

function normalVer() {
  let ver = "hellow i am normal function white veriable";

  alert(ver);
}
// normalVer();

let outerVer = "helow outerver";

function outer() {
  let inner = "im am innerve " + outerVer;

  alert(inner);
}
//outer();

let overwrite = "pavan";

function show() {
  overwrite = "the toy";

  let newOver = "hiii ," + overwrite;

  alert(newOver);
}

// alert( overwrite );
// show();
// alert( overwrite );

let the = "pavan";

function thenew() {
  let the = "the..toy";

  let newVer = "hiii " + the;
  alert(newVer);
}
// thenew();
// alert(the);


//+++++++++++ peramiter

function perm (perm1,perm2){

console.log(perm1 + perm2);

}
perm("pavan","thetoy");
perm("shue" + "kare");



