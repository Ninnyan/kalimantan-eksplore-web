import routesAdmin from "../routes/routesAdmin";
import UrlParser from "../routes/url-parser";

class CustomSidebar extends HTMLElement {
  connectedCallback() {
    const currentPath = window.location.pathname; // Mendapatkan path URL saat ini
    const url = UrlParser.parseActiveUrlWithCombiner();
    this.innerHTML = `
      <div class="sidebar">
        <div class="logo">
          <img src="..//public/images/heros/logo-admin.png" alt="" />
        </div>
        <a href="/#/admin-dashboard" class="${url.includes('/admin-dashboard') ? 'active' : ''}"> <span class="material-symbols-outlined"> dashboard </span>Dashboard</a>
        <a href="/#/admin-manage-wisata" class="${currentPath.includes('/admin-manage-wisata') ? 'active' : ''}"><span class="material-symbols-outlined"> admin_meds </span> Manajemen Destinasi</a>
        <a href="/#/admin-aktivitas-login" class="${url.includes('/admin-aktivitas-login') ? 'active' : ''}"><span class="material-symbols-outlined"> passkey </span> Aktivitas Login</a>
        <a href="/#/admin-kelola-tiket" class="${currentPath.includes('/admin-kelola-tiket') ? 'active' : ''}"><span class="material-symbols-outlined"> confirmation_number </span> Pengelolaan Tiket</a>
      </div>
    `;
  }
}

customElements.define('custom-sidebar', CustomSidebar);
