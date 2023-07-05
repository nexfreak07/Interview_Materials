

// We can access the variables and func name even before initialization and defination -> that is basically 
// getName();
// console.log(x);


// Below lines prints these are not functions
// getName2();
// getName3();

//Below lines print undefined
console.log(getName2);
console.log(getName3);

// console.log(getName); Also prints the func with contents
function getName()
{
    console.log("Akash");
}
var x = 7;

// Arrow Function - Behaves as a variable and again stores undefined



var getName2 = () => {
    console.log("getname 2 ");
}

// Anonymous Function - Behaves as a variable and again stores undefined 
var getName3 = function (){
    console.log("Get name 3")
}

// console.log(getName); Prints the func with contents



