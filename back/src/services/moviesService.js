const Movie = require('../models/Movie');

const getMoviesService = async () => {
    const movies = await Movie.find();
    return movies;
}

const postMovieService = async (movie) => {
    try {
        const newMovie = await Movie.create(movie);
        return newMovie;
    } catch (error) {
        throw Error('Error en el proceso de crear una Pelicula.');
        console.log(error.message);
    }
}

module.exports = { 
    getMoviesService,
    postMovieService
}