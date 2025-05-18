const mongoose = require('mongoose');

const sliderNewsSchema = new mongoose.Schema({
  heading: String,
});

module.exports = mongoose.model('SliderNews', sliderNewsSchema);
