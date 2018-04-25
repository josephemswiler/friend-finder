let express = require('express')
let app = express.Router()

let friendsList = require("../data/friends.js")

app.get("/api/friends", function(req, res) {
    return res.json(friendsList)
  })
    
app.post("/api/friends", function(req, res) { 

    let newFriend = req.body
  
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase()
  
    console.log(newFriend)
  
    friendsList.push(newFriend)
  
    res.json(newFriend)

    //check compatibility


  })

  module.exports = app