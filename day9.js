// function greet(name){
//     name = "komal"
//     console.log("Hello" + " " + name);
// }
// greet();

// function square(num1,num2) {
//     let result = num1 * num2;
//     console.log(result)

   
// }
//  console.log(square(4,4));
// console.log(square(5, 5));
    

// let fruites = ["Apple", "Banana", "Grapes", "Kiwi"];
// console.log(fruites);

// console.log(fruites[0]);
// console.log(fruites[4]);

// fruites.push("orange");
// console.log(fruites);

// fruites.pop("");
// console.log(fruites);


// function printNumber(arr) {
//     for (let i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }
// }
// let Number = [1, 2, 3, 4, 5, 6, 7];
// printNumber(Number);

// function checkEven(num1) {
//     num1 = 10;
//     if (num1 % 2 === 0) {
//         console.log("Even");
//     }
//     else {
//         console.log("odd");
//     }
// }
// checkEven();

// function checkNo(num) {
//     num = 23;
//     console.log(num % 2 === 0 ? "Even" : "odd");
// }
// checkNo();


// let num=[1,2,34,56,28,48,99,100]
// function checkArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);
//         }
//     }
// }
// checkArr(num);

// function sumArr(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumArr([1, 3, 4, 5, 7, 8, 9]));


function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++){
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargest([2, 5, 9, 45]));