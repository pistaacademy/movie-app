const multer  = require('multer');
const storage = multer.diskStorage({});

const imageFileFilter = (req, file, cb) => {
    if(!file.mimetype.startsWith('image')){
        cb('Supported only image files!')
    }
    cb(null, true);
};

const videoFileFilter = (req, file, cb) => {
    if(!file.mimetype.startsWith('video')){
        cb('Supported only image files!')
    }
    cb(null, true);
};


exports.uploadImage = multer({storage, fileFilter:imageFileFilter})
exports.uploadVideo = multer({storage, videoFileFilter})