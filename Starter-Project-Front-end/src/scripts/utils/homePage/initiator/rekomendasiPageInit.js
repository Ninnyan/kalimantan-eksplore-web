import KalimantanSource from "../../../data/kalimantanAPI";
import API_ENDPOINT from "../../../globals/api_endpoint";
import CONFIG from "../../../globals/config";

const itemsPerPages = 3; // Menampilkan 3 item per halaman
let currentSlide = 0;
let sliderData = [];


const rekomendasiInit = {
    data(wisata) {
        sliderData = wisata
        this._init()
    },

    _init() {
        this.renderSlider();
    },

    renderSlider() {
        const sliderContainer = document.getElementById('sliderContainer');
        sliderContainer.innerHTML = '';
      
        const start = currentSlide * itemsPerPages;
        const end = start + itemsPerPages;
        const paginatedItems = sliderData.slice(start, end);
      
        paginatedItems.forEach(async item => {
          const dataPhoto = await KalimantanSource.dataPhoto(item.id_wisata, item.img)
          const slide = document.createElement('a');
          slide.className = 'destinasi-card';
          slide.innerHTML = `
            <img src="${dataPhoto}" alt="${item.name}" />
            <div class="destinasi-info">
              <h4>${item.name}</h4>
              <p>${item.category}</p>
              <div class="price-content">
                <span class="price">${item.price}</span>
              </div>
            </div>
          `;
          sliderContainer.appendChild(slide);
        });
      },

      moveSlide(direction) {
        const totalPages = Math.ceil(sliderData.length / itemsPerPages);
        currentSlide = (currentSlide + direction + totalPages) % totalPages;
        this.renderSlider();
      }
      
}

// Ekspor data untuk modul
export const dataRekomendasi = sliderData;
export default rekomendasiInit; // Mengekspor fungsi moveSlide
