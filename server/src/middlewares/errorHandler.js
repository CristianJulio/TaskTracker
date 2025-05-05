/**
 * 
 * @param {any} err 
 * @param {Request} req 
 * @param {Response} res 
 * @param {import("express").NextFunction} next 
 */
export function errorHandler(err, req, res, next) {
    const status = err.statusCode || 500
    const message = err.message || "Internal server Error"

    res.status(status).json({ error: true, message, data: null })
}