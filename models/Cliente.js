const mongoose = require("mongoose");

const Cliente = mongoose.model("Cliente", {
  nome: String,
  sobrenome: String,
  data_nascimento: String,
  cpf: String,
  cep: String,
  endereco: String,
  numero: String,
  complemento: String,
  cidade: String,
  estado: String,
});

module.exports = Cliente;
