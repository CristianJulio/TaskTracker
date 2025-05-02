process.loadEnvFile()

import express from 'express'

const TaskTracker = express()
const port = process.env.PORT || 3001

TaskTracker.get("/", (req, res) => {
    res.send("Server running!")
})

TaskTracker.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`)
})