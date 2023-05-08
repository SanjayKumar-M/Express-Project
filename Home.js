const express = require('express')
const Home = express.Router()
Home.get('/',(req, res)=>{res.send("<h1>This is Homepage</h1>")})

