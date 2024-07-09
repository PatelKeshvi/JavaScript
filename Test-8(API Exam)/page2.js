const Displayid = localStorage.getItem("Id");

const Display = (product) => {
    const container = document.getElementById("product-details");
    container.innerHTML = `
        <div class="text-center">
            <img src="${product.images}" alt="${product.title}" class="img-fluid mb-3" style="max-height: 300px; object-fit: contain;">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Rating:</strong> ${product.rating} (${product.rating} reviews)</p>
            <button class="btn btn-primary">Buy Now</button>
        </div>
    `;
};

const productData = async (id) => {
    let req = await fetch(`https://dummyjson.com/products/${id}`);
    let product = await req.json();
    console.log(product);
    Display(product);
};
productData(Displayid);