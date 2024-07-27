document.getElementById('SignupData').addEventListener('submit', event => {
    event.preventDefault();
    const uname = document.getElementById('uname').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ uname, email, pass });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful!');
    window.location.href = 'login.html';
});