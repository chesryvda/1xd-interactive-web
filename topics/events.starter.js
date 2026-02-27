/*
 _____                _       
|  ___|              | |      
| |____   _____ _ __ | |_ ___ 
|  __\ \ / / _ \ '_ \| __/ __|
| |___\ V /  __/ | | | |_\__ \
\____/ \_/ \___|_| |_|\__|___/
                                                           
*/

// TODO: 1 — Click on the button and show an alert()
// ? hint: first select the button, then add an event listener to it
document.querySelector("#btn1").addEventListener("click", () => {
    alert();
})

// TODO: 2 — Hover over the square (#zone1) and change its background color
let square = document.querySelector("#zone1");
square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "green";
})

// TODO: 3 — Click on the link to display the hidden Message
// ? hint: first see how the message is hidden, then do the opposite
// ? hint2: prevent the default behavior of the link by using .preventDefault()
document.querySelector(".show3").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".hiddenMessage").classList.remove("hiddenMessage");
})

// TODO: 4 — Similar to question number 2, this time use event bubbling to change the background color of the squares in #bubbleZone
// ? hint: with event bubbling you can select the parent element and listen for events on its children to avoid adding multiple event listeners
document.querySelector("#bubbleZone").addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("zone")) {
        e.target.style.backgroundColor = "green";
    }
})

// TODO: 4b — Bonus: use mouseout to change the background color back to the original one on the squares in question 2 or 4
document.querySelector("#bubbleZone").addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("zone")) {
        e.target.style.backgroundColor = "";
    }
})

// TODO: 5 - When the checkbox is selected/checked, show #toggle
// ? when the checkbox is not checked, hide #toggle
// ? hint: use the .checked property of the checkbox
let checkbox = document.querySelector("#onOff");
let output = document.querySelector("#toggle");

// Ternary operator
checkbox.addEventListener("change", () => {
    output.style.display = checkbox.checked ? "inline" : "none";
});
