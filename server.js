require("dotenv").config();
const express = require("express");
const app = express();
const User = require("./models/user");
const db = require("./models");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

db.authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

// db.sync({ force: true });
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.get("/user", async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});
app.get("/post", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.listen(process.env.PORT, () =>
  console.log(`🔥started on port ${process.env.PORT}`)
);
