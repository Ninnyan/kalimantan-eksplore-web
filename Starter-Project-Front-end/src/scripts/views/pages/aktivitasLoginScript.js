

let currentPage = 1;
const itemsPerPage = 5;
let data = [];
let filteredData = [];

document.addEventListener('DOMContentLoaded', function() {
  fetch('../../../data/dataTestAdmin.json')
    .then(response => response.json())
    .then(json => {
      data = json;
      filteredData = data;  // Initial filter set to all data
      displayPage(currentPage);
      setupPagination(filteredData.length);
    });
});

function displayPage(page) {
  const tbody = document.getElementById('userTableBody');
  tbody.innerHTML = '';
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedData = filteredData.slice(start, end);

  paginatedData.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.nama}</td>
      <td>${user.email}</td>
      <td>${user.noTelpon}</td>
      <td>${user.jenisKelamin}</td>
      <td>${user.tanggal}</td>
      <td class="${user.aktifitas === 'Login' ? 'status-login' : 'status-logout'}">
        <div class="user-${user.aktifitas.toLowerCase()}"><p>${user.aktifitas}</p></div>
      </td>
    `;
    tbody.appendChild(row);
  });

  updatePaginationState(page);
}

function setupPagination(totalItems) {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const li = document.createElement('li');
    li.classList.add('page-item');
    if (i === currentPage) {
      li.classList.add('active'); // Menambahkan kelas active pada halaman saat ini
    }
    li.innerHTML = `<a class="page-link" href="#" onclick="changePage(${i})">${i}</a>`;
    pagination.appendChild(li);
  }
}

function changePage(page) {
  currentPage = page;
  displayPage(page);
}

function filterGender(gender) {
  if (gender === '') {
    filteredData = data;
  } else {
    filteredData = data.filter(user => user.jenisKelamin === gender);
  }

  currentPage = 1; // Reset to the first page after filtering
  setupPagination(filteredData.length);
  displayPage(currentPage);
}

function updatePaginationState(page) {
  const paginationItems = document.querySelectorAll('.page-item');
  paginationItems.forEach(item => {
    item.classList.remove('active'); // Menghapus kelas active dari semua elemen pagination
    if (parseInt(item.innerText) === page) {
      item.classList.add('active'); // Menambahkan kelas active pada halaman yang saat ini aktif
    }
  });
}
