const express = require("express");
require('express-async-errors')
const morgan = require("morgan");
require("dotenv").config();
const userRouter = require("./routers/user");
const actorRouter = require("./routers/actor");
const movieRouter = require("./routers/movie");
require('./db');
const {errorHandler} = require("./middleware/error")
const cors = require('cors');
const { handleNotFound } = require("./utils/helper");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use('/api/user',userRouter);
app.use('/api/actor',actorRouter);
app.use('/api/movie',movieRouter);
app.use('/*',handleNotFound)

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