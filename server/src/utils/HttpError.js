export class HttpError extends Error {
    /**
     * 
     * Used as an error template
     * 
     * @param {string} message 
     * @param {number} statusCode 
     */
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;

        Error.captureStackTrace(this, this.constructor);
    }
}
