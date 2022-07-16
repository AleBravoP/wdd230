// Declare and instantiate a variable of type Date to hold the current date
var date = new Date();
// Declare a variable to hold the current year then assign the year value to variable
var year;
year = date.getFullYear()
document.getElementById("year").textContent = year;

// Display current date
// select the elements to manipulate (output to)
const datefield = document.querySelector("#date");

// derive the current date using a date object
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
datefield.innerHTML = `<em>${fulldate}</em>`;

// Construct a variable to hold the last modification date and add it to the html doc
const lastModif = new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "medium"}).format(date);
document.querySelector("#modifDate").textContent = lastModif;

// Set the datetime value to the hidden input in the join form
// document.querySelector("#formDatetime").value = date;


// Hamburger Button function
function toggleMenu() {
    console.log('hamburguer button pressed');
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const hamburguer = document.getElementById('hamburgerBtn');
hamburguer.onclick = toggleMenu;

const x = document.getElementById('xBtn');
x.onclick = toggleMenu;