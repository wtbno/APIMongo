//Config inicial

const express = require("express");
const app = express();

//Config de ler json ou xml/ middlewares
app.use(
  express.urlencoded({
    extends: true,
  })
);

app.use(express.json());

// rota inicial - endpoint
app.get("/", (req, res) => {
  res.json({ message: "Rodando na porta 3000" });

  //mostrar requisição
});

//mongodb+srv://bruno:<password>@casecluster.jqyd1.mongodb.net/?retryWrites=true&w=majority

//entregar a uma porta
app.listen(3000);
