const express = require("express");
const { isAuth, isAdmin } = require("../middleware/auth");
const { uploadVideo, uploadImage } = require("../middleware/multer");
const { uploadTrailer, createMovie } = require("../controller/movie");
const { parseData } = require("../utils/helper");
const { validateMovie, validate } = require("../middleware/validator");
const router = express.Router();

router.post('/upload-trailer', isAuth, isAdmin, uploadVideo.single("video") ,uploadTrailer);
router.post(
    '/create', 
    isAuth, 
    isAdmin, 
    uploadImage.single("poster"),
    parseData,
    validateMovie,
    validate,
    createMovie
);
module.exports = router;