// Functions 


// const a = [1,2,3,4,5];
// for (var i = 0; i< a.length; i++)
// {
//     setTimeout(()=>{
//         console.log(a[i])
//     }, 1000)
// } -> Prints Undef everytime

// function x(){ 
//     for(var i =1; i<=5; i++)
//     {
//         setTimeout(() =>{
//             console.log(i)
//         }, i * 1000);
//     }
// }
// x(); -> Prints 6 everytime - Due to closure explained

// function x(){ 
//     for(let i =1; i<=5; i++)
//     {
//         setTimeout(() =>{
//             console.log(i)
//         }, i * 1000);
//     }
// }
// x();  -> This fixes the above func - explained

// function x(){ 
//     for(var i =1; i<=5; i++)
//     {
//         function close(x)
//         {
//             setTimeout(() =>{
//                 console.log(i)
//             }, i * 1000);
//         }
//         close(i);  // creating everytime the copy of func closure with new var i it solved the problem using var  
//     }
// }
// x();

function addListener(){
    let count = 0;
    document.getElementById("btn").addEventListener("click", function(){
        console.log(count++);
        console.log(count1);
    })
}
addListener();
// console.log(count1);
let count1 = "count1";

//  Filter function 


