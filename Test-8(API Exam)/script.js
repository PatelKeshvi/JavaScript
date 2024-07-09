let products = [];

const getData = async () => {
    let req = await fetch("https://dummyjson.com/products/");
    let res = await req.json();
    products = res.products;
    console.log(products);
    displayProducts(products);
}

const storeData = (Id) => {
    localStorage.setItem("Id", Id);
    window.location.href = "page2.html";
}

const displayProducts = (products) => {
    const container = document.getElementById("data");
    container.innerHTML = ""; 

    let row = document.createElement('div');
    row.classList.add('row', 'gy-3');

    products.forEach(product => {
        let col = document.createElement('div');
        col.classList.add('col-md-6');

        let div = document.createElement('div');
        div.classList.add('product', 'p-3', 'border', 'rounded', 'h-100');
        div.onclick = () => storeData(product.id);

        let img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = product.title;
        img.classList.add('img-fluid', 'mb-3');

        let title = document.createElement("h5");
        title.textContent = product.title;

        let price = document.createElement("p");
        price.textContent = `Price: $${product.price}`;

        let category = document.createElement("p");
        category.textContent = `Category: ${product.category}`;

        let buyButton = document.createElement("button");
        buyButton.textContent = "Buy";
        buyButton.classList.add('btn', 'btn-primary');
        
        div.append(img, title, price, category, buyButton);
        col.append(div);
        row.append(col);
    });

    container.append(row);
};

const handleSort = (orderBy) => {
    let sortedProducts = [...products];
    if (orderBy === "lth") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    displayProducts(sortedProducts);
};

const filterProducts = (category) => {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
};

const handleSearch = (value) => {
    const searchValue = value.toLowerCase();
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchValue));
    displayProducts(filteredProducts);
}

const handleSearchData = (e) => {
    e.preventDefault();
    let value = document.getElementById("searchValue").value;
    handleSearch(value);
}

document.getElementById("htl").addEventListener("click", () => handleSort("htl"));
document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.getElementById("beauty").addEventListener("click", () => filterProducts("beauty"));
document.getElementById("fragrances").addEventListener("click", () => filterProducts("fragrances"));
document.getElementById("furniture").addEventListener("click", () => filterProducts("furniture"));
document.getElementById("groceries").addEventListener("click", () => filterProducts("groceries"));
document.getElementById("searchValue").addEventListener("input", handleSearchData);
document.getElementById("search-form").addEventListener("submit", handleSearchData);

getData();