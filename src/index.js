//Config inicial

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const DB_USER = "bruno";
const DB_PASSWORD = encodeURIComponent("oSYHfQPd8ZFYUMY0");





//Config de ler json ou xml/ middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json());




//Rotas
const newUserRoutes = require('./routes/newUserRoutes')
const formIRoutes = require('./routes/formIRoutes')
const loginRoutes = require('./routes/loginRoutes')
app.use('/newUser', newUserRoutes)
app.use('/login', loginRoutes)
app.use('/formI', formIRoutes)

 



// rota inicial - endpoint
app.get("/", (req, res) => {
  res.json({ message: "Rodando na porta 3000" });

  //mostrar requisição
});

//entregar a uma porta
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@casecluster.jqyd1.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectado ao MongoDB!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
