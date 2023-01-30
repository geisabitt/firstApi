require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const dayjs = require("dayjs");
//import dayjs from 'dayjs' // ES 2015
dayjs().format();
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const clienteRoutes = require("./routes/clienteRoutes");

app.use("/api/cliente", clienteRoutes);

const personRoutes = require("./routes/personRoutes");

app.use("/api/person", personRoutes);

const pessoaRoutes = require("./routes/pessoaRoute");

app.use("/api/pessoa", pessoaRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Oi Espress!" });
});

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
const PORT = 3500 || process.env.PORT;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterapi.eknkm8b.mongodb.net/bancodaapi?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectamos ao MongoDB!");
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
