import KalimantanSource from "../../../data/kalimantanAPI";

    
    const itemsPerPage = 6;
    let currentPage = 1;
    let data = []
    let filteredData = data
  


    let currentEditIndex = null;

    const kelolaTiketInit = {
        async _init() {
            const result = await KalimantanSource.getStokTiket()
            data = result.data
            filteredData = result.data
            const stockInput = document.getElementById('stockInput');
            const searchInput = document.getElementById('searchInput');
            const editStockModal = $('#editStockModal');
            this.displayTable()
            this.populateDropdown()
            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.toLowerCase();
                filteredData = data.filter(item => item.nama_destinasi.toLowerCase().includes(searchTerm));
                currentPage = 1;
               this.displayTable();
              });
            
              // Handle form submission

            document.getElementById('editStockForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const setId = document.getElementById('editStockForm')

            const newStock = parseInt(stockInput.value, 10);
            if (!isNaN(newStock) && currentEditIndex !== null) {
                const edit = await KalimantanSource.editStokTiket(setId.getAttribute('data-idWisata'), newStock)
                filteredData[currentEditIndex].stock = newStock;
                this.displayTable();
                editStockModal.modal('hide');
            }
            });
        },
        loadTable(dataToDisplay) {
            const tableBody = document.querySelector('#tiketTable tbody');
            const stockInput = document.getElementById('stockInput');
            tableBody.innerHTML = '';
            const editStockModal = $('#editStockModal');

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
                  <button class="btn btn-edit" data-index="${index}" data-id="${item.id}"><i class="fas fa-edit"></i></button>
                </td>
              `;
              tableBody.appendChild(row);
            });
        
            // Add event listeners to edit buttons
            document.querySelectorAll('.btn-edit').forEach(button => {
              button.addEventListener('click', function() {
                
                const setId = document.getElementById('editStockForm')
                setId.setAttribute('data-idWisata', button.getAttribute('data-id'))
                currentEditIndex = parseInt(this.getAttribute('data-index'), 10);
                const currentData = filteredData[currentEditIndex];

                stockInput.value = currentData.stock;
                editStockModal.modal('show');
              });
            });
          },
        
          paginate(data, page) {
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            return data.slice(start, end);
          },
        
          updatePagination(totalItems) {
            const pagination = document.getElementById('pagination');
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
                this.displayTable();
              });
              li.appendChild(a);
              pagination.appendChild(li);
            }
          },
        
            displayTable() {
            const paginatedData = this.paginate(filteredData, currentPage);
            this.loadTable(paginatedData);
            this.updatePagination(filteredData.length);
          },
        
          populateDropdown() {
            const provinces = [...new Set(data.map(item => item.provinsi))];
            const provinsiDropdown = document.getElementById('provinsiDropdown');
            const allOption = document.createElement('a');
            allOption.className = 'dropdown-item';
            allOption.href = '/#/admin-kelola-tiket';
            allOption.textContent = 'Tampilkan Semua';
            allOption.addEventListener('click', () => {
              filteredData = data;
              currentPage = 1;
              this.displayTable();
            });
            provinsiDropdown.appendChild(allOption);
            
            provinces.forEach(province => {
              const option = document.createElement('a');
              option.className = 'dropdown-item';
              option.href = '/#/admin-kelola-tiket';
              option.textContent = province;
              option.addEventListener('click', () => {
                filteredData = data.filter(item => item.provinsi === province);
                currentPage = 1;
                this.displayTable();
              });
              provinsiDropdown.appendChild(option);
            });
          },
        
          
    }

    
    
    filteredData = [];

    export default kelolaTiketInit
