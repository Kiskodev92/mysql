const {Router} = require ("express")
const routers = Router();
const userCtrl = require("../controller/sql2.controllers")

routers.get("/notasid", userCtrl.getmedia);


module.exports = routers;