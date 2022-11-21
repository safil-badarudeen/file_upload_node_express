const path=require('path')
const {StatusCodes}=require('http-status-codes')
const {BadRequestError}=require('../errors')
const cloudinary=require('cloudinary').v2

// var dirname = import.meta.url.slice(7); 

const uploadProductImageLocal=async(req,res)=>{
      
    if(req.files){
        throw new BadRequestError('NO files found with the request')
    }

    const productImage=req.files.image

    if(!productImage.mimetype.startsWith('image')){
        throw new BadRequestError('please upload image')
    }

     const maxsize=1024*1024

    if(productimage.size>maxsize){
        throw new BadRequestError(`please upload image with less size than ${maxsize}`)
    }


    const imagePath=path.join(__dirname,
         '../public/uploads/'+`${productImage.name}`);
    await productImage.mv(imagePath);
    return res.status(StatusCodes.OK).json({img:{src:`/uploads/${productImage.name}`}})
}

const uploadProductImage=async(req,res)=>{

    const result=await cloudinary.uploader.upload(
        //we do have access to req.files because we are using upload files library
        req.files.image.tempFilePath,{ //tmp file inte ullilek varunnathine maati cloudilek vazhi kanich kodkunnu
            use_filename:true,
            folder:'file-upload'
        }
    )
    res.status(StatusCodes.CREATED).json({imag:{src:result.secure_url}})
}

module.exports={uploadProductImage}