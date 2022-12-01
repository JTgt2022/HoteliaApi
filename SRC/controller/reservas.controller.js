const Reservas = require('../model/Reservas');
exports.obtener=async (req, res)=> {
try{
    const reservas=await Reservas.find();
    res.status(200).json(reservas);

}catch(error){
    res.status(500).json(error);


}




}
