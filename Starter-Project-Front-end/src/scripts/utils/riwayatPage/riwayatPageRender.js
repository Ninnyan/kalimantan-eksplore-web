class riwayatPage extends HTMLElement {
    constructor() {
        super()
        this._wisata = []
        this._style = document.createElement('style');
        this._container = document.querySelector('.card-container')

    }

    connectedCallback() {
        this.render();
    }

    _updateStyle() {
        this._style.textContent = `
  body {
    font-family: "poppins",arial;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }
  
  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    height: 100%;
    margin-top: 102px;
  }
  
  .riwayat-transaksi {
    width: 95%;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #1f8a70;
    font-size: 30px;

  }
  
  .card-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .transaksi-card {
    margin: auto;
    display: flex;
    background-color: #f0f9f0;
    border-radius: 10px;
    overflow: hidden;
    width: 48%;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
  
  .transaksi-card img {
    width: 20%;
    border-radius: 30px;
    padding: 20px;
    object-fit: cover;
  }
  
  .transaksi-info {
    padding: 20px 20px 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
  
  .transaksi-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .transaksi-header .id-transaksi{
    font-weight: 200;
    font-size: 16px;
  }
  .transaksi-header .lokasi{
    font-size: 14px;
    font-weight: 500;
  }
  .transaksi-header .tiket-total{
    padding: 5px 0;
    color: #007D46;
    font-size: 15px;
  }
  .transaksi-header div p {
    margin: 2px 0;
  }
  
  .transaksi-header h2 {
    margin: 0;
    color: #007D46;
  }
  
  .transaksi-header .delete-btn {
    background-color: transparent;
    border: none;
    color: red;
    cursor: pointer;
    font-size: 20px;
    padding: 5px;
  }
  
  .transaksi-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .transaksi-footer p{
    margin: 0;
  }
  
  .price {
    font-weight: bold;
    color: #1f8a70;
  }
  
  .buy-btn {
    background-color: #1f8a70;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .buy-btn i {
    margin-right: 5px;
  }
  
  .buy-btn:hover {
    background-color: #155a4f;
  }
  
  .new-buy-btn {
    background-color: #1f8a70;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
  }    

    `
    }
    
    _getData(data) {
        this._wisata = data
        this.render()
    }

    _makeCard(data) {
        const card = document.createElement('card-riwayat')
        card._getDataForCard(data)

        return card
    }

    render() {
        this._wisata.forEach((wisata) => {
          this._container.append(this._makeCard(wisata))
        })
        this._updateStyle()
        const main = document.querySelector('main')
        main.append(this._style)

    }    
    
}

customElements.define('riwayat-page', riwayatPage)