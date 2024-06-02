const express = require("express");
const routeTest = require("./test");
const routePlaces = require("./places");
const route = express.Router()


route.use('/test',routeTest)
route.use('/places',routePlaces)



module.exports = route