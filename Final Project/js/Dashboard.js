import nav from "../Components/nav.js";
import { ProductApi } from "../API/user.api.js";
document.getElementById("nav").innerHTML = nav();

const HandlecartList = async(e) => {
    try {
        let cartDetails = await ProductApi.getproduct();
        let existingProduct = cartDetails.find(item => item.id === e.id);

        if (existingProduct) {
            existingProduct.qty += 1;
            await ProductApi.Patch(existingProduct);
            alert("Quantity Added Successfully");

        } else {
            const newProduct = {...e, qty: 1 };
            await ProductApi.post(newProduct);
            alert("Added to the cart");
        }

        window.location.href = "/index.html";

    } catch (error) {
        console.error("Error updating cart:", error);
    }
};



const ShowProducts = async(data) => {

    document.getElementById("products").innerHTML = "";

    data.map((e) => {
        let img = document.createElement("img")
        img.src = e.image

        let title = document.createElement("h2")
        title.innerHTML = e.Title

        let price = document.createElement("p")
        price.innerHTML = e.Price

        let category = document.createElement("p")
        category.innerHTML = e.category

        let Description = document.createElement("p")
        Description.innerHTML = e.Description

        let Stock = document.createElement("p")
        Stock.innerHTML = e.Stock

        let btn = document.createElement("button")
        btn.innerHTML = "BUY"
        btn.addEventListener("click", () => HandlecartList(e))

        let div = document.createElement("div")

        div.append(img, title, price, category, Description, Stock, btn)

        document.getElementById("products").append(div);
    })

}

const fetchData = async() => {
    try {
        const res = await ProductApi.get();
        ShowProducts(res);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

fetchData();