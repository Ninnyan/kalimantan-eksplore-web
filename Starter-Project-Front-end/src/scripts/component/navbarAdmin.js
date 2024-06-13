class CustomNavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav class="navbar navbar-expand-md bg-light">
          <div class="container">
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                  <p>Dicoding Indonesia</p>
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="../../../../public/images/heros/icon-user.png" class="rounded-circle" alt="User Icon">
                  </a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="profileAdmin.html"><i class="fa-solid fa-user"></i> Lihat Profil</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      `;
    }
  }
  
  customElements.define('custom-navbar', CustomNavbar);
  