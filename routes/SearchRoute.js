const path = require('path');

const express = require('express');

const searchController = require('../controllers/SearchController');

const router = express.Router();

router.get('/search', searchController.getSmartPhone);

module.exports = router;