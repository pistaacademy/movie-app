const express = require("express");
const { userValidator, validate } = require("../middleware/validator");
const { create,verifyEmail } = require("../controller/user");

const router = express.Router();

router.post("/create",userValidator,validate,create)
router.post("/verify-email",verifyEmail)


module.exports = router;