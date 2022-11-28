const express =require('express');
const conexionDB=require('./db');
const rutashabitacion=require('./routes/habitaciones.routes');
const rutasuser=require('./routes/users.routes');
const rutasreserva=require('./routes/reservas.routes');

const app =express();

require('dotenv').config();

//conexion a la base de datos 
conexionDB();


//conf
app.set("name","api-hotelia");
app.set("port",process.env.PORT || 3000);
app.set("host",process.env.HOST || 'localhost');

//midleware 
app.use(express.json());
app.use(express.static('public'));
app.use('/Public',express.static('Public/upload'));
app.use('/habitaciones',rutashabitacion);
app.use('/users',rutasuser);
app.use('/reservas',rutasreserva);

module.exports= app;
