const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: String },
  time: { type: String },
  message: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);