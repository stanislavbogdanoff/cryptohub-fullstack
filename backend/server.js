const express = require("express");
const path = require("path");

const dotenv = require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const cors = require("cors");

const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/tags", require("./routes/tagRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Port ${port} is up and running baby`));
