const mongoose = require('mongoose');

const newsContentSchema = new mongoose.Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model('NewsContent', newsContentSchema);
