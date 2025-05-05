process.loadEnvFile()

import express from 'express'
import cors from 'cors'

import tasksRouter from './routes/v1/tasks.routes.js'
import { errorHandler } from './middlewares/errorHandler.js'

// Initial Data
const TaskTracker = express()
const port = process.env.PORT || 3001

// Set Up
TaskTracker.use(express.json())
TaskTracker.use(cors())

// Vitals Route
TaskTracker.get("/", (req, res) => {
    res.send("Server running!")
})

// Routes
TaskTracker.use("/api/v1/tasks", tasksRouter)

// Error handling middleware
TaskTracker.use(errorHandler)

// Server Initialization
TaskTracker.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`)
})