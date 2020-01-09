const path = require("path");

const express = require("express");

const listController = require("../controllers/ListController");
const router = express.Router();

router.get('/active',listController.getActive);
router.get('/win', listController.getWin);
module.exports = router;
