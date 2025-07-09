document.getElementById('update-account-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const cemail = document.getElementById('cemail').value.trim();
  const email = document.getElementById('email').value.trim();
  const username = document.getElementById('Username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Basic validation
  if (!cemail || !email || !username || !password) {
    alert('Please fill in all fields');
    return;
  }

  try {
    const response = await fetch('http://localhost:3019/update-profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cemail, email, username, password }),
    });

    const data = await response.json();
    alert(data.message);

    if (response.ok) {
      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 2000);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again later.');
  }
});
