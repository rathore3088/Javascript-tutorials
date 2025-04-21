// function one(){
//     const username = "rajeev"
    
// // now here we create a another scope inside the scope 
//     function two(){
//     const website = "google"
//     console.log(username);
//     }
//     console.log(website);
//     // here the two function is called then it willthe output rajeev
//     two()
// }
// one()
// if(true){
//     const username = "rajeev"
//     if(username == "rajeev"){
//         const website ="java"
//         console.log(username+website);
//     }
//     console.log(website);
// }
// console.log(username);


// something interesting
// This is the function onlyyy

// in this function we can console it before the declaring the function 
console.log(addone(4));
function addone(num){
    return num + 1
}
// console.log(addone(4));

// but here in this we assign a function in the variable 
// it is also known as the expression 
// but in the variable assign fucntion we are not able acces the consoe for the function
// befor the initilisation this is known as hoisting 
console.log(addtwo(6));
const addtwo = function(num){
    return num + 2
}
// console.log(addtwo(6));