import KalimantanSource from "../../../data/kalimantanAPI";

const adminProfileInit = {
    async _init() {
          const data = await KalimantanSource.getProfileAdmin()
          const profile = data.profile;
          const passwordElement = document.getElementById('password');
          const togglePassword = document.getElementById('togglePassword');
          
          document.getElementById('namaLengkap').textContent = profile.nama;
          document.getElementById('email').textContent = profile.email;
          passwordElement.textContent = '***********'; // Initially hide the password
          document.getElementById('jenisKelamin').textContent = profile.gender;
          document.getElementById('noHp').textContent = profile.telephone;
  
          togglePassword.addEventListener('click', function() {
            if (passwordElement.textContent === '***********') {
              passwordElement.textContent = profile.password;
              togglePassword.classList.remove('fa-eye');
              togglePassword.classList.add('fa-eye-slash');
            } else {
              passwordElement.textContent = '***********';
              togglePassword.classList.remove('fa-eye-slash');
              togglePassword.classList.add('fa-eye');
            }
          });
    },

    async _editprofileInit() {

      const buttonEdit = document.querySelector('.btn-simpan')
      
      buttonEdit.addEventListener('click', (event) => {
        event.stopPropagation()
        const nama = document.getElementById('namaLengkap').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const gender = document.getElementById('jenisKelamin').value
        const telephone = document.getElementById('noHp').value

        
        const data = {
          nama,
          email,
          password,
          gender,
          telephone
        }
        KalimantanSource.editProfileAdmin(data)
        window.location.href = '/#/admin-profile'

      })
    }
    
    }

    export default adminProfileInit