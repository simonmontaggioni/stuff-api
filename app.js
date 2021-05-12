const express = require("express");

const app = express();

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
