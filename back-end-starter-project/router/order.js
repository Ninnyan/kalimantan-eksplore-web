const express = require("express");
const orderController = require("../controller/orderController");
const { checkRole } = require("../middleware/authVerify");
const routeOrder = express.Router()


routeOrder.post('/add-order',(req,res,next) => checkRole(req,res,next,'User'),orderController.create)
routeOrder.get('/get-riwayat',orderController.getData)
routeOrder.delete('/delete-order',orderController.delete)
routeOrder.get('/get-total-tiket',(req,res,next) => checkRole(req,res,next,'Admin'),orderController.getTotalTiket)


module.exports = routeOrder
