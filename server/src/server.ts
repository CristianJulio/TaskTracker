process.loadEnvFile()

import express from 'express'

const TodoApp = express()
const port = process.env.PORT || 3001

TodoApp.get("/", (req, res) => {
    res.send("Server running!")
})

TodoApp.listen(port, () => {
    console.log(`server running on: http://localhost:${port}`)
})