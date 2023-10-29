const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const NewsRouter = require("./routers/news");
const Category = require("./routers/category");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(NewsRouter);
app.use(Category);

app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb connected current ip address"));

app.listen(process.env.SERVER_PORT, () =>
  console.log("server has ben started on port " + process.env.SERVER_PORT)
);
