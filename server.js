require("dotenv").config()
const express = require("express");
const axios = require("axios");
const app = express()
const cors = require("cors")

app.use(cors())

app.get("/api/v1/apex/:platform/:gamertag", function(req,res){
    axios.get(process.env.API_APEX_KEY_URL+`platform=${req.params.platform}&player=${req.params.gamertag}&auth=${process.env.API_APEX_KEY}`)
        .then(response => {
            console.log(response)
            res.json(response.data)
        }).catch(err => {
            res.status(404)
            res.json(err.message)
            console.log(err.message)
        })
})

app.listen(3000, function(){
    console.log(`server listening on port 3000`)
})