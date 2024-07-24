const express = require("express");
const {router} = require("./src/routes.js");
require("dotenv").config({ path: "./.env" });

const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use("/static", express.static("static"));


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE"); // Allow these methods
    return res.status(200).json({});
  }
  next();
});

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`server running at port ${process.env.PORT}`);
});
