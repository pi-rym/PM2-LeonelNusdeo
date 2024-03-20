const { Router } = require('express');
const { getMoviesController, postMovieController } = require('../controllers/moviesController');

const router = Router();

router.get('/movies', getMoviesController);
router.post('/movies', postMovieController);


module.exports = router