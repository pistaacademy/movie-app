const express = require("express");

const { createUser } = require("../controller/user");

const router = express.Router();

router.post("/user-create", createUser)



module.exports = router;