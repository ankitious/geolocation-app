const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let locations = [
    { id : 1, place : 'Berlin', latitude: 52.5200, longitude : 13.4050},
    { id : 2, place : 'Frankfurt', latitude: 50.1109, longitude : 8.6821}
];

app.get('/api/locations', (req, res) => {
  res.send({ locations });
});

app.post('/api/locations', (req, res) => {
  console.log(req.body);
  locations = req.body.locations;
  res.send({locations : req.body.locations})
});

app.listen(port, () => console.log(`Listening on port ${port}`));
