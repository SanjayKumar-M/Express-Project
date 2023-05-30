const express = require('express');
const app = express();

app.use('/:number', (req, res, next) => {
  const services = {
    1: 'Metamask',
    2: 'Consensys',
    3: 'Brave',
    4: 'Arcana',
    5: 'Ethereum',
    6: 'Polygon',
    7: 'Filecoin',
    8: 'Flashbot'
  };
  const number = req.params.number;
  if (!services[number]) {
    return res.status(404).send('Service not found');
  }
  req.serviceName = services[number];
  next();
});

app.route('/')
  .get((req, res) => {
    res.send('Welcome to our commercial website!');
  });

app.route('/services')
  .get((req, res) => {
    res.send('Our services include: Smart contract developemt, Auditing, Implementing Consensys Algorithms');
  });

app.route('/:number')
  .get((req, res) => {
    res.send(`We offer ${req.serviceName} services.`);
  });

app.route('/about')
  .get((req, res) => {
    res.send('Learn more about our company and our team.');
  });

app.route('/contact')
  .get((req, res) => {
    res.send('Get in touch with us to discuss your project.');
  });

app.route('/careers')
  .get((req, res) => {
    res.send('Check out our current job openings and apply to join our team.');
  });

app.listen(5000, () => {
  console.log('Server listening Successfully ...');
});

// const express = require("express")
// // const app = express()
// // const port = 3000
// // const path = require("path")
// // const jsons = {
// //     name: "Sanjay",reg: 21222, College: "Saveetha Engineering College"
// // }

// // app.set("view engine", "ejs")
// // app.use(express.static(path.join(__dirname ,'public')))
// // app.get('/',(req,res,next)=>{res.render('Home.ejs')})
// // app.listen(port, console.log("Connection Established Successfully..."))
// // // app.get('/:name/:pswd',(req,res)=>{
// // //     const {name,pswd} = req.params;
// // //     res.send(`<h1>The user name is ${name} and password is ${pswd}<h1>`)
// // // })

// const express = require("express");
// const app = express();
// const port = 3000;
// const path = require("path");

// app.set("view engine", "ejs"); 

// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res, next) => {
//   res.render("home.ejs");
// });

// app.get("/:name/:pswd", (req, res) => {
//   const { name, pswd } = req.params;
//   res.send(`<h1>The user name is ${name} and password is ${pswd}</h1>`); // Fixed closing tag for <h1>
// });

// app.listen(port, () => {
//   console.log("Connection Established Successfully...");
// });
