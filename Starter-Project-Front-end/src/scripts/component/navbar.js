class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="navbar">
        <div class="logo">
          <img src="../../../../public/images/heros/logo-one.png" alt="Kalteng Explore Logo" />
        </div>
        <button class="hamburger-menu" id="hamburgerMenu">☰</button>
        <nav class="nav">
          <ul class="nav-center" id="navCenter">
            <li><a href="dashboard.html">Destinasi Wisata</a></li>
            <li><a href="dashboard.html" id="rekomen">Rekomendasi</a></li>
            <li><a href="riwayatTransaksi.html">Riwayat Transaksi</a></li>
            <li><a href="tentangKami.html">Tentang Kami</a></li>
          </ul>
          <ul class="nav-right">
            <li class="user-icon">
              <a href="#"><img src="../../../../public/images/heros/icon-user.png" alt="User Icon" /></a>
              <div class="dropdown-menu">
                <a href="../../../views/login-page/loginUser.html"><span class="material-symbols-outlined"> login </span>Masuk</a>
                <a href="../../../views/login-page/registerUser.html"><span class="material-symbols-outlined"> person_edit </span>Daftar</a>
                <a href="#"><span class="material-symbols-outlined"> logout </span>Keluar</a>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('app-navbar', Navbar);

let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll down
    navbar.classList.add('hidden-nav');
  } else {
    // Scroll up
    navbar.classList.remove('hidden-nav');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
