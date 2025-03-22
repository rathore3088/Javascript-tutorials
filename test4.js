// const tinderUser = new Object()
const tinderUser ={}
//  it is non singelton object 
tinderUser.id ="123"
tinderUser.name ="raju"
tinderUser.email="rajeev@gmail"
// console.log(tinderUser);

const regularUser ={
    email:"raju@gmail",
    fullname:{
        userfullname:{
            firstname : "hizru",
            lastname:"boy"
        }
    }
    // console.log(regularUser.fullname)
    
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={
    surname :"Rajeev",
    location2: "lal kuan"
}
const obj2 ={
    name:"Rathore",
    location:"Red well society"
}
// const obj3 = Object.assign({},obj1 ,obj2)
const obj3 ={...obj1, ...obj2}
// console.log(obj3);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));

