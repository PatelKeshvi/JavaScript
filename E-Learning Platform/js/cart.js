import { createSidebar } from '../components/sidebar.js';

document.body.insertAdjacentHTML('afterbegin', createSidebar());

// Fetch cart items from JSON server
const fetchCartItems = async() => {
    const response = await fetch('http://localhost:3000/cart');
    const cartItems = await response.json();
    return cartItems;
};

// Display cart items
const displayCart = async() => {
    const cartItems = await fetchCartItems();
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');

    let total = 0;
    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
      <h3>${item.title}</h3>
      <p>Price: $${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
    `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    totalPriceElement.textContent = `$${total.toFixed(2)}`;
};

displayCart();