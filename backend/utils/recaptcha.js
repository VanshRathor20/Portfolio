import axios from "axios";

/**
 * Verify reCAPTCHA token with Google servers (reCAPTCHA v2/v3 compatible)
 * Uses application/x-www-form-urlencoded POST per Google's recommendation
 */
export const verifyRecaptcha = async (token) => {
  try {
    if (!token) {
      return {
        success: false,
        error: "reCAPTCHA token is missing",
      };
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      console.error("RECAPTCHA_SECRET_KEY is not set in environment");
      return {
        success: false,
        error: "Server reCAPTCHA secret not configured",
      };
    }

    // Use URLSearchParams to send form-encoded body (recommended)
    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", token);

    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      params.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        timeout: 5000,
      },
    );

    const data = response.data || {};
    // Log the raw verification response for debugging (will show error-codes)
    console.debug("reCAPTCHA siteverify response:", data);

    if (data.hostname) {
      console.debug("reCAPTCHA hostname:", data.hostname);
    }

    // Important fields: success (boolean), hostname, challenge_ts, error-codes
    if (data.success) {
      return {
        success: true,
        data,
      };
    }

    // Provide more actionable error messages when available
    const errorCodes = data["error-codes"] || data["error_codes"] || [];
    console.warn("reCAPTCHA error-codes:", errorCodes);
    return {
      success: false,
      error:
        errorCodes.length > 0
          ? `reCAPTCHA failed: ${errorCodes.join(", ")}`
          : "reCAPTCHA verification failed",
      details: data,
    };
  } catch (error) {
    console.error("reCAPTCHA verification error:", error && error.message);
    if (error && error.response) {
      console.error(
        "reCAPTCHA error response:",
        error.response.status,
        error.response.data,
      );
    }
    return {
      success: false,
      error: "Failed to verify reCAPTCHA. Please try again.",
      details: error && error.response && error.response.data,
    };
  }
};

export default verifyRecaptcha;
