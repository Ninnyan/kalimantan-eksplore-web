import KalimantanSource from "../../../data/kalimantanAPI"
import API_ENDPOINT from "../../../globals/api_endpoint"

const manajemenWisata = {
    async _init() {
        const result = await KalimantanSource.dataAllWisata();
        const data = result.result;
        this._addButtonInit();
        this._renderSlideWisata(data);
        this._searchInputInit(data);
        this._populateDropdown(data)
    },

    async _renderSlideWisata(dataWisata) {
        const tBody = document.querySelector('.tabel-card');
        tBody.innerHTML = ''; // Clear existing content

        for (const data of dataWisata) {
            const dataPhoto = await KalimantanSource.dataPhoto(data.id_wisata, data.img);
            const cardTr = document.createElement('tr');
            cardTr.className = 'slide-page';
            cardTr.innerHTML = `
                <td><img src="${dataPhoto}" alt="${data.name}"></td>
                <td>${data.name}</td>
                <td>${data.deskripsi.substring(0, 18)}... </td>
                <td>${data.category}</td>
                <td>${data.price}</td>
                <td>08.00 - 12.00</td>
                <td>
                    <button class="look-wisata" data-id="${data.id_wisata}"><i class="fa-solid fa-eye"></i></button>
                    <button class="edit-wisata" data-id="${data.id_wisata}"><i class="fa-solid fa-pencil"></i></button>
                    <button class="hapus-wisata" data-id="${data.id_wisata}"><i class="fa-solid fa-trash-can"></i></button>
                </td>
            `;
            tBody.append(cardTr);
        }

        this._lookProfileWisataInit();
        this._editWisataInit();
        this._deleteWisataInit();
        this._pageInit();
    },
    _addButtonInit() {
        const addButton = document.querySelector('.add-wisata')
        const containerMain = document.querySelector('.container-main')
        const pageButton = document.querySelector('.page')
        const containerTambahWisata = document.querySelector('.container-tambah-wisata')
        const batalButton = document.querySelector('.batal')
            
        addButton.addEventListener('click', (event) => {
            const changebuttonTambah = document.querySelector('.tambah')
            event.preventDefault()

            containerMain.style.display = 'none'
            pageButton.style.display = 'none'
            containerTambahWisata.style.display = 'block'
            changebuttonTambah.classList.remove('edit')
            this._addDataWisata()
        })

        batalButton.addEventListener('click', (event) => {
            event.preventDefault()

            containerMain.style.display = 'grid'
            pageButton.style.display = 'flex'
            containerTambahWisata.style.display = 'none'
        })

    },

   _lookProfileWisataInit() {
        const lookButton = document.querySelectorAll('.look-wisata')
        const containerMain = document.querySelector('.container-main')
        const pageButton = document.querySelector('.page')
        const containerProfile = document.querySelector('.container-profil-wisata')
        lookButton.forEach((button) => {
            button.addEventListener('click', async (event) => {
                event.preventDefault()
                containerProfile.innerHTML = ''
                const detailWisata = await KalimantanSource.detailWisata(button.getAttribute('data-id'))

                const profileCard = document.createElement('div')
                const buttonKembali = document.createElement('button')
                buttonKembali.classList = 'kembali'
                buttonKembali.innerHTML = 'Kembali'
                profileCard.className = 'profile-wisata'
                const dataPhoto1 = await KalimantanSource.dataPhoto(detailWisata.result.id, detailWisata.result.photos_1)
                const dataPhoto2 = await KalimantanSource.dataPhoto(detailWisata.result.id, detailWisata.result.photos_2)
                const dataPhoto3 = await KalimantanSource.dataPhoto(detailWisata.result.id, detailWisata.result.photos_3)
                profileCard.innerHTML = `
                    <div class="nama-container">
                        <h1 class="judul-nama-wisata">Nama Destinasi</h1>
                        <span class="namas-wisata">${detailWisata.result.name}</span>
                    </div>
                    <div class="deskripsi-container">
                        <h1 class="judul-deskripsi">Deskripsi Destinasi Wisata</h1>
                        <span class="deskripsi-wisata">${detailWisata.result.deskripsi}</span>
                    </div>
                    <div class="alamat-container">
                        <h1 class="judul-alamat">Alamat Destinasi</h1>
                        <span class="alamat-wisata">${detailWisata.result.address}</span>
                    </div>
                    <div class="jam-container">
                        <h1 class="judul-jam">Jam Operasional</h1>
                        <span class="jam-wisata">${detailWisata.result.jam_operasional}</span>
                    </div>
                    <div class="harga-container">
                        <h1 class="judul-harga">Harga Tiket Masuk</h1>
                        <span class="harga-wisata"><strong>Rp</strong> ${detailWisata.result.harga_tiket}</span>
                    </div>
                    <div class="gambar-container">
                        <img src="${dataPhoto1}" alt="">
                        <img src="${dataPhoto2}" alt="">
                        <img src="${dataPhoto3}" alt="">
                    </div>
                `

                containerProfile.append(buttonKembali,profileCard)

                containerMain.style.display = 'none'
                pageButton.style.display = 'none'
                containerProfile.style.display = 'flex'
                
                buttonKembali.addEventListener('click', (event) => {
                    event.stopPropagation()

                    containerMain.style.display = 'grid'
                    pageButton.style.display = 'flex'
                    containerProfile.style.display = 'none'
                })
            })
        })

        
    },

    _editWisataInit() {
        const editButton = document.querySelectorAll('.edit-wisata')
        const containerMain = document.querySelector('.container-main')
        const pageButton = document.querySelector('.page')
        const containerTambahWisata = document.querySelector('.container-tambah-wisata')
        const batalButton = document.querySelector('.batal')


        editButton.forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault()

                containerMain.style.display = 'none'
                pageButton.style.display = 'none'
                containerTambahWisata.style.display = 'block'

                const changeJudulTambah = document.querySelector('.judul-tambah')
                const changebuttonTambah = document.querySelector('.tambah')

                changeJudulTambah.innerText = 'Edit Data Destinasi Wisata'
                changebuttonTambah.innerText = 'Edti Wisata'
                changebuttonTambah.classList.add('edit')
                this._editDataWisata(button.getAttribute('data-id'))
            })
        })

        batalButton.addEventListener('click', (event) => {
            event.preventDefault()

            containerMain.style.display = 'grid'
            pageButton.style.display = 'flex'
            containerTambahWisata.style.display = 'none'
        })
      
    },

    _deleteWisataInit() {
        const deleteButton = document.querySelectorAll('.hapus-wisata')

        deleteButton.forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault()
                
                Swal.fire({
                    title: 'Anda Yakin, Hapus Data ini ?',
                    text: "Anda Tidak Dapat kembali !",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Hapus Data!',
                    cancelButtonText: 'No, Batal!',
                    reverseButtons: true
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        const hapus = await KalimantanSource.deleteDataWisata(button.getAttribute('data-id'))
                        Swal.fire(
                            'Deleted!',
                            'Data Berhasil Dihapus.',
                            'success'
                        )
                        return
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                        Swal.fire(
                            'Cancelled',
                            'Data Anda Aman :)',
                            'error'
                        )
                    }
                })
            })
        })
    },

    _pageInit(data) {
        const pageButtonRight = document.querySelector('.right')
        const pageButtonLeft = document.querySelector('.left')
        const page = document.querySelector('.page-number')
        let afterPage = 4
        let beforePage = 0
        const daftarWisata = document.querySelectorAll('.slide-page')
        const slicedDaftarWisata = Array.from(daftarWisata).slice( afterPage)

        slicedDaftarWisata.forEach((data) => {
            data.classList.add('hilang')
        })
    
        pageButtonLeft.addEventListener('click', (event) => {
            event.preventDefault()
            pageButtonRight.removeAttribute('disabled')
            
            const changeNumber = Number(page.innerHTML)
     
            if (changeNumber <= 1) {
                pageButtonLeft.setAttribute('disabled', '')
            } else {
                afterPage -= 4
                beforePage -= 4
                page.innerHTML = changeNumber - 1
                const slicedDaftarWisata2 = Array.from(daftarWisata).slice(beforePage, afterPage)
                daftarWisata.forEach((data) => {
                    data.classList.add('hilang')
                })
    
                slicedDaftarWisata2.forEach((data) => {
                    data.classList.remove('hilang')
                })
            }
      
        })
            
        pageButtonRight.addEventListener('click', (event) => {
            event.preventDefault()
            pageButtonLeft.removeAttribute('disabled')
    
            const changeNumber = Number(page.innerHTML)
    
            if(daftarWisata.length <= afterPage) {
                pageButtonRight.setAttribute('disabled', '')
            } else {
                afterPage += 4 
                beforePage += 4
                page.innerHTML = changeNumber + 1
                const slicedDaftarWisata2 = Array.from(daftarWisata).slice(beforePage, afterPage)
                daftarWisata.forEach((data) => {
                    data.classList.add('hilang')
                })
    
                slicedDaftarWisata2.forEach((data) => {
                    data.classList.remove('hilang')
                })
            }
    
           
        })
    }, 

    _searchInputInit() {
        const search = document.querySelector('.input-search');

        search.addEventListener('input', async () => {
            const searchTerm = search.value.toLowerCase();
            const result = await KalimantanSource.dataAllWisata();

            const filteredResults = result.result.filter((data) => 
                data.name.toLowerCase().includes(searchTerm)
            );
            this._renderSlideWisata({ result: filteredResults });
        });
    },

    _addDataWisata() {
        const buttonTambah = document.querySelector('.tambah');
        const nameValue = document.getElementById('nama-input');
        const provinsiValue = document.getElementById('provinsi-input');
        const deskripsiValue = document.getElementById('deskripsi-input');
        const jamOperasionalValue = document.getElementById('jam-operasional-input');
        const tiketValue = document.getElementById('tiket-input');
        const uploadValue = document.getElementById('upload-gambar');
        
        buttonTambah.addEventListener('click', async (event) => {
            event.stopPropagation();
            event.preventDefault();

            // Validasi Input
            if (!nameValue.value || !provinsiValue.value || !deskripsiValue.value || !jamOperasionalValue.value || !tiketValue.value || uploadValue.files.length === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Semua input harus diisi!',
                });
                return;
            }

            const formData = new FormData();

            // Loop through each selected file and append it to the FormData object
            for (const file of uploadValue.files) {
                formData.append('photos', file);
            }
            formData.append('name', nameValue.value);
            formData.append('provinsi', provinsiValue.value);
            formData.append('deskripsi', deskripsiValue.value);
            formData.append('jam_operasional', jamOperasionalValue.value);
            formData.append('harga_tiket', tiketValue.value);

            try {
                const result = await KalimantanSource.addDataWisata(formData);
                if (result && result.status === 'Ok') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Berhasil Menambahkan!',
                        text: 'Data wisata berhasil ditambahkan!',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: result.message || 'Terjadi kesalahan saat menambahkan data.',
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: error.message || 'Terjadi kesalahan saat menambahkan data.',
                });
            }
        });
                
    },

    _editDataWisata(idWisata) {
        let data = {}
        const buttonTambah = document.querySelector('.edit')
        const nameValue = document.getElementById('nama-input')
        const provinsiValue = document.getElementById('provinsi-input')
        const deskripsiValue = document.getElementById('deskripsi-input')
        const jamOperasionalValue = document.getElementById('jam-operasional-input')
        const tiketValue = document.getElementById('tiket-input')
        const uploadValue = document.getElementById('upload-gambar')

        
        buttonTambah.addEventListener('click', async (event) => {

            event.stopPropagation();
            event.preventDefault();

            // Validasi Input
            if (!nameValue.value || !provinsiValue.value || !deskripsiValue.value || !jamOperasionalValue.value || !tiketValue.value || uploadValue.files.length === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Semua input harus diisi!',
                });
                return;
            }

            const formData = new FormData();

            // Loop through each selected file and append it to the FormData object
            for (const file of uploadValue.files) {
                formData.append('photos', file);
            }
            formData.append('name', nameValue.value);
            formData.append('provinsi', provinsiValue.value);
            formData.append('deskripsi', deskripsiValue.value);
            formData.append('jam_operasional', jamOperasionalValue.value);
            formData.append('harga_tiket', tiketValue.value);

            try {
                const result = await KalimantanSource.editDataWisata(formData, idWisata);
                if (result && result.status === 'Ok') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Berhasil Menambahkan!',
                        text: 'Data wisata berhasil ditambahkan!',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: result.message || 'Terjadi kesalahan saat menambahkan data.',
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: error.message || 'Terjadi kesalahan saat menambahkan data.',
                });
            }
       
            
        })

            
    },

    _populateDropdown(data) {
        let currentPage = 1
        const provinces = [...new Set(data.map(item => item.category))];
        const provinsiDropdown = document.getElementById('provinsiDropdown');
        const allOption = document.createElement('a');
        allOption.className = 'dropdown-item';
        allOption.href = '/#/admin-manage-wisata';
        allOption.textContent = 'Tampilkan Semua';
        allOption.addEventListener('click', () => {
          currentPage = 1;
          this._renderSlideWisata(data);
        });
        provinsiDropdown.appendChild(allOption);
        
        provinces.forEach(province => {
          const option = document.createElement('a');
          option.className = 'dropdown-item';
          option.href = '/#/admin-manage-wisata';
          option.textContent = province;
          option.addEventListener('click', () => {
            const filteredData = data.filter(item => item.category === province);
            currentPage = 1;
            this._renderSlideWisata(filteredData);
          });
          provinsiDropdown.appendChild(option);
        });
      },
}


export default manajemenWisata