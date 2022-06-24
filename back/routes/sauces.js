const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauces');

router.post('/', sauceCtrl.createSauce);

module.exports = router;