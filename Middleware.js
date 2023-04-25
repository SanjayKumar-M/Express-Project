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


app.get('/', (req, res) => {
  res.send('Welcome to our commercial website!');
});

app.get('/services', (req, res) => {
  res.send('Our services include: Web Design, Web Development, SEO, Social Media Marketing, Email Marketing, Content Marketing, PPC Advertising, and Video Production.');
});


app.get('/:number', (req, res) => {
  res.send(`We offer ${req.serviceName} services.`);
});


app.get('/about', (req, res) => {
  res.send('Learn more about our company and our team.');
});


app.get('/contact', (req, res) => {
  res.send('Get in touch with us to discuss your project.');
});


app.get('/careers', (req, res) => {
  res.send('Check out our current job openings and apply to join our team.');
});



app.listen(5000, () => {
  console.log(`Server listening Successfully ...`);
});
