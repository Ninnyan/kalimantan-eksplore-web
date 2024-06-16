import adminProfileInit from "../../utils/adminProfile/initiator/adminProfileInit"

const AdminEdit = {
    async renderAdmin() {
        return `
                <custom-navbar></custom-navbar>
                <custom-sidebar></custom-sidebar>
                <div class="content">
                <div class="profile-container">
                    <h3>Edit Data Profile</h3>
                    <div class="form-container">
                    <form method="">
                        <div class="form-group">
                        <label for="namaLengkap">Nama lengkap</label>
                        <input type="text" class="form-control" id="namaLengkap" />
                        </div>
                        <div class="form-group">
                        <label for="jenisKelamin">Jenis kelamin</label>
                        <input type="text" class="form-control" id="jenisKelamin" />
                        </div>
                        <div class="form-group">
                        <label for="noHp">No hp</label>
                        <input type="text" class="form-control" id="noHp" />
                        </div>
                        <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" />
                        </div>
                        <div class="button">
                        <button type="button" class="btn btn-simpan" name="save-data"><i class="fa-solid fa-floppy-disk"></i> Simpan</button>
                        <a href="/#/admin-profile">
                            <button type="button" class="btn btn-batal"><i class="fa-solid fa-xmark"></i> Batal</button>
                        </a>
                        </div>
                    </form>
                    </div>
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
        adminProfileInit._editprofileInit()
    }
}

export default AdminEdit