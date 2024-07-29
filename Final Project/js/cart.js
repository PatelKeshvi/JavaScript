import nav from "../Components/nav.js";
import { ProductApi } from "../API/user.api.js";


document.getElementById("nav").innerHTML = nav();


const HandleCart = (cartList) => {

    document.getElementById("cartlist").innerHTML = "";

    cartList.map((cart, id) => {

        let tr = document.createElement("tr");

        let image = document.createElement("td");
        let img = document.createElement("img");
        img.src = cart.img;
        image.append(img);

        let Title = document.createElement("td");
        Title.innerHTML = cart.Title;

        let Category = document.createElement("td");
        Category.innerHTML = cart.Category;

        let Price = document.createElement("td");
        Price.innerHTML = cart.Price;

        let td = document.createElement("td");

        let btn1 = document.createElement("button");
        btn1.innerHTML = "-"
        let btn2 = document.createElement("button");

        btn2.innerHTML = cart.qty;

        let btn3 = document.createElement("button");
        btn3.innerHTML = "+";

        btn1.addEventListener("click", () => HandleQty(i, "-"));
        btn3.addEventListener("click", () => HandleQty(i, "+"));
        td.append(btn1, btn2, btn3)

        let td2 = document.createElement("td");
        td2.innerHTML = cart.Price * cart.qty;

        let td3 = document.createElement("td");
        td3.innerHTML = "Remove";
        td3.style.cursor = "pointer"
        td3.addEventListener("click", () => HandleDelete(i));

        tr.append(image, Title, Category, Price, td, td2, td3)

        document.getElementById("cartlist").append(tr);

    })

}



const fetchData = async(id) => {
    try {
        const res = await ProductApi.get();
        ShowProducts(res);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

fetchData();
await ProductApi.get();