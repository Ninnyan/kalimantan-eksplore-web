import KalimantanSource from "../../data/kalimantanAPI"
import API_ENDPOINT from "../../globals/api_endpoint"
import CONFIG from "../../globals/config"


class cardRiwayat extends HTMLElement {
    constructor() {
        super()

        this._card = {
            order_id: "ID",
            qty: "NONE",
            total: "NONE",
            status: "NONE",
            nama: "NONE",
            address: "NONE",
            img: "NONE",
            id_wisata: "NONE"
        }
    }

    connectedCallback() {
        this.render()
    }

    _getDataForCard(data) {
        this._card.order_id = data.order_id
        this._card.qty = data.qty
        this._card.total = data.total
        this._card.status = data.status
        this._card.nama = data.nama
        this._card.address = data.address
        this._card.img = data.img
        this._card.id_wisata = data.id_wisata
        this.render()
        }
        
        async render() {
            const dataPhoto = await KalimantanSource.dataPhoto(this._card.id_wisata, this._card.img)
            this.classList.add('transaksi-card')
            if(this._card.status === 'settlement') {
                this.innerHTML = `
                    <img src="${dataPhoto}">
                    <div class="transaksi-info">
                        <div class="transaksi-header">
                        <div>
                            <p class="id-transaksi">${this._card.order_id}</p>
                            <h2>${this._card.nama}</h2>
                            <p class="lokasi"><i class="fa-solid fa-location-dot"></i> ${this._card.address.substring(10)}</p>
                            <p class="tiket-total">jumlah tiket: ${this._card.qty}</p>
                        </div>
                        </div>
                        <div class="transaksi-footer">
                        <p>Total: <span class="price">Rp. ${this._card.total}</span></p>
                        <span class="new-buy-btn"><i class="fa-solid fa-check"></i>Sukses</span>
                        </div>
                    </div>
        `
            } else {
                this.innerHTML = `
                <img src="${dataPhoto}" alt="${this._card.nama}">
                <div class="transaksi-info">
                    <div class="transaksi-header">
                    <div>
                        <p class="id-transaksi">${this._card.order_id}</p>
                        <h2>${this._card.nama}</h2>
                        <p class="lokasi"><i class="fa-solid fa-location-dot"></i> ${this._card.address}</p>
                        <p class="tiket-total">jumlah tiket: ${this._card.qty}</p>
                    </div>
                    <button class="delete-btn" data-hapus="${this._card.order_id}"><i class="fa fa-trash" data-hapus="${this._card.order_id}"></i></button>
                    </div>
                    <div class="transaksi-footer">
                    <p>Total: <span class="price">Rp. ${this._card.total}</span></p>
                    <button class="buy-btn" data-id="${this._card.order_id}"><i class="fa fa-shopping-cart"></i> Bayar</button>
                    </div>
                </div>
    `
            }
        
    }    
    
}

customElements.define('card-riwayat', cardRiwayat)