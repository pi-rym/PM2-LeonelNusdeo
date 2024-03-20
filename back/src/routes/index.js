const { Router } = require('express');
const { getMoviesController, postMovieController } = require('../controllers/moviesController');
const validateMovie = require('../middlewares/validateMovie');

const router = Router();

router.get('/movies', getMoviesController);
router.post('/movies', validateMovie, postMovieController);


module.exports = router