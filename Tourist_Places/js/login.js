document.getElementById('LoginData').addEventListener('submit', event => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.pass === pass);

    if (user) {
        alert('Login successful!');
        window.location.href = '/Tourist_Places/index.html';
    } else {
        alert('Invalid email or password');
    }
});