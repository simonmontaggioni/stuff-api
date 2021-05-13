const { DB_HOST, DB_USER, DB_PASSWORD } = require("./config");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`)
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas");
    console.error(error);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.post("/api/stuff", (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ message: "Thing created successfully" });
});

app.use("/api/stuff", (req, res, next) => {
  const stuff = [
    {
      _id: "oeihfzeoi",
      title: "My first thing",
      description: "All of the info about my first thing",
      imageUrl: "",
      price: 4000,
      userId: "qeomihvqios",
    },
    {
      _id: "oeihfzeomoihi",
      title: "My second thing",
      description: "All of the info about my second thing",
      imageUrl: "",
      price: 2000,
      userId: "qeomihvqios",
    },
  ];

  res.status(200).json(stuff);
});

module.exports = app;
