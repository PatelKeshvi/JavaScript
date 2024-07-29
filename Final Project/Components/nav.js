const nav = () => {
    return ` <div class="nav-wrapper">
        <div class="logo-container">
            <img class="logo"
                src=""
                alt="Logo">
        </div>
        <nav>
            <input class="hidden" type="checkbox" id="menuToggle">
            <label class="menu-btn" for="menuToggle">
                <div class="menu"></div>
                <div class="menu"></div>
                <div class="menu"></div>
            </label>
            <div class="nav-container">
                <div class="nav-tabs">
                    <a class="nav-tab" href="index.html">Home</a>
                    <a class="nav-tab" href="/pages/Dashboard.html">Dashboard</a>
                    <a class="nav-tab" href="/pages/add.html">Add Products</a>
                    <a class="nav-tab" href="/pages/cart.html">Cart</a>
                    <a class="nav-tab" href="/pages/signup.html">SignUp</a>
                    <a class="nav-tab" href="/pages/login.html">LogIn</a>
                </div>
            </div>
        </nav>
    </div>
 `
}

export default nav