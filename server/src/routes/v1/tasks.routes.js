import { createTaskValidator, deleteTaskValidator, findOneTaskValidator, updateTaskValidator } from '../../validators/task.validator.js'
import { Router } from 'express'
import { routesParams } from '../../utils/RoutesParams.js'
import { validate } from '../../middlewares/validate.js'
import * as tasksController from '../../controller/tasks.controller.js'

const router = Router()

router.get("/", tasksController.findAll)
router.get(`/${routesParams.tasks.taskId.param}`, findOneTaskValidator, validate, tasksController.findOne)
router.post("/create", createTaskValidator, validate, tasksController.create)
router.put(`/${routesParams.tasks.taskId.param}`, updateTaskValidator, validate, tasksController.update)
router.delete(`/delete/${routesParams.tasks.taskId.param}`, deleteTaskValidator, validate, tasksController.deleteTask)

export default router