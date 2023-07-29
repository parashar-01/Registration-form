function validateForm() {
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let valid = true;

    if (username.length < 5) {
        document.getElementById('usernameError').textContent = 'Username must be at least 5 characters long.';
        valid = false;
    }

    if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Invalid email address.';
        valid = false;
    }

    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        valid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        valid = false;
    }

    return valid;
}