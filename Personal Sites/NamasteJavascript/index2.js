// Purpose - Demo of callstack

var a = 2;

function getName(){
    console.log("Akash");
    getName2();
}

getName();
console.log(getName);


function getName2() {
    console.log("get name 2");
}