import { validationResult } from "express-validator"
import { HttpStatus } from "../utils/HttpStatus.js";

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 * @returns 
 */
export const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(HttpStatus.BadRequest).json({ error: true, message: errors.array(), data: null })
    }

    next();
}