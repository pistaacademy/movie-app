const express = require("express");
const { isAuth, isAdmin } = require("../middleware/auth");
const { uploadVideo } = require("../middleware/multer");
const { uploadTrailer } = require("../controller/movie");
const router = express.Router();

router.post('/upload-trailer', isAuth, isAdmin, uploadVideo.single("video") ,uploadTrailer);
module.exports = router;