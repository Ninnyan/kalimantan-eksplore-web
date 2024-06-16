import KalimantanSource from "../../data/kalimantanAPI";
import API_ENDPOINT from "../../globals/api_endpoint";

class detailWisata extends HTMLElement {
    constructor() {
        super()

        this._style = document.createElement('style');
        this.DATA = {
            id: '',
            name: '',
            place_id: '',
            deskripsi: '',
            address: '',
            harga_tiket: '',
            jam_operasional: '',
            photos_1: '',
            photos_2: '',
            photos_3: '',
            map: ''
        }
    }

    connectedCallback() {
        this.render()
    }

    _collectData(DATA, MAP) {
        if (DATA === undefined) {
            alert('Request Timeout: Data Tidak Dapat Diperoleh!')
        } else {
            this.DATA.id = DATA.id
            this.DATA.name = DATA.name
            this.DATA.place_id = DATA.place_id
            this.DATA.deskripsi = DATA.deskripsi
            this.DATA.address = DATA.address
            this.DATA.harga_tiket = DATA.harga_tiket
            this.DATA.jam_operasional = DATA.jam_operasional
            this.DATA.photos_1 = DATA.photos_1
            this.DATA.photos_2 = DATA.photos_2
            this.DATA.photos_3 = DATA.photos_3
            this.DATA.map = MAP
        }
        
        this.render()
    }


    _updateStyle() {
        this._style.textContent = `
         * {
        box-sizing: border-box;
        font-family: 'Poppins';
        } 

        main {
            height: 100%;
            margin-bottom: 20px;
        }
        body {
            display: grid;
            grid-template-rows: auto 1fr auto;
            min-height: 100vh;
        }

        .main-container {
            margin: auto;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        
        .main-title {
            width: 100%;
            font-weight: 600;
            margin-top: 100px;
            font-size: 32px;
            padding-left: 20px;
        }
        
        .container {
            display: grid;
            grid-row: auto;
            gap: 5px;
            justify-content: center;
            align-content: center;
        }
        
        .image-1 > img , .image-2 > img, .image-3 > img {
            border-radius: 10px;
            width: 100%;
            background-size: cover;
            background-position: center;
        }
        
    
        .description > .description-title, .description-destination, .ticket-qty > .ticket-qty-title, .ticket-qty > .container-ticket-button > .ticket-price, .ticket-total > .ticket-total-title, .ticket-total > .container-total-ticket-button > .total, .operation > .operation-time-title, .operation > .operation-time-container, .location > .location-title, .location > .location-deskription-container {
            font-size: 16px;
            width: 100%;
            padding: 14px;
            padding-inline: 24px;
        }
        
        .description > .description-title, .operation > .operation-time-title, .location > .location-title {
            font-size: 18px
        }


        .description, .ticket-qty, .ticket-total, .operation, .location {
            border-radius: 10px;
            box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.55)
        }
        
        .ticket-qty > .ticket-qty-title, .ticket-total > .ticket-total-title  {
            font-size: 18px;
            margin-bottom: 10px;
        }
        
        .ticket-qty > .container-ticket-button, .ticket-total > .container-total-ticket-button, .operation > .operation-time-container  {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        
        .ticket-qty > .container-ticket-button > .ticket-button-qty {
            padding: 3px;
            padding-inline: 15px;
            display: flex;
            flex-direction: row;
            gap: 5px;
        }
        
        .ticket-qty > .container-ticket-button > .ticket-button-qty > .minus-button, .ticket-qty > .container-ticket-button > .ticket-button-qty > .qty, .ticket-qty > .container-ticket-button > .ticket-button-qty > .plus-button {
            width: 34px;
            height: 30px;
            border: 2px solid rgb(92, 225, 92);
            border-radius: 5px;
        }
        
        .ticket-qty > .container-ticket-button > .ticket-button-qty > .qty {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .ticket-qty > .container-ticket-button > .ticket-button-qty > .minus-button, .ticket-qty > .container-ticket-button > .ticket-button-qty > .plus-button {
            background-color: rgb(92, 225, 92);
            color: white;
        }
        
        .ticket-total > .container-total-ticket-button > .order-ticket {
            width: 200px;
            height: 35px;
            border-radius: 10px;
            margin-right: 20px;
            font-size: 15px;
            background-color: black;
            color: white;
        }
        
        .operation > .operation-time-container > span > p {
            font-size: 16px;
        }
        
        .description, .location-deskription-container {
            display: flex;
            flex-direction: column;
        }
        
        .location > .location-deskription-container > .location-on-map, .description > .description-button {
            width: 120px;
            height: 35px;
            background-color: green;
            color: white;
            justify-self: end;
            margin-bottom: 20px;
            border: none;
            border-radius: 10px;
            align-self: end;
        }
        
        .description > .description-button {
            width: 250px;
            margin-inline: 15px;
        }
        
        .description-button, .plus-button, .minus-button, .order-ticket, .location-on-map, .image-1, .image-2, .image-3 {
            cursor: pointer;
        }

        .description {
            grid-template-rows: 1fr 2fr 1fr
        }

        .location-on-map {
            text-align: center;
            padding-top: 5px;
            text-decoration: none;
        }

        .description-button:hover, .ticket-qty > .container-ticket-button > .ticket-button-qty > .minus-button:hover, .ticket-qty > .container-ticket-button > .ticket-button-qty > .plus-button:hover, .location > .location-deskription-container > .location-on-map:hover, .ticket-total > .container-total-ticket-button > .order-ticket:hover {
            background-color: rgba(0,0,0,0.3);
        }
       
    
}

        `
    }

    async render() {
        this._updateStyle();
        this.classList.add('main-container');
        this.innerHTML = `
            <h1 class="main-title">${this.DATA.name}</h1>
            <div class="container">
                <div class="image-1">
                    <img class="photo1" src="" alt="${this.DATA.name}">
                </div>  
                <div class="image-2">
                     <img class="photo2" src="" alt="${this.DATA.name}">
                </div>
                <div class="image-3">
                    <img class="photo3" src="" alt="${this.DATA.name}">
                </div>
                <div class="description">
                    <h2 class="description-title">Deskripsi</h2>
                    <p class="description-destination">${this.DATA.deskripsi.substring(0, 350)}</p>
                    <button class="description-button">Lihat Selengkapnya</button>
                </div>
                <div class="ticket-qty">
                    <h2 class="ticket-qty-title">Harga Tiket Masuk</h2>
                    <div class="container-ticket-button">
                        <p class="ticket-price">Rp ${this.DATA.harga_tiket}</p>
                        <div class="ticket-button-qty">
                            <button class="minus-button">-</button>
                            <p class="qty">0</p>
                            <button class="plus-button">+</button>
                        </div>
                    </div>
                </div>
                <div class="ticket-total">
                    <h2 class="ticket-total-title">Total</h2>
                    <div class="container-total-ticket-button">
                        <p class="total"><strong>Rp 0</strong></p>
                        <button class="order-ticket">Pesan</button>
                    </div>
                </div>
                <div class="operation">
                    <h2 class="operation-time-title">Jam Operasi</h2>
                    <div class="operation-time-container">
                    <span>
                        <p class="operation-day">Senin - Jum'at</p>
                        <p class="operation-time">&#x1F552 ${this.DATA.jam_operasional} WIB</p>
                    </span>
                    <span>
                        <p class="operation-day">Sabtu & Minggu</p>
                        <p class="operation-time">&#x1F552 ${this.DATA.jam_operasional} WIB</p>
                    </span>
                    </div>
                </div>
                <div class="location">
                    <h2 class="location-title">Lokasi</h2>
                    <div class="location-deskription-container">
                    <p class="location-destination">${this.DATA.address}</p>
                    <a class="location-on-map" href="${this.DATA.map.result}" target="_blank" >Lihat Peta</a>
                    </div>
                </div>
            </div>
        `

        const main = document.querySelector('main')
        main.append(this._style)
    }
}

customElements.define('detail-wisata', detailWisata)