const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  newsImage: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  description: {
    type: String,
    required: true,
  },
  question: {
    type: Object,
  },
  response: {
    type: Object,
  },
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
