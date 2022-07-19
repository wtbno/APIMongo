const mongoose = require('mongoose')

const FormI = mongoose.model('FormI', {
  name: String,
  birthDate: String,
  cpf: String,
  rg: String,
  cep: String,
  complemento: String,
  healthIns: String,
  subscription: Number,
  sus: String,

});


module.exports = FormI;