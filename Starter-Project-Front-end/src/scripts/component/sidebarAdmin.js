class CustomSidebar extends HTMLElement {
  connectedCallback() {
    const currentPath = window.location.pathname; // Mendapatkan path URL saat ini
    this.innerHTML = `
      <div class="sidebar">
        <div class="logo">
          <img src="../../../../public/images/heros/logo-one.png" alt="" />
        </div>
        <a href="index.html" class="${currentPath.includes('index.html') ? 'active' : ''}"> <span class="material-symbols-outlined"> dashboard </span>Dashboard</a>
        <a href="#" class="${currentPath.includes('admin_meds.html') ? 'active' : ''}"><span class="material-symbols-outlined"> admin_meds </span> Manajemen Destinasi</a>
        <a href="aktivitasLogin.html" class="${currentPath.includes('aktivitasLogin.html') ? 'active' : ''}"><span class="material-symbols-outlined"> passkey </span> Aktivitas Login</a>
        <a href="pengelolaanTiket.html" class="${currentPath.includes('pengelolaanTiket.html') ? 'active' : ''}"><span class="material-symbols-outlined"> confirmation_number </span> Pengelolaan Tiket</a>
      </div>
    `;
  }
}

customElements.define('custom-sidebar', CustomSidebar);
