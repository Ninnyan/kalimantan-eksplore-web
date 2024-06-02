const express = require("express");
const testController = require("../controller/testController");
const routeTest = express.Router()



routeTest.get('/',testController.index)




module.exports = routeTest


