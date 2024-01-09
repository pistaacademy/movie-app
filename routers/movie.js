const express = require("express");
const { isAuth, isAdmin } = require("../middleware/auth");
const { uploadVideo, uploadImage } = require("../middleware/multer");
const { uploadTrailer, createMovie } = require("../controller/movie");
const router = express.Router();

router.post('/upload-trailer', isAuth, isAdmin, uploadVideo.single("video") ,uploadTrailer);
router.post('/create', isAuth, isAdmin, uploadImage.single("poster") ,createMovie);
module.exports = router;