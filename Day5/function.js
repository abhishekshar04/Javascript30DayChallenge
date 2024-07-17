// Activity 1-> Function declaration
// Task 1
// function evenOrOdd(n){
//     if(n%2==0){
//         return "Even";
//     }else{
//         return "Odd";
//     }
// }
// console.log(evenOrOdd(5))

// Task 2
// function square(n){
//     return n*n;
// }
// console.log(6);

// Activity 2-> Function Expression
// Task 3
// function greater(a,b){
//     if(a>b){
//         console.log(`${a} is greater than ${b}`);
//     }else if(b>a){
//         console.log(`${b} is greater than ${a}`);
//     }else{
//         console.log(`${b} is equal to ${a}`);
//     }
// }
// greater(5,2);

// Task 4
// function stringConcate(a,b){
//     return a+b;
// }
// console.log(stringConcate("Hello"," World"));

// Activity 3-> Arrow Functions
// Task 5
// let a = (a,b)=>{
//     return a+b;
// }
// console.log(a(3,4));

// Task 6
// let check = (s,target)=>{
//     return s.includes(target);
// }
// console.log(check("Hello","e"));

// Activity 4-> Function Parameters and Default Values
// Task 7
// function prod(a,b=5){
//     return a*b;
// }
// console.log(prod(10));

// Task 8 
// function greeting(name,age=13){
//     return `Hello ${name}, Welcome to the 30-Day Javascript Challeng. The defautl value for the age is ${age}`;
// }
// console.log(greeting("Abhishek"));

// Activity 5-> Higher-Order Functions
// Task 9
// function HOF(a,callback){
//     for(let i=0;i<a;i++){
//         callback();
//     }
// }

// HOF(5,()=>{
//     console.log("Hello World");
// });


// Task 10
// function twof(f1,f2){
//     return function(x){
//         return f1(f2(x));
//     }
// }

// function f1(x){
//     return x+1;
// }

// function f2(x){
//     return x*x
// }

// const composed = twof(f1, f2);

// const result = composed(5);

// console.log(result);