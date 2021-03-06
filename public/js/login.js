const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert("Username or password is incorrect");
      
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

function createHideshow() {
  let x = document.getElementById("signup");
  let y = document.querySelector('.creatAccount');
  let z = document.getElementById("login");
  let v = document.querySelector('.btn-login');

  x.style.display = "block";
  y.style.display = "none";
  z.style.display = "none";
  v.style.display = "block";
}

function loginHideshow() {
  let x = document.getElementById("signup");
  let y = document.querySelector('.creatAccount');
  let z = document.getElementById("login");
  let v = document.querySelector('.btn-login');

  x.style.display = "none";
  y.style.display = "block";
  z.style.display = "block";
  v.style.display = "none";
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
