/*
  __  .__                             
_/  |_|__| _____   ___________  ______
\   __\  |/     \_/ __ \_  __ \/  ___/
 |  | |  |  Y Y  \  ___/|  | \/\___ \ 
 |__| |__|__|_|  /\___  >__|  /____  >
               \/     \/           \/ 
*/

// setTimeout: 1x
// setInterval: meerdere keren afgaan

// 1 — start a timer and show a ⏰ in #clock after 10 seconds

setTimeout(() => {
  console.log('⏰');
}, 10000)

// 2 — click the start button to show a ticking clock in #timer that goes up every second
// clicking stop should clear and stop the timer and reset the clock to 0

let seconds = 0; 
let intervalId = null;

document.querySelector("#start").addEventListener("click", () => {
  intervalId = setInterval(() => {
    seconds++;
    document.querySelector("#timer").innerHTML = seconds;
  }, 1000);
})

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  seconds = 0;
  document.querySelector("#timer").innerHTML = 0;
});

// 3 — create an image gallery that shows a new image every 5 seconds and repeats that cycle
// use the images gallery1.jpg, gallery2.jpg, gallery3.jpg in the images/timers_intervals folder
// use only one img tag in the html and change its src attribute (#slideshow)

const images = ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg"];
let currentIndex = 0;

setInterval(() => {
  currentIndex = currentIndex + 1;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  document.querySelector("#slideshow").src = "../images/timers_intervals/" + images[currentIndex];
}, 5000);