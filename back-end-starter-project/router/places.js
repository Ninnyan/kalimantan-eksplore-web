const express = require("express");
const destinationPlaces = require("../controller/destinationPlaces");
const routePlaces = express.Router()



routePlaces.get('/kaltim',destinationPlaces.kaltim)
routePlaces.get('/kalteng',destinationPlaces.kalteng)
routePlaces.get('/kalsel',destinationPlaces.kalsel)
routePlaces.get('/kalbar',destinationPlaces.kalbar)
routePlaces.get('/kalut',destinationPlaces.kalut)




module.exports = routePlaces
