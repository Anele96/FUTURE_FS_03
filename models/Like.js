// ===============================
// ❤️ LIKE MODEL
// ===============================

const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  imageId: String,
  count: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Like", likeSchema);