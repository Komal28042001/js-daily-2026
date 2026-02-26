// //recap for function

// //normal function(function statement ,function declaration)

// function sayHi() {
//     console.log("Hii Komal");
// }
// sayHi();

// //Function Expresstion

// const sayHi1 = function () {
//     console.log("Hi Sayli");
// }
// sayHi1();

// //Arrow Function

// const add=(a, b)=> a + b;
// console.log(add(4, 7));

// //First class function

// function greet() {
//     console.log("Hello");
// }
// function execution(np){
//     np();
// }
// execution(greet);

//scope example

// function outer() {//this is global scope 
//     console.log("this is outer scope");

//     function inner() {//this is function scope depending on outer scope
//         console.log("this is inner");
//     }
//     inner();
// }
// outer();


//Lexical scope or Nested Scope

// let city = "Mumbai";

// function outer() {
//     let area = "Andheri";

//     function inner() {
//         console.log(city);
//         console.log(area);
//     }
//     inner();
// }
// outer();

// shadowing

// let num = 200;
// function check() {
//     let num = 30;
//     console.log(num);
// }
// check();
// console.log(num);//Inside function, the local variable "shadows" the global one.

// let numbers = [1, 2, 3, 4, 7];
// let double = numbers.map(function (n) {
//     return n * 2;
// });
// console.log(double);map()

// let num = [3, 50, 34, 12, 56, 2,1,4,7,8];
// let even = num.filter(num => num % 2 === 0);
// console.log(even);//filter()


// let num1 = [1, 2, 4, 3, 5, 7, 8, 928];
// let odd = num1.filter(num1 => num1%2 !==0);
// console.log(odd);//filter()

let num = [1, 2, 4, 6, 98, 9, 5];
let total = num.reduce((sum, item)=> sum +item);
console.log(total);//reduce()