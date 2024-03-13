import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uloadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // upload files on cloudinary
        const response = cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been sucsessfully ulploaded
        console.log(`file has been sucsessfully uploaded on cloudinary at ${(await response).url}`);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null;
    }
}
