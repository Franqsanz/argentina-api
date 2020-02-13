const mongoose = require('mongoose');
const config = require('./config');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose
  .connect(config.db, options)
  .then(() => console.log('Data Base Conect'));
