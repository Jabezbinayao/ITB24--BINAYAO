//Data Types

let a = 20;
let b = 10;

let name = "buhay";
let char = 'a';

//Arithmetic & Logical Statements

let sum = a+b;
console.log(sum);

let minus = a-b;
console.log(minus);

let multiply = a*b;
console.log(multiply);

let divide = a / b;
if (b != 0) {
    
} else{
    console.log("Error: Division by zero is not allowed.");
    return;
}
console.log(divide);

//Conditional Statements

let age = 18;
if (age >= 25) {
    console.log("under age");
} else {
    console.log("sheesh");
}

let kabuhay2 = 'B';

switch (kabuhay2) {
  case 'A':
    console.log('lols');
    break;
  case 'B':
    console.log('very goat');
    break;
  case 'C':
    console.log('apple');
    break;
  case 'D':
    console.log('banana');
    break;
  default:
    console.log('far away');
}

//LOOPS

for (let n = 0; n < 5; n++) {
    console.log("For Loop "+n);
}

let v = 0;
while (v < 5) {
    console.log("While Loop "+v);
    v++;
}

//Functional Programming

function showOddorEven(){
    if(a%2==0){
        let result = console.log("Odd");
    } else {
        let result = console.log("Even");
    }
} 
function showPrime(){
    if(a%2==1){
        let result = console.log("Number is Prime");
    } else {
        let result = console.log("Number is not Prime");
    }
} 
console.log(showOddorEven());
console.log(showPrime());