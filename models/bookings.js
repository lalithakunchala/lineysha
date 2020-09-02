const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookingModel = new Schema({
  date: {
    type: Date
  },
});

module.exports = mongoose.model('BookingModel', BookingModel);