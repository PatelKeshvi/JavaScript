import nav from "../Components/nav.js";
import { ProductApi } from "../API/user.api.js";


document.getElementById("nav").innerHTML = nav();


const GetProducts = async(e) => {

    e.preventDefault();

    let products = {
        Title: document.getElementById("title").value,
        image: document.getElementById("img").value,
        category: document.getElementById("category").value,
        Description: document.getElementById("Desc").value,
        Price: document.getElementById("price").value,
        Stock: document.getElementById("stock").value,
        userId: JSON.parse
    }

    window.location.href = "/pages/Dashboard.html"

    try {
        ProductApi.post(products);

        const data = await ProductApi.get();
        products(data);
    } catch (error) {
        console.error("Error posting user data:", error);
    }

}



document.getElementById("Products").addEventListener("submit", GetProducts);

await ProductApi.get();