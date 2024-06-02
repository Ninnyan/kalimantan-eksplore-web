const testController = {}
const dotenv = require("dotenv")
dotenv.config()


/*
    this is auto generate example, you can continue 

*/
testController.index = async(req,res) => {
    const apiKey = process.env.API_MAP_KEY;
    const placeId = req.query.placeId; // Get placeId from query parameter
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching place details:', error);
        res.status(500).send('Error fetching place details');
    }
}

module.exports = testController

