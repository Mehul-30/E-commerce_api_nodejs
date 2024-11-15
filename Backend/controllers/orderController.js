const orderModel = require('../model/orderModel')

exports.Order = async (req, res, next) => {
    const cartItems = req.body

    const amount = cartItems.reduce((acc, item) => {
        let total = acc + item.product.price * item.qty
        total = Number(total).toFixed(2)
        return parseFloat(total);
    }, 0)

    const status = "Pending"

    const order = await orderModel.create({cartItems, status,amount})

    res.json({
        success: true,
        order
    })
    
}
