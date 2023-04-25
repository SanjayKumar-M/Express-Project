const exp = require("express")
const app = exp();

app.get('/', (req, res) => { res.send("<h1>This is A Page</h1>") })

app.get('/:name/:id', (req, res) => {
    const [ name, id ]= req.params;
    
    res.send(`<h1>This is ${name} and roll no is ${id}</h1>`)
    

})


app.listen(3000, () => { console.log("Port is Listening Successfully") })
