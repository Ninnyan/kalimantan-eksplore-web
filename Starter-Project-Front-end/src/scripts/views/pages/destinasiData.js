const itemsPerPage = 8;
let currentPage = 1;
let data = [];
let filteredData = [];
let selectedCategory = 'All';
let searchQuery = '';

async function fetchData() {
  try {
    const response = await fetch('../../../data/dataTest.json');
    const jsonData = await response.json();
    data = jsonData.data;
    filteredData = data; // Inisialisasi filteredData dengan semua data
    renderCategories();
    renderCards(currentPage);
    renderPagination();
    updatePagination();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function renderCategories() {
  const categoryContainer = document.getElementById('categoryContainer');
  const categories = [...new Set(data.map(item => item.category))];
  categoryContainer.innerHTML = '<button class="category" onclick="filterCategory(\'All\')" id="category-all">All</button>';
  categories.forEach(category => {
    const button = document.createElement('button');
    button.className = 'category';
    button.innerText = category;
    button.onclick = () => filterCategory(category);
    button.id = `category-${category.replace(/\s+/g, '-').toLowerCase()}`; // Set id untuk tombol kategori
    categoryContainer.appendChild(button);
  });
  updateCategoryHighlight(); // Highlight the default selected category
}

function filterCategory(category) {
  selectedCategory = category;
  filterData();
  currentPage = 1;
  renderCards(currentPage);
  renderPagination();
  updatePagination();
  updateCategoryHighlight();
}

function updateCategoryHighlight() {
  const categoryButtons = document.querySelectorAll('.category-list .category');
  categoryButtons.forEach(button => {
    if (button.innerText === selectedCategory || (selectedCategory === 'All' && button.innerText === 'All')) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function filterData() {
  filteredData = data.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

function handleSearch() {
  const searchInput = document.getElementById('searchInput');
  searchQuery = searchInput.value;
  filterData();
  currentPage = 1;
  renderCards(currentPage);
  renderPagination();
  updatePagination();
}

function renderCards(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = filteredData.slice(start, end);

  const cardContainer = document.getElementById('cardContainer');
  cardContainer.innerHTML = '';

  paginatedItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-img-container">
        <img src="${item.img}" alt="${item.name}" />
      </div>
      <h4>${item.name}</h4>
      <p>${item.price}</p>
    `;
    cardContainer.appendChild(card);
  });
}

function renderPagination() {
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const paginationContainer = document.getElementById('paginationContainer');
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= pageCount; i++) {
    const button = document.createElement('button');
    button.className = 'page';
    button.innerText = i;
    button.addEventListener('click', function() {
      currentPage = i;
      renderCards(currentPage);
      updatePagination();
    });
    paginationContainer.appendChild(button);
  }
}

function updatePagination() {
  const buttons = document.querySelectorAll('.pagination .page');
  buttons.forEach((button, index) => {
    if (index + 1 === currentPage) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

fetchData();

document.getElementById('searchInput').addEventListener('input', handleSearch);

// Ekspor fungsi untuk modul
export const dataDestinasi = data; 
export { filterCategory };