const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://pistaBlog:OQL6yaKwf2Y3ACGi@cluster0.4zy8s.mongodb.net/review_app")
.then(() => {
    console.log("Database is connected!")
})
.catch(err => {
    console.log("Database connection failed", err)
})