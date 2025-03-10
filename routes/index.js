const express = require('express');
const router = express.Router()

const orderRouter = require('./orders.js')


router.get('/test', async (req, res) => {
  return res.status(200).json({
    success: true,
    body: "hello"
  });
});


router.use('/order', orderRouter);
  
module.exports = router;  