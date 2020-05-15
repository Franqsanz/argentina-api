'use strict';

const mongoose = require('mongoose');
const { db } = require('./config');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(db, options);
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

const connect = mongoose.connection;

connect.on('error', err => console.error(`→ ${err.message}`));
connect.once('open', () => console.log('DB Connection'));
