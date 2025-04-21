// const user = {
//     username:"Rajeev",
//     price :999,

//     welcomemessage :function()
//     {
//         // here this is use to refer the current contest  
//         console.log(`${this.username}, welcome to website`);
//         // console.log(this);
//     }
// }
// user.welcomemessage()
// user.username ="rathore"
// user.welcomemessage()
// console.log(this); 
// function chai(){
//     let username="rajeev"
//     console.log(this.username);
// }
// chai()

// const chai = ()=>{
//     let username ="rajeev"
//     console.log(this);
// }

// chai()
// Arrow function
// here this is the implicit function cause we are not using the return in it 
const addtwo =(num1,num2)=> num1+num2

console.log(addtwo(3,4))