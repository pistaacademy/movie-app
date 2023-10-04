const express = require("express");
require('express-async-errors')
const morgan = require("morgan");
require("dotenv").config();
const userRouter = require("./routers/user");
require('./db');
const {errorHandler} = require("./middleware/error")

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use('/api/user',userRouter);

app.use(errorHandler)

app.post("/sign-in",
(req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password){
        return res.json({ error: "email/password missing!"})
    }
    next()
}, 
(req, res) => {
    res.send("<h1>this is movie app</h1>");
})

app.listen(8000, () => {
    console.log("the server is listening on port 8000")
})

// MVC Pattern - Model View Controller