import {v2} from 'cloudinary';
 import fs from 'fs';

 v2.config({
cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
api_key:CLOUDINARY_API_KEY,
api_secret:CLOUDINARY_API_SECRET,

 })

const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if (!localFilePath) {
            return null;
        }

        const result = await v2.uploader.upload(localFilePath, {
            resource_type: 'auto',
        });
// agr file upload hojaya
        console.log("file is uploades", result.url);
        return result
        
    } catch (error) {
        // agr file upload na ho tu --
        fs.unlinkSync(localFilePath)  // ya local file ko delete kr dega temporary
        console.log("cloudinary error", error);
        return null;
    }
}

export {uploadOnCloudinary}


