const{ Router } = require("express");
const rutasreserva = Router();
const ctrreserva=require("../controller/reservas.controller"); 

rutasreserva.get('/',ctrreserva.obtener);
//rutasreserva.get('/:id',ctrreserva.obtenerId);
//rutasreserva.post('/:id',ctrreserva.add);
//rutasreserva.put('/:id',ctrreserva.edit);


module.exports =rutasreserva;