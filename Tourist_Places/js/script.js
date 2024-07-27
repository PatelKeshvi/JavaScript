import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let product = JSON.parse(localStorage.getItem("products")) || [];

const products = [{
        id: 1,
        name: 'Product 1',
        likes: 10,
        price: 100,
        imageUrl: '/images/place1.jpg'
    },
    {
        id: 2,
        name: 'Product 2',
        likes: 20,
        price: 200,
        imageUrl: '/images/place2.jpg'
    },
    {
        id: 3,
        name: 'Product 3',
        likes: 30,
        price: 300,
        imageUrl: '/images/place3.jpg'
    },
    {
        id: 4,
        name: 'Product 4',
        likes: 40,
        price: 400,
        imageUrl: '/images/place4.jpg'
    },
];

$(document).ready(function() {
    function renderProducts(products) {
        const productList = $('#productList');
        productList.empty();
        products.forEach(product => {
            const productCard = `
                <div class="col-md-3">
                    <div class="product-item">
                        <img src="${product.imageUrl}" alt="${product.name}">
                        <h2>${product.name}</h2>
                        <p>Likes: ${product.likes}</p>
                        <p class="price">$${product.price}</p>
                        <div class="btn-group">
                            <button class="btn btn-like">Like</button>
                            <button class="btn btn-wishlist">Wishlist</button>
                        </div>
                    </div>
                </div>
            `;
            productList.append(productCard);
        });
    }

    renderProducts(products);

    $('#likesLTH').click(() => {
        const sortedProducts = [...products].sort((a, b) => a.likes - b.likes);
        renderProducts(sortedProducts);
    });

    $('#likesHTL').click(() => {
        const sortedProducts = [...products].sort((a, b) => b.likes - a.likes);
        renderProducts(sortedProducts);
    });

    $('#priceLTH').click(() => {
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        renderProducts(sortedProducts);
    });

    $('#priceHTL').click(() => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        renderProducts(sortedProducts);
    });

    // Search function
    $('#search-form').submit((e) => {
        e.preventDefault();
        const searchValue = $('#searchValue').val().toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchValue)
        );
        renderProducts(filteredProducts);
    });
});


document.getElementById("likesLTH").addEventListener("click", () => HandleLikes("likesLTH"));
document.getElementById("likesHTL").addEventListener("click", () => HandleLikes("likesHTL"));
document.getElementById("priceLTH").addEventListener("click", () => HandleCost("priceLTH"));
document.getElementById("priceHTL").addEventListener("click", () => HandleCost("priceHTL"));
document.getElementById("searchValue").addEventListener("input", handleSearchData);
document.getElementById("search-form").addEventListener("submit", handleSearchData);