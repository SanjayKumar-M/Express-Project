const exp = require('express')
const app = exp()
const port = 5000
const Bio = {
    name: "Sanjay Kumar M",
    age: 20,
    designation: "Blockchain Developer",
    fav: "Elon ksuM"
}
app.get('/', (req, res) => { res.json(Bio) })
app.get('/contact', (req, res) => { res.send("<h1>This is my contact Details</h1>") })
app.listen(port, () => { console.log("Server is running Successfully...") })
app.get("/:name/:des", (req, res) => {
    const { name, des } = req.params;
    res.send(`<h1>Hey There! I'm ${name} and my role is ${des} </h1>`);
  });
  
