let a = 100;
function inner() {
    let b = 20;

    function outer() {
        let c = 30;
        console.log(a,b,c);
    }

    inner();
}
outer();


let x = 1;

function test() {
    let x = 2;
    console.log(x);
}
test();
console.log(x);


let x1 = 20;
function foo() {
    console.log(x1);
    let x1 = 10;
}
foo();// cannot accese x1 before initialization its temporal dead zone