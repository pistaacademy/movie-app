const express = require("express");
const { isAuth, isAdmin } = require("../middleware/auth");
const { uploadVideo, uploadImage } = require("../middleware/multer");
const { uploadTrailer, createMovie, updateMovieWithoutPoster } = require("../controller/movie");
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
router.patch(
    '/update-movie-without-poster/:movieId', 
    isAuth, 
    isAdmin, 
    parseData,
    validateMovie,
    validate,
    updateMovieWithoutPoster
);
module.exports = router;