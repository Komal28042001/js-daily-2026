// let a;
// {
//     let a = 10;
    
// }
// console.log(a);

// let b = 29;
// {
//     let b = 100;
//     console.log(b)//here it print 100 its inside the scope
// }
// console.log(b);//let is shadowing and print 29 here b is outside the block so it print script b here

// {
//     let a = 10;
//     console.log(a);
// }
// console.log(a);//this not working because let is a block scope if we declare it outside the block so it will work

// {
//     var b = 100;
// }
// console.log(b);//var is a function scope thats why its work outside the block


// function test() {
//    var x = 20;
//    let y = 100;
//     console.log(x);
//     console.log(y);
// }
// test();
// console.log(x);
// console.log(y);//this will not work because let is block scope and var is a function scope so you cannot acces it outside

// var x;
// let y;
// function test() {
//     x = 20;
//     y = 100;
//     console.log(x);
//     console.log(y);
// }
// test();
// console.log(x);
// console.log(y);//it work because we declare it outside the function and call it


// var a = 20;
// var a = 100;
// console.log(a);// its allowed redeclare and reassignment here its overwrite the code and shows 100 here

// // let b = 10;
// // let b = 20;//we can redeclare the variable here

// let b = 30;
// b = 45;
// console.log(b);//here we reassign the variable its allowed in js but not redeclared


// const c = 30;
// c = 55;
// console.log(c);// here we cannot redeclared and reassigned the variable we only assign and declare at once

// let score = 100;//global variable

// function updateScore() {
//     let score = 290;//it is new variable it foes not affect the outer one
//     console.log(score);
// }
// updateScore();
// console.log(score);// this is shadowing in js the inner variable hides the outer one inside the scope


/*
var ignores { }

let and const respect { }

Inner let and const create new variables (shadowing)

Inner var modifies the outer one (if global)
*/
// var a = 10;
// let b = 30;
// const c = 40;

// {
//     var a = 1;
//     let b = 2;
//     const c = 3;
// }
// console.log(a);//1 i reassign the variable
// console.log(b);/*let is block scoped.
// So this creates a NEW variable b that only exists inside the block.
// The global b (30) is untouched.*/
// console.log(c);/*Same rule as let:
// const is block scoped
// The inner c exists only inside the block*/


//FUNCTIONS

//FUNCTION DECLARATION(FUNCTION STATEMENT)

// function greet() {
//     console.log("Hello");
// }
// greet();

// //FUNCTION EXPRESSTION
// greet1();//Why error? Because only the variable is hoisted, not the function value.
// const greet1 = function () {
//     console.log("Hello");
// }

//ANONYMOUS FUNCTION
// setTimeOut(function () {
//     console.log("Hi")
// }, 1000);

//Named Function

// const greet2 = function Hi() {
//     console.log("Hello");
// }
// greet2();

//Arrow Function

// const greet = () =>
//  {
//     console.log("Hello");
    
// }
// greet();//With let and const, it’s even stricter.They are hoisted but kept in something called the Temporal Dead Zone (TDZ).


//FUNCTION ARGUMENT AND PARAMETER

// function add(a, b) {//this is parameter
//     return a + b;
// }
// const add = (a, b) => a + b; 
// console.log(add(2, 3));

// console.log(add(2, 3));//this is argument we pass here

//FIRST CLASS FUNCTION

// function greet() {
//     console.log("hi");
// }
// function executed(fn) {
//     fn();
// }
// executed(greet);

