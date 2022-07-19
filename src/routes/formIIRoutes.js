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

module.exports = router;
