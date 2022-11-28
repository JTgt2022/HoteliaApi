const mongoose = require('mongoose');

const conexionDB = async () => {
    const url=`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.nmkojzg.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
try{
    const BD =await mongoose.connect(url);
    console.log("Conexion Satisfactoria", DB.connection.name);


}catch (error) {
    console.log(error);

}

}

module.exports = conexionDB;