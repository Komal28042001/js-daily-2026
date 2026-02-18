// for (let i = 0; i <= 10; i++){
//     console.log(i);
// }


// for (let i = 1; i <= 20; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 20; i++){
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }


// for (let i = 1; i <= 20; i++){
//     if (i % 3==0) {
//         console.log("fizz");
//     }
//     else {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 20; i++){
//     if (i % 3 == 0) {
//         console.log("fizz");
//     }
//     else if(i % 5== 0){
//         console.log("buzz");
//     }
//     else {
//         console.log(i);
//     }
// }

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("n:", n => {
    n = Number(n);
    for (let i = 1; i <= n; i++){
        if (i % 2 == 0) {
            console.log("even")
        }
        else if (i % 2 != 0) {
            console.log("odd")
        }
    }
})
