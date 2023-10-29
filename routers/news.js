const express = require("express");
const News = require("../models/news");
const router = express.Router();

router.get("/news", async (req, res) => {
  const news = await News.find();
  res.json({ data: news });
});

router.post("/news", async (req, res) => {
  await News.create(req.body);
  const news = await News.find();
  res.json({ data: news });
});

module.exports = router;
