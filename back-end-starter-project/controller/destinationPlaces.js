const destinationPlaces = {}
const dotenv = require("dotenv")
dotenv.config()

const API_KEY = process.env.API_MAP_KEY;  // Ganti dengan API key Anda



/*
    this is auto generate example, you can continue 

*/
destinationPlaces.kaltim = async(req,res) => {
    const LOCATION = '-0.5022,117.1537';  // Koordinat tengah Indonesia, bisa disesuaikan
    const RADIUS = 250000;  // Radius dalam meter (50 km)
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LOCATION}&radius=${RADIUS}&type=tourist_attraction&key=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data.results);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}

destinationPlaces.kalsel = async(req,res) => {
    const LOCATION = '-2.1990666502149527, 113.89685746789635';  // Koordinat tengah Indonesia, bisa disesuaikan
    const RADIUS = 250000;  // Radius dalam meter (50 km)
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LOCATION}&radius=${RADIUS}&type=tourist_attraction&key=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data.results);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}

destinationPlaces.kalteng = async(req,res) => {
    const LOCATION = '-3.45236795349734, 114.80017207091412';  // Koordinat tengah Indonesia, bisa disesuaikan
    const RADIUS = 250000;  // Radius dalam meter (50 km)
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LOCATION}&radius=${RADIUS}&type=tourist_attraction&key=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data.results);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}

destinationPlaces.kalbar = async(req,res) => {
    const LOCATION = '-0.03659660317775381, 109.35232308475206';  // Koordinat tengah Indonesia, bisa disesuaikan
    const RADIUS = 250000;  // Radius dalam meter (50 km)
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LOCATION}&radius=${RADIUS}&type=tourist_attraction&key=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data.results);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}

destinationPlaces.kalut = async(req,res) => {
    const LOCATION = '3.3950402658391168, 117.57711671594623';  // Koordinat tengah Indonesia, bisa disesuaikan
    const RADIUS = 250000;  // Radius dalam meter (50 km)
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LOCATION}&radius=${RADIUS}&type=tourist_attraction&key=${API_KEY}`;
    try {
        // const response = await fetch(url);
        // const data = await response.json();
        // res.json(data.results);
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LOCATION}&radius=${RADIUS}&type=tourist_attraction&key=${API_KEY}`);
        const data = await response.json();
        const places = data.results.map(place => {
        const photos = place.photos ? place.photos.map(photo => {
        return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${API_KEY}`;
          }) : [];
          return {
            name: place.name,
            address: place.vicinity,
            photos: photos
          };
        });
        res.json(places);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
      
}

module.exports = destinationPlaces

