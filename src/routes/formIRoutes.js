const router = require("express").Router();

const FormI = require("../models/FormI");

router.post("/", async (req, res) => {
  //req.body
  const {
    name,
    birthDate,
    cpf,
    rg,
    cep,
    complemento,
    healthIns,
    subscription,
    sus,
  } = req.body;
  const formI = {
    name,
    birthDate,
    cpf,
    rg,
    cep,
    complemento,
    healthIns,
    subscription,
    sus,
  };

  if (
    (!name,
    !birthDate,
    !cpf,
    !rg,
    !cep,
    !complemento,
    !healthIns,
    !subscription,
    !sus)
  ) {
    res.status(422).json({ error: "Todos os campos são obrigatórios!" });
  }

  try {
    await FormI.create(formI);
    res.status(201).json({ message: "Dados inseridos com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro interno" });
  }
});

module.exports = router;
