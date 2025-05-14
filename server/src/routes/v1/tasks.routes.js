import { createTaskValidator } from '../../validators/task.validator.js'
import { Router } from 'express'
import { routesParams } from '../../utils/RoutesParams.js'
import { validate } from '../../middlewares/validate.js'
import * as tasksController from '../../controller/tasks.controller.js'

const router = Router()

router.get("/", tasksController.findAll)
router.get(`/${routesParams.tasks.taskId.param}`, tasksController.findOne)
router.post("/create", createTaskValidator, validate, tasksController.create)
router.put(`/${routesParams.tasks.taskId.param}`, tasksController.update)
router.put(`/delete/${routesParams.tasks.taskId.param}`, tasksController.deleteTask)

export default router