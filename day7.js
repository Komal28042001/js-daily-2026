// let readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question("enter Hours:", hours => {
//     hours=Number(hours);

//     if (hours >= 6 && hours < 12) {
//         console.log("good morning");
//     }
//     else if (hours >= 12 && hours < 18) {
//         console.log("good afternoon");
//     }
//     else {
//         console.log("good evening");
//     }
// });
    
//for loop

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// for (let i = 10; i >= 1; i--){
//     console.log(i);
// }

// for (let i = 1; i <= 20; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


//print multiplication of 5
// for (let i = 1; i <= 10; i++){
//     console.log(`5x${i}=${5 * i}`);

// }

//sum of numbers from 1 to 10

let sum = 0;
for (let i = 1; i <= 10; i++){
    sum = sum + i;
    console.log(sum);

}