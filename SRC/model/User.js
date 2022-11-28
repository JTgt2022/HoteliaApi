const {Schema, model} = require("mongoose");

const habitacionSchema= new Schema({
_id:Number,
Tipodoc:String,
nombres:String,
apellidos:String,
fnacimiento:Date,
genero:String,
email:{Type:String,require:true,unique:true},
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
