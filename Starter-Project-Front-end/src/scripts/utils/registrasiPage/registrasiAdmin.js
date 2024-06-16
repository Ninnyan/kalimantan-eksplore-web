

class registrasiAdmin extends HTMLElement {
    constructor() {
        super()
        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render()
    }

    _updateStyle() {
        this._style.textContent = `

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
        .container {
        display: flex;
        width: 100%;
        height: 100%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        overflow: hidden;
        background-color: #f0fffa;
        }
        .image-section {
        flex: 1;
        background-image: url("..//public/images/heros/tanjung-puting.jpg");
        background-size: cover;
        background-position: center;
        }
        .form-text {
        color: #43edb2;
        font-size: 14px;
        margin-top: 20px;
        width: 100%;
        text-align: center;
        }
        .logo{
            margin-bottom: 20px;
            align-items: left;
        }
        .logo img{
            max-width: 100px;
            max-height: 50px;
        }
        .form-text{
            color: #101211;
        }
        .form-text a {
        text-decoration: none;
        font-weight: 600;
        color: #43EDB2;
        }
        .form-text a:hover{
            color: #17ad78;
        }
        .form-section {
        flex: 1;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        }

        form {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        }

        .form-section h2 {
        margin: 0 0 0px;
        color: #12563e;
        }
        .form-section p {
        margin: 0 0 30px 0;
        color: #007d46;
        }
        .form-section input, .form-section select  {
        width: 375px;
        max-width: 400px;
        font-size:14px;
        color: #7A9D74;
        padding: 10px 15px;
        margin: 10px 0;
        border-radius: 4px;
        box-sizing: border-box;
        background: #d6fff1;
        border: none;
        box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
        }
        .form-section button {
        margin-top: 45px;
        width: 100%;
        max-width: 400px;
        padding: 10px;
        background-color: #1abc9c;
        border: none;
        border-radius: 4px;
        color: white;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        box-sizing: border-box;
        }
        .form-section button:hover {
        background-color: #16a085;
        }

        @media (max-width: 768px) {
        .container {
            flex-direction: column;
        }
        .image-section {
            height: 50%;
        }
        .form-section {
            height: 50%;
        }


        `
    }

    render() {
        this._updateStyle()
        this.innerHTML = `
            <div class="container">
                <div class="image-section"></div>
                <div class="form-section">
                    <div class="logo">
                    <img src="..//public/images/heros/logo.png" alt="" />
                    </div>
                    <h2 style="margin-bottom: 10px">Buat akun Anda</h2>
                    <form action="#">
                    <input type="text" class="form-control nama" placeholder="Nama lengkap" />
                    <input type="tel" class="form-control phone" id="phone" name="phone" pattern="[0-9]*" inputmode="numeric" maxlength="15" placeholder="Masukkan nomor HP Anda" required />
                    <div class="select">
                        <select required id="gender" aria-label="Default select example">
                        <option value="" disabled selected>Jenis kelamin</option>
                        <option value="laki-laki">Laki-laki</option>
                        <option value="perempuan">Perempuan</option>
                        </select>
                    </div>
                    <input class="email" type="email" placeholder="Email" required />
                    <input class="password" type="password" placeholder="Password" required />
                    <input class="admin" type="password" placeholder="Masukkan key-admin" required />
                    <button class="registerBt" type="button">Daftar</button>
                    </form>
                    <div class="form-text">Sudah punya akun? <a href="/#/login-admin" class="create-account">Masuk akun</a></div>
                </div>
                </div>`

        this.append(this._style)
    }    
    
}

customElements.define('register-admin', registrasiAdmin)