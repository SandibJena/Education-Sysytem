class ApiError extends Error {
    constructor(statusCode, message, code = null) {
        super(message);
        this.statusCode = statusCode;
        this.code = code; // optional: original DB error code (e.g. Postgres SQLSTATE), for callers that need to branch on it
        Error.captureStackTrace(this, this.constructor);
    }
};

module.exports = { ApiError };
