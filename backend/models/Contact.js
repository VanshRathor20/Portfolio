import mongoose from "mongoose";

/**
 * Contact Schema - stores all submitted contact form messages
 * Fields:
 * - name: string, required, min 2 chars
 * - email: string, required, must be valid email
 * - message: string, required, min 10 chars, max 1000 chars
 * - createdAt: timestamp, auto-set, indexed for sorting
 */
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [100, "Name must not exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [10, "Message must be at least 10 characters long"],
      maxlength: [1000, "Message must not exceed 1000 characters"],
    },
    ipAddress: {
      type: String,
      default: null,
    },
    userAgent: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, // auto-creates createdAt and updatedAt
    collection: "contacts",
  },
);

// Index for sorting by createdAt
contactSchema.index({ createdAt: -1 });

// Pre-save middleware to keep data clean
contactSchema.pre("save", function (next) {
  // Remove any suspicious characters if not already sanitized
  if (this.name) this.name = this.name.trim();
  if (this.message) this.message = this.message.trim();
  next();
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
