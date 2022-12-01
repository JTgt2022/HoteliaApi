const{ Router } = require("express");
const rutashabitacion = Router();
const ctrHabitacion=require("../controller/habitaciones.controller"); 
const multer=require("multer");
const fecha=Date.now();

const rutaStorage= multer.diskStorage({
    destination: function(re,file,){
        callback(null, './Public/upload/');
    },
    filename:function(req, file, callback){
        callback(null, fecha +"_"+file.originalname);
    }
});

const upload =multer({ Storage:rutaStorage});

rutashabitacion.get('/',ctrHabitacion.obtener);
rutashabitacion.get('/:id',ctrHabitacion.obtenerId);
rutashabitacion.post('/',ctrHabitacion.add);
//rutashabitacion.put('/:id',ctrHabitacion.edit);


module.exports =rutashabitacion;