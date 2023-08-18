// Wait for the HTML to be fully loaded before running the JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Get references to important elements in the HTML
    const guessInput = document.getElementById("guessInput");
    const submitBtn = document.getElementById("submitBtn");
    const message = document.getElementById("message");

    // Listen for a click on the submit button
    submitBtn.addEventListener("click", function() {
        // Get the user's guess from the input field and convert it to a number
        const userGuess = parseInt(guessInput.value);

        // Check if the user's input is valid
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            // Display an error message if the input is not a valid number
            message.textContent = "Please enter a valid number between 1 and 100.";
        } else {
            // Compare the user's guess with the random number
            if (userGuess === randomNumber) {
                // If the guess is correct, display a success message
                message.textContent = "Congratulations! You guessed the correct number!";
                // Change the color of the success message to green
                message.style.color = "#33cc33";
                // Disable the input field and submit button to prevent further guesses
                guessInput.disabled = true;
                submitBtn.disabled = true;
            } else if (userGuess < randomNumber) {
                // If the guess is too low, provide a hint to guess higher
                message.textContent = "Try again! Your guess is too low.";
            } else {
                // If the guess is too high, provide a hint to guess lower
                message.textContent = "Try again! Your guess is too high.";
            }
        }
    });
});
