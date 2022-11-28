const{ Router } = require("express");
const rutasuser = Router();
const ctruser=require("../controller/users.controller"); 

//rutasuser.get('/',ctruser.obtener);
//rutasuser.get('/:id',ctruser.obtenerId);
//rutasuser.post('/:id',ctruser.add);
//rutasuser.put('/:id',ctruser.edit);


module.exports =rutasuser;