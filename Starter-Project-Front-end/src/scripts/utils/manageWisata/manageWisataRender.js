class manageWisata extends HTMLElement {
    constructor() {
        super()

        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render()
    }

    _updateStyle() {
        this._style.textContent = `
        * {
            box-sizing: border-box;
            font-family: 'Poppins';
        }

        body {
            height: 938.400px;
        }

        .hilang {
            display: none;
        }

        custom-sidebar {
            grid-area: navbar-kiri;
        }

        custom-navbar {
            width: 100%;
            grid-area: navbar-atas;
        }

        .navbar {
            margin-left: 0;
            width: 100%;
        }

        .container-main {
            display: grid;
            grid-area: container-main;
            width: 90%;
            height: 780px;
            margin: auto;
            margin-block: 14px;
        }

        .page {
            border: none;
            display: flex;
            margin: auto;
            margin-top: -20px;
            grid-area: page-bawah;
            width: 287px;
            justify-content: center;
            align-items: center;
            gap: 25px;
        }

        .page > button {
            font-size: 17px;
            width: 30px;
            height: 30px;
            background-color: #007D46;
            color: #fff;
            border: none;
            border-radius: 8px;
            cursor: pointer;
        }

        custom-footer {
            grid-area: footer;
        }


        /* Manajemen Wisata */

        main {
            height: 938.400px;
            display: grid;
            grid-template-areas:'navbar-kiri navbar-atas'
            'navbar-kiri container-main'
            'navbar-kiri page-bawah'
            'navbar-kiri footer'
            '... ...';
            grid-template-columns: 15% 85%;
        }

        .judul-utama {
            font-size: 24px;
        }

        .add-wisata {
            justify-self: end;
            width: 25%;
            height: 44px;
            padding-top: 10px;
            margin-bottom: 14px;
            border-radius: 11px;
            border: none;
            background-color: #24C68E;
            color: #ffffff;
            cursor: pointer;
        }


        .wisata-manage {
            display: grid;
            grid-template-areas: 
            'search filter'
            'tabel tabel';
            grid-template-rows: 10% 90%;
            grid-template-columns: 87% 13%;
            padding-inline: 20px;
            width: 100%;
            height: 585px;
            box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.55);
            border-radius: 15px;
            padding-block: 20px;
        }

        .search {
            display: flex;
            flex-direction: row;
            grid-area: search;
            width: 36%;
            height: 44px;
            background-color: #EDFFF9;
            border-radius: 11px;
            align-self: end;
            justify-self: end;
            margin-bottom: 10px;
            justify-content: center;
            gap: 10px;
            align-content: center;
            margin-right: 10px;
        }

        .search > i {
            justify-self: center;
            align-self: center;
            color: #6CFFCC;
        }

        .search > input {
            justify-self: center;
            align-self: center;
            background-color: #EDFFF9;
            border: none;
        }

        .search > input::placeholder {
            color: #6CFFCC;
        }

        .filter {
            grid-area: filter;
            width: 24px;
            height: 24px;
            margin: auto;
            cursor: pointer;
            color: #007D46;
        }

        .tabel {
            grid-area: tabel;
            width: 100%;
            height: 100%;
        }

        .tabel > table {
            width: 96%;
            margin: auto;
            border-collapse: collapse
        }

        th {
            height: 50px;
            border-bottom: 1px solid black;
            text-align: center;
            font-size: 16px;
        }

        td {
            height: 110px;
            font-size: 15px;
            text-align: center;
        }

        td > img {
            width: 110px;
        }

        td > .look-wisata {
            background-color: #007D46;
            border: none;
            border-radius: 4px;
            width: 30px;
            height: 22px;
            color: #ffffff;
            cursor: pointer;
        }

        td > .edit-wisata {
            background-color: #FFF502;
            border: none;
            border-radius: 4px;
            width: 30px;
            height: 22px;
            color: #ffffff;
            cursor: pointer;
        }

        td > .hapus-wisata {
            background-color: #FF0000;
            border: none;
            border-radius: 4px;
            width: 30px;
            height: 22px;
            color: #ffffff;
            cursor: pointer;
        }
        .filter-container:hover {
            color: rgba(0, 0, 0, 0.35) ;
        }

        td > .hapus-wisata:hover, td > .look-wisata:hover, td > .edit-wisata:hover, .add-wisata:hover, .page > button:hover {
            background-color: rgba(0, 0, 0, 0.35);
        }

        /* Tambah Destinasi */

        .container-tambah-wisata {
            display: none;
            width: 90%;
            height: 716px;
            margin: auto;
            margin-block: 20px;
        }

        .judul-tambah {
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 50px;
        }

        form {
            grid-area: form;
        }

        .tambah {
            margin-top: 40px;
            grid-area: tambah;
            width: 168px;
            height: 43px;
            background-color: #007D46;
            border: none;
            border-radius: 11px;
            color: #fff;
            cursor: pointer;
        }

        .tambah:hover {
            color: black;
            background-color: rgba(40, 197, 26, 0.35);
        }

        .batal {
            width: 97px;
            height: 43px;
            grid-area: batal;
            background-color: #FFF502;
            border: none;
            border-radius: 11px;
            cursor: pointer;
        }

        .batal:hover {
            background-color: rgba(255, 0, 0, 0.858);
        }

        .form-tambah {
            display: grid;
            grid-template-areas: 
            'form form'
            'tambah batal';
            grid-template-columns: 22% 78%;
            grid-template-rows: 86% 14%;
            width: 100%;
            height: 90%;
            padding-inline: 40px;
            padding-top: 20px;
            border-radius: 15px;
            box-shadow: -2px -2px 12px rgba(0, 0, 0, 0.35);
        }

        .nama-container, .provinsi-container, .deskripsi-container, .jam-container, .tiket-container, .upload-container {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
        }

        .nama-container > label, .provinsi-container > label, .deskripsi-container > label, .jam-container > label, .tiket-container > label, .upload-container > label {
            font-size: 15px;
            margin-bottom: 10px;
        }

        .nama-container > input, .provinsi-container > input, .deskripsi-container > input, .jam-container > input, .tiket-container > input, .upload-container > input{
            height: 40px;
            border-radius: 10px;
            border: none;
            background-color: #CFFEEE;
        }

        .upload-container > input {
            direction: rtl;
        }


        .upload-container > input::file-selector-button{
            content: 'Upload';
            cursor: pointer;
            background-color: #007D46;
            height: 41px;
            width: 93px;
            border: none;
            border-radius: 10px;
            color: #fff;
        }

        .upload-container > input::file-selector-button:hover {
            background-color: rgba(40, 197, 26, 0.35);
        }


        /* Style Profile Wisata */

        .container-profil-wisata {
            width: 90%;
            height: 800px;
            margin: auto;
            margin-block: 20px;
            display: flex;
            flex-direction: column;
            gap: 35px;
            display: none;
        }

        .kembali {
            width: 97px;
            height: 43px;
            border: none;
            background-color: #FFF502;
            border-radius: 11px;
            justify-self: end;
            align-self: flex-end;
            cursor: pointer;
        }

        .kembali:hover {
            background-color: rgba(255, 0, 0, 0.858);
        }

        .profile-wisata {
            width: 100%;
            height: 100%;
            padding-top: 30px;
            padding-inline: 40px;
            border-radius: 15px;
            box-shadow: -2px -2px 12px rgba(0, 0, 0, 0.35);
        }

        .deskripsi-container > .deskripsi-wisata {
            text-align: justify;
            text-indent: 60px;
        }

        .harga-container {
            margin-bottom: 20px;
        }

        .gambar-container {
            display: flex;
            gap: 30px;
        }

        .gambar-container > img {
            width: 181px;
            border-radius: 9px;
        }

        h1 {
            font-size: 16px;
        }

        span {
            font-size: 15px;
        }

        
        `
    }

    render() {
        this._updateStyle()
        const body = document.querySelector('body')
        body.append(this._style)
    }
}

customElements.define('style-manage', manageWisata)