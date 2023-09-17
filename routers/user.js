const express = require("express");
const { userValidator, validate } = require("../middleware/validator");
const { create } = require("../controller/user");

const router = express.Router();

router.post("/create",userValidator,validate,create)



module.exports = router;