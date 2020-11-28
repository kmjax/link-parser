// ===============================================
// Code to parse a URL into it's base query link
// and the individual parameters
//
// Jaxcode Day 11 Homework Assignment
//
// Author: Kelsey McClanahan
// Date:   11/27/2020
// ===============================================

// Grab references to the form and input controls
const parseForm = document.getElementById("parse-form");
const urlEntryInput = document.getElementById("url-entry");

// Grab references to output elements
const parsedURLText = document.getElementById("parsed-url");

// Reset page output items
ResetPageOutputItems();

// =================================================
// =================================================

// Add an event listener to handle a parse request
parseForm.addEventListener("submit", (event) => {
  try {
    event.preventDefault();

    // Get the user's url entry
    let urlEntry = urlEntryInput.value;
    // Call the function to parse and
    // display the URL's parameters
    parseURLText(urlEntry);
  } catch (error) {
    console.log(error);
  }
});

function ResetPageOutputItems() {
  urlEntryInput.value = "";
  parsedURLText.innerHTML = "";
}

function parseURLText(urlString) {
  // Define working variables
  let urlBase = ""; // URL query base (will be the form action)
  let urlParameters = ""; // portion that contains the URL's parameters
  let parameters = []; // array of parsed parameters
  let parsedOutput = ""; // output string with "form action" and "input/value" items

  // First, separate the base query portion of the URL from the parameters
  let urlSplit = urlString.split("?");
  urlBase = urlSplit[0];
  urlParameters = urlSplit[1];

  // Next, put all of the separate the parameters from one another
  // and place the key / value pairs into an array
  parameters = urlParameters.split("&");
  console.log(parameters);

  // Now, let's start constructing the output string
  // First we will create the first part containing the form action
  parsedOutput = `<form action="${urlBase}" method="get">`;
  console.log(parsedOutput);

  // Let's loop through and process each parameter's key/value pair
  parameters.forEach((parameter) => {
    // Split the key/value pair into separate variables
    let parameterKeyValuePair = parameter.split("=");
    let parameterKey = parameterKeyValuePair[0];
    let parameterValue = parameterKeyValuePair[1];
    // Add the key value pair to the parsed output string
    parsedOutput += `<input name="${parameterKey}" value="${parameterValue}">`;
  });

  // After all parameters have been added, add the form's closing tag
  parsedOutput += "</form>";

  // Finally, display the parsed url string on the web page
  parsedURLText.textContent = parsedOutput;
}
