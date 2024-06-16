import KalimantanSource from "../../data/kalimantanAPI";
import kelolaTiketInit from "../../utils/kelolaTiket/initiator/kelolaTiketInit";
import registrasiAdminInit from "../../utils/registrasiPage/initiator/registrasiAdminInit";

const KelolaTiket = {
    async renderAdmin() {
        return `
            <custom-navbar></custom-navbar>
            <custom-sidebar></custom-sidebar>
            <div class="content">
                <div class="header-tiket">
                <h2>Pengelolaan Tiket</h2>
                <div class="filter-container">
                    <div class="dropdown">
                    <button class="btn btn-success dropdown-toggle" type="button" id="filterButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa-solid fa-filter"></i> Filter
                    </button>
                    <div class="dropdown-menu" aria-labelledby="filterButton" id="provinsiDropdown">
                        <!-- pilihan kategori sesuai Provinsi  -->
                    </div>
                    </div>
                    <input type="text" id="searchInput" placeholder="cari nama destinasi...">
                </div>
                </div>
                <div class="container-tiket">
                <table id="tiketTable" class="table table-borderless table-custom">
                    <thead>
                    <tr>
                        <th class="border-left">Nama Destinasi</th>
                        <th>Provinsi</th>
                        <th>Jam Operasional</th>
                        <th>Harga Tiket</th>
                        <th>Stock</th>
                        <th class="border-right">Aksi</th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- Data akan dimuat di sini -->
                    </tbody>
                </table>
                <nav>
                    <ul class="pagination" id="pagination">
                    <!-- Pagination  -->
                    </ul>
                </nav>
                </div>
            </div>
            <custom-footer></custom-footer>

            <!-- Modal -->
            <div class="modal fade" id="editStockModal" tabindex="-1" role="dialog" aria-labelledby="editStockModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="editStockModalLabel">Edit Jumlah Stock</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                    <form id="editStockForm">
                        <div class="form-group">
                        <label for="stockInput">Jumlah Stock</label>
                        <input type="number" class="form-control" id="stockInput" required>
                        </div>
                        <button type="submit" class="btn btn-success"><i class="fa-solid fa-check"></i> Simpan</button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
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
        }
        kelolaTiketInit._init()
    }
}

export default KelolaTiket