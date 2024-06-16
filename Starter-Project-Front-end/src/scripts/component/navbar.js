class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <header id="navbar">
      <div class="logo">
        <img src="..//public/images/heros/logo-one.png" alt="Kalteng Explore Logo" />
      </div>
      <button class="hamburger-menu" id="hamburgerMenu">☰</button>
      <nav class="nav">
        <ul class="nav-center" id="navCenter">
          <li><a href="#content">Destinasi Wisata</a></li>
          <li><a href="#rekomendasi" id="rekomen">Rekomendasi</a></li>
          <li><a href="/#/riwayat">Riwayat Transaksi</a></li>
          <li><a href="/#/about-us">Tentang Kami</a></li>
        </ul>
        <ul class="nav-right">
          <li class="user-icon">
            <a href="#"><img src="..//public/images/heros/icon-user.png" alt="User Icon" /></a>
            <div class="dropdown-menu">
              <a href="/#/login-user" class="login-all"><span class="material-symbols-outlined"> login </span>Masuk</a>
              <a href="/#/registrasi-user" class="daftar-all"><span class="material-symbols-outlined"> person_edit </span>Daftar</a>
              <a href="#" class="logout-all"><span class="material-symbols-outlined"> logout </span>Keluar</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
    `;
  }
}

customElements.define('app-navbar', Navbar);
