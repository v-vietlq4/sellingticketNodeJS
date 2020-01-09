const path = require('path');

const express = require('express');

const productController = require('../controllers/ProductController');

const router = express.Router();

router.get('/productdetail/:prodId', productController.getDetail);

router.get('/addproduct', productController.getAddProduct);

router.get('/watchlist',productController.getWatchList);

module.exports = router;
