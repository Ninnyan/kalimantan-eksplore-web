import adminProfileInit from "../../utils/adminProfile/initiator/adminProfileInit"

const ProfileAdmin = {
    async renderAdmin() {
        return `
            <custom-navbar></custom-navbar>
            <custom-sidebar></custom-sidebar>
            <div class="content">
                <div class="profile-container">
                <div class="profile-header">
                    <h1>My Profile</h1>
                    <a href="/#/admin-dashboard">
                    <button><i class="fa-solid fa-arrow-left"></i> Kembali</button>
                    </a>
                </div>
                <div class="profile">
                    <div class="profile-details">
                    <div class="profile-section">
                        <div>
                        <span>Nama lengkap</span>
                        <strong id="namaLengkap"></strong>
                        </div>
                        <div>
                        <span>Email</span>
                        <strong id="email"></strong>
                        </div>
                        <div>
                        <span>Password</span>
                        <strong id="password">***********</strong> <i id="togglePassword" class="fa-solid fa-eye" style="cursor: pointer;"></i>
                        </div>
                    </div>
                    <div class="profile-section">
                        <div>
                        <span>Jenis kelamin</span>
                        <strong id="jenisKelamin"></strong>
                        </div>
                        <div>
                        <span>No Hp</span>
                        <strong id="noHp"></strong>
                        </div>
                    </div>
                    </div>
                    <div class="edit-button">
                    <a href="/#/admin-edit">
                        <button><i class="fa-regular fa-pen-to-square"></i> Edit</button>
                    </a>
                    </div>
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
        adminProfileInit._init()
    }
}

export default ProfileAdmin