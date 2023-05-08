import  Express  from "express";
const Home = Express()
Home.get('/',(req, res)=>{res.send("This is Home")})
export default Home