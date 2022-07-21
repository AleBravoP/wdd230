function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("social").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

// Declare and instantiate a variable of type Date to hold the current date
var date = new Date();
// Declare a variable to hold the current year then assign the year value to variable
var year;
year = date.getFullYear()
document.getElementById("year").textContent = year;

// Construct a variable to hold the last modification date and add it to the html doc
const lastModif = new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "medium"}).format(date);
document.querySelector("#modifDate").textContent = lastModif;