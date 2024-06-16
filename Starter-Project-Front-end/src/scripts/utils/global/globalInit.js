import KalimantanSource from "../../data/kalimantanAPI";

const globalInit = {
    _init() {

            let userIcon = document.querySelector('.user-icon a');
            let dropdownMenu = document.querySelector('.dropdown-menu');
            let hamburgerMenu = document.getElementById('hamburgerMenu');
            let navCenter = document.getElementById('navCenter');


            userIcon.addEventListener('click', function(event) {
                event.preventDefault();
                dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
            });
        
            document.addEventListener('click', function(event) {
                if (!event.target.closest('.user-icon')) {
                    dropdownMenu.style.display = 'none';
                }
            });
        
            hamburgerMenu.addEventListener('click', function() {
                navCenter.classList.toggle('show');
            });

            let lastScrollTop = 0;
            const navbar = document.getElementById('navbar');

            window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scroll down
                navbar.classList.add('hidden-nav');
            } else {
                // Scroll up
                navbar.classList.remove('hidden-nav');
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
            });

            if (localStorage.getItem('idUser') === null) {
                const dataMenu = `<a href="/#/login-user" class="login-all"><span class="material-symbols-outlined"> login </span>Masuk</a>
              <a href="/#/registrasi-user" class="daftar-all"><span class="material-symbols-outlined"> person_edit </span>Daftar</a>`
                dropdownMenu.innerHTML = ''
                dropdownMenu.innerHTML = dataMenu
            } else {
                const dataMenu = `  <a href="#" class="logout-all"><span class="material-symbols-outlined"> logout </span>Keluar</a>`
                dropdownMenu.innerHTML = ''
                dropdownMenu.innerHTML = dataMenu
            }
        
    }
}




export default globalInit


// document.getElementById('rekomen').addEventListener('click', function() {
//     document.getElementById('rekomendasi').scrollIntoView({ behavior: 'smooth' });
//   });

//   document.addEventListener('DOMContentLoaded', () => {
//     const currentLocation = location.href;
//     const menuItem = document.querySelectorAll('.nav-center li a');
//     const menuLength = menuItem.length;
//     for (let i = 0; i < menuLength; i++) {
//       if (menuItem[i].href === currentLocation) {
//         menuItem[i].className = "active";
//       }
//     }
//   });
