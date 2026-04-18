const router = require("express").Router();
const controller = require("../controllers/auth");

router.post("/signin", controller.signin);

module.exports = router;