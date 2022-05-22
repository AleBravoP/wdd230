// Create three variables that hold references to the list (<ul>), 
// <input>, and <button> elements.
const list = document.querySelector("#favs");
const input = document.querySelector("input");
const bttn = document.querySelector("#addBtn");

// Create a function that will run in response to the button being clicked.
document.querySelector("#addBtn").addEventListener("click", function() {

// Inside the function body, start off by storing the current 
// value of the input element in a variable.
let newItem = document.getElementById("thechapter").value;
console.log(newItem);

if (newItem !== "") {
    // empty the input element by setting its value to an empty string
    document.getElementById("thechapter").value = "";

    // Create three new elements — a list item (<li>), <span>, and <button>, and store 
    // them in variables.
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");

    // Append the span and the button as children of the list item.
    newLi.appendChild(newSpan);
    newLi.appendChild(newBtn);

    // Set the text content of the span to the input element value you saved earlier, 
    // and the text content of the button to 'Delete'.
    newSpan.textContent = newItem;
    newBtn.innerHTML = "\u274C";

    // Append the list item as a child of the list.
    document.querySelector("ul").appendChild(newLi);

    // Attach an event handler to the delete button, so that when clicked it will delete 
    // the entire list item it is inside.
    newBtn.addEventListener("click", function(){
        newLi.remove();
        document.querySelector("#thechapter").focus();
    }); 

    // use the focus() method to focus the input element ready for entering the 
    // next chapter item.
    document.querySelector("#thechapter").focus();
} //end of if
});