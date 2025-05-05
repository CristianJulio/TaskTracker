import { HttpStatus } from '../utils/HttpStatus.js'
import { routesParams } from '../utils/RoutesParams.js'
import * as tasksServices from '../services/tasks.services.js'

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
    const tasks = await tasksServices.findAll()
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
    const task = await tasksServices.findOne(Number(req.params[routesParams.tasks.taskId.base]))
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
    const createdTask = await tasksServices.create(req.body)
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
    const updatedTask = await tasksServices.update(req.body)
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
    await tasksServices.deleteTask(Number(req.params[routesParams.tasks.taskId.base]))
    res.status(HttpStatus.Ok).json({ error: false, message: null, data: null })
  } catch (error) {
    next(error)
  }
}