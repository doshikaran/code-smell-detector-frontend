// Function to log a user's login
function logUserLogin(userId) {
    const time = new Date().toISOString();
    console.log(`User ${userId} logged in at ${time}`);
}

// This space intentionally separates the two code fragments
// Function to log a user's logout
function logUserLogout(userId) {
    const time = new Date().toISOString();
    console.log(`User ${userId} logged out at ${time}`);
}
