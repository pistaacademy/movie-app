const express = require("express");
const userRouter = require("./routers/user");
require('./db')

const app = express();
app.use(express.json())
app.use('/api/user',userRouter);

app.get("/about", (req, res) => {
    res.send("<h1>this is movie app from Pista Academy</h1>");
})

app.listen(8000, () => {
    console.log("the server is listening on port 8000")
})

// MVC Pattern - Model View Controller