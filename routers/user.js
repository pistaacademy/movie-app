const express = require("express");
const { userValidator, validate } = require("../middleware/validator");
const { create,verifyEmail,resendEmailVerificationToken,forgetPassword } = require("../controller/user");
const { isValidPassResetToken } = require("../middleware/user");

const router = express.Router();

router.post("/create",userValidator,validate,create)
router.post("/verify-email",verifyEmail)
router.post("/resend-email-verification-token",resendEmailVerificationToken)
router.post("/forget-password",forgetPassword)
router.post("/verify-pass-reset-token",isValidPassResetToken, (req, res) => {
    res.json({ valid: true});
})

module.exports = router;