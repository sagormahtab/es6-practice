// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFunc(num){
//     return num * 2;
// }

const doubleIt = num => num * 2; //Power of ES6 ; Arrow function
const add = (x, y) => x + y; //Multi parameter arrow function
const give5 = () => 5; //Arrow function with no parameter
const doMath = (x,y) => { //multi line arrow function
    const sum = x + y;
    const diff = x - y;
    const mul = x * y;
    return mul;
}

//const result = doubleIt(5);
const result = add(50, 70);
const result2 = give5();
const result3 = doMath(3,5);
console.log(result3);