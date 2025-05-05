import { Router } from 'express'
import * as tasksController from '../../controller/tasks.controller.js'
import { routesParams } from '../../utils/RoutesParams.js'

const router = Router()

router.get("/", tasksController.findAll)
router.get(`/${routesParams.tasks.taskId.param}`, tasksController.findOne)
router.post("/create", tasksController.create)
router.put("/:taskId", tasksController.update)
router.put("/delete/:taskId", tasksController.deleteTask)

export default router