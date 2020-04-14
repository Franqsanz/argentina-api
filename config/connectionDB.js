'use strict';

const mongoose = require('mongoose');
const config = require('./config');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(config.db, options);
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;

db.on('error', err => console.error(`→ ${err.message}`));
db.once('open', () => console.log('DB Connection'));
