import express from "express";
import Contact from "../models/Contact.js";
import { contactLimiter } from "../middleware/rateLimiter.js";
import { sanitizeInput, validateContactForm } from "../utils/validators.js";
import { verifyRecaptcha } from "../utils/recaptcha.js";

const router = express.Router();

/**
 * POST /api/contact
 * Handles contact form submission
 * - Validates input
 * - Verifies reCAPTCHA token
 * - Saves to MongoDB
 * - Returns success/error response
 */
router.post("/", contactLimiter, async (req, res, next) => {
  try {
    const { name, email, message, recaptchaToken, captchaToken } = req.body;
    const token = recaptchaToken || captchaToken;

    // Debugging: log whether token arrived and length (do not log token contents in production)
    console.debug(
      `Contact submit received. recaptchaToken present=${!!recaptchaToken} captchaToken present=${!!captchaToken} length=${token ? token.length : 0}`,
    );

    // Step 1: Basic validation (frontend validation backup)
    const validation = validateContactForm({ name, email, message });
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validation.errors,
      });
    }

    // Step 2: Verify reCAPTCHA token
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Please complete the reCAPTCHA verification",
      });
    }

    const recaptchaResult = await verifyRecaptcha(token);
    if (!recaptchaResult.success) {
      console.warn(
        "reCAPTCHA verification failed:",
        recaptchaResult.error,
        recaptchaResult.details || "no details",
      );
      return res.status(400).json({
        success: false,
        message: recaptchaResult.error || "reCAPTCHA verification failed",
        errorCodes:
          recaptchaResult.details && Array.isArray(recaptchaResult.details["error-codes"])
            ? recaptchaResult.details["error-codes"]
            : [],
        hostname: recaptchaResult.details?.hostname,
      });
    }

    // Step 3: Sanitize inputs (prevent XSS)
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    // Step 4: Create and save contact document
    const contact = new Contact({
      name: sanitizedName,
      email: sanitizedEmail,
      message: sanitizedMessage,
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get("user-agent"),
    });

    await contact.save();

    // Step 5: Return success response
    return res.status(201).json({
      success: true,
      message:
        "Thank you! Your message has been received. I'll get back to you within 24 hours.",
      data: {
        id: contact._id,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    console.error("Contact form submission error:", error);
    next(error);
  }
});

/**
 * GET /api/contact/health
 * Health check endpoint (no rate limiting)
 */
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Contact API is healthy",
  });
});

export default router;
