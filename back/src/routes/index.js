const { Router } = require('express');
const movies = require('../controllers/index');

const router = Router();

router.get('/movies', movies);


module.exports = router