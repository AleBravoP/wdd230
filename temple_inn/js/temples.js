// Store the URL resource of the JSON file into a variable
const requestJSON = 'json/temples.json';
console.log(requestJSON)

const cards = document.querySelector('.temple-cards');

// Use fetch() method with the argument, use the .then() method to return a promise
fetch(requestJSON)
    .then(function(response) {
        return response.json();
        // Add a second .then() method to work with the converted response data in JavaScript obj format
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response data parsing)
        
        // Store the results of the converted response into an array
        const temples = jsonObject;

        // Loop through every record and process each one into its own 'card'
        temples.forEach(displayTemple);
    });

// Define a function named "diaplayProphets" that takes one argument to receive
// each element of the prophets array
function displayTemple(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let picture = document.createElement('img');

    let info = document.createElement('div');
    let infoTitle = document.createElement('h4');
    let address = document.createElement('p');
    let phone = document.createElement('p');

    let services = document.createElement('div');
    let servTitle = document.createElement('h4');
    let clothing = document.createElement('p');
    let cafeteria = document.createElement('p');
    let patronHousing = document.createElement('p');
    let distCenter = document.createElement('p');

    let history = document.createElement('div');
    let histTitle = document.createElement('h4');
    let announcement = document.createElement('p');
    let groundBrk = document.createElement('p');
    let dedication = document.createElement('p');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h3.textContent = temple.name;

    infoTitle.textContent = "Contact";
    address.textContent = temple.address;
    phone.textContent = temple.phoneNumber;

    histTitle.textContent = "History";
    announcement.textContent = `Announced: ${temple.history.announced}`;
    groundBrk.textContent = `Groundbreaking: ${temple.history.groundbreaking}`;
    dedication.textContent = `Dedication: ${temple.history.dedicated}`;

    servTitle.textContent = "Services";
    clothing.textContent = temple.services.clothingRental;
    cafeteria.textContent = temple.services.cafeteria;
    patronHousing.textContent = temple.services.patronHousing;
    distCenter.textContent = temple.services.distributionCenter;

    // Build the image attributes by using the setAttribute method for the src, alt and 
    // loading attribute values. (Fill in the blank with the appropriate variable).
    picture.setAttribute('src', temple.picture);
    picture.setAttribute('alt', `Picture of ${temple.name}`);
    picture.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h3);
    card.appendChild(picture);
    card.appendChild(info);
    card.appendChild(services);
    card.appendChild(history);

    history.appendChild(histTitle);
    history.appendChild(announcement);
    history.appendChild(groundBrk);
    history.appendChild(dedication);

    info.appendChild(infoTitle);
    info.appendChild(phone);
    info.appendChild(address);

    services.appendChild(servTitle);
    services.appendChild(clothing);
    services.appendChild(cafeteria);
    services.appendChild(patronHousing);
    services.appendChild(distCenter);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.temple-cards').appendChild(card);
}