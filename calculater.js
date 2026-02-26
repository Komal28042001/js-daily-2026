// function calculator(a,b,operator) {
//     if (operator === "+") {
//         return a + b;
//     }
//     else if (operator === "-") {
//         return a - b;
//     }
//     else if (operator === "*") {
//         return a * b;
//     }
//     else if(operator === "/") {
//         return b !== 0 ? a / b : "cannot divide by zero";
//     }
//     else {
//         return "invalid";
//     }
// }
// console.log(calculator(10, 5, "+"));
// console.log(calculator(10, 5, "*"));


// const calculator = (a, b, operator) => {
//     switch (operator) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             return b !== 0 ? a / b : "cannot divide by zero";
//         default:
//             return "invalid";
//     }
// };
// console.log(calculator(4, 8, "/"));
    
const calculator1 = (a, b, operator) => {
    const operation = {
        "+": () => a + b,
        "-": () => a - b,
        "*": () => a * b,
        "/": () => b !== 0 ? a / b : "cannot divide by zero"
    };
    return operation[operator] ? operation[operator]() : "invalid oprator";
};
console.log(calculator1(23, 65, "*"));