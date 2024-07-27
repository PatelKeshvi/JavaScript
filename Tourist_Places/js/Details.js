import navbar from "../components/navbar.js";
import { createElement, getElement } from "../components/helper.js";

document.addEventListener("DOMContentLoaded", () => {
            document.getElementById("navbar").innerHTML = navbar();

            const products = JSON.parse(localStorage.getItem("products")) || [];
            const productId = localStorage.getItem("id");

            let data = products.find(product => product.id === productId);

            if (!data) {
                const detailsElement = document.getElementById("Details");
                if (detailsElement) {
                    detailsElement.innerHTML = "<p>Product not found</p>";
                } else {
                    console.error("Details element not found in DOM.");
                }
            } else {
                const product = getElement("Details");

                let likeButton;

                const UI_view = () => {
                        product.innerHTML = "";

                        const slider = createElement(
                                "div",
                                `<div class="owl-carousel owl-theme">
                    ${(data.img || []).map(img => `<div class="item"><img src="${img}" class="d-block w-100" alt="..."></div>`).join('')}
                </div>`,
                {}
            );

            const form = createElement(
                "form",
                `<input type="text" class="w-75" id="comment">
                  <input type="submit" class="w-25" >`,
                {
                    class: "d-flex justify-content-between align-item-center",
                    id: "commentForm",
                }
            );

            const comment = createElement("div", "", { id: "comments" });

            likeButton = createElement(
                "button",
                `Like : <span class="fw-bold">${data.likes}</span>`,
                { class: "btn ms-5 btn-danger" }
            );

            likeButton.addEventListener("click", () => {
                data.likes++;
                localStorage.setItem(`likes_${data.id}`, data.likes);
                likeButton.innerHTML = `Like : <span class="fw-bold">${data.likes}</span>`;
            });

            product.append(
                createElement("h4", `Welcome To Tourist`, { class: "ms-5" }),
                slider,
                createElement("h4", `${data.title}`, { class: "ms-5" }),
                createElement("p", `${data.desc}`, { class: "ms-5" }),
                createElement("p", `Price : <span class="fw-bold">${data.cost}</span>`, {
                    class: "ms-5",
                }),
                likeButton,
                createElement("hr", ``, { class: "hr" }),
                createElement("h5", "Comments", {}),
                comment,
                form,
                createElement(
                    "button",
                    `Buy Package`,
                    { class: "btn ms-5 btn-success mt-3" }
                )
            );

            form.addEventListener("submit", add_Comment, false);
            print_Comment();

            $(document).ready(function(){
                $(".owl-carousel").owlCarousel({
                    items: 1,
                    loop: true,
                    margin: 10,
                    nav: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }
                });
            });
        };

        const print_Comment = () => {
            const commentDiv = document.getElementById("comments");
            if (commentDiv) {
                commentDiv.innerHTML = "";
                const comments = data.comments || [];
                comments.forEach((elem) => {
                    const p = createElement("p", elem);
                    commentDiv.append(p);
                });
            } else {
                console.error("Comments element not found in DOM.");
            }
        };

        const add_Comment = (event) => {
            event.preventDefault();
            const comment = document.querySelector("#comment").value;
            data.comments.push(comment);
            localStorage.setItem("products", JSON.stringify(products));
            print_Comment();
            document.querySelector("#commentForm").reset();
        };

        const storedLikes = localStorage.getItem(`likes_${data.id}`);
        if (storedLikes !== null) {
            data.likes = parseInt(storedLikes, 10);
            if (likeButton) {
                likeButton.innerHTML = `Like : <span class="fw-bold">${data.likes}</span>`;
            }
        }

        UI_view();
    }
});