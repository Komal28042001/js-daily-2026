let str = "komal";
let rev = str.split("").reverse().join("");
console.log(rev);

let str1 = "javascript";
let count = 0;

for (let char of str1.toLowerCase()){
    if (char === "a" || char === "i" || char === "o" || char === "e" || char === "u") {
           count++;
    }
 
};
console.log("vowel count:",count);

let str2 = "hello";
let len = str2.length;
console.log(len);