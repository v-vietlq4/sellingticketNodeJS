const path = require('path');

const express = require('express');

const movieController = require('../controllers/MovieController');

const router = express.Router();

router.get('/', movieController.getIndexProduct);
router.get('/contact',movieController.getContact);
router.get('/moviedetail/:id',movieController.getMovieDetail);


module.exports = router;