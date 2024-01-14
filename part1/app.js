// Variable to store a favorite number
let favNum = 8;

// Base URL for the Numbers API
let baseURL = "http://numbersapi.com";

// Function to get facts for a single favorite number (part 1)
async function getFacts1() {
     let data = await $.getJSON(`${baseURL}/${favNum}?json`);
     console.log(data);
}
// Call the function to get facts for a single favorite number
getFacts1();

// Array of favorite numbers
const FavNums = [8, 15, 89];

// Function to get facts for an array of favorite numbers (part 2)
async function getFacts2() {
     let data = await $.getJSON(`${baseURL}/${FavNums}?json`);
     console.log(data);
}
// Call the function to get facts for an array of favorite numbers
getFacts2();

// Function to get facts for the favorite number asynchronously using Promise.all and display them on the body (part 3)
async function getFacts3() {
     let data = await Promise.all(
          Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNum}?json`))
     );
     // Display facts in paragraphs on the body
     data.forEach((data) => $("body").append(`<p>${data.text}</p>`));
}
// Call the function to get facts for the favorite number and display them
getFacts3();
