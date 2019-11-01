const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)
router.get("/concluido", controller.getTarefasConcluidas)
router.get("/:id", controller.getTarefasById)


module.exports = router