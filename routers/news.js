const express = require("express");
const News = require("../models/news");
const router = express.Router();
const cors = require("cors");

router.get("/news", cors(), async (req, res) => {
  const news = await News.find();
  res.json({ data: news });
});

router.post("/news", cors(), async (req, res) => {
  await News.create(req.body);
  const news = await News.find();
  res.json({ data: news });
});

module.exports = router;
