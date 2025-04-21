// immediately invoked function 
(function chai(){
    // Named IIFE 
    console.log(`db`);
})();
// here the semi colun is used too end the invoked function 

// In this function we use IIFE to remove the pollution of the global scope 
// also to remove the pollution which is prodice by the global scope variables 
(function twocode(){
    console.log(`okkk`);
})();

((name)=>{
    // unnamed IIFE 
    // also parameter is passed here 
    console.log(`okkk is ${name}`);
})(`rajeev`);