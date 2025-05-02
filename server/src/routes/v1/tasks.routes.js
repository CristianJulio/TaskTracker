import { Router } from 'express'
import { prisma } from '../../prisma/cliente.js'

const router = Router()

router.get("/", async (req, res) => {})
router.get("/:taskId", (req, res) => { })
router.post("/create", (req, res) => { })
router.put("/:taskId", (req, res) => { })
router.put("/delete/:taskId", (req, res) => { })

export default router