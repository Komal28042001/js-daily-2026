// let numbers = [1, 3, 5, 7];
// let increment = numbers.map(numb=>numb+10);
// console.log(increment);

// let name = ["komal", "rahul", "soniya"];
// let upper1 = name.map(nam=>nam.toUpperCase());
// console.log(upper1);

// let students = [
//     { name: "A", marks: 45 },
//     { name: "B", marks: 75 },
//     { name: "C", marks: 88 },
//     { name: "D", marks: 100 }
// ];

// let score = students.filter(students => students.marks > 50);
// console.log(score);

// let numbers = [5, 10, 15];
// let sum1 = numbers.reduce ((sum, item) => sum + item);
// console.log(sum1);

// let numbers1 = [1, 2, 3, 4, 5, 6];
// let double = numbers1.filter(num => num % 2 === 0).map(num => num * num);
// console.log(double);

// let numbers = [10, 5, 8, 20, 15];
// let largest = -Infinity;
// let secondLargest = -Infinity;
// for (let num of numbers) {
//     if(num>largest){
//         secondLargest = largest;
//         largest = num;
//     } else if (num > secondLargest && num !== largest) {
//         secondLargest = num;
//     }
// }
// console.log(secondLargest);// Find second Lrgest Number


// let number = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7];
// let num = [...new Set(number)];
// console.log(num);//new sorted array no repetation


// let str = "KOMAL";
// let reverse = str.split("").reverse().join("");
// console.log(reverse);

// let str1 = "komal";
// let reversed = str1.split("").reverse().join("");
// if (str1 === reversed) {
//     console.log("Palindrome");
// }
// else {
//     console.log("not palindrome");
// }

// let arr = [3, 7, 2, 9];

// let largest = -Infinity;
// let secondLargest = -Infinity;
// for (let num of arr) {
//     if (num > largest) {
//         secondLargest = largest;
//         largest = num;
//     }
//     else if (num > secondLargest && num !== largest){
//         secondLargest = num;
//     }
// }
// console.log(secondLargest);

// let str = "komal";
// let count = 0;

// for (let char of str.toLowerCase()) {
//     if (char === "a" || char === "i" || char === "e" || char === "o" || char === "u") {
//           count++;
//     }

  
// }
// console.log("vowel count:", count);

let str2 ="hello world";
let latter = str2.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
console.log(latter);