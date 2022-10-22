const product=require('../models/Product')
const {StatusCodes}=require('http-status-codes')

const createProduct=async(req,res)=>{
    res.send('create product route')
}

const getAllProduct=async(req,res)=>{
    res.send('get All products route')
}

module.exports={createProduct,getAllProduct}