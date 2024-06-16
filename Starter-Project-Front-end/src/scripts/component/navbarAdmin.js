class CustomNavbar extends HTMLElement {
    constructor() {
      super()
      this._style = document.createElement('style');
    }

    _updateStyle() {
      this._style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

      *{
        font-family: 'poppins',arial;
      }

      .sidebar {
          height: 100%;
          width: 250px;
          position: fixed;
          top: 0;
          left: 0;
          background-color: #1d9f71;
          padding: 20px 0 20px 20px;
          display: block;
          z-index: 1;
        }
        .sidebar .logo {
          margin-bottom: 40px;
          margin-left: 48px;
        }
        .sidebar .logo img {
          max-width: 120px;
          max-height: 50px;
        }
        .sidebar a {
          padding: 15px 0 15px 20px;
          display: flex;
          align-items: center;
          color: white;
          text-decoration: none;
          font-size: 14px;
        }
        .sidebar a:hover{
          text-decoration: none;
          background-color: #fff;
          color: #000100;
          padding: 20px;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
        .sidebar a .material-symbols-outlined {
          margin-right: 10px;
        }
        .sidebar .active {
          background-color: #fff;
          color: #000100;
          padding: 20px;
          font-weight: 500;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
        }

        .navbar{
          margin-left: 18%;
          background-color: #fff;
          box-shadow: rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px;
        }

        .navbar .navbar-brand{
          color: #000;
        }
        .nav-item{
          display: inline-flex;
          align-items: flex-end;
        }

        .nav-item .dropdown-menu{
          background-color: #ffffff;
          padding: 20px;
          border-radius: 5px;
          border: none;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
        }

        .nav-item .dropdown-menu .fa-solid{
          margin-right: 5px;
        }
        .nav-item .dropdown-menu .dropdown-item{
          padding: 7px 14px;
          font-size: 14px;
          font-weight: 500;
        }

        .nav-item .dropdown-menu a:hover{
          background-color: #1d9f71;
          color: #FFFFFF;
          border-radius: 5px;
        }

        .nav-link img{
          max-width: 35px;
          max-height: 35px;
        }

        /* Style untuk konten */
        .content {
          margin-left: 250px;
          padding: 20px;
          height: 100vh;
        }

        .content .card-list{
          display: inline-flex;
          gap: 25px;
          margin: 20px 0 30px 20px;
        }
        .content .card-list .card-admin{
          width: 220px;
          height: 120px;
          padding: 14px;
          border: none;
          border-radius: 10px;
          background-color: #1d9f71;
          box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
          color: #FFFFFF;
        }

        .content .card-list .card-admin h4{
          font-size: 30px;
        }
        .content .card-list .card-admin h5{
          font-size: 20px;
        }
        .content .card-list .card-admin .price{
          font-size: 17px;
          font-weight: 500;
        }

        .content .card-list .card-admin p{
          margin-bottom: 0;
        }

        .content .card-list .card-admin .fa-solid{
          font-size: 40px;
          position: absolute;
          bottom: 0;
          right: 0;
          padding: 15px;
          color: #FFFFFF;
        }

        .content .diagram{
          margin-left: 20px;
        }
        .content .diagram .card-diagram{
          background-color: #ffffff;
          width: 100%;
          height: 380px;
          margin-top: 20px;
          border-radius: 15px;
          padding: 20px;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
        }
        .form-filter select{
          width: 100px;
          height: 35px;
          font-size: 14px;
          border-radius: 10px;
          border: none;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
        }

        canvas {
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
          margin:44px 10px 1px 10px;
        }
        .chart-container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .chart-item {
          width: 45%;
          color: #fff;
        }

        /* Style untuk footer */
        .footer {
          position: relative;
          bottom: 0;
          width: 100%;
          background-color: #CEFFEE;
          color: #1b1616;
          text-align: center;
          padding: 10px 0;
        }
        .footer p{
          margin: 0;
          padding: 10px 20% 10px 40%;
          font-size: 14px;
        }

        /* ======== */
        /* profilAdmin */

        .profile-container{
          margin: 20px;
        }

      .profile {
                  background-color: #fff;
                  border-radius: 10px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  padding: 20px;
                  width: 100%;
                  height: 435px;
                  text-align: left;
              }
              .profile-header {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin-bottom: 20px;
              }
              .profile-header h1 {
                  margin: 0;
                  font-size: 24px;
              }
              .profile-header button {
                font-size: 13px;
                  background-color: #1FBC85;
                  border: none;
                  color: white;
                  padding: 7px 15px;
                  border-radius: 12px;
                  cursor: pointer;
              }
              .profile-header button:hover {
                  background-color: #1d9f71;
              }
                .profile-header button:focus {
                  outline: none;
              }
              .profile-details {
                  display: flex;
                  justify-content: space-between;
              }
              .profile-section {
                  width: 45%;
                  padding: 20px;
              }
              .profile-section .fa-solid{
                padding-left: 50px;
              }
              .profile-section div {
                  margin-bottom: 44px;
              }
              .profile-section span {
                  display: block;
                  font-size: 18px;
                  font-weight: 500;
                  
              }
              .profile-section strong {
                  font-size: 16px;
                  font-weight: 400;
                  color: #777;
              }
              .edit-button {
                  display: flex;
                  justify-content: flex-end;
                  padding: 14px 20px 20px 0;
              }
              .edit-button button {
                font-size: 13px;
                  background-color: #1fbc8500;
                  border: 2px solid #1FBC85;
                  color: #1FBC85;
                  padding: 7px 19px;
                  border-radius: 12px;
                  cursor: pointer;
              }
              .edit-button button:hover {
                  background-color: #1FBC85;
                  color: #FFFFFF;
              }
            .edit-button button:focus {
              outline: none;
              }

      /* ======== */
      /* editprofileAdmin */

      .form-container {
                  background-color: #fff;
                  border-radius: 10px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  padding: 20px;
                  width: 100%;
                  box-sizing: border-box;
                
              }
              .profile-container h3 {
                  margin-bottom: 25px;
                  font-size: 24px;
              }
              .form-container .form-group .form-control {
                  background-color: #c8ffe7;
                  color: #000000;
                  border: none;
                  border-radius: 5px;
              }
              .form-container .button{
                padding-top: 20px;
              }
              .form-container .button .fa-solid{
                margin-right: 5px;
              }
              .form-container .btn-simpan {
                  background-color: #00cc66;
                  color: white;
                  margin-right: 10px;
                  padding: 4px 14px;
                  border-radius: 10px;
                  font-weight: 500;
              }
              .form-container .btn-simpan:hover {
                background-color: #0fa258;
                color: #FFFFFF;
              }
              .form-container .btn-batal {
                  background-color: #eaff00;
                  color: black;
                  padding: 4px 14px;
                  border-radius: 10px;
                  font-weight: 500;
              }
              .form-container .btn-batal:hover {
                background-color: #d8eb0e;
                color: #000000;
                box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
              }


      /* ======== */
      /* aktivitas login */

      .riwayat-container {
        max-width: 100%;
        margin: 10px 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 1px 20px;
      }
      .table-responsive {
        margin-top: 20px;
      }
      .aktivitas-header{
        margin: 20px;
      }
      .aktivitas-header h3{
        font-size: 24px;
      }
      .aktivitas-header .btn-filter{
        margin-top: 17px;
        font-size: 13px;
        border-radius: 5px;
        background-color: #fff;
        border: 2px solid #1d9f71;
        padding: 5px 20px;
        color: #1d9f71;
      }
      .aktivitas-header .btn-filter:hover{
        background-color: #1d9f71;
        border: 2px solid #1d9f71;
        color: #ffffff;
      }
      .content .aktivitas-header .dropdown-menu{
        background-color: #ffffff;
        color:#000000;
        padding: 10px;
        border-radius: 10px;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
      }
      .content .aktivitas-header .dropdown-menu .dropdown-item .fa-solid{
        margin-right: 5px;
      }
      .content .aktivitas-header .dropdown-menu .dropdown-item{
        font-size: 14px;
        font-weight: 500;
        padding: 8px 20px;
      }
      .content .aktivitas-header .dropdown-menu .dropdown-item:hover{
        background-color: #1FBC85;
        color: #ffffff;
        border-radius:5px;
      }


      .table th {
        background-color: #1d9f71;
        color: #ffffff;
        font-weight: 400;
      }
      .table .left-table{
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
      .table .right-table{
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
      .table td {
        vertical-align: middle;
        color: #292929;
        font-size: 14px;
        font-weight: 400;
      }
      .status-login .user-login p {
        background-color: #00cc66;
        color: white;
        border: none;
        width: 65px;
        height: 20px;
        border-radius: 5px;
        text-align: center;
        font-size: 12px;
      }
      .status-logout p {
        background-color: #ff6666;
        color: white;
        border: none;
        width: 65px;
        height: 20px;
        border-radius: 5px;
        text-align: center;
        font-size: 12px;
      }
      .pagination {
        justify-content: center;
        margin-top: 20px;
        font-size: 13px;
      }
      .pagination .page-item .page-link{
        margin-left: 5px;
        background-color: #00994d00;
        color: #00994d;
        border: 2px solid #00994d;
        border-radius: 5px;
        padding: 4px 10px;
      }

      .pagination .page-item.active .page-link {
        background-color: #00994d;
        border: 2px solid #00994d;
        color: #fff;
      }


      /* ======== */
      /* pengelolaan tiket */
      .container-tiket {
        background-color: #fff;
        padding: 20px;
        margin: 20px;
        border-radius: 8px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      }
      .header-tiket {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px;
      }
      .header-tiket h2 {
        margin: 0;
        font-size: 24px;
      }
      .header-tiket .filter-container {
        display: flex;
        gap: 10px;

      }

      .header-tiket .filter-container button {
        background-color: #1d9f71;
        color: #fff;
        border: none;
        padding: 8px 16px;
        font-size: 13px;
        border-radius: 5px;
        cursor: pointer;
      }
      .header-tiket .filter-container button:focus {
        background-color: #1d9f71 !important;
        color: #fff;
        outline: none;
        border:none;
      }
      .header-tiket .filter-container button:active {
        background-color: #0e8259 !important;
        color: #fff;
        outline: none;
        
      }
      .header-tiket .filter-container input {
        padding: 6px 14px;
        border-radius: 5px;
        font-size: 13px;
        border: 2px solid #1d9f71;
      }
      .header-tiket .filter-container input:focus {
        outline: none;
      }
      .header-tiket .filter-container .dropdown .dropdown-menu{
        padding: 10px;
        border-radius: 10px;
        font-size: 14px;
        border:none ;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
      }
      .header-tiket .filter-container .dropdown .dropdown-menu .dropdown-item{
        padding: 10px 20px;
        font-weight: 500;
      }
      .header-tiket .filter-container .dropdown .dropdown-menu .dropdown-item:hover{
        background-color: #1FBC85;
        color: #ffffff;
        border-radius: 10px;
      }

      .container-tiket .table-custom th {
        background-color: #1d9f71;
        color: #ffffff;
        border: none;
      }
      .container-tiket .table-custom .border-left {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
      .container-tiket .table-custom .border-right {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        
      }
      .container-tiket .table-custom th, .table-custom td {
        padding: 12px 15px;
        text-align: left;
      }
      .container-tiket .table-custom tbody tr {
        border-bottom: 1px solid #ddd;
      }
      .container-tiket .table-custom {
        border-collapse: collapse;
      }
      .container-tiket .action-buttons .btn {
        padding: 8px;
        border-radius: 5px;
        cursor: pointer;
      }
      .container-tiket .btn-edit {
        background-color: #FFD600;
        color: #fff;
        font-size: 14px;
        width: 35px;
        height: 36px;
      }
      .container-tiket .btn-edit:hover {
        background-color: #cbab0b;
        color: #fff;
      }
      /* .container-tiket .btn-delete {
        background-color: #D50000;
        color: #fff;
        font-size: 14px;
        width: 35px;
        height: 36px;
      } */

      /* modal style */
      .modal-content{
        border: none;
        border-radius: 10px !important;
      }
      .modal-content .btn-success{
        font-size: 12px;
        border-radius: 10px;
      }
      .modal-content .btn-success .fa-solid{
        padding-right: 5px;
      }
      .modal-content input:focus{
      box-shadow: none;
      border: 2px solid #00994d;
      }
        

      

      `
    }

    connectedCallback() {
      this._updateStyle()
      const body = document.querySelector('body')
      body.append(this._style)
      this.innerHTML = `
        <nav class="navbar navbar-expand-md bg-light">
          <div class="container">
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                  <p>Dicoding Indonesia</p>
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="..//public/images/heros/icon-user.png" class="rounded-circle" alt="User Icon">
                  </a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/#/admin-profile"><i class="fa-solid fa-user"></i> Lihat Profil</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item logout-admin" href="/#/login-admin"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      `;
    }
  }
  
  customElements.define('custom-navbar', CustomNavbar);
  