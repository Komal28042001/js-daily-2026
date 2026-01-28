//print numbers between 1 to 50
for (let s1 = 1; s1 <= 50; s1++) {
    console.log(s1);
 
}

//print even numbers between 1 to 50
for (let s2 = 2; s2 <= 50; s2 += 2) {
    console.log(s2);
}
//print odd numbers between 1 to 50
for (s3 = 1; s3 <= 50; s3+=2){
    console.log(s3);
}

//print sum of number between 1 to 50
let sum = 0;
for (let s4 = 1; s4 <= 20; s4++) {
    sum += s4;
}
console.log("Sum of numbers between 1 to 20 is: " + sum);

//print numbers between 1 to 100 but stop when reaching 25
for (let i = 1; i <= 100; i++) {
    if (i === 25) {
        break;
    }

    console.log(i);
}
