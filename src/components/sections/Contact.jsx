import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const recaptchaRef = useRef();

  const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  // Debug: log Vite env for reCAPTCHA (helps detect missing env values)
  useEffect(() => {
    console.debug("VITE_RECAPTCHA_SITE_KEY:", RECAPTCHA_SITE_KEY ? "[present]" : "[missing]");
  }, [RECAPTCHA_SITE_KEY]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form data client-side
  const validateForm = () => {
    const errors = [];

    if (!formData.name.trim()) {
      errors.push("Name is required");
    } else if (formData.name.trim().length < 2) {
      errors.push("Name must be at least 2 characters");
    } else if (formData.name.trim().length > 100) {
      errors.push("Name must not exceed 100 characters");
    }

    if (!formData.email.trim()) {
      errors.push("Email is required");
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      errors.push("Please enter a valid email");
    }

    if (!formData.message.trim()) {
      errors.push("Message is required");
    } else if (formData.message.trim().length < 10) {
      errors.push("Message must be at least 10 characters");
    } else if (formData.message.trim().length > 1000) {
      errors.push("Message must not exceed 1000 characters");
    }

    return errors;
  };

  // Handle form submission with backend integration
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent double-submit while request is in progress.
    if (status === "loading") {
      return;
    }

    // Clear stale success/error state before validating a new submit attempt.
    setStatus("idle");
    setErrorMessage("");

    // Client-side validation
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrorMessage(validationErrors[0]);
      setStatus("error");
      return;
    }

    // Check reCAPTCHA
    if (!recaptchaRef.current) {
      setErrorMessage("reCAPTCHA verification failed");
      setStatus("error");
      return;
    }

    // Read token from reCAPTCHA widget
    const recaptchaToken = recaptchaRef.current.getValue();
    console.debug("reCAPTCHA token present:", !!recaptchaToken, "(length)", recaptchaToken ? recaptchaToken.length : 0);
    if (recaptchaToken) {
      setCaptchaToken(recaptchaToken);
    }
    if (!recaptchaToken) {
      setErrorMessage("Please complete the reCAPTCHA verification");
      setStatus("error");
      return;
    }

    try {
      setStatus("loading");

      // Toast: show loading toast and keep its id
      const toastId = toast.loading("Sending message...");

      // Send data to backend
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          recaptchaToken,
          captchaToken: recaptchaToken,
        }),
      });

      // Debug: response status and body
      let data;
      try {
        data = await response.json();
      } catch (err) {
        console.error("Failed to parse JSON response from backend:", err);
        data = { success: false, message: "Invalid server response" };
      }
      console.debug("Contact API response status:", response.status, "body:", data);

      if (data.success) {
        toast.success("Message sent — thank you!", { id: toastId });
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setCaptchaToken("");
        try {
          recaptchaRef.current.reset();
        } catch (err) {
          console.debug("reCAPTCHA reset failed:", err);
        }

        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        console.warn("Contact API returned error:", data);
        const recaptchaCodes = Array.isArray(data.errorCodes) && data.errorCodes.length > 0 ? ` (${data.errorCodes.join(", ")})` : "";
        toast.error((data.message || "Failed to send message") + recaptchaCodes, { id: toastId });
        setErrorMessage(
          data.message || data.errors?.[0] || "Failed to send message",
        );
        setStatus("error");

        // Reset error after 5 seconds
        setTimeout(() => {
          setStatus("idle");
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(error.message || "Failed to send message. Please try again.");
      setErrorMessage(
        error.message || "Failed to send message. Please try again.",
      );
      setStatus("error");

      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <section id="contact" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div
        className="contact-layout"
        style={{
          gap: "80px",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "96px 48px",
        }}
      >
        {/* LEFT SIDE */}
        <div className="contact-left" style={{ flex: "1" }}>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "12px",
              color: "#7C3AED",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            CONTACT
          </p>

          <h2
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "800",
              letterSpacing: "-0.03em",
              lineHeight: "1.1",
              margin: 0,
              marginBottom: "12px",
            }}
          >
            <span style={{ color: "#F0F0F0" }}>Let’s Build</span>
            <br />
            <span style={{ color: "#7C3AED" }}>Something Great.</span>
          </h2>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#555",
              fontSize: "14px",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}
          >
            I’m currently open to internships, freelance work, and exciting
            collaboration opportunities.
            <br />
            <br />
            Whether you have a project idea, job opportunity, or just want to
            connect — feel free to reach out.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&to=vanshkumar5887.work@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "13px",
              color: "#7C3AED",
              textDecoration: "none",
              display: "block",
              marginBottom: "50px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#7C3AED")}
          >
            vanshkumar5887.work@gmail.com ↗
          </a>

          <div style={{ display: "flex", gap: "20px" }}>
            <a
              href="https://mail.google.com/mail/?view=cm&to=vanshkumar5887.work@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#444",
                transition: "color 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#7C3AED")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              <FiMail size={20} />
            </a>

            <a
              href="https://github.com/VanshRathor20"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#444",
                transition: "color 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/vansh-kumar-20-codes"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#444",
                transition: "color 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0A66C2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://www.instagram.com/vansh_rathor_20/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#444",
                transition: "color 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E1306C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://leetcode.com/u/Vansh_Rathor/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#444",
                transition: "color 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFA116")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              <SiLeetcode size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div
          className="contact-right"
          style={{ flex: "1.2", marginTop: "40px" }}
        >
          <form onSubmit={handleSubmit} noValidate>
            {/* Name Field */}
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="name"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "12px",
                  color: "#444",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={status === "loading"}
                required
                style={{
                  width: "100%",
                  background: "#0a0a0a",
                  border: "1px solid #1e1e1e",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  color: "#F0F0F0",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                  opacity: status === "loading" ? 0.6 : 1,
                  cursor: status === "loading" ? "not-allowed" : "text",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#7C3AED")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#1e1e1e")}
              />
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="email"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "12px",
                  color: "#444",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                disabled={status === "loading"}
                required
                style={{
                  width: "100%",
                  background: "#0a0a0a",
                  border: "1px solid #1e1e1e",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  color: "#F0F0F0",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                  opacity: status === "loading" ? 0.6 : 1,
                  cursor: status === "loading" ? "not-allowed" : "text",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#7C3AED")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#1e1e1e")}
              />
            </div>

            {/* Message Field */}
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="message"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "12px",
                  color: "#444",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleInputChange}
                disabled={status === "loading"}
                required
                style={{
                  width: "100%",
                  background: "#0a0a0a",
                  border: "1px solid #1e1e1e",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  color: "#F0F0F0",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  resize: "vertical",
                  transition: "border-color 0.2s",
                  opacity: status === "loading" ? 0.6 : 1,
                  cursor: status === "loading" ? "not-allowed" : "text",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#7C3AED")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#1e1e1e")}
              />
            </div>

            {/* reCAPTCHA Widget */}
            {RECAPTCHA_SITE_KEY && (
              <div
                style={{
                  marginBottom: "20px",
                  transform: "scale(0.95)",
                  transformOrigin: "left top",
                }}
              >
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  theme="dark"
                  onChange={() => {
                    if (status === "error") setStatus("idle");
                  }}
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "14px",
                background: status === "success" ? "#34d399" : "#7C3AED",
                border: "none",
                borderRadius: "10px",
                color: "white",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                transition: "all 0.3s",
                opacity: status === "loading" ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (status !== "loading" && status !== "success") {
                  e.currentTarget.style.background = "#6D28D9";
                }
              }}
              onMouseLeave={(e) => {
                if (status !== "loading" && status !== "success") {
                  e.currentTarget.style.background = "#7C3AED";
                }
              }}
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                  ? "Message Sent ✓"
                  : "Send Message →"}
            </button>

            {/* Error Message */}
            {status === "error" && errorMessage && (
              <p
                style={{
                  color: "#ff6b6b",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  marginTop: "12px",
                  letterSpacing: "0.1em",
                  animation: "slideDown 0.3s ease",
                }}
              >
                ✗ {errorMessage}
              </p>
            )}

            {/* Success Message */}
            {status === "success" && (
              <p
                style={{
                  color: "#34d399",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  marginTop: "12px",
                  letterSpacing: "0.1em",
                  animation: "slideDown 0.3s ease",
                }}
              >
                ✓ Thank you! I'll get back to you within 24 hours.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
