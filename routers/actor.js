const express = require("express");
const { createActor, updateActor,removeActor } = require("../controller/actor");
const { uploadImage } = require("../middleware/multer");
const { actorInfoValidator, validate } = require("../middleware/validator");

const router = express.Router();

router.post('/create',uploadImage.single('avatar'),actorInfoValidator,validate , createActor)
router.post('/update/:actorId',uploadImage.single('avatar'),actorInfoValidator,validate , updateActor)
router.delete('/:actorId', removeActor)

module.exports = router;
