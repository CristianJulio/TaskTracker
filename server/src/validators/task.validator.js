import { body, param } from 'express-validator'
import { HttpError } from '../utils/HttpError.js'
import { routesParams } from '../utils/RoutesParams.js'
import { TaskTableFields } from '../models/Task/fields.js'
import * as tasksRepository from '../repositories/tasks.repositories.js'

export const validateTaskExistance = async taskId => {
  const task = await tasksRepository.findOne(taskId)

  if (!task) throw new HttpError(`Task with id ${taskId} not found.`, 400)
}

export const validateTaskTitle = () => body(TaskTableFields.title)
  .trim()
  .exists({ values: "falsy" }).withMessage("Title is required")
  .isString().withMessage("Title must be a string")

export const validateTaskDeadline = () => body(TaskTableFields.deadline)
  .trim()
  .exists({ values: "falsy" }).withMessage("Deadline is required")
  .isISO8601().withMessage("Deadline must be a valid ISO 8601 date")
  .toDate()
  .custom(value => new Date(value) > new Date()).withMessage("Deadline must be in the future")

export const validateTaskCompleted = () => body(TaskTableFields.completed)
  .exists({ values: "falsy" }).withMessage("completed is required")
  .isBoolean().withMessage("completed must be true or false")
  .toBoolean()

export const validateTaskCategoryId = () => body(TaskTableFields.categoryId)
  .exists({ values: "falsy" }).withMessage("categoryId is required")
  .isInt().withMessage("categoryId must be an integer")

export const validateTaskUserId = () => body(TaskTableFields.userId)
  .exists({ values: "falsy" }).withMessage("userId is required")
  .isInt().withMessage("userId must be an integer")

export const validateTaskId = () => param(routesParams.tasks.taskId.base)
  .isInt().withMessage("taskid must be an integer")
  .toInt()

export const createTaskValidator = [
  validateTaskTitle(),
  validateTaskDeadline(),
  validateTaskCategoryId(),
  validateTaskUserId()
]

export const updateTaskValidator = [
  validateTaskId()
    .bail()
    .custom(validateTaskExistance),
  validateTaskTitle()
    .optional(),
  validateTaskDeadline()
    .optional(),
  validateTaskCompleted()
    .optional()
]

export const findOneTaskValidator = [
  validateTaskId()
]

export const deleteTaskValidator = [
  validateTaskId()
    .bail()
    .custom(validateTaskExistance)
]