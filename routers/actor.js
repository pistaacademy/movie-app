const express = require("express");
const { createActor, updateActor } = require("../controller/actor");
const { uploadImage } = require("../middleware/multer");
const { actorInfoValidator, validate } = require("../middleware/validator");

const router = express.Router();

router.post('/create',uploadImage.single('avatar'),actorInfoValidator,validate , createActor)


module.exports = router;
