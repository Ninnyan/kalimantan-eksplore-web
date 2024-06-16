class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
          <footer class="footer">
            <div class="logo">
              <img src="..//public/images/heros/logo-one.png" alt="Logo" />
            </div>
            <ul class="menu">
              <li><a href="/">Destinasi Wisata</a></li>
              <li><a href="dashboard.html">Rekomendasi</a></li>
              <li><a href="riwayatTransaksi.html">Riwayat Transaksi</a></li>
              <li><a href="tentangKami.html">Tentang Kami</a></li>
            </ul>
            <div class="social-media">
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-facebook"></i></a>
            </div>
            <div class="copyright">&copy; 2024 Kalimantan Explore: Wisata Berkelanjutan</div>
          </footer>
      `;
    }
  }
  
  customElements.define('app-footer', Footer);
  