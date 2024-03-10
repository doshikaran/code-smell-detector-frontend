// Function to generate a random ID string
function generateRandomID() {
    // Creates a random ID using current time and a random number
    return 'id_' + new Date().getTime() + '_' + Math.random().toString(36).substr(2, 9);
  }
  