const {Schema, model} = require("mongoose");

const userSchema= new Schema({
_id:Number,
Tipodoc:String,
nombres:String,
apellidos:String,
fnacimiento:Date,
genero:String,
email:{type:String,require:true,unique:true},
telefono:Number,
paisorigen:String,
password:String,
tipouser:String,
img:String,
estado:String,
reservas:[{
  type:Schema.Types.ObjectId,
  ref:'Reserva'

}]

})
module.exports = model("User",userSchema);
