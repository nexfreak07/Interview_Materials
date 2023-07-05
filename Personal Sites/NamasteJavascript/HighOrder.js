// Higher Order Function 

function x(){
    console.log("x");
} // This is a call back function  


function y(x){
    x();
} // This is a higher order function
y(x);


// Area calculation -: 

// Bad Approach

radius = [2,4,6,8];

var calculateArea = function(radius){
    var output = [];
    for(let i=0; i<radius.length; i++)
    {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output
}
var calculateCircumference = function(radius){
    var output = [];
    for(let i=0; i<radius.length; i++)
    {
        output.push(2* Math.PI * radius[i]);
    }
    return output
}
var calculateDiameter = function(radius){
    var output = [];
    for(let i=0; i<radius.length; i++)
    {
        output.push(2* radius[i]);
    }
    return output
}
console.log(calculateArea(radius));
console.log(calculateCircumference(radius));
console.log(calculateDiameter(radius));

// The above code works bu there is no reusability  of the code, we see most of
// code is repeated hence we can make a generic function out of it.

//  Below are the callback functions
var area = function(radius){
    return Math.PI * radius * radius; 
}
var circumference = function(radius){
    return 2 * Math.PI * radius; 
}
var diameter = function(radius){
    return 2 * radius; 
}

// Below is the higher order function
 var calculate = function(radius, logic){
    var output = [];
    for(let i =0; i< radius.length; i++)
    {
        output.push(logic(radius[i]));
    }
    return output
}

console.log("Area from HOF", calculate(radius,area))
console.log("Circumference from HOF", calculate(radius,circumference))
console.log("Diameter from HOF", calculate(radius,diameter))

// Polyfill for map 

Array.prototype.double = function(logic){
    var output = [];
    for(let i =0; i< radius.length; i++)
    {
        output.push(logic(radius[i]));
    }
    return output
}

// This nver takes arrow function () => () this is not arrow function
console.log("Double from Array Prototype", radius.double((x)=>(x*3)));   


var arr = [5,1,3,2,6];

console.log(arr.filter(x => (x%2!=0)));

console.log(arr.reduce(function (acc,curr){
    acc = curr > acc ? curr : acc;
    return acc;
},0))


// Tricky Map

const users = [
    {firstName : "Akash", lastName: "Dasgupta", age: 15},
    {firstName : "Palash", lastName: "Doshi", age: 21},
    {firstName : "Adnan", lastName: "Raza", age: 19},
    {firstName : "Shubhankar", lastName: "Sabal", age: 21}
]

const output = users.map(x => x.firstName + " " + x.lastName);
console.log(output);


// Tricky Filter
const ageFilter = users.filter(x => x.age > 20) // Filters the object on basis of age and return the array of obj  
console.log(ageFilter.map(x => x.firstName)); // Filters the Array of Obj in Array of names

// Tricky Reduce =- > Age : Count -> {15:1, 21:2, 19:1}

const ageCount = users.reduce(function(acc,curr){
    if(acc[curr.age]) // If that age is already in object - increment by one
    {
        acc[curr.age] = acc[curr.age] + 1;
    }
    else // Else create the age elemnet and assign 1
    {
        acc[curr.age] = 1;
    }
    return acc;
    
},{});

console.log(ageCount)


// Chaining acheived by Reduce
const chaningReduce = users.reduce(function(acc,curr){
    if(curr.age < 20)
    {
        acc.push(curr.firstName);
    }
    return acc;
}, [])
console.log(chaningReduce);