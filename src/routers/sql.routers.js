const {Router} = require ("express")
const router = Router();
const userCtrl = require("../controller/sql.controllers");

router.get("/alumnoid", userCtrl.getAlum);
router.get("/alumnoid", userCtrl.getAlums);
router.get("/alumnoid", userCtrl.postAlum);
router.get("/alumnoid", userCtrl.putAlum);
router.get("/alumnoid", userCtrl.deleteAlum);

module.exports = router;