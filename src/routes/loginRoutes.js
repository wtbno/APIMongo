const router = require('express').Router()

const Login = require('../models/Login')

router.post("/", async (req, res) => {
    //req.body
    const { email, password } = req.body;
    const login = {
      email,
      password
    };
  
    if ((!email, !password)) {
      res.status(422).json({ error: "Todos os campos são obrigatórios!" });
    }
  
    try {
      await Login.create(login);
      res.status(201).json({ message: "Login efetuado" });
    } catch (error) {
      res.status(500).json({ error: "Login não efetuado" });
    }
  });

  module.exports = router;
  