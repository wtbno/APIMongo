const router = require('express').Router()

const NewUser = require('../models/NewUser')

router.post("/", async (req, res) => {
    //req.body
    const { name, email, password, birthDate } = req.body;
    const newUser = {
      name,
      email,
      password,
      birthDate,
    };
  
    if ((!name, !email, !password, !birthDate)) {
      res.status(422).json({ error: "Todos os campos são obrigatórios!" });
    }
  
    try {
      await NewUser.create(newUser);
      res.status(201).json({ message: "Dados inseridos com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro interno" });
    }
  });

  module.exports = router;
  