let express = require('express')
let app = express.Router()

let friendsList = require("../data/friends.js")

app.get("/api/friends", function(req, res) {
    return res.json(friendsList)
  })
    
app.post("/api/friends", function(req, res) { 

    let newFriend = req.body
  
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase()
  
    friendsList.push(newFriend)
  
    res.json(newFriend)

    //check compatibility

    class Friend{
        constructor(name, score) {
            this.name = name
            this.score = score
        }
    }

    let scoreBoard = []

    for (let i in friendsList) {
     
        let sum = (total, value) => parseInt(total) + parseInt(value)
        
        let friend = new Friend(friendsList[i].name, friendsList[i].results.reduce(sum))

        scoreBoard.push(friend)

        scoreBoard.sort(function (a, b) {
            return a.score - b.score
        })

        console.log(scoreBoard)
    }

  })

  module.exports = app