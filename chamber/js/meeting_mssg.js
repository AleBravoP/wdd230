// Show and display meeting message
const dayNumber = date.getDay();
console.log(dayNumber);

const element = document.getElementById("meeting-message");

if ((dayNumber == 1)||(dayNumber == 2)) {
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
};