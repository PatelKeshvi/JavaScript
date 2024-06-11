// Home page
const dummyUser = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    country: "Canada",
    imageUrl: "./1.jpg",
    mobile: "+1-234-567-890",
    address: "123 Maple Street, Toronto, ON",
    job: "Software Engineer",
    company: "Tech Solutions Inc."
};
localStorage.setItem("user", JSON.stringify(dummyUser));

const user = JSON.parse(localStorage.getItem("user"));
if (user) {
    document.getElementById("profile-image").src = user.imageUrl;
    document.getElementById("profile-name").textContent = `Name: ${user.name}`;
    document.getElementById("profile-email").textContent = `Email: ${user.email}`;
    document.getElementById("profile-country").textContent = `Country: ${user.country}`;
    document.getElementById("profile-mobile").textContent = `Mobile: ${user.mobile}`;
    document.getElementById("profile-address").textContent = `Address: ${user.address}`;
    document.getElementById("profile-job").textContent = `Job: ${user.job}`;
    document.getElementById("profile-company").textContent = `Company: ${user.company}`;
}

const dummyNewsList = [
    { title: "Study News 1", content: "Content of study news 1", category: "Study", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdX2hi0MalyAspPq6R2A29aYoeU4b5B0eoQ&s" },
    { title: "Election News 1", content: "Content of election news 1", category: "Election", imageUrl: "https://www.shutterstock.com/image-vector/election-india-indian-dot-map-260nw-2384927921.jpg" },
    { title: "Sensex News 1", content: "Content of sensex news 1", category: "Sensex", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmz5HOu20VwC3VJ3IZyMGD_HkUHILUS8-ow&s" },
    { title: "Study News 2", content: "Content of study news 2", category: "Study", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThA2mp9XDOCJob77EFnUBj0Nckw3KG6oqCNztGI_AmTjUfJeq3tXY1Ng47IFlYOu-NQGU&usqp=CAU" },
    { title: "Election News 2", content: "Content of election news 2", category: "Election", imageUrl: "https://t3.ftcdn.net/jpg/02/55/36/74/360_F_255367453_h4QrW8WqQE1VV4bI8tp1qP8ZoPIvEMCl.jpg" },
    { title: "Sensex News 2", content: "Content of sensex news 2", category: "Sensex", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzh7VhDcLJ5NwNIUdcG4xTZ89V1eBPdZPXUAh2OyaYaW1JSQlSa9rSt5NmQSN0YaF0Ywo&usqp=CAU" }
];
localStorage.setItem("newsList", JSON.stringify(dummyNewsList));

const newsList = JSON.parse(localStorage.getItem("newsList")) || [];

const newsListElement = document.getElementById("news-list");
const displayNews = (filteredNews) => {
    newsListElement.innerHTML = "";
    filteredNews.forEach((news) => {
        const li = document.createElement("li");
        li.className = "news-item";

        const img = document.createElement("img");
        img.src = news.imageUrl;
        img.alt = news.title;
        img.className = "news-image";

        const title = document.createElement("h2");
        title.className = "news-title";
        title.textContent = news.title;

        const content = document.createElement("p");
        content.className = "news-content";
        content.textContent = news.content;

        const buttonsDiv = document.createElement("div");
        buttonsDiv.className = "news-buttons";

        const readMoreButton = document.createElement("button");
        readMoreButton.className = "btn btn-primary";
        readMoreButton.textContent = "Read More";

        const bookmarkButton = document.createElement("button");
        bookmarkButton.className = "btn btn-secondary";
        bookmarkButton.textContent = "Bookmark";

        const likeButton = document.createElement("button");
        likeButton.className = "btn btn-success";
        likeButton.textContent = "Like";

        const shareButton = document.createElement("button");
        shareButton.className = "btn btn-info";
        shareButton.textContent = "Share";

        buttonsDiv.appendChild(readMoreButton);
        buttonsDiv.appendChild(bookmarkButton);
        buttonsDiv.appendChild(likeButton);
        buttonsDiv.appendChild(shareButton);

        li.appendChild(img);
        li.appendChild(title);
        li.appendChild(content);
        li.appendChild(buttonsDiv);

        newsListElement.appendChild(li);
    });
};

document.getElementById("category1").addEventListener("click", function () {
    const filteredNews = newsList.filter(news => news.category === "Study");
    displayNews(filteredNews);
});

document.getElementById("category2").addEventListener("click", function () {
    const filteredNews = newsList.filter(news => news.category === "Election");
    displayNews(filteredNews);
});

document.getElementById("category3").addEventListener("click", function () {
    const filteredNews = newsList.filter(news => news.category === "Sensex");
    displayNews(filteredNews);
});

document.querySelectorAll("#countryDropdown .dropdown-item").forEach(item => {
    item.addEventListener("click", function () {
        const selectedCountry = this.textContent.trim();
        const filteredNews = newsList.filter(news => news.country === selectedCountry);
        displayNews(filteredNews);
    });
});

displayNews(newsList);

// addNewspage
document.getElementById("news-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const news = {
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
    };

    let newsList = JSON.parse(localStorage.getItem("newsList")) || [];
    newsList.push(news);
    localStorage.setItem("newsList", JSON.stringify(newsList));

    const params = new URLSearchParams();
    params.append('title', news.title);
    params.append('content', news.content);

    window.location.href = "./home.html?" + params.toString();
});

// Login Page
document
    .getElementById("login-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const user = JSON.parse(localStorage.getItem("user"));

        if (user && user.email === email && user.password === password) {
            alert("Login successful!");
            window.location.href = "./home.html";
        } else {
            alert(
                "Invalid email or password. Please try again or sign up first."
            );
        }
    });

// Signup Page
document
    .getElementById("signup-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        const user = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            imageUrl: document.getElementById("image-url").value,
            country: document.getElementById("country").value,
            password: document.getElementById("password").value,
        };

        localStorage.setItem("user", JSON.stringify(user));
        alert("Sign up successful! You can now log in.");

        window.location.href = "./login.html";
    });