const mongoose = require('mongoose');
const config = require('./config');

mongoose
  .connect(config.db, { useNewUrlParser: true })
  .then(() => console.log('Data Base Conect'));
