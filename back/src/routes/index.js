const { Router } = require('express');
const getMoviesController = require('../controllers/moviesController');

const router = Router();

router.get('/movies', getMoviesController);


module.exports = router