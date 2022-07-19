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


  router.get("/", async (req, res) => {
    try {
      const logins = await login.find();
  
      res.status(200).json(logins);
    } catch (error) {
      res.status(500).json({ error: "internal error" });
    }
  });
  
  router.get("/:id", async (req, res) => {
  
    const id = req.params.id
    try {
      //mongodb utiliza _id
      const login = await login.findOne({_id: id});
  
  
      if(!login){
        res.status(422).json({message:'Credenciais inválidas'})
        return
      }
  
      res.status(200).json(login);
    } catch (error) {
      res.status(500).json({ error: "internal error" });
    }
  });
  

  module.exports = router;
  