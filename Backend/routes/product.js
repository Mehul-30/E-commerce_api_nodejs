const express = require('express')
const { getProduct, getSingleProduct } = require('../controllers/productcontroller')
const router = express.Router()

//This can be done using this method
//router.get('/products',getProduct)

router.route('/products').get(getProduct)
router.route('/products/:id').get(getSingleProduct)


module.exports = router
