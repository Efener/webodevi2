const mongoose = require('mongoose');

const financeSchema = new mongoose.Schema({
  title: String,
  url: String,
  value: String,
  change: String,
});

module.exports = mongoose.model('Finance', financeSchema);
