# Portfolio Backend Setup Guide

This guide will help you set up the complete backend infrastructure for your portfolio contact form with MongoDB, Express, and Google reCAPTCHA.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [MongoDB Atlas Setup](#mongodb-atlas-setup)
4. [Google reCAPTCHA Setup](#google-recaptcha-setup)
5. [Environment Variables](#environment-variables)
6. [Running Locally](#running-locally)
7. [Deployment](#deployment)
8. [API Documentation](#api-documentation)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (free tier available)
- Google account (for reCAPTCHA)
- Git (for deployment)

---

## Installation

### Step 1: Navigate to Backend Directory

```bash
cd backend
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages:

- **express** - Server framework
- **mongoose** - MongoDB ODM
- **dotenv** - Environment variables
- **helmet** - Security headers
- **cors** - Cross-Origin Resource Sharing
- **express-rate-limit** - Rate limiting
- **axios** - HTTP client for reCAPTCHA
- **xss** - XSS prevention
- **email-validator** - Email validation

---

## MongoDB Atlas Setup

### Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Sign up with your email or Google account
3. Create a free account

### Step 2: Create a Project

1. Click "Create Project"
2. Enter project name (e.g., "portfolio-contacts")
3. Click "Continue"
4. Click "Create Project"

### Step 3: Create a Cluster

1. Click "Build a Database"
2. Select "Free Tier" (M0)
3. Select your preferred region (choose closest to your users)
4. Click "Create Cluster"
5. Wait for cluster to be deployed (2-3 minutes)

### Step 4: Create Database User

1. Click "Security" → "Database Access"
2. Click "Add New Database User"
3. **Username**: Choose a strong username (e.g., `portfolio_user`)
4. **Password**: Generate a secure password (copy it!)
5. Built-in Role: Select "Read and write to any database"
6. Click "Add User"

### Step 5: Whitelist IP Address

1. Click "Network Access"
2. Click "Add IP Address"
3. Select "Allow access from anywhere" (0.0.0.0/0) for development
4. **For production**: Add your server's specific IP address
5. Click "Confirm"

### Step 6: Get Connection String

1. Click "Databases"
2. Click "Connect" button on your cluster
3. Select "Drivers"
4. Copy the connection string
5. Replace `<password>` with YOUR database user password
6. Replace `<username>` with YOUR database username

Example:

```
mongodb+srv://portfolio_user:yourpassword@cluster0.mongodb.net/portfolio_contacts?retryWrites=true&w=majority
```

---

## Google reCAPTCHA Setup

### Step 1: Go to reCAPTCHA Admin Console

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/)
2. Sign in with your Google account

### Step 2: Create New Site

1. Click "+" (Create)
2. Enter site label: "Portfolio Contact Form"
3. **reCAPTCHA type**: Select "reCAPTCHA v2"
4. **Verification type**: Select "I'm not a robot" Checkbox
5. **Domains**:
   - Add `localhost` for development
   - Add your production domain later

6. Accept terms and click "Submit"

### Step 3: Get Your Keys

After creating the site, you'll see:

- **Site Key** (public key) - Use in frontend
- **Secret Key** (private key) - Use in backend (KEEP THIS SECRET!)

---

## Environment Variables

### Step 1: Create .env File in Backend

```bash
cp .env.example .env
```

### Step 2: Fill in Your Values

Edit `backend/.env`:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://portfolio_user:yourpassword@cluster0.mongodb.net/portfolio_contacts?retryWrites=true&w=majority

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Google reCAPTCHA v2
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5
```

### Step 3: Create .env File in Frontend

Create `src/.env.local`:

```env
VITE_BACKEND_URL=http://localhost:5000
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
```

---

## Running Locally

### Terminal 1: Start Backend Server

```bash
cd backend
npm start
```

You should see:

```
✓ MongoDB Connected: cluster0.mongodb.net
🚀 Backend server running on http://localhost:5000
📧 Contact endpoint: http://localhost:5000/api/contact
🏥 Health check: http://localhost:5000/api/health
```

### Terminal 2: Start Frontend

```bash
npm run dev
```

### Test the Form

1. Navigate to `http://localhost:5173`
2. Scroll to Contact section
3. Fill in the form
4. Check the "I'm not a robot" reCAPTCHA box
5. Click "Send Message"

---

## API Documentation

### Health Check Endpoint

**GET** `/api/health`

```bash
curl http://localhost:5000/api/health
```

**Response**:

```json
{
  "success": true,
  "message": "Backend server is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### Submit Contact Form

**POST** `/api/contact`

**Request Headers**:

```
Content-Type: application/json
```

**Request Body**:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "This is an amazing portfolio!",
  "recaptchaToken": "03AHJ_VuuAnYYGrYM..."
}
```

**Success Response** (201):

```json
{
  "success": true,
  "message": "Thank you! Your message has been received. I'll get back to you within 24 hours.",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Error Response** (400):

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": ["Email must be valid", "Message must be at least 10 characters"]
}
```

---

## Deployment

### Deploy Backend on Render

#### Step 1: Push to GitHub

```bash
git add .
git commit -m "Add backend"
git push origin main
```

#### Step 2: Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up with GitHub

#### Step 3: Create New Web Service

1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Enter service name: `portfolio-backend`
4. Environment: Node
5. Build Command: `npm install`
6. Start Command: `node server.js`
7. Click "Create Web Service"

#### Step 4: Add Environment Variables

1. Go to service settings
2. Click "Environment"
3. Add all variables from `.env`
4. Update `FRONTEND_URL` to your Vercel deployment URL
5. Click "Save"

#### Step 5: Deploy Frontend

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variables:
   - `VITE_BACKEND_URL`: Your Render backend URL
   - `VITE_RECAPTCHA_SITE_KEY`: Your reCAPTCHA site key
4. Click "Deploy"

#### Step 6: Update reCAPTCHA

1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin/)
2. Edit your site
3. Add your Vercel domain under "Domains"

---

## Troubleshooting

### Issue: CORS Error

**Error**: `CORS: Origin not allowed`

**Solution**:

1. Check `FRONTEND_URL` in backend `.env`
2. Make sure it matches your frontend URL exactly
3. Restart backend server

### Issue: MongoDB Connection Failed

**Error**: `Failed to connect to MongoDB`

**Solution**:

1. Check MongoDB URI in `.env` file
2. Verify username and password are correct
3. Check if IP address is whitelisted in MongoDB Atlas
4. Ensure database user exists

### Issue: reCAPTCHA Not Working

**Error**: `reCAPTCHA verification failed`

**Solution**:

1. Verify `RECAPTCHA_SECRET_KEY` is correct
2. Check if domain is added in reCAPTCHA admin
3. Ensure `VITE_RECAPTCHA_SITE_KEY` matches in frontend

### Issue: Rate Limiting

**Error**: `Too many contact form submissions from this IP`

**Cause**: Exceeded 5 requests per 15 minutes

**Solution**:

1. Wait 15 minutes before trying again
2. For development, temporarily increase `RATE_LIMIT_MAX_REQUESTS`

---

## File Structure

```
backend/
├── server.js                 # Main server file
├── package.json             # Dependencies
├── .env.example            # Environment variables template
├── models/
│   └── Contact.js          # MongoDB schema
├── routes/
│   └── contact.js          # Contact form routes
├── middleware/
│   ├── cors.js            # CORS configuration
│   ├── rateLimiter.js     # Rate limiting
│   └── errorHandler.js    # Error handling
└── utils/
    ├── validators.js       # Form validation
    └── recaptcha.js       # reCAPTCHA verification
```

---

## Security Checklist

- ✓ Environment variables secured (.env not in git)
- ✓ CORS enabled only for frontend domain
- ✓ Rate limiting prevents spam
- ✓ Input sanitization prevents XSS
- ✓ reCAPTCHA prevents bot submissions
- ✓ Helmet secures HTTP headers
- ✓ MongoDB authentication required
- ✓ HTTPS enforced in production

---

## Support

If you encounter issues:

1. Check the troubleshooting section
2. Review error logs in terminal
3. Check MongoDB Atlas logs
4. Verify all environment variables are set correctly

Good luck with your portfolio! 🚀
