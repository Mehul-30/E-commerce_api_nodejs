const productModel = require('../model/productModel')


exports.getProduct = async (req,res,next)=>{
    const product = await productModel.find({})
    res.json({
        sucess : true,
        product
    })
}
exports.getSingleProduct = async (req,res,next)=>{
    try {
        const product = await productModel.findById(req.params.id)
        res.json({
            sucess : true,
            product
        }) 
    } catch (error) {
        res.status(404).json({
            success : false,
            message : error.message
        })
    }
     
}

  