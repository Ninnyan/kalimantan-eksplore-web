const itemsPerPages = 3; // Menampilkan 3 item per halaman
let currentSlide = 0;
let sliderData = [];

async function fetchSliderData() {
  try {
    const response = await fetch('../../../data/dataTest.json');
    const jsonData = await response.json();
    sliderData = jsonData.data;
    renderSlider();
  } catch (error) {
    console.error('Error fetching slider data:', error);
  }
}

function renderSlider() {
  const sliderContainer = document.getElementById('sliderContainer');
  sliderContainer.innerHTML = '';

  const start = currentSlide * itemsPerPages;
  const end = start + itemsPerPages;
  const paginatedItems = sliderData.slice(start, end);

  paginatedItems.forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'destinasi-card';
    slide.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
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
}

function moveSlide(direction) {
  const totalPages = Math.ceil(sliderData.length / itemsPerPages);
  currentSlide = (currentSlide + direction + totalPages) % totalPages;
  renderSlider();
}

// Initialize the slider by fetching data
fetchSliderData();

// Ekspor data untuk modul
export const dataRekomendasi = sliderData;
export { moveSlide }; // Mengekspor fungsi moveSlide
