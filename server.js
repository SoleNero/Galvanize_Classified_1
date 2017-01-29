'use strict';

const express = require('express');
const app = express();
const body_parser = require('body-parser');

const messages = require('./routes/classifieds');

app.use(body_parser.json());
app.use('/classifieds',messages);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;



