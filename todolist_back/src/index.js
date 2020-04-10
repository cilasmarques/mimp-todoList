const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: false}));
app.use(cors());

require('./app/controllers/index')(app);

app.listen(5000);
