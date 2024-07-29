import nav from "../Components/nav.js";
import { userAPI } from "../API/user.api.js";

document.getElementById("nav").innerHTML = nav();


let SignupDetails = JSON.parse(localStorage.getItem("user"));

const handleUserDetails = async(e) => {

    e.preventDefault();

    let user = {
        username: document.getElementById("uname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("pass").value
    };

    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/pages/login.html"

    try {
        userAPI.post(user);

        const data = await userAPI.get();
        userData(data);
    } catch (error) {
        console.error("Error posting user data:", error);
    }
};




document.getElementById("SignupData").addEventListener("submit", handleUserDetails);

await userAPI.get();