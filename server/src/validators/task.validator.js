import { body } from 'express-validator'
import { TaskTableFields } from '../models/Task/fields.js'

export const createTaskValidator = [
  body(TaskTableFields.title)
    .trim()
    .exists({ values: "falsy" }).withMessage("Title is required")
    .isString().withMessage("Title must be a string"),
  body(TaskTableFields.deadline)
    .trim()
    .exists({ values: "falsy" }).withMessage("Deadline is required")
    .isISO8601().withMessage("Deadline must be a valid ISO 8601 date")
    .toDate()
    .custom(value => new Date(value) > new Date()).withMessage("Deadline must be in the future"),
  body(TaskTableFields.categoryId)
    .trim()
    .exists({values: "falsy"}).withMessage("categoryId is required")
    .isInt().withMessage("categoryId must be an integer")
]