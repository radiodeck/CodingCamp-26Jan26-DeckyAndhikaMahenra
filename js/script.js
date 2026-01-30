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
    document.getElementById ("welcome-speech").innerText = "Welcome " + userResponse + " to my portfolio website!";
}   

// Function to handle form submission
function submitForm(event) {}
 