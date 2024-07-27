export const createSidebar = () => {
    return `
      <nav class="sidebar">
        <ul>
          <li><a href="/index.html"><i class='bx bx-home'></i> Home</a></li>
          <li><a href="/pages/add.html"><i class='bx bx-plus'></i> Add Course</a></li>
          <li><a href="/pages/cart.html"><i class='bx bx-cart'></i> Cart</a></li>
          <li><a href="/pages/signup.html"><i class='bx bx-user-plus'></i> Sign Up</a></li>
          <li><a href="/pages/login.html"><i class='bx bx-log-in'></i> Login</a></li>
        </ul>
      </nav>
    `;
};