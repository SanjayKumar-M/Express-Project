import  Express  from "express";
const Service = Express()
Service.get('/',(req, res)=>{res.send("This is Service")})
export default Service