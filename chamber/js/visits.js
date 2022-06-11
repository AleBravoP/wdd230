const previousDate = Number(localStorage.getItem("new-date"));
console.log("previous date: " + previousDate + " milliseconds")

const prevDateDiv = (previousDate / 86400000);
console.log("previous date divided: " + prevDateDiv + " days")

// Declare and instantiate a variable of type Date to hold the current date
var date = Date.now();
console.log("date: " + date + " milliseconds")

const dateDivided = (date / 86400000);
console.log("date divided: " + dateDivided + " days")

const newDate = localStorage.setItem("new-date", date);

let datesDifference = (dateDivided - prevDateDiv);
console.log("dates day difference: " + datesDifference + " days")




// let currentDate = Date.now();
// const visitsDisplay = document.querySelector(".visit-days");

// const dayMillis = 86400000;
// console.log("oneDayInMills: " + dayMillis);

// const zeroHours = (dateNum) => {
//   let date = new Date(dateNum);
//   let year = date.getFullYear();
//   let month = date.getMonth();
//   let day = date.getDate();
//   return new Date(year, month, day);
// };

// console.log("zero hours:" + zeroHours(currentDate))
// console.log("zero hrs minus dayMillis: " + zeroHours(currentDate) - dayMillis)




// initialize display elements
// const visitsDisplay = document.querySelector(".visit-days");

// // get the stored value in localStorage
// let numVisits = Number(localStorage.getItem("visits-ls"));

// // determine if this is the first visit or display the number of visits.
// if (numVisits !== 0) {
// 	visitsDisplay.textContent = numVisits;
// } else {
// 	visitsDisplay.textContent = `This is your first visit!`;
// }

// // increment the number of visits.
// numVisits++;
// // store the new number of visits value
// localStorage.setItem("visits-ls", numVisits);


// store the new date
// localStorage.setItem("new-date", date);

// console.log(date - previousDate);

// let dateDifference = date - previousDate;
// console.log("Date Difference: " + dateDifference);

// var dayMillis = 86400000;
// var plusOneDayMillis = previousDate + dayMillis;
// console.log("Today plus tomorrow: " + plusOneDayMillis)

// if (previousDate !== 0) {

//     // if (date >= plusOneDayMillis) {
//     let daysSinceLastVisit = Math.floor(dateDifference / dayMillis);
//     console.log("Days Since Last Visit:" + daysSinceLastVisit)
//     visitsDisplay.textContent = daysSinceLastVisit;
    // }

    // if (dateDifference >= dayMillis) {
    // let daysSinceLastVisit = Math.floor(dateDifference / dayMillis);
    // console.log("Days Since Last Visit:" + daysSinceLastVisit)
    // visitsDisplay.textContent = daysSinceLastVisit;
    // }
// } else {
//     visitsDisplay.textContent = `0`;
// };


// let dateDifference = date - previousDate;
// console.log("Date Difference: " + dateDifference);

// var dayMillis = 86400000;

// if (dateDifference >= dayMillis) {
//     let daysSinceLastVisit = Math.floor(dateDifference / dayMillis);
//     console.log(daysSinceLastVisit)
//     visitsDisplay.textContent = daysSinceLastVisit;
// } else {
//     visitsDisplay.textContent = `0`;
// };