const express = require("express");
const app = express();

const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));
app.use("/views",express.static("./src/views"));
app.use("/static", express.static("static"));

const { router } = require(`./src/routes/routes.js`);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); // Allow these methods
      return res.status(200).json({});
    }
    next();
  });


app.use("/api", router);

module.exports = { app };
