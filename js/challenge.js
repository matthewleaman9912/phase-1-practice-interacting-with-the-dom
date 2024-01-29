//const { updateWith } = require("lodash");


let i = 0;
let buttonsArray = [];
const buttons = document.getElementsByTagName("button");
let countArray = [];
let commentArray = [];

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    intervalID = setInterval(increment, 1000)
    document.getElementById("minus").addEventListener("click", () => {
        i -= 2;
        
    })
    document.getElementById("plus").addEventListener("click", () => {
        i += 1;
    })
    document.getElementById("pause").addEventListener("click", () => {
        if (document.getElementById("pause").innerText === "pause") {
            clearInterval(intervalID);
            grabButtons();
            buttonsArray.forEach(button => disable(button));
            document.getElementById("pause").innerText = "resume";
        }
        else {
            intervalID = setInterval(increment, 1000);
            buttonsArray.forEach(button => enable(button));
            document.getElementById("pause").innerText = "pause";
        }
    })
    document.getElementById("heart").addEventListener("click", () => {
        
        let currentCount = document.getElementById("counter").innerHTML;
        countArray.push(currentCount);
        let counts = 0;
        let ul = document.querySelector("ul");
        let li = document.createElement("li");
        ul.append(li);
    
        for(let i = 0; i < countArray.length + 10; i++) {
            if (currentCount === countArray[i]) {
                counts += 1;
                
            }
        }

        li.innerText = currentCount + " has been liked " + counts + " times." 

    });
   
    document.querySelector('form').addEventListener("submit", (e) => {
        e.preventDefault();
        let p = document.createElement("p");
        p.textContent = e.target.comment.value;
        document.querySelector('#list').appendChild(p);
        document.querySelector('form').reset();
        })
    })

function increment() {
    i += 1;
    document.getElementById("counter").innerHTML = i;   
}

function grabButtons() { 
    for(let j = 0; j < buttons.length; j++) {
        if (buttons[j].id !== "pause") {
            buttonsArray.push(buttons[j]);
            console.log(buttonsArray)
        }
    }
}

function disable(button) {
    button.setAttribute("disabled", true)
}

function enable(button) {
    button.removeAttribute("disabled")
}