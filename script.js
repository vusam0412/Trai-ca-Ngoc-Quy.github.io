// Interactive JavaScript code

// Function to display the current date and time
function displayDateTime() {
    const now = new Date();
    const dateTimeString = now.toUTCString(); // Formats the date in UTC
    document.getElementById('date-time').innerText = 'Current Date and Time (UTC): ' + dateTimeString;
}

// Call the function on page load
window.onload = displayDateTime;