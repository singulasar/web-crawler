const express = require('express');
const router = express.Router();
const getMessage = require('../controllers/fetchProductData');

router.get('/fetch-product-data', async (req, res) => {
  url = req.query.url;
  res.json(await getMessage(url));
})

module.exports = router;