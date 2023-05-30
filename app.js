import Express from 'express'
import Home from "./Home.js"
import Service from './Services.js'
import front from './Front.js'
import cors from 'cors'
const app = Express()
app.use(cors());
app.use('/home',Home)
app.use('/service',Service)
app.use('/frontend',front)
app.listen(5000)