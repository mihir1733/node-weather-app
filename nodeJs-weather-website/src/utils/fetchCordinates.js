const axios = require("axios")

const fetchCordinates = async (address) => {
  try {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibWloaXIxNyIsImEiOiJjbGxveWRkM24wMHI0NGxtMjgwNXR4Zm54In0.LzalcvKREkRABMqqcjrfEg&limit=1`;
    const res = await axios(url);
    if (res.data.features.length === 0) {
      return {invalidError:"invalid input.."}
    } else {
      return {
        latitude: res.data.features[0]["center"][1],
        longitude: res.data.features[0]["center"][0],
        location: res.data.features[0]["place_name"],
      }
    }
  } catch (error) {
    return {
      invalidError:"Sorry we are not able to fetch your data .................."
    }
  }
}

module.exports = fetchCordinates