import { userAPI } from "../API/user.api.js";
import nav from "../Components/nav.js";

document.getElementById("nav").innerHTML = nav();


let SignupDetails = JSON.parse(localStorage.getItem("user"));

const LoginData = async(e) => {
    e.preventDefault();
    let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("pass").value
    }

    let userDetails = await userAPI.getUser(user.email)

    console.log("userDetails", userDetails);

    if (userDetails.length > 0) {
        if (userDetails[0].password != user.password) {
            alert("password mismatch")
        } else if (userDetails[0].password == user.password) {
            alert("logged in successfully")
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
            window.location.href = "/index.html"
        }
    } else {
        alert("User not found");
    }
}


document.getElementById("LoginData").addEventListener("submit", LoginData)