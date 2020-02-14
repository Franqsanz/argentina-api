module.exports = {
  Port: process.env.PORT || process.env.PORT_LOCAL,
  db: process.env.MONGODB_URI || process.env.MONGODB_LOCAL
};
