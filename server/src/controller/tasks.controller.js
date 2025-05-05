import { HttpError } from '../utils/HttpError.js'
import { HttpStatus } from '../utils/HttpStatus.js'
import { prisma } from '../prisma/cliente.js'
import { routesParams } from '../utils/RoutesParams.js'

/**
 * 
 * Find all active tasks
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export const findAll = async (req, res, next) => {
  try {
    const tasks = await prisma.task.findMany()
    res.status(HttpStatus.Ok).json({ error: false, message: null, data: tasks })
  } catch (error) {
    next(error)
  }
}

/**
 * 
 * Find one task by ID
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export const findOne = async (req, res, next) => {
  try {
    const id = Number(req.params[routesParams.tasks.taskId.base])

    const task = await prisma.task.findUnique({
      where: { id }
    })

    if (!task) throw new HttpError(`Unable to find task with id: ${id}`, 404)

    res.status(HttpStatus.Ok).json({ error: false, message: null, data: task })
  } catch (error) {
    next(error)
  }
}

/**
 * 
 * Create a new task
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export const create = async (req, res, next) => {
  try {
    const createdTask = await prisma.task.create({ data: { title: req.body.title } })
    res.status(HttpStatus.Created).json({ error: false, message: null, data: createdTask })
  } catch (error) {
    next(error)
  }
}

/**
 * 
 * Update a task by ID
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export const update = async (req, res, next) => {
  try {
    const { title, completed } = req.body

    const updatedTask = await prisma.task.update({
      where: { id: Number(req.params[routesParams.tasks.taskId.base]) },
      data: {
        ...(title != undefined && { title }),
        ...(completed != undefined && { completed })
      }
    })

    res.status(HttpStatus.Ok).json({ error: false, message: null, data: updatedTask })
  } catch (error) {
    next(error)
  }
}

/**
 * 
 * Delete task by ID
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export const deleteTask = async (req, res, next) => {
  try {
    await prisma.task.update({
      where: { id: Number(req.params[routesParams.tasks.taskId.base]) },
      data: { active: false }
    })

    res.status(HttpStatus.Ok).json({ error: false, message: null, data: null })
  } catch (error) {
    next(error)
  }
}