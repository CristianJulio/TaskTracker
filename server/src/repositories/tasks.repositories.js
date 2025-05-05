import { prisma } from '../prisma/cliente.js'
import { Task } from '../models/task.model.js';

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
 * @param {number} taskId
 * @param {{title?: string, completed?: boolean}} updateTaskDto 
 * @returns {Promise<Task>}
 */
export const update = (taskId, updateTaskDto) => {
	const { title, completed } = updateTaskDto;

	try {
		return prisma.task.update({
			where: { id: taskId, active: true },
			data: {
				...(title != undefined && { title }),
				...(completed != undefined && { completed }),
				updatedAt: new Date()
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
		return prisma.task.update({
			where: { id: taskId, active: true },
			data: { active: false, updatedAt: new Date() }
		})
	} catch (error) {
		throw error;
	}
}