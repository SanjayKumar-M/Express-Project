import  Express from 'express'
const port = 3000
const app = Express()

//this is for static server
app.set("view engine","ejs")
// app.use(Express.static(path.join('public')))
app.get('/',(req, res)=>{res.render('home.ejs')})

//parameters
app.get('/:name/:id',(req, res)=>{
    const {name, id} = req.params;
    res.send(`<h1>Hello ${name}, your unique id is ${id}`)
})


//common for listening
app.listen(port,()=>{console.log("Port listening ...")})
