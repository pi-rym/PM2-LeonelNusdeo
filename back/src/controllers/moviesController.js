const { getMoviesService, postMovieService } = require('../services/moviesService');

const getMoviesController = async (req, res) => {
    try {
        const movies = await getMoviesService();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const postMovieController = async (req, res) => {
    try {
        await postMovieService(req.body);
        res.status(201).json({ message: "Pelicula creada exitosamente." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getMoviesController,
    postMovieController
} 