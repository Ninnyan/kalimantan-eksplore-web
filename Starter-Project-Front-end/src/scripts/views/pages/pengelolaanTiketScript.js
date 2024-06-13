document.addEventListener('DOMContentLoaded', function() {
  const data = [
    {
      "nama_destinasi": "Bukit Batu",
      "provinsi": "Kalimantan Tengah",
      "jam_operasional": "08:00 - 16:00",
      "harga_tiket": "Rp. 10.000",
      "stock": 100
    },
    {
      "nama_destinasi": "Bukit 4",
      "provinsi": "Kalimantan Timur",
      "jam_operasional": "08:00 - 16:00",
      "harga_tiket": "Rp. 10.000",
      "stock": 100
    },
    {
      "nama_destinasi": "Bukit 1",
      "provinsi": "Kalimantan Selatan",
      "jam_operasional": "08:00 - 16:00",
      "harga_tiket": "Rp. 10.000",
      "stock": 100
    },
    {
      "nama_destinasi": "Bukit 2",
      "provinsi": "Kalimantan Barat",
      "jam_operasional": "08:00 - 16:00",
      "harga_tiket": "Rp. 10.000",
      "stock": 100
    },
    {
      "nama_destinasi": "Bukit 6",
      "provinsi": "Kalimantan Utara",
      "jam_operasional": "08:00 - 16:00",
      "harga_tiket": "Rp. 10.000",
      "stock": 100
    },
    {
      "nama_destinasi": "Bukit 7",
      "provinsi": "Kalimantan Utara",
      "jam_operasional": "08:00 - 16:00",
      "harga_tiket": "Rp. 10.000",
      "stock": 100
    },
    {
      "nama_destinasi": "Bukit 8",
      "provinsi": "Kalimantan Utara",
      "jam_operasional": "08:00 - 16:00",
      "harga_tiket": "Rp. 10.000",
      "stock": 100
    },
  ];

  const itemsPerPage = 6;
  let currentPage = 1;
  let filteredData = data;

  const tableBody = document.querySelector('#tiketTable tbody');
  const provinsiDropdown = document.getElementById('provinsiDropdown');
  const searchInput = document.getElementById('searchInput');
  const pagination = document.getElementById('pagination');
  const editStockModal = $('#editStockModal');
  const stockInput = document.getElementById('stockInput');
  let currentEditIndex = null;

  function loadTable(dataToDisplay) {
    tableBody.innerHTML = '';

    if (dataToDisplay.length === 0) {
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      cell.colSpan = 6;
      cell.className = 'text-center';
      cell.textContent = 'Data tidak ada';
      row.appendChild(cell);
      tableBody.appendChild(row);
      return;
    }

    dataToDisplay.forEach((item, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.nama_destinasi}</td>
        <td>${item.provinsi}</td>
        <td>${item.jam_operasional}</td>
        <td>${item.harga_tiket}</td>
        <td>${item.stock}</td>
        <td class="action-buttons">
          <button class="btn btn-edit" data-index="${index}"><i class="fas fa-edit"></i></button>
        </td>
      `;
      tableBody.appendChild(row);
    });

    // Add event listeners to edit buttons
    document.querySelectorAll('.btn-edit').forEach(button => {
      button.addEventListener('click', function() {
        currentEditIndex = parseInt(this.getAttribute('data-index'), 10);
        const currentData = filteredData[currentEditIndex];
        stockInput.value = currentData.stock;
        editStockModal.modal('show');
      });
    });
  }

  function paginate(data, page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }

  function updatePagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement('li');
      li.className = 'page-item';
      if (i === currentPage) {
        li.classList.add('active');
      }
      const a = document.createElement('a');
      a.className = 'page-link';
      a.href = '#';
      a.textContent = i;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = i;
        displayTable();
      });
      li.appendChild(a);
      pagination.appendChild(li);
    }
  }

  function displayTable() {
    const paginatedData = paginate(filteredData, currentPage);
    loadTable(paginatedData);
    updatePagination(filteredData.length);
  }

  function populateDropdown() {
    const provinces = [...new Set(data.map(item => item.provinsi))];
    
    const allOption = document.createElement('a');
    allOption.className = 'dropdown-item';
    allOption.href = '#';
    allOption.textContent = 'Tampilkan Semua';
    allOption.addEventListener('click', () => {
      filteredData = data;
      currentPage = 1;
      displayTable();
    });
    provinsiDropdown.appendChild(allOption);
    
    provinces.forEach(province => {
      const option = document.createElement('a');
      option.className = 'dropdown-item';
      option.href = '#';
      option.textContent = province;
      option.addEventListener('click', () => {
        filteredData = data.filter(item => item.provinsi === province);
        currentPage = 1;
        displayTable();
      });
      provinsiDropdown.appendChild(option);
    });
  }

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    filteredData = data.filter(item => item.nama_destinasi.toLowerCase().includes(searchTerm));
    currentPage = 1;
    displayTable();
  });

  // Handle form submission
  document.getElementById('editStockForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newStock = parseInt(stockInput.value, 10);
    if (!isNaN(newStock) && currentEditIndex !== null) {
      filteredData[currentEditIndex].stock = newStock;
      displayTable();
      editStockModal.modal('hide');
    }
  });

  
  filteredData = data;
  displayTable();
  populateDropdown();
});
