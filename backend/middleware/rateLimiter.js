import rateLimit from "express-rate-limit";

/**
 * Rate Limiting Middleware
 * Prevents spam and bot attacks
 * Allows 5 requests per 15 minutes per IP address
 */
export const contactLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 5, // limit each IP to 5 requests per windowMs
  message:
    "Too many contact form submissions from this IP, please try again later.",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  keyGenerator: (req) => {
    return req.ip || req.connection.remoteAddress; // Use IP address as the key
  },
  skip: (req) => {
    return req.ip === "::1" || req.ip === "127.0.0.1"; // Skip rate limiting for localhost
  },
});

export default contactLimiter;
