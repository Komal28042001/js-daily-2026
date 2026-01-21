// Print numbers from 1 to 50
for (let i = 0; i < 50; i++) {
    console.log(i+1);
}

//print even or odd numbers from 1 to 20
let n = 20;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is odd`);
    }
}

//print no even or odd gives user input
const r2 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

r2.question("Enter number: ", n => {
  console.log(n % 2 === 0 ? "Even" : "Odd");
  r2.close();
});

//convert celsius to fahrenheit
let celcius = 37;
let fahrenehit = (celcius * 9 / 5) + 32;
console.log(`${celcius}°C is ${fahrenehit}°F`);

//simple calculator
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", num1 => {
    rl.question("Enter second number: ", num2 => {
        rl.question("Enter operation (+, -, *, /): ", operation => {

            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            let result;

            switch (operation) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num1 / num2;
                    break;
                default:
                    console.log("Invalid operation");
                    rl.close();
                    return;
            }

            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});
