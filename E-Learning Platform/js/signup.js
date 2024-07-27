import { createSidebar } from '../components/sidebar.js';

document.body.insertAdjacentHTML('afterbegin', createSidebar());

const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(signupForm);
    const data = Object.fromEntries(formData.entries());

    // Post data to JSON server
    await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    alert('Sign up successful!');
});