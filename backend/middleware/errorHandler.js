/**
 * Global Error Handler Middleware
 * Catches and formats all errors from controllers and routes
 */
export const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  const statusCode = err.statusCode || err.status || 500;
  const message = err.message || "Internal Server Error";

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      message: "Validation Error",
      errors,
    });
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "Duplicate entry",
    });
  }

  // CORS error
  if (message.includes("CORS")) {
    return res.status(403).json({
      success: false,
      message: "CORS: Origin not allowed",
    });
  }

  // Generic error response
  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === "development" && { error: err }),
  });
};

/**
 * 404 Not Found Handler
 */
export const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
};

export default errorHandler;
