

class registrasiUser extends HTMLElement {
    constructor() {
        super()
        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render()
    }

    _updateStyle() {
        this._style.textContent = `
        body, html {
  height: 100%;
  margin: 0;
}

body {
    margin: 0;
    font-family: "poppins", arial;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #f0fffa;
    }
    main {
    height: 100%;
    }
.login-container {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.form-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 75px;
  width: 100%;
  max-width: 600px;
  background-color: #F1FFF9;
}

.form-section img {
  width: 150px;
  margin-bottom: 20px;
}

.form-section h2 {
  margin-bottom: 5px;
  font-family: "poppins",calibri;
  font-weight: 600;
  color: #007D46;
}

.form-section .logo {
  margin-bottom: 20px;
  font-family: "poppins",calibri;
  font-weight: 600;
  color: #007D46;
}

.form-section p {
  margin-bottom: 30px;
  color: #007D46;
}

.form-control {
  border-radius: 10px;
  padding: 20px 20px;
  border: none;
  background-color: #D5FFCE;
  margin-bottom: 20px;
  height: 50px;
  width: 100%;
}

.form-controll {
  border-radius: 10px;
  padding: 0 20px;
  border: none;
  background-color: #D5FFCE;
  margin-bottom: 20px;
  height: 50px;
  width: 100%;
}

.form-select{
  background-color: #D5FFCE;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: none;
  color: #6c757d;
  font-size: 14px;
}

.form-select:focus {
  box-shadow: none;
  border-color: #2a9d8f;
}
.form-controll:focus {
  box-shadow: none;
  border-color: #2a9d8f;
}

.form-control:focus {
  box-shadow: none;
  border-color: #2a9d8f;
}

.form-control::placeholder {
  color: #6c757d;
}

.btn-primary {
  background-color: #55E93D;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #2fc118;
}

.form-text {
  color: #6c757d;
  font-size: 14px;
  margin-bottom: 20px;  
  width: 100%;
  text-align: right;
}

.forgot-password,
.create-account {
  color: #55E93D;
  font-size: 14px;
  text-align: center;
}

.forgot-password:hover,
.create-account:hover {
  text-decoration: underline;
}

.image-section {
  display: none;
  background: url("..//public/images/heros/tanjung-puting.jpg") no-repeat center center/cover;
}

@media (min-width: 768px) {
  .image-section {
    display: block;
    flex: 1;
  }
}
        `
    }

    render() {
        this._updateStyle()
        this.innerHTML = `
            <div class="login-container">
            <div class="form-section">
                <img src="..//public/images/heros/logo.png" alt="logo kalimantan explore" />
                <h2 class="logo">Buat akun Anda</h2>
                <form action="#">
                <input type="text" class="form-control nama" placeholder="Nama lengkap" />
                <input type="tel" class="form-control phone" id="phone" name="phone" pattern="[0-9]*" inputmode="numeric" maxlength="15" placeholder="Masukkan nomor HP Anda" required />
                <div class="form-controll">
                    <select class="form-select" id="gender" aria-label="Default select example">
                    <option value="" disabled selected>Jenis Kelamin</option>
                    <option value="laki-laki">Laki-laki</option>
                    <option value="perempuan">Perempuan</option>
                    </select>
                </div>
                <input type="email" class="form-control email" placeholder="Email" />
                <input type="password" class="form-control password" placeholder="Password" />
                <a href="/#/login-user">
                <button type="button" class="btn btn-primary btn-block">Daftar</button>
                </a>
                </form>
                <div class="form-text text-center mt-3">Sudah punya akun? <a href="/#/login-user" class="create-account">Masuk akun</a></div>
            </div>
            <div class="image-section"></div>
            </div>`

        this.append(this._style)
    }    
    
}

customElements.define('register-user', registrasiUser)