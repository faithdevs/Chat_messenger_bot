const router = require("express").Router();
const controller = require("../controllers/chatBotController");

router.get("/test", controller.testDB);

module.exports = router;

