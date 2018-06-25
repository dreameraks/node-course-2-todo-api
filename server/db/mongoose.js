const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB.URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose: mongoose
};
