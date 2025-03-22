// Array
const myArr=[2,3,4,5,6,3]
// ]Array Methods] 
// 1] Push is used to add the Element in the array 
// myArr.push(8)
// 2] Here pop is used to delete the last element of the array
// myArr.pop()
// 3] Here are some methods used to show the op in true or false 
// console.log(myArr.includes(4));
// 4] const newArr =myArr.join()
// console.log(myArr);
// console.log(newArr);

// 5] console.log(myArr.indexOf(4));
// const myn1=myArr.slice(1,3)
// 6] Slice is used only the first index not include thelast index value 
const myn1=myArr.slice(1,3)
console.log("b",myArr);
console.log(myn1);
// const myn2=myArr.splice(1,3)
// 7] Splice is used to include last range also and it will decrease the element of the main array 
// after this the remainimg element will print from the array 
const myn2=myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);


