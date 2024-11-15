const express = require('express')
const { Order } = require('../controllers/orderController')

const router = express.Router()

router.route('/order').post(Order)


module.exports = router