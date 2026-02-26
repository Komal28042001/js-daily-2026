//01.create a new array where every number is multiplied  by 3

// let number = [2, 4, 6, 8, 10];
// let multi = number.map(function (n) {
//     return n * 3;
// });
// console.log(multi);

//02.Add 18% GST to each product

// let prices = [100, 200, 300];

// let gst = prices.map(price =>price+(price * 18 / 100));
// console.log(gst);

//03.get numbers greater than 10

// let numbers = [5, 12, 8, 20, 3];

// let greater = numbers.filter(numbers => numbers > 10);
// console.log(greater);

//04.Get users whoes age is above 18

// let users = [
//     { name: "A", age: 17 },
//     { name: "B", age: 22 },
//     { name: "C", age: 15 },
//     { name: "D", age: 30 }
    
// ];

// let age1 = users.filter(user =>user.age > 18);
// console.log(age1);

//05.find total sum
// let numbers = [10, 20, 30, 40];

// let sum = numbers.reduce((sum, item) => sum + item);
// console.log(sum);

//06. maximum number using reduce

let number = [10, 20, 30, 40];
let max = number.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
});
console.log(max);

//get square of only even number

let numbers = [1, 2, 3, 4, 5, 6];

let square = numbers.filter(num => num % 2 === 0).map(num => num * num);
console.log(square);
