// Arrow function


//This is  a normal function
let myfun=function(num1,num2){
return num1+num2;
}
console.log(myfun(1,2));

//the normal funtion can be written in arrow function as follows
let add=(num1,num2)=>{
return num1+num2;}
console.log(add(1,2));

// if we want to perfrm single operation in arrow function means there we can simply give expression  we can remove the braces and return keyword
let add=(num1,num2)=>num1+num2;
console.log(add(2,4));
