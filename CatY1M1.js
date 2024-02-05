let clickCounter = 0;
let distortionActive = false; // Flag to track if distortion is active

// Function to play or stop the sound and toggle distortion effect
function playCatSound() {
    // If the distortion is currently active, stop the sound and remove the effect
    if (distortionActive) {
        document.getElementById('special-sound').pause(); // Stop the sound
        document.getElementById('special-sound').currentTime = 0; // Reset sound to start
        document.body.classList.remove('distortion-effect'); // Remove the effect
        distortionActive = false; // Reset the flag
        return; // Exit the function
    }

    // Increment the click counter and play sound as usual
    clickCounter++;
	
    if (clickCounter === 100){
        const specialSound = document.getElementById('special-sound');
        specialSound.play();
        distortionActive = true; // Set the flag to true

        // Add distortion effect
        document.body.classList.add('distortion-effect');

        // Set a timeout to remove the effect after 40 seconds if it's not stopped by user
        setTimeout(function() {
            if (distortionActive) {
                specialSound.pause();
                specialSound.currentTime = 0;
                document.body.classList.remove('distortion-effect');
                distortionActive = false;
            }
        }, 40000); // 40000 milliseconds = 40 seconds
    } else {
        document.getElementById('regular-sound').play();
    }
}

// Ensure this event listener is attached to your cat image
document.getElementById('clickable-image').addEventListener('click', playCatSound);





// Function to show a message with an optional fade-out effect
function checkCode() {
    var secretCodes = ["Wombat", "WOMBAT", "wombat"]; // Array of valid codes
    var userInput = document.getElementById('secret-code').value;
    var errorMessage = document.getElementById('error-message');
    var successMessage = document.getElementById('success-message'); // Ensure you have an element with this ID

    // Check if userInput matches any of the secretCodes
    if (secretCodes.includes(userInput)) {
        // Show the success message
        successMessage.textContent = 'Correct code! *Meow*';
        successMessage.style.color = 'green'; // Make the text color green
        successMessage.style.display = 'block';
        successMessage.style.opacity = '1';

        // Set a delay of 2 seconds, then redirect to the next page
        setTimeout(function() {
            window.location.href = 'https://www.aetherium3301.com/store';
        }, 2000);
    } else {
        // Show the error message
        errorMessage.textContent = 'Incorrect code. Try again.';
        errorMessage.style.color = 'red'; // Keep the error message red
        errorMessage.style.display = 'block';
        errorMessage.style.opacity = '1';

        // Fade out the error message after 1.5 seconds
        setTimeout(function() {
            errorMessage.style.opacity = '0';
            errorMessage.style.display = 'none'; // Also hide the element after fading out
        }, 1500);
    }
}

