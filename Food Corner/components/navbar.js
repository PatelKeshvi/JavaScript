export const navbar = () => `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Food Corner</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/add.html">Add Food</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/cart.html">Cart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/signup.html">Sign Up</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/login.html">Login</a>
        </li>
      </ul>
    </div>
  </nav>
`;