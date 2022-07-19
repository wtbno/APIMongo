const router = require("express").Router();

const NewUser = require("../models/NewUser");

//Create
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
    return
  }

  try {
    await NewUser.create(newUser);
    res.status(201).json({ message: "Dados inseridos com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro interno" });
  }
});

//Read
router.get("/", async (req, res) => {
  try {
    const newUsers = await NewUser.find();

    res.status(200).json(newUsers);
  } catch (error) {
    res.status(500).json({ error: "internal error" });
  }
});

router.get("/:id", async (req, res) => {

  const id = req.params.id
  try {
    //mongodb utiliza _id
    const newUser = await NewUser.findOne({_id: id});


    if(!newUser){
      res.status(422).json({message:'Usuário não encontrado'})
      return
    }

    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "internal error" });
  }
});

module.exports = router;
