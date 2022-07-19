const router = require("express").Router();

const FormII = require("../models/FormII");

router.post("/", async (req, res) => {
  //req.body
  const { doctorName, crm, reqDate, reqNumber, unit, setor, obs } =
    req.body;
  const formII = {
    doctorName,
    crm,
    reqDate,
    reqNumber,
    unit,
    setor,
    obs,
  };

  if (
    (!doctorName, !crm, !reqDate, !reqNumber, !unit, !setor, !obs)
  ) {
    res.status(422).json({ error: "Todos os campos são obrigatórios!" });
  }

  try {
    await FormII.create(formII);
    res.status(201).json({ message: "Dados inseridos com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro interno" });
  }
});


router.get("/", async (req, res) => {
    try {
      const formIIs = await FormII.find();
  
      res.status(200).json(formIIs);
    } catch (error) {
      res.status(500).json({ error: "internal error" });
    }
  });
  
  router.get("/:id", async (req, res) => {
  
    const id = req.params.id
    try {
      //mongodb utiliza _id
      const formII = await FormII.findOne({_id: id});
  
  
      if(!formII){
        res.status(422).json({message:'Usuário não encontrado'})
        return
      }
  
      res.status(200).json(formII);
    } catch (error) {
      res.status(500).json({ error: "internal error" });
    }
  });
  
  

module.exports = router;
