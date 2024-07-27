import { createSidebar } from '../components/sidebar.js';

document.body.insertAdjacentHTML('afterbegin', createSidebar());

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData.entries());

    // Authenticate user
    const response = await fetch('http://localhost:3000/users?email=' + data.email + '&password=' + data.password);
    const user = await response.json();

    if (user.length > 0) {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to home
    } else {
        alert('Invalid credentials.');
    }
});