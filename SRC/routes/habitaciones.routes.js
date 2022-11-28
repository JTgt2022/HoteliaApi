const{ Router } = require("express");
const rutashabitacion = Router();
const ctrHabitacion=require("../controller/habitaciones.controller"); 

rutashabitacion.get('/',ctrHabitacion.obtener);
//rutashabitacion.get('/:id',ctrHabitacion.obtenerId);
//rutashabitacion.post('/:id',ctrHabitacion.add);
//rutashabitacion.put('/:id',ctrHabitacion.edit);


module.exports =rutashabitacion;