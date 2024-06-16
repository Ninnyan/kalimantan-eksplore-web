import KalimantanSource from "../../data/kalimantanAPI";
import aktivitasInit from "../../utils/aktivitasLogin/initiator/aktivitasLoginInit";
import filterGender from "../../utils/aktivitasLogin/initiator/aktivitasLoginInit";
import registrasiAdminInit from "../../utils/registrasiPage/initiator/registrasiAdminInit";

const AktivitasLogin = {
    async renderAdmin() {
        return `
            <custom-navbar></custom-navbar>
            <custom-sidebar></custom-sidebar>
            <div class="content">
            <div class="aktivitas-header">
                <h3>Aktifitas Login User</h3>
                <div class="dropdown">
                <button class="btn btn-filter dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa-solid fa-filter"></i> Filter
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item laki" href="/#/admin-aktivitas-login"><i class="fa-solid fa-mars"></i> Laki-laki</a>
                    <a class="dropdown-item perem" href="/#/admin-aktivitas-login"><i class="fa-solid fa-venus"></i> Perempuan</a>
                    <a class="dropdown-item all" href="/#/admin-aktivitas-login"><i class="fa-solid fa-venus-mars"></i> Semua</a>
                </div>
                </div>
            </div>
            <div class="riwayat-container">
                <div class="table-responsive">
                <table class="table">
                    <thead>
                    <tr>
                        <th class="left-table">Nama</th>
                        <th>Email</th>
                        <th>No Telpon</th>
                        <th>Jenis kelamin</th>
                        <th>Tanggal</th>
                        <th class="right-table">Aktifitas</th>
                    </tr>
                    </thead>
                    <tbody id="userTableBody">
                    </tbody>
                </table>
                </div>
            </div>
            <div>
                <ul class="pagination" id="pagination"></ul>
                <!-- pagination -->
            </div>
            </div>
            <custom-footer></custom-footer>

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
        aktivitasInit._init()
        const laki = document.querySelector('.laki')
        const perem = document.querySelector('.perem')
        const all = document.querySelector('.all')
        laki.addEventListener('click', () => aktivitasInit.filterGender('Laki-laki'))
        perem.addEventListener('click', () => aktivitasInit.filterGender('Perempuan'))
        all.addEventListener('click', () => aktivitasInit.filterGender(''))
    }
}

export default AktivitasLogin