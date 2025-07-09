async function validateForm(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const email = document.getElementById('email').value.trim();
  
    if (!username || !password || !email) {
      alert('Please fill in all fields');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3019/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email }),
      });
  
      const data = await response.json();
      alert(data.message);
  
      if (response.ok) {
        window.location.href = 'signin.html';
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    }
  }
  