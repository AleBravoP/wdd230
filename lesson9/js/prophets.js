// Store the URL resource of the JSON file into a variable
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

// Use fetch() method with the argument, use the .then() method to return a promise
fetch(requestURL)
    .then(function(response) {
        return response.json();
        // Add a second .then() method to work with the converted response data in JavaScript obj format
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response data parsing)
        
        // Store the results of the converted response into an array
        const prophets = jsonObject['prophets'];

        // Loop through every record and process each one into its own 'card'
        prophets.forEach(displayProphets);
    });

// Define a function named "diaplayProphets" that takes one argument to receive
// each element of the prophets array
function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    // Add two other components for the birth date and birth place
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');

    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

    // Build the image attributes by using the setAttribute method for the src, alt and 
    // loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.cards').appendChild(card);
}