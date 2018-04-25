let express = require('express')
let app = express.Router()
let path = require('path')

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"))
})

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"))
})

module.exports = app