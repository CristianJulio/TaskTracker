import { HttpError } from '../utils/HttpError.js'
import { Task } from '../models/Task/task.model.js'
import * as tasksRepository from '../repositories/tasks.repositories.js'

/**
 * 
 * @returns {Promise<Task[]>}
 */
export const findAll = async () => {
  try {
    return tasksRepository.findAll()
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
    const task = await tasksRepository.findOne(taskId)

    if (!task) throw new HttpError(`Unable to find task with id: ${taskId}`, 404)

    return task
  } catch (error) {
    throw error
  }
}

/**
 * 
 * @param {{title: string, deadline: string, categoryId: number, userId: number}} createTaskDto
 * @returns {Promise<Task>}
 */
export const create = async (createTaskDto) => {
  try {
    return await tasksRepository.create(createTaskDto)
  } catch (error) {
    throw error;
  }
}

/**
 * @param {number} taskId
 * @param {{title?: string, completed?: boolean}} updateTaskDto
 * @returns {Promise<Task>}
 */
export const update = async (taskId, updateTaskDto) => {
  try {
    return tasksRepository.update(taskId, updateTaskDto)
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
    await findOne(taskId)

    return tasksRepository.deleteTask(taskId)
  } catch (error) {
    throw error;
  }
}