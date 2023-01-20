const router = require("express").Router();

const Cliente = require("../models/Cliente");

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

  const cliente = {
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
  };

  try {
    await Cliente.create(cliente);
    res
      .status(201)
      .json({ message: "Cliente inserido no sistema com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const cliente = await Cliente.find();
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const cliente = await Cliente.findOne({ _id: id });

    if (!cliente) {
      res.status(422).json({ message: "O cliente não foi encontrado" });
      return;
    }

    res.status(200).json(cliente);
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

  const cliente = {
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
  };

  try {
    const updatedCliente = await Cliente.updateOne({ _id: id }, cliente);

    if (updatedCliente.matchedCount === 0) {
      res.status(422).json({ message: "Cliente não encontrado!" });
      return;
    }

    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const cliente = await Cliente.findOne({ _id: id });
  if (!cliente) {
    res.status(422).json({ message: "O cliente não foi encontrado" });
    return;
  }
  try {
    await Cliente.deleteOne({ _id: id });

    res.status(200).json({ message: "Cliente removido com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

module.exports = router;
