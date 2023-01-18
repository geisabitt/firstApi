require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const personRoutes = require("./routes/personRoutes");

app.use("/person", personRoutes);

const pessoaRoutes = require("./routes/pessoaRoute");

app.use("/pessoa", pessoaRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Oi Espress!" });
});

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterapi.eknkm8b.mongodb.net/bancodaapi?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectamos ao MongoDB!");
    app.listen(3500);
  })
  .catch((err) => console.log(err));
