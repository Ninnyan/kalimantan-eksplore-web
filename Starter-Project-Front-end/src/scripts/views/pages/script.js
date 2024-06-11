document.addEventListener('DOMContentLoaded', function() {
    var userIcon = document.querySelector('.user-icon a');
    var dropdownMenu = document.querySelector('.dropdown-menu');
    var hamburgerMenu = document.getElementById('hamburgerMenu');
    var navCenter = document.getElementById('navCenter');

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

    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
    });
});

document.getElementById('exploreButton').addEventListener('click', function() {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
});

const script = {}; // Definisikan script sebagai objek kosong atau sesuai kebutuhan Anda

export default script


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
