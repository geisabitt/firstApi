const router = require("express").Router();

const Pessoa = require("../models/Pessoa");

router.post("/", async (req, res) => {
  const {
    nome,
    sobrenome,
    data_nascimento,
    cpf,
    cep,
    endereco,
    numero,
    complemento,
    cidade,
    estado,
  } = req.body;

  if (!nome) {
    res.status(422).json({ error: "O nome é obrigatório" });
    return;
  }
  if (!sobrenome) {
    res.status(422).json({ error: "O sobrenome é obrigatório" });
    return;
  }
  if (!data_nascimento) {
    res.status(422).json({ error: "O data_nascimento é obrigatório" });
    return;
  }
  if (!cpf) {
    res.status(422).json({ error: "O cpf é obrigatório" });
    return;
  }
  if (!cep) {
    res.status(422).json({ error: "O cep é obrigatório" });
    return;
  }
  if (!endereco) {
    res.status(422).json({ error: "O endereco é obrigatório" });
    return;
  }
  if (!numero) {
    res.status(422).json({ error: "O numero é obrigatório" });
    return;
  }
  if (!complemento) {
    res.status(422).json({ error: "O complemento é obrigatório" });
    return;
  }
  if (!cidade) {
    res.status(422).json({ error: "O cidade é obrigatório" });
    return;
  }
  if (!estado) {
    res.status(422).json({ error: "O estado é obrigatório" });
    return;
  }

  const pessoa = {
    data: {
      dados_pessoais: { nome, sobrenome, data_nascimento, cpf },
      endereco: {
        cep,
        endereco,
        numero,
        complemento,
        cidade,
        estado,
      },
    },
  };

  try {
    await Pessoa.create(pessoa);
    res
      .status(201)
      .json({ message: "Pessoa inserida no sistema com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const pessoas = await Pessoa.find();
    res.status(200).json(pessoas);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const pessoa = await Pessoa.findOne({ _id: id });

    if (!pessoa) {
      res.status(422).json({ message: "O usuário não foi encontrado" });
      return;
    }

    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const {
    nome,
    sobrenome,
    data_nascimento,
    cpf,
    cep,
    endereco,
    numero,
    complemento,
    cidade,
    estado,
  } = req.body;

  const pessoa = {
    data: {
      dados_pessoais: { nome, sobrenome, data_nascimento, cpf },
      endereco: {
        cep,
        endereco,
        numero,
        complemento,
        cidade,
        estado,
      },
    },
  };

  try {
    const updatedPessoa = await Pessoa.updateOne({ _id: id }, pessoa);

    if (updatedPessoa.matchedCount === 0) {
      res.status(422).json({ message: "Usuário não encontrado!" });
      return;
    }

    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const pessoa = await Pessoa.findOne({ _id: id });
  if (!pessoa) {
    res.status(422).json({ message: "O usuário não foi encontrado" });
    return;
  }
  try {
    await Pessoa.deleteOne({ _id: id });

    res.status(200).json({ message: "Usuário removido com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

module.exports = router;
