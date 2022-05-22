// Construct a variable to hold name and add it to the html doc
const myName = "Ruth A. Bravo";
document.querySelector("#name").textContent = myName;



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



// Show and display meeting message
const dayNumber = date.getDay();
console.log(dayNumber);

const element = document.getElementById("meeting-message");

if ((dayNumber == 1)||(dayNumber == 2)) {
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
};



// Hamburger Button function
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;