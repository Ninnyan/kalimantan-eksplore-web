class CustomFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="footer">
          <p>Copyright 2024 Kalimantan Explore: Wisata Berkelanjutan</p>
        </footer>
      `;
    }
  }
  
  customElements.define('custom-footer', CustomFooter);
  