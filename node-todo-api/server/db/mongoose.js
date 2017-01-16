var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONBODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
