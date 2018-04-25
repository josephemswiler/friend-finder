let app = require('../../server.js')
let friendsList = require("../data/friends.js")

app.get("/api/friends", function(req, res) {
    return res.json(friendsList)
  })
    
app.post("/api/friends", function(req, res) { 

    let newFriend = req.body
  
    newFriend.routeName = newRes.name.replace(/\s+/g, "").toLowerCase()
  
    console.log(newFriend)
  
    friendsList.push(newFriend)
  
    res.json(newFriend)

    //check compatibility


  })