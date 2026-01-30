welcomeMessage();

// Function to display a welcome message and capture user input
function welcomeMessage() {
    // Prompt the user for their name
    let userResponse = prompt("Hello there! What's your name?");

    // If the user cancels the prompt or leaves it blank, set a default name
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }
    
    // Display a welcome alert with the user's name
    document.getElementById ("welcome-speech").innerText = "Welcome " + userResponse + ", to my portofolio website!";
}   

// Function to handle form submission
function submitForm(event) {}

// Function for responses
function getResponse() {
    // Get the user's message from the textarea
    let userName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;
   
    // Display the response in the response textarea
    document.getElementById("response").value = "Name: " + userName + "\nEmail: " + userEmail + "\nMessage: " + userMessage;
}
 