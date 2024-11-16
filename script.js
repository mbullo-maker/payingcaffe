// Event listener for the login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Clear any previous error messages
    document.getElementById('error-message').innerHTML = '';

    // Validate input fields
    if (username === '' || password === '') {
        document.getElementById('error-message').innerHTML = 'Please fill in both username and password fields.';
    } else {
        // Sample user data for validation (this would typically come from a database or API)
        const validUser  = {
            username: "JohnDoe",
            password: "password123" // Replace with a secure password storage mechanism
        };

        // Check if the entered credentials match the valid user
        if (username === validUser .username && password === validUser .password) {
            alert('Login successful! Redirecting to the menu...');
            // Redirect to the menu page
            window.location.href = 'afterlogin.html'; // Change 'afterlogin.html' to the actual path of your menu page
        } else {
            document.getElementById('error-message').innerHTML = 'Invalid username or password. Please try again.';
        }
    }
    function logout() {
        // Clear user session data
        localStorage.removeItem('username'); // Clear username from local storage
        // Optionally clear other session data as needed
        // sessionStorage.removeItem('token'); // Example: remove auth token
    
        // Redirect to the café menu page
        window.location.href = 'index.html'; // Redirect to the menu page
    }
});