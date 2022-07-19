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


router.get("/", async (req, res) => {
  try {
    const formIs = await FormI.find();

    res.status(200).json(formIs);
  } catch (error) {
    res.status(500).json({ error: "internal error" });
  }
});

router.get("/:id", async (req, res) => {

  const id = req.params.id
  try {
    //mongodb utiliza _id
    const formI = await FormI.findOne({_id: id});


    if(!formI){
      res.status(422).json({message:'Usuário não encontrado'})
      return
    }

    res.status(200).json(formI);
  } catch (error) {
    res.status(500).json({ error: "internal error" });
  }
});


module.exports = router;
