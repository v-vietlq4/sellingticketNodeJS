const path = require('path');

const express = require('express');

const categoryController = require('../controllers/CategoryController');

const router = express.Router();

router.get('/smartphone/:catId', categoryController.getSmartPhone);
router.get('/washingmachine/:catId', categoryController.getWashingMachine);
router.get('/ac/:catId', categoryController.getAC);
router.get('/laptop/:catId', categoryController.getLaptop);
router.get('/electronicdevice/:catId', categoryController.getAll);
module.exports = router;