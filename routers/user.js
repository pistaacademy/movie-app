const express = require("express");


const { userValidator, validate, validatePassword, signInValidator } = require("../middleware/validator");
const { create,verifyEmail,resendEmailVerificationToken,forgetPassword, sendResetPasswordTokenStatus, resetPassword, signIn } = require("../controller/user");
const { isValidPassResetToken } = require("../middleware/user");
const { isAuth } = require("../middleware/auth");

const router = express.Router();

router.post("/create",userValidator,validate,create)
router.post("/sign-in",signInValidator,validate,signIn)
router.post("/verify-email",verifyEmail)
router.post("/resend-email-verification-token",resendEmailVerificationToken)
router.post("/forget-password",forgetPassword)
router.post("/verify-pass-reset-token",isValidPassResetToken, sendResetPasswordTokenStatus)
router.post("/reset-password",validatePassword,isValidPassResetToken,validate, resetPassword)


router.get('/is-auth', isAuth, (req, res) => {
    const { user } = req;
    res.json({ 
        user: { 
            id: user._id, 
            name: user.name, 
            email: user.email,
            isVerified: user.isVerified, 
        }})
})

module.exports = router;