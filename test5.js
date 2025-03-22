// const course ={
//     coursename:"js",
//     price:"999",
//     courseinstructor:"hitesh"
// }
// const {courseinstructor: instructor} = course
// // console.log(courseinstructor);
// console.log(instructor);
// //  

// function name() {

//     console.log("r");
//     console.log("a");
// }
// name()
// how to addtwo number in function 
function addtwonumbers(number1,number2){
    let result = number1+number2;
    // console.log("rathore");
    return result
    // console.log("rathore");
    // here we take the two parameters 
//    console.log(number1+number2);
    // number1+number2;
}
const result = addtwonumbers(5,4) 
// console.log("Result is " ,result);
// here we pass the value 
 
function addtwonumbers(number1,number2){
    return number1 + number2
}
addtwonumbers(4,6)

// function UserData(username){
//     if( username === undefined){
//             console.log("please enter a name");}
        // else(){
        //     console.log("Enter a valid name")
        // }
    // After this return no further code will execute 
        // return
    // }
    // return `${username} just logged in`
// }
// console.log(UserData());

function calculateCartPrice(...num1){
  return num1
}
// console.log(calculateCartPrice(200,400));


// How to add object in the functions

const User={
    username:"Rajeev",
    Price:"1299"
}
 function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.Price}`);
 }
 handleObject(User)

//  const myNewArray = [200,400,600]

 function returnSecondValue(getArray){
    return getArray[2]
 }
 console.log(returnSecondValue([200,455,433,543]));

