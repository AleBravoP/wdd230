// Construct a variable to hold the last modification date and add it to the html doc
const lastModif = new Date(document.lastModified);
document.querySelector("#last-modification").textContent = lastModif;

// Declare and instantiate a variable of type Date to hold the current date
var date = new Date();
// Declare a variable to hold the current year then assign the year value to variable
var year;
year = date.getFullYear()
document.getElementById("year").textContent = year;