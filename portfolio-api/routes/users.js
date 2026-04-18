const router = require("express").Router();
const controller = require("../controllers/users");
const auth = require("../middleware/auth");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", auth, controller.update);
router.delete("/:id", auth, controller.remove);

module.exports = router;