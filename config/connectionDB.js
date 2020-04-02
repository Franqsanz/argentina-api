const mongoose = require('mongoose');
const config = require('./config');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// mongoose
//   .connect(config.db, options)
//   .then(() => console.log('Data Base Conect'));

mongoose.connect(config.db, options);
mongoose.Promise = global.Promise;

mongoose.connection.on('error', err => {
  console.error(`→ ${err.message}`);
});
