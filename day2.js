
// // Check whether a number is positive, negative or zero
const r3 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
r3.question("Enter the Number:", n => {
    if (n < 0) {
        console.log("Negative Number");
    } else if (n > 0) {
        console.log("Positive Number");
    } else {
        console.log("Zero");
    }
})

//check vote eligibility

const r1 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Enter your age: ", age => {
    if (age >= 18) {
        console.log("you are eligible for vote");
    }
    else {
        console.log("you are not eligible for vote");
    }
})

//find largest of three numbers
const r2 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
r2.question("Enter first number:", num1 => {
    r2.question("Enter second number:", num2 => {
        r2.question("Enter third number:", num3 => {
            if (num1 >= num2 && num1 >= num3) {
                console.log(`${num1} is the largest number`);
            }
            else if (num2 >= num1 && num2 >= num3) {
                console.log(`${num2} is the largest number`);
            }
            else {
                console.log(`${num3} is the largest number`);
            }
            r2.close();
        });
    });
});

//grade calculator

const r4 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
r4.question("Enter the percentage:", percentage => {
    if (percentage >= 90) {
        console.log("A");
    }
    else if (percentage >= 80) {
        console.log("B");
    }
    else if (percentage >= 70) {
        console.log("C");
    }
    else if (percentage >= 60) {
        console.log("D");
    }
    else {
        console.log("F");
    }
    r4.close();
});
         
//simple menu program

const r5 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

r5.question("choose menu: ", choice => {
    choice = choice.trim(); // 🔥 important line

    switch (choice) {
        case "1":
            console.log("you selected pizza");
            break;
        case "2":
            console.log("you selected burger");
            break;
        case "3":
            console.log("you selected pasta");
            break;
        default:
            console.log("invalid choice");
    }
    r5.close();
});

