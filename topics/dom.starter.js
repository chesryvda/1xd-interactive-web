/*
______ ________  ___
|  _  \  _  |  \/  |
| | | | | | | .  . |
| | | | | | | |\/| |
| |/ /\ \_/ / |  | |
|___/  \___/\_|  |_/
            
*/

// TODO: 1 - get an element by id
// TODO: select the second paragraph and figure out a way to make the background color yellow
// ? hint: use the style property and .backgroundColor
// ? hint: use the querySelector or getElementById function
document.getElementById("paragraph2").style.backgroundColor = "Yellow";

// TODO: 2 - select the element with id #paragraph3 and change the text to "Never gonna run around and desert you"
// ? hint: use the innerHTML property
document.getElementById("paragraph3").innerHTML = "Never gonna run around and desert you";

// TODO: 3 - get multiple elements by class
// TODO: select all the span elements by their classname and log the result to your console, what type of object is it?
// TODO: next, loop over the elements and change the innerHTML to another emoji
// ? hint: use the querySelectorAll function, use the .forEach method (or a for loop), and the .innerHTML property
const arrSpanElements = document.querySelectorAll(".grabme");
arrSpanElements.forEach((se) => {
    se.innerHTML = "🍩";
})

// TODO: 4 - change the CSS class
// TODO: select the element with the id "message" and change the css class to "error", render a ul with li elements
// ? hint: use the setAttribute function, or use the className property, or use the classList property
// Class naam veranderen
document.getElementById("message").className = "error";

// Class naam bijvoegen
// document.getElementById("message").classList.add("error");