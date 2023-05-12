import  Express  from "express";
const front = Express()
front.post('/',(req, res)=>{console.log(res.json({Name:"",Email:""}))})

export default front
