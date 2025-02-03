document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Correct credentials
        const correctUsername = 'yzrl__1';
        const correctPassword = 'Sayaganteng_2025';

        // Check if credentials match
        if (username === correctUsername && password === correctPassword) {
            // Redirect to the welcome page immediately
            window.location.href = 'welcome.html'; // Ensure this file exists in the same folder
        } else {
            // Show error message
            document.getElementById('errorMessage').textContent = 'Invalid username or password.';
        }
    });
});