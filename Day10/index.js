// Activity 1 -> Basic Event Handling
// Task 1
// function changeText(){
//     let p = document.getElementById("Changeable")
//     p.innerText = "The text has been changed"
// }
// document.getElementById("button").addEventListener("click",changeText);

// Task 2
// function imageVisibility(){
//     let x = document.getElementById("image");
//     if(x.style.visibility=="hidden"){
//         x.style.visibility = "visible";
//     }else{
//         x.style.visibility = "hidden";
//     }
// }
// document.getElementById("image").addEventListener("dblclick",imageVisibility);

// Activity 2 -> Mouse Events
// Task 3
// function ChangeColor(){
//     let col = document.getElementById("changeColor");
//     col.style.backgroundColor='blue'
// }
// document.getElementById("buttonColor").addEventListener("mouseover",ChangeColor);

// Task 4
// function resetColor(){
//     let col = document.getElementById("changeColor");
//     col.style.backgroundColor='blue'
// }
// document.getElementById("buttonColor").addEventListener("mouseout",resetColor);

// Activity 3 -> Keyboard Events
// Task 5
document.getElementById("inp").addEventListener("keydown",prints);
function prints(){
    let event = document.getElementById("inp")
    console.log(event.key)
}

