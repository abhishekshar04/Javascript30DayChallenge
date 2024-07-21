// Activity 1 -> Template Literals
// Task 1
// let name="Abhishek"
// let age = 21
// let template = `The name is ${name} and the age is ${age}`;
// console.log(template);

// Task 2
// console.log(`This
// is
// a
// multiline
// log.`)

// Activity 2-> Destructuring
// Task 3
// let arr= [1,2,3,4,5,6];
// [a,b]=arr;
// console.log(a);
// console.log(b);

// Task 4
// let obj = {
//     title : "Harry Potter",
//     author : "Jk Rowling"
// }

// const {title,author} = obj
// console.log(title);
// console.log(author);


// Activity 3 -> Spread and Rest Operators
// Task 5
// let arr = [1,2,3,4]
// let newarr = [...arr,5]
// console.log(newarr)

// Task 6
// function sum(...number){
//     let total = number.reduce((total,num)=>
//         total + num
//     )
//     return total;
// }
// let arr = [1,2,3,4,5,6]
// console.log(sum(...arr));

// Activity 4 -> Default Parameters
// Task 7
// function defaul(a,b=1){
//     return a*b;
// }

// console.log(defaul(5,2)); //with second parameter
// console.log(defaul(5)); //without second parameter b=1

// Activity 5 -> Enhanced Object Literals
// Task 8 
// let name ="Abhishek"
// let age = 13
// let college = "Psit"

// function hello(){
//     console.log("Hello")
// }

// let human={name,age,college,hello};
// console.log(human);

// Task 9
// let first = "name"
// let second = "age"
// let third = "college"

// let human = {
//     [first] : "Abhisek",
//     [second] : 13,
//     [third] : "Psit"
// }
// console.log(human)