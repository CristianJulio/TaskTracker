import { HttpError } from '../utils/HttpError.js'
import { prisma } from '../prisma/cliente.js'
import { Task } from '../models/task.model.js'

/**
 * 
 * @returns {Promise<Task[]>}
 */
export const findAll = async () => {
  try {
    return prisma.task.findMany()
  } catch (error) {
    throw error
  }
}

/**
 * 
 * @param {number} taskId 
 * @returns {Promise<Task>}
 */
export const findOne = async (taskId) => {
  try {
    const task = await prisma.task.findUnique({
      where: { id: taskId }
    })

    if (!task) throw new HttpError(`Unable to find task with id: ${taskId}`, 404)
  } catch (error) {
    throw error
  }
}

/**
 * 
 * @param {{title: string, completed?: boolean}} createTaskDto 
 * @returns {Promise<Task>}
 */
export const create = async (createTaskDto) => {
  try {
    return await prisma.task.create({ data: { title: taskDto.title } })
  } catch (error) {
    throw error;
  }
}

/**
 * 
 * @param {{title: string, completed?: boolean}} updateTaskDto
 * @returns {Promise<Task>}
 */
export const update = async (updateTaskDto) => {
  try {
    const { title, completed } = updateTaskDto

    return prisma.task.update({
      where: { id: Number(req.params[routesParams.tasks.taskId.base]) },
      data: {
        ...(title != undefined && { title }),
        ...(completed != undefined && { completed })
      }
    })
  } catch (error) {
    throw error;
  }
}

/**
 * 
 * @param {number} taskId 
 * @returns {Promise<Task>}
 */
export const deleteTask = async (taskId) => {
  try {
    return prisma.task.update({ where: { id: taskId }, data: { active: false } })
  } catch (error) {
    throw error;
  }
}