const API_URL = 'http://localhost:3000'; // Adjust as necessary

// Fetch all users
export async function fetchUsers() {
    const response = await fetch(`${API_URL}/users`);
    return response.json();
}

// Fetch a single user by ID
export async function fetchUser(userId) {
    const response = await fetch(`${API_URL}/users/${userId}`);
    return response.json();
}

// Create a new user
export async function createUser(user) {
    const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    return response.json();
}

// Update an existing user
export async function updateUser(userId, user) {
    const response = await fetch(`${API_URL}/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    return response.json();
}

// Delete a user
export async function deleteUser(userId) {
    const response = await fetch(`${API_URL}/users/${userId}`, {
        method: 'DELETE',
    });
    return response.json();
}