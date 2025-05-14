import { body } from 'express-validator'
import { TaskTableFields } from '../../models/Task/fields.js'

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
]