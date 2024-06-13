document.addEventListener('DOMContentLoaded', function() {
  fetch('../../../data/profileScript.json')
    .then(response => response.json())
    .then(data => {
      const profile = data.profile;
      const passwordElement = document.getElementById('password');
      const togglePassword = document.getElementById('togglePassword');
      
      document.getElementById('namaLengkap').textContent = profile.nama_lengkap;
      document.getElementById('email').textContent = profile.email;
      passwordElement.textContent = '***********'; // Initially hide the password
      document.getElementById('jenisKelamin').textContent = profile.jenis_kelamin;
      document.getElementById('noHp').textContent = profile.no_hp;

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
    })
    .catch(error => console.error('Error fetching profile data:', error));
});
