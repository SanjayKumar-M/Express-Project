import Express from 'express'
import Home from "./Home.js"
import Service from './Services.js'
const app = Express()
app.use('/home',Home)
app.use('/service',Service)
app.listen(5000)