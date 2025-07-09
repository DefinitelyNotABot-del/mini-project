// Function to handle the complaint form submission
async function validateForm(event) {
  // Prevent the default form submission behavior to handle it via JavaScript
  event.preventDefault();
  
  // Grab input values from the form fields
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const issue = document.getElementById('issue').value.trim();
  
  // Validate that all fields are filled before sending data
  if (!email || !subject || !issue) {
    alert('Please fill in all fields');
    return; // Stop execution if fields are empty
  }

  try {
    // Send a POST request to the server endpoint to submit the complaint
    const response = await fetch('http://localhost:3019/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, // Indicate the data type being sent
      body: JSON.stringify({ email, subject, issue }), // Send user-provided data in JSON format
    });
  
    // Parse the server's response as JSON
    const data = await response.json();
    
    // Check if the server responded successfully
    if (response.ok) {
      // If successful, show a popup notification to the user
      alert('Complaint Submitted Successfully');
      
      // Wait for 1 second before redirecting the user to the home page
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 1000);
    } else {
      // If server response isn't OK, alert the user with the server's message
      alert(data.message);
    }
  } catch (error) {
    // Handle unexpected errors during the request
    console.error('Error:', error);
    alert('Something went wrong. Please try again later.');
  }
}
