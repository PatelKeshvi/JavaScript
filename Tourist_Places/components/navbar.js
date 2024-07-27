const navbar = () => {
    return `
  <div class="navbar-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <div class="container-fluid">
              <a class="navbar-brand" href="/" aria-label="Home">
                  <span class="logo-text">TRAVELS</span>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                          <a class="nav-link" href="/index.html">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="/pages/addplace.html">Add Places</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="/pages/login.html">Login</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="/pages/signup.html">Sign Up</a>
                      </li>
                  </ul>
          </div>
      </nav>
  </div>
  `;
};

export default navbar;