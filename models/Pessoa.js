const mongoose = require("mongoose");

const Pessoa = mongoose.model("Pessoa", {
  data: {
    dados_pessoais: {
      nome: String,
      sobrenome: String,
      data_nascimento: String,
      cpf: Number,
    },
    endereco: {
      cep: Number,
      endereco: String,
      numero: String,
      complemento: String,
      cidade: String,
      estado: String,
    },
  },
});

module.exports = Pessoa;
