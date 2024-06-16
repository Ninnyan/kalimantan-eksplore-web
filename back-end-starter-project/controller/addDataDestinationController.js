
const {Wisata, Provinsi, StockTiket, Order, Riwayat} = require('../models');
const dotenv = require("dotenv")
dotenv.config()

const addDataDestinationController = {}



addDataDestinationController.province = async(req,res) => {
    try {
        const result = await Provinsi.create({
            name: req.body.name
        });
        return res.status(201).json({
            status: "Ok",
            message: "Data Provinsi Berhasil Ditambahakan"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'Fail',
            message: "Terjadi kesalahan pada server",
        });
    }
}

addDataDestinationController.wisata = async(req,res) => {
    const apiKey = process.env.API_MAP_KEY;
    const { name, deskripsi, harga_tiket, jam_operasional, provinsi } = req.body;
    const photos = req.files;

    if (!name || !deskripsi || !harga_tiket || !jam_operasional || !provinsi || photos.length < 3) {
        return res.status(400).json({
            status: "Fail",
            message: "Mohon lengkapi semua data dan pastikan ada 3 foto yang diunggah",
        });
    }

    try {
        // Fetch data from Google Maps API
        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${name}&inputtype=textquery&fields=place_id,name,formatted_address&key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (!data.candidates || data.candidates.length === 0) {
            return res.status(400).json({
                status: "Fail",
                message: "Tempat tidak ditemukan di Google Maps",
            });
        }

        // Check if province exists
        const cekProvinsiId = await Provinsi.findOne({ where: { name: provinsi } });
        if (!cekProvinsiId) {
            return res.status(400).json({
                status: "Fail",
                message: "Provinsi Tidak Ditemukan",
            });
        }

        // Check if place_id already exists
        const cekPlaceId = await Wisata.findOne({ where: { place_id: data.candidates[0].place_id } });
        if (cekPlaceId) {
            return res.status(400).json({
                status: "Fail",
                message: "Place_id sudah terdaftar",
            });
        }

        // Create new Wisata entry
        const result = await Wisata.create({
            name,
            id_province: cekProvinsiId.id,
            place_id: data.candidates[0].place_id,
            deskripsi,
            harga_tiket,
            jam_operasional,
            formatted_address: data.candidates[0].formatted_address,
            photos_1: photos[0].key,
            photos_2: photos[1].key,
            photos_3: photos[2].key
        });

        // Fetch the newly created Wisata entry
        const getIdWisata = await Wisata.findOne({ where: { name } });
        if (!getIdWisata) {
            return res.status(401).json({
                status: "Fail",
                message: "Nama Wisata tidak ada di Database",
            });
        }

        // Check if stock ticket already exists for this Wisata
        const getIdWisataInStockTiket = await StockTiket.findOne({ where: { id_wisata: getIdWisata.id } });
        if (getIdWisataInStockTiket) {
            return res.status(401).json({
                status: "Fail",
                message: "Hanya Boleh Menambahkan Satu Stock Tiket Per Wisata",
            });
        }

        // Create new StockTiket entry
        await StockTiket.create({
            id_wisata: getIdWisata.id,
            stock_tiket: 100
        });

        return res.status(201).json({
            status: "Ok",
            message: "Data Wisata Berhasil Ditambahkan",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'Fail',
            message: "Terjadi kesalahan pada server",
        });
    }
}

addDataDestinationController.editWisata = async(req,res) => {
    const apiKey = process.env.API_MAP_KEY;
    const getId = req.query.idWisata
    const {name,
        deskripsi,
        harga_tiket,
        jam_operasional,
        provinsi,
    } = req.body
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${name}&inputtype=textquery&fields=place_id,name,formatted_address&key=${apiKey}`
    const photos = req.files
    try {
        const response = await fetch(url)
        const data = await response.json()

        const cekProvinsiId = await Provinsi.findOne({
            where: {
                name: provinsi
            }
        })
        const cekPlaceId = await Wisata.findOne({
            where: {
                id: getId
            }
        })

        if(!cekProvinsiId) {
            return res.status(400).json({
                status: "Fail",
                message: "Provinsi Tidak Ditemukan",
              });
        }
        const fields = [
            "name",
            "deskripsi",
            "harga_tiket",
            "jam_operasional",
            "provinsi",
        ];
        const filterFields = fields.filter((f) => !req.body[f]);
        if (filterFields.length) {
            fs.unlinkSync(req.file.path);
            return res.status(400).json({
              status: "Fail",
              message: `Mohon lengkapi data ${filterFields.join(",")}`,
            });
        }
        if (!cekPlaceId) {
            return res.status(400).json({
            status: "Fail",
            message: "id_wisata Tidak Ada",
            });
        }
        const result = await Wisata.update({
            name,
            id_province: cekProvinsiId.id,
            place_id: data.candidates[0].place_id,
            deskripsi,
            harga_tiket,
            jam_operasional,
            formatted_address: data.candidates[0].formatted_address,
            photos_1: photos[0].key,
            photos_2: photos[1].key,
            photos_3: photos[2].key
        }, {
            where: {
                id: getId
            }
        });
        return res.status(201).json({
            status: "Ok",
            message: "Data Wisata Berhasil Diperbarui"
        });
    } catch (error) {
        return res.status(500).json({
            status: 'Fail',
            message: "Terjadi kesalahan pada server",
        });
    }
}

addDataDestinationController.delete = async(req,res) => {
    const idWisata = req.query.idWisata
    try {

        const getDataWisataById = await Wisata.findOne({where:{id:idWisata}})
        if(!getDataWisataById) {
            return res.status(401).json({
                status: "Fail",
                message: "Id Wsiata tidak ada diDatabase",
            });
        }
        const deleteStockTiket = await StockTiket.destroy({where:{id_wisata:idWisata}})
        const deleteOrderTiket = await Order.destroy({where:{id_wisata:idWisata}})
        const deleteRiwayat = await Riwayat.destroy({where: {id_wisata:idWisata}})
        const deleteDataWisataById = await Wisata.destroy({where:{id:idWisata}})
        return res.status(201).json({
            status: "Ok",
            message: "Data Wisata Berhasil Dihapus"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'Fail',
            message: "Terjadi kesalahan pada server",
        });
    }
}

module.exports = addDataDestinationController

