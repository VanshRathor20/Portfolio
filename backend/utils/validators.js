import xss from "xss";

/**
 * Sanitize input to prevent XSS attacks
 * Removes any HTML/JavaScript from user input
 */
export const sanitizeInput = (input) => {
  if (typeof input !== "string") return input;
  return xss(input.trim());
};

/**
 * Validate email format
 * Uses regex pattern matching for email validation
 */
export const validateEmail = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

/**
 * Validate form data
 * Checks all required fields and their constraints
 */
export const validateContactForm = (data) => {
  const errors = [];

  // Name validation
  if (!data.name || data.name.trim().length === 0) {
    errors.push("Name is required");
  } else if (data.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long");
  } else if (data.name.trim().length > 100) {
    errors.push("Name must not exceed 100 characters");
  }

  // Email validation
  if (!data.email || data.email.trim().length === 0) {
    errors.push("Email is required");
  } else if (!validateEmail(data.email.trim())) {
    errors.push("Please provide a valid email address");
  }

  // Message validation
  if (!data.message || data.message.trim().length === 0) {
    errors.push("Message is required");
  } else if (data.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long");
  } else if (data.message.trim().length > 1000) {
    errors.push("Message must not exceed 1000 characters");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export default {
  sanitizeInput,
  validateEmail,
  validateContactForm,
};
