// singleton
// object literals
const mySym = Symbol("key1")
const Jsuser = {
    name: "Rajeev",
    [mySym]: "keyyy",
    Age: 20,
    email:"rajeev!@GMAIL",
    location: "lalkuan"
}
// console.log(Jsuser);
// console.log(Jsuser.Age);
// console.log(Jsuser[mySym])
 

Jsuser.name="Rathore"
Object.freeze(Jsuser)
// freeze is used to freeze the value after that it cannot change 
// console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("hello user");
}
console.log(Jsuser.greeting());


