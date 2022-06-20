const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".grid");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


// Store the URL resource of the JSON file into a variable
const requestJSON = 'json/data.json';
console.log(requestJSON)

const cards = document.querySelector('.grid');

// Use fetch() method with the argument, use the .then() method to return a promise
fetch(requestJSON)
    .then(function(response) {
        return response.json();
        // Add a second .then() method to work with the converted response data in JavaScript obj format
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response data parsing)
        
        // Store the results of the converted response into an array
        const businesses = jsonObject;

        // Loop through every record and process each one into its own 'card'
        businesses.forEach(displayBusinesses);
    });

// Define a function named "diaplayProphets" that takes one argument to receive
// each element of the prophets array
function displayBusinesses(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let h2 = document.createElement('h2');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let info = document.createElement('div');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = business.name;
    phone.textContent = business.phoneNumber;
    website.textContent = business.website;

    // Build the image attributes by using the setAttribute method for the src, alt and 
    // loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `Logo of ${business.name}`);
    logo.setAttribute('loading', 'lazy');
    website.setAttribute('href', business.website);
    website.setAttribute('target', '_blank');

    // Add/append the section(card) with the h2 element
    card.appendChild(logo);
    card.appendChild(h2);
    info.appendChild(phone);
    info.appendChild(website);

    card.appendChild(info)

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.grid').appendChild(card);
}