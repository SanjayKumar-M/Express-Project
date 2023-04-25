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
