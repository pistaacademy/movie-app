const { isValidObjectId } = require("mongoose");
const { sendError } = require("../utils/helper");
const passwordResetToken = require("../model/passwordResetToken");



exports.isValidPassResetToken = async (req, res, next) => {

    const {token, userId} = req.body;

    if(!token.trim() || !isValidObjectId(userId)) return sendError(res, 'Invalid Request');

    const resetToken = await passwordResetToken.findOne({ owner: userId});

    if(!resetToken) return sendError(res, 'Unautorized access, invalid request!');

    const matched = await resetToken.compareToken(token);

    if(!matched) return sendError(res, 'Unautorized access, invalid request!');

    req.resetToken = resetToken;

    next();
}