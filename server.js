let express = require('express')
let bodyParser = require('body-parser')
let app = express()
let htmlRoutes = require('./app/routing/htmlRoutes.js')
let apiRoutes = require('./app/routing/apiRoutes.js')
let PORT = process.env.PORT || 3000

app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}!`)
})

app.use(express.static(__dirname))

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.use('/', htmlRoutes, apiRoutes)