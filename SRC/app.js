const Express =require('express');
const conexionDB=require('./db');

const app =express();

require('docenv').config();

//conexion a la base de datos 
conexionDB();


//conf
app.set("name","api-hotelia");
app.set("port",process.env.PORT || 3000);
app.set("host",process.env.HOST || 'localhost');

