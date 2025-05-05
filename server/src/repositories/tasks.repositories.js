import { Task } from '../models/task.model.js';
import { prisma } from '../prisma/cliente.js'

/**
 * 
 * @returns {Promise<Task[]>}
 */
export const findAll = () => {
	try {
		return prisma.task.findMany({ where: { active: true } })
	} catch (error) {
		throw error;
	}
}

/**
 * 
 * @param {number} taskId 
 * @returns {Promise<Task>}
 */
export const findOne = (taskId) => {
	try {
		return prisma.task.findUnique({ where: { id: taskId, active: true } })
	} catch (error) {
		throw error;
	}
}

/**
 * 
 * @param {{title: string}} createTaskDto 
 * @returns {Promise<Task>}
 */
export const create = (createTaskDto) => {
	try {
		return prisma.task.create({ data: { title: createTaskDto.title } })
	} catch (error) {
		throw error;
	}
}

/**
 * 
 * @param {{title?: string, completed?: boolean}} updateTaskDto 
 * @returns {Promise<Task>}
 */
export const update = (updateTaskDto) => {
	try {
		return prisma.task.update({
			where: { id: Number(req.params[routesParams.tasks.taskId.base]) },
			data: {
				...(updateTaskDto.title != undefined && { title }),
				...(updateTaskDto.completed != undefined && { completed })
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
		return prisma.task.update({ where: { id: taskId, active: true }, data: { active: false } })
	} catch (error) {
		throw error;
	}
}