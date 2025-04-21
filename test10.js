// const temp = 41
// if(temp > 40){
//     console.log("yess");
// }
// else{
//     console.log("no");
// }
// === it is used for the checking the strict checking and the types of the value 
// const score = 300
// if(score>100){
//    let  power ="rajeev"
// //    here we use the var as a varibale them it will print all the value 
// //    coz var is global 
//     console.log(`user : ${power}`);
// }
// // here the scope is end in this line 
// console.log(`user power: ${power}`);

// const balance =1000
// here the implicit scope is work 
// only the one line is to be return here
// if(balance>500)console.log("test");
// if(balance < 500){
//     console.log("less then");
// }
// else if(balance<750){
//     console.log("yesss");
// }
// else if(balance < 1000){
//     console.log("priya");
// }

const userloggedin = true
const debitcard = true
const loggedingoogle =false
const loggedinemail =true
if(userloggedin && debitcard && 2==3){
     console.log("Allowed for the shopping");
}
else if(loggedinemail || loggedingoogle){
    console.log("not allowed for the shopping");
}
else{
    console.log("leave it");
}



