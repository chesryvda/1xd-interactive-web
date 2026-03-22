/*
          __                                      
  _______/  |_  ________________     ____   ____  
 /  ___/\   __\/  _ \_  __ \__  \   / ___\_/ __ \ 
 \___ \  |  | (  <_> )  | \// __ \_/ /_/  >  ___/ 
/____  > |__|  \____/|__|  (____  /\___  / \___  >
     \/                         \//_____/      \/ 
*/

// 1 - click on the button, then add your name to localstorage in the key "myName"

document.querySelector("#btn1").addEventListener("click", () => {
     localStorage.setItem("myName", "Chesry");
})

// 2 - click on the button to read the value of "myName" from localstorage and display it span#myName

document.querySelector("#btn2").addEventListener("click", () => {
     document.querySelector("#myName").innerHTML = localStorage.getItem("myName");
})

// 3 - click on remove button to remove "myName" from localstorage
document.querySelector("#btn3").addEventListener("click", () => {
     localStorage.removeItem("myName");
})

// 4 - click on the button to add a movie to the localstorage in the key "movies", show movies in the ul#movieList
// hint: the value of movies should be an array of strings
// hint: you can use JSON.stringify to convert an array to string
// hint: you can use JSON.parse to convert a string to array
// hint: you can use appendChild to add a new li to the ul#movieList
// make sure to load the movies from localstorage when the page loads

document.querySelector("#btn4").addEventListener("click", () => {
     let movie = document.querySelector("#movie").value;
     if (!movie) return;

     let arrMovie = JSON.parse(localStorage.getItem("movies") || "[]");
     arrMovie.push(movie);
     localStorage.setItem("movies", JSON.stringify(arrMovie));

     addMovieToList(movie);
     document.querySelector("#movie").value = "";
});

function addMovieToList(movie) {
     let li = document.createElement("li");
     li.textContent = movie;
     document.querySelector("#movieList").appendChild(li);
}

// Load movies from localStorage on page load
window.addEventListener("load", () => {
     let arrMovie = JSON.parse(localStorage.getItem("movies") || "[]");
     arrMovie.forEach(movie => addMovieToList(movie));
});