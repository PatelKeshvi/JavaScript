const API_URL = 'http://localhost:3000'; // Adjust as necessary

// Fetch all purchases
export async function fetchPurchases() {
    const response = await fetch(`${API_URL}/purchases`);
    return response.json();
}

// Fetch a single purchase by ID
export async function fetchPurchase(purchaseId) {
    const response = await fetch(`${API_URL}/purchases/${purchaseId}`);
    return response.json();
}

// Create a new purchase
export async function createPurchase(purchase) {
    const response = await fetch(`${API_URL}/purchases`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(purchase),
    });
    return response.json();
}

// Update an existing purchase
export async function updatePurchase(purchaseId, purchase) {
    const response = await fetch(`${API_URL}/purchases/${purchaseId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(purchase),
    });
    return response.json();
}

// Delete a purchase
export async function deletePurchase(purchaseId) {
    const response = await fetch(`${API_URL}/purchases/${purchaseId}`, {
        method: 'DELETE',
    });
    return response.json();
}