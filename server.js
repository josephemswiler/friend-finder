let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')
let app = express()
const PORT = 8001 //process.env.PORT

app.use(express.static(__dirname))

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

module.exports = app