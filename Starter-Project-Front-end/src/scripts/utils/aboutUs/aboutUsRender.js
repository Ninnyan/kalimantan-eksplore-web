class aboutUs extends HTMLElement {
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
            font-family: "poppins",arial;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: #f9f9f9;            
        }

        main {
            height: 100%;
        }
        .container {
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            padding: 20px;
            height: 100%;
        }
        .text-section {
            flex: 1;
            min-width: 300px;
            max-width: 600px;
            padding: 20px;
        }
        .text-section h1 {
            color: #007D46;
            font-size: 40px;
            margin-top: 70px;
        }
        .text-section p {
            line-height: 1.6;
            color: #333;
        }
        .cta-button {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            border: 2px solid #00b167;
            color: #00b167;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: background-color 0.3s, color 0.3s;
        }
        .cta-button:hover {
            background-color: #00b167;
            color: white;
        }
        .logo-section {
            flex: 1;
            min-width: 300px;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }
        .logo-section img {
            max-width: 100%;
            height: auto;
        }
        .social-media-profil {
            margin-top: 15px;
        }
        .social-media-profil a {
            margin: 0 10px;
            color: #00b167;
            text-decoration: none;
            font-size: 35px;
        }
        .social-media-profil a:hover {
            color: #007d4f;
        } 
        @media (max-width: 768px) {
            .container {
                flex-direction: column;
                text-align: center;
            }
            .text-section, .logo-section {
                max-width: 100%;
            }
        } 
          
  
  

        `
    }

    render() {
        this.classList.add('container')
        this.innerHTML = `
        <div class="text-section">
          <h1>Tentang Kami</h1>
          <p>
            Aplikasi "Kalimantan Explore: Wisata Berkelanjutan" adalah solusi digital untuk memudahkan wisatawan dalam memesan tiket masuk ke tempat-tempat wisata di Kalimantan secara online. Aplikasi ini dirancang untuk meningkatkan
            aksesibilitas dan efisiensi dalam industri pariwisata di Kalimantan, serta mendukung pariwisata berkelanjutan dan pelestarian budaya serta lingkungan setempat. Melalui aplikasi ini, wisatawan dapat menemukan informasi tentang
            destinasi wisata berkelanjutan, memesan paket wisata, dan belajar tentang praktik ramah lingkungan. Operator wisata dapat mengelola reservasi dan mempromosikan paket wisata, sementara masyarakat lokal mendapatkan manfaat ekonomi
            dari peningkatan kunjungan wisatawan.
          </p>
          <a href="/#/home" class="cta-button">Ayo Explore Sekarang!</a>
          <div class="social-media-profil">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
          </div>
        </div>
        <div class="logo-section">
          <img src="..//public/images/heros/logo-one.png" alt="Kalimantan Explore Logo" />
        </div>
    `

      this._updateStyle()
      const main = document.querySelector('main')
      main.append(this._style)
    }    
    
}

customElements.define('about-us', aboutUs)