import  Express  from "express";
const Home = Express()
const Service = [
    {
        ser:'Blockchain',
    },
    {
        ser:'Quantum Computing',
    },
    {
       ser:'SEO Optimization',
    }
]
Home.get("/:id", (req, res) => {
    res.send(req.Service.ser);
  });
  
  Home.param("id", (req, res, next, id) => {
    req.service = Service[id - 1];
    next();
  });
  
export default Home