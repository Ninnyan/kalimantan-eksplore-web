import KalimantanSource from "../../data/kalimantanAPI";
import kelolaTiketInit from "../../utils/kelolaTiket/initiator/kelolaTiketInit";
import manajemenWisata from "../../utils/manageWisata/initiator/manageWisataInit";
import registrasiAdminInit from "../../utils/registrasiPage/initiator/registrasiAdminInit";

const ManageWisata = {
    async renderAdmin() {
        return `
        <main>
            <custom-navbar></custom-navbar>
            <custom-sidebar></custom-sidebar>
            <div class="container-main">
                <h1 class="judul-utama">Manajemen Wisata</h1>
                <button class="add-wisata"><p><i class="fa-solid fa-plus"></i> Tambah Object Destinasi</p></button>
                <div class="wisata-manage">
                    <div class="search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" class="input-search" placeholder="Cari nama objek wisata....">
                    </div>
                    <div class="filter-container">
                        <div class="dropdown">
                        <button class="btn btn-success dropdown-toggle" type="button" id="filterButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa-solid fa-filter"></i> Filter
                        </button>
                        <div class="dropdown-menu" aria-labelledby="filterButton" id="provinsiDropdown">
                            <!-- pilihan kategori sesuai Provinsi  -->
                        </div>
                        </div>
                    </div>
                    <div class="tabel">
                        <table >
                            <thead>
                            <tr>
                                <th>Gambar</th>
                                <th>Nama Destinasi</th>
                                <th>Deskripsi</th>
                                <th>Provinsi</th>
                                <th>Harga Tiket</th>
                                <th>Jam Operasional</th>
                                <th>Aksi</th>
                            </tr>
                            </thead>
                            <tbody class="tabel-card">
                            <slide-wisata></slide-wisata>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="page">
                <button class="left" disabled><i class="fa-solid fa-caret-left"></i></button>
                <p class="page-number">1</p>
                <button class="right"><i class="fa-solid fa-caret-right"></i></button>
            </div>
              <div class="container-tambah-wisata">
                <h1 class="judul-tambah">Tambah Destinasi Wisata</h1>
                <div class="form-tambah">
                    <form action="">
                        <div class="nama-container">
                            <label for="nama-input">Nama Destinasi Wisata</label>
                            <input type="text" id="nama-input" name="nama-input" required>
                        </div>
                        <div class="provinsi-container">
                            <label for="provinsi-input">Provinsi Destinasi Wisata</label>
                            <input type="text" id="provinsi-input" name="provinsi-input" required>
                        </div>
                        <div class="deskripsi-container">
                            <label for="deskripsi-input">Deskripsi Destinasi Wisata</label>
                            <input type="text" id="deskripsi-input" name="deskripsi-input" required>
                        </div>
                        <div class="jam-container">
                            <label for="jam-operasional-input">Jam Operasional Destinasi Wisata</label>
                            <input type="text" id="jam-operasional-input" name="jam-operasional-input" required>
                        </div>
                        <div class="tiket-container">
                            <label for="tiket-input">Harga Tiket Masuk</label>
                            <input type="number" id="tiket-input" name="tiket-input" required>
                        </div>
                        <div class="upload-container">
                            <label for="upload-gambar">Upload Gambar</label>
                            <input type="file" id="upload-gambar" name="upload-gambar" multiple required>
                        </div>
                        <button class="tambah">Tambah Destinasi</button>
                        <button class="batal">Batal</button>
                    </form>
                </div>
            </div>
            
            <div class="container-profil-wisata">

            </div>
            <style-manage></style-manage>
            <custom-footer></custom-footer>

        </main>
        `
    },

    async afterRenderAdmin() {
        const tokenAdmin = localStorage.getItem('tokenAdmin')
        if(tokenAdmin === null) {
          Swal.fire({
            icon: 'info',
            title: 'Info!',
            text: `Anda Tidak bisa mnegakses ini, silahkan login sebagai admin !`,
          });
          return
        } else {
            manajemenWisata._init()
        }
    }
}

export default ManageWisata