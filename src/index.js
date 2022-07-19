//Config inicial

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const DB_USER = 'bruno'
const DB_PASSWORD = encodeURIComponent('oSYHfQPd8ZFYUMY0')


const NewUser = require('./models/NewUser')

//Config de ler json ou xml/ middlewares
app.use(
  express.urlencoded({
    extends: true,
  })
);

app.use(express.json());

//Rotas da api
app.post('/create', async (req, res) => {

  //req.body
  const {name, email, password, birthDate, approved} = req.body
  const newUser ={
    name, email, password, birthDate, approved
  }

  try {
    await NewUser.create(newUser)
    res.status(201).json({message:'Dados inseridos com sucesso'})
    
  } catch (error) {
    res.status(500).json({error:'Erro interno'})
  }

})


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
  .then(() =>{
    console.log("Conectado ao MongoDB!");
    app.listen(3000)
  })
  .catch((err) => console.log(err));



