import KalimantanSource from "../../../data/kalimantanAPI";
import API_ENDPOINT from "../../../globals/api_endpoint";
import CONFIG from "../../../globals/config";

const itemsPerPage = 8;
let currentPage = 1;
let data = [];
let filteredData = [];
let selectedCategory = 'All';
let searchQuery = '';
let newWisata = []

const homePageInit = {
    data(wisata) {
        newWisata = wisata
        this._init()
    },
    _init() {
        data = newWisata;
        filteredData = data; // Inisialisasi filteredData dengan semua data
        this.renderCategories();
        this.renderCards(currentPage);
        this.renderPagination();
        this.updatePagination();
    },

    renderCategories() {
        const categoryContainer = document.getElementById('categoryContainer');
        const categories = [...new Set(data.map(item => item.category))];
        categoryContainer.innerHTML = '<button class="category" id="category-all">All</button>';
        const buttonAll = document.querySelector('#category-all')
        buttonAll.addEventListener('click', ()=> this.filterCategory('All'))
        categories.forEach(category => {
          const button = document.createElement('button');
          button.className = 'category';
          button.innerText = category;
          button.addEventListener('click', () => this.filterCategory(category));
          button.id = `category-${category.replace(/\s+/g, '-').toLowerCase()}`; // Set id untuk tombol kategori
          categoryContainer.appendChild(button);
        });
        this.updateCategoryHighlight(); // Highlight the default selected category
      },

      filterCategory(category) {
        selectedCategory = category;
        this.filterData();
        currentPage = 1;
        this.renderCards(currentPage);
        this.renderPagination();
        this.updatePagination();
        this.updateCategoryHighlight();
      },

      updateCategoryHighlight() {
        const categoryButtons = document.querySelectorAll('.category-list .category');
        categoryButtons.forEach(button => {
          if (button.innerText === selectedCategory || (selectedCategory === 'All' && button.innerText === 'All')) {
            button.classList.add('active');
          } else {
            button.classList.remove('active');
          }
        });
      },

      filterData() {
        filteredData = data.filter(item => {
          const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
          const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
          return matchesCategory && matchesSearch;
        });
      },

      handleSearch() {
        const searchInput = document.getElementById('searchInput');
        searchQuery = searchInput.value;
        filteredData = data.filter(item => {
            const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
          });
        currentPage = 1;
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = filteredData.slice(start, end);
      
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = '';
      
        paginatedItems.forEach(async item => {
          const dataPhoto = await KalimantanSource.dataPhoto(item.id.wisata, item.img)
          const card = document.createElement('a');
          card.className = 'card';
          card.innerHTML = `
            <div class="card-img-container">
              <img src="${dataPhoto}" alt="${item.name}" />
            </div>
            <h4>${item.name}</h4>
            <p>${item.price}</p>
          `;
          cardContainer.appendChild(card);
        });
        const pageCount = Math.ceil(filteredData.length / itemsPerPage);
        const paginationContainer = document.getElementById('paginationContainer');
        paginationContainer.innerHTML = '';
      
        for (let i = 1; i <= pageCount; i++) {
          const button = document.createElement('button');
          button.className = 'page';
          button.innerText = i;
          button.addEventListener('click', function() {
            currentPage = i;
            this.renderCards(currentPage);
            this.updatePagination();
          });
          paginationContainer.appendChild(button);
        }
        const buttons = document.querySelectorAll('.pagination .page');
        buttons.forEach((button, index) => {
          if (index + 1 === currentPage) {
            button.classList.add('active');
          } else {
            button.classList.remove('active');
          }
        });
      },

      renderCards(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = filteredData.slice(start, end);
      
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = '';
      
        paginatedItems.forEach(async item => {          const dataPhoto = await KalimantanSource.dataPhoto(item.id_wisata, item.img)
          const card = document.createElement('a');
          card.className = 'card';
          card.setAttribute('href', `/#/detail/${item.id_wisata}`)
          card.innerHTML = `
            <div class="card-img-container">
              <img src="${dataPhoto}" alt="${item.name}" />
            </div>
            <h4>${item.name}</h4>
            <p>${item.price}</p>
          `;
          cardContainer.appendChild(card);
        });
      },

      renderPagination() {
        const pageCount = Math.ceil(filteredData.length / itemsPerPage);
        const paginationContainer = document.getElementById('paginationContainer');
        paginationContainer.innerHTML = '';
      
        for (let i = 1; i <= pageCount; i++) {
          const button = document.createElement('button');
          button.className = 'page';
          button.innerText = i;
          button.addEventListener('click', function() {
            currentPage = i;
            this.renderCards(currentPage);
            this.updatePagination();
          });
          paginationContainer.appendChild(button);
        }
      },

      updatePagination() {
        const buttons = document.querySelectorAll('.pagination .page');
        buttons.forEach((button, index) => {
          if (index + 1 === currentPage) {
            button.classList.add('active');
          } else {
            button.classList.remove('active');
          }
        });
      },

      searchInit() {
        document.getElementById('searchInput').addEventListener('input', this.handleSearch)
      }
}


// Ekspor fungsi untuk modul
export const dataDestinasi = data; 
export default homePageInit;