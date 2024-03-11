const renderMovie = require("./render-movie.js");
const axios = require("axios");

const fetchData = async () => {
    try {
        const result = await axios.get("https://students-api.up.railway.app/movies");
        const data = result.data;
        data.forEach((movie) => renderMovie(movie));
    } catch (error) {
        console.log(error);
    }
}

fetchData();