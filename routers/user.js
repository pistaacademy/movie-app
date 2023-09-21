const express = require("express");
const { userValidator, validate } = require("../middleware/validator");
const { create,verifyEmail,resendEmailVerificationToken } = require("../controller/user");

const router = express.Router();

router.post("/create",userValidator,validate,create)
router.post("/verify-email",verifyEmail)
router.post("/resend-email-verification-token",resendEmailVerificationToken)


module.exports = router;