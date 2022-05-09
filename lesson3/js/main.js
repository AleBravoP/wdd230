// Construct a variable to hold name and add it to the html doc
const myName = "Ruth A. Bravo";
document.querySelector("#name").textContent = myName;

// Declare and instantiate a variable of type Date to hold the current date
var date = new Date();
// Declare a variable to hold the current year then assign the year value to variable
var year;
year = date.getFullYear()
document.getElementById("year").textContent = year;

// let lessons = 2;
// while (lessons <12){
//     let lesson = document.createElement("li");
//     lesson.textContent = "Lesson " + lessons + ":";
//     document.getElementById("lessons").appendChild(lesson);
//     lessons ++;
// }