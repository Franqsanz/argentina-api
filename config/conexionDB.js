const mongoose = require('mongoose');
const config = require('./config');

mongoose
  .connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Data Base Conect'));
