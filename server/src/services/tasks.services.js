import { HttpError } from '../utils/HttpError.js'
import { Task } from '../models/task.model.js'
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
 * @param {{title: string}} createTaskDto 
 * @returns {Promise<Task>}
 */
export const create = async (createTaskDto) => {
  try {
    return tasksRepository.create(createTaskDto)
  } catch (error) {
    throw error;
  }
}

/**
 * 
 * @param {{title?: string, completed?: boolean}} updateTaskDto
 * @returns {Promise<Task>}
 */
export const update = async (updateTaskDto) => {
  try {
    return tasksRepository.update(updateTaskDto)
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