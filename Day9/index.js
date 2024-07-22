// Activity 1 -> Selecting and Manipulating Elements
// Task 1
// let text = document.getElementById("first");
// text.innerHTML = "This is a new text"

// Task 2
// let elem = document.querySelector(".second");
// elem.style.backgroundColor = "red";

// Activity 2 -> Adding and Appending Elements
// Task 3
// let div = document.createElement("div");
// div.innerHTML= "Some text";
// document.body.append(div);

// Task 4
// let ul= document.querySelector(".list");
// let newli = document.createElement('li');
// newli.innerText = "This is new text";
// ul.appendChild(newli);

// Activity 3 -> Removing Elements
// Task 5
// let list = document.querySelector(".list")
// list.remove()

// Task 6
// let list = document.querySelector(".list").lastElementChild
// list.remove()

// Activity 4 -> Modifying Attributes and Classes
// Task 7
// let img = document.getElementById("image")
// img.src = "image2.jpeg";

// Task 8
// let col = document.querySelector(".c")
// col.className = ""; //To remove 
// col.className = "d"; //To change 

// Activity 5 -> Event Handling
// Task 9
// function changeText(){
//     let elem = document.getElementById("Changeable");
//     elem.innerText="The text is changed";
// }

// document.getElementById("button").addEventListener("click",changeText);

// Task 10
function change(){
    let bord = document.getElementById("Changeable")
    bord.style.borderColor = "red";
}

document.getElementById("Changeable").addEventListener("pointermove",change);