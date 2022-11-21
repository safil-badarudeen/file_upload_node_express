const product=require('../models/Product')
const {StatusCodes}=require('http-status-codes')

const createProduct=async(req,res)=>{

    const item=await product.create({...req.body})
    res.status(StatusCodes.CREATED).json({item})
}

const getAllProduct=async(req,res)=>{
    const item=await product.find({})
    res.status(StatusCodes.OK).json({item,Total:item.length})
}

module.exports={createProduct,getAllProduct}