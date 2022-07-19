const mongoose = require("mongoose");

const FormII = mongoose.model("FormII", {
  doctorName: String,
  crm: String,
  reqDate: String,
  reqNumber: String,
  unit: String,
  setor: String,
  obs: String,
});

module.exports = FormII;
