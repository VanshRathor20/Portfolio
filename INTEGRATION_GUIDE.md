# Complete Backend Integration Guide

## Overview

Your portfolio now has a complete, production-ready contact form system with:

- Node.js/Express backend
- MongoDB database
- Google reCAPTCHA protection
- Rate limiting & security
- Professional error handling

## Quick Setup (15 minutes)

### 1. Backend Installation

```bash
cd backend
npm install
```

### 2. Frontend Installation

```bash
# From project root
npm install react-google-recaptcha
```

### 3. MongoDB Atlas Setup (2 minutes)

Visit: https://www.mongodb.com/cloud/atlas/register

Follow these steps:

- Create free account
- Create cluster (free M0)
- Create database user
- Whitelist IP (0.0.0.0/0 for dev)
- Copy connection string
- Replace `<username>` and `<password>` with your credentials

### 4. Google reCAPTCHA Setup (2 minutes)

Visit: https://www.google.com/recaptcha/admin/

Follow these steps:

- Click "+" to create new site
- Type: reCAPTCHA v2 (Checkbox)
- Add domains: `localhost`, `yourdomain.com`
- Copy Site Key and Secret Key

### 5. Environment Variables

**Backend** (`backend/.env`):

```env
MONGODB_URI=mongodb+srv://user:password@cluster0.mongodb.net/portfolio_contacts?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
RECAPTCHA_SECRET_KEY=your_secret_key
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5
```

**Frontend** (`src/.env.local`):

```env
VITE_BACKEND_URL=http://localhost:5000
VITE_RECAPTCHA_SITE_KEY=your_site_key
```

### 6. Run Locally

**Terminal 1 - Backend**:

```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend**:

```bash
npm run dev
```

Visit: `http://localhost:5173`

## Architecture

```
┌─────────────────────────────────────────────────────┐
│          React Frontend (Vite)                       │
│  - Contact Form with Submission Logic                │
│  - reCAPTCHA v2 Checkbox                             │
│  - Form Validation & Error Handling                  │
└──────────────────┬──────────────────────────────────┘
                   │ HTTPS/HTTP
                   │ POST /api/contact
                   │
┌──────────────────▼──────────────────────────────────┐
│      Express.js Backend (Node.js)                    │
│  - Form Validation & Sanitization                    │
│  - reCAPTCHA Verification                            │
│  - Rate Limiting & Security                          │
└──────────────────┬──────────────────────────────────┘
                   │
                   │ MongoDB Driver
                   │
┌──────────────────▼──────────────────────────────────┐
│      MongoDB Atlas Cloud Database                    │
│  - Store Contact Submissions                         │
│  - Timestamps & User Info                            │
│  - Query & Analytics                                 │
└─────────────────────────────────────────────────────┘
```

## File Structure

```
portfolio/
├── src/
│   ├── components/sections/Contact.jsx    ← UPDATED
│   └── .env.local                         ← NEW (hidden)
│
├── backend/                               ← NEW FOLDER
│   ├── server.js                          ← Main server
│   ├── package.json                       ← Dependencies
│   ├── .env                               ← Your secrets (hidden)
│   ├── .env.example                       ← Template
│   ├── README.md                          ← Quick start
│   ├── SETUP_GUIDE.md                     ← Full guide
│   ├── models/Contact.js                  ← DB schema
│   ├── routes/contact.js                  ← API routes
│   ├── middleware/
│   │   ├── cors.js
│   │   ├── rateLimiter.js
│   │   └── errorHandler.js
│   └── utils/
│       ├── validators.js
│       └── recaptcha.js
│
├── FRONTEND_SETUP.md                      ← NEW
└── INTEGRATION_GUIDE.md                   ← This file
```

## API Flow

### Step 1: User Submits Form

```
Frontend validates form data locally
Frontend displays "Sending..." message
Frontend gets reCAPTCHA token from Google
```

### Step 2: Send to Backend

```
POST http://localhost:5000/api/contact
Headers: { "Content-Type": "application/json" }
Body: {
  name: "John Doe",
  email: "john@example.com",
  message: "Great portfolio!",
  recaptchaToken: "03AHJ_VuuX4..."
}
```

### Step 3: Backend Processing

```
1. Validate form fields
2. Verify reCAPTCHA with Google
3. Sanitize inputs (XSS prevention)
4. Check rate limit
5. Save to MongoDB
6. Return success
```

### Step 4: Frontend Response

```
Show green success message: "Message Sent ✓"
Reset form fields
Reset reCAPTCHA
Auto-dismiss after 5 seconds
```

## Key Features

### Security

- ✅ **Helmet.js**: Secure HTTP headers
- ✅ **CORS**: Only allow your frontend
- ✅ **Rate Limiting**: 5 requests per 15 min
- ✅ **XSS Protection**: HTML/JS sanitization
- ✅ **Input Validation**: Server-side checks
- ✅ **reCAPTCHA v2**: Bot prevention
- ✅ **Environment Secrets**: No credentials in code

### Performance

- ✅ **Indexed Queries**: Fast database lookups
- ✅ **Connection Pooling**: Efficient DB connections
- ✅ **Error Handling**: Graceful failures
- ✅ **Async Operations**: Non-blocking requests
- ✅ **Lazy Loading**: Load only what's needed

### User Experience

- ✅ **Loading States**: Visual feedback
- ✅ **Error Messages**: Show specific errors
- ✅ **Success Feedback**: Confirmation message
- ✅ **Smooth Animations**: Professional feel
- ✅ **Mobile Responsive**: Works everywhere

## Database Schema

### Contact Collection

```javascript
{
  _id: ObjectId("..."),
  name: "John Doe",
  email: "john@example.com",
  message: "Your portfolio is amazing!",
  ipAddress: "123.45.67.89",
  userAgent: "Mozilla/5.0...",
  createdAt: 2024-01-15T10:30:00Z,
  updatedAt: 2024-01-15T10:30:00Z
}
```

## Validation Rules

| Field     | Min | Max  | Pattern           |
| --------- | --- | ---- | ----------------- |
| Name      | 2   | 100  | Any text          |
| Email     | -   | -    | Valid email (RFC) |
| Message   | 10  | 1000 | Any text          |
| reCAPTCHA | -   | -    | Must be checked   |

## Error Handling

### Client-Side Errors

- Empty fields → "Field is required"
- Invalid email → "Please enter a valid email"
- Short message → "Message must be at least 10 characters"
- reCAPTCHA unchecked → "Please complete reCAPTCHA"
- Network error → "Failed to send message. Please try again"

### Server-Side Errors

- Validation fails → 400 Bad Request
- reCAPTCHA fails → 400 Validation Error
- Rate limit exceeded → 429 Too Many Requests
- Database error → 500 Internal Server Error

All errors appear in red, auto-dismiss after 5 seconds.

## Testing Checklist

- [ ] Backend server starts without errors
- [ ] Frontend loads and form is visible
- [ ] Can fill all form fields
- [ ] reCAPTCHA checkbox appears
- [ ] Unchecked reCAPTCHA shows error
- [ ] Empty form shows validation errors
- [ ] Invalid email shows error
- [ ] Short message shows error
- [ ] Valid submission shows "Sending..." state
- [ ] Success message appears
- [ ] Contact saved in MongoDB Atlas
- [ ] Form resets after success
- [ ] Second submission rate limited after 5 submissions

## Deployment Checklist

### Local Testing

- [ ] Both servers running
- [ ] Form submits successfully
- [ ] Data appears in MongoDB
- [ ] Errors handled gracefully

### Pre-Production

- [ ] All environment variables set
- [ ] MongoDB Atlas whitelist IP
- [ ] reCAPTCHA domains added
- [ ] CORS origins correct
- [ ] Rate limits appropriate

### Production Deployment

**Backend (Render.com)**:

1. Push to GitHub
2. Import repo in Render
3. Set environment variables
4. Deploy
5. Copy backend URL

**Frontend (Vercel)**:

1. Update `VITE_BACKEND_URL` env var
2. Update reCAPTCHA domains
3. Deploy

**Post-Deployment**:

- [ ] Test form on production
- [ ] Check MongoDB for entries
- [ ] Monitor error logs
- [ ] Verify HTTPS working
- [ ] Check reCAPTCHA verification

## Monitoring & Maintenance

### View Submitted Contacts

**MongoDB Atlas**:

1. Go to Collections
2. Select "contacts" collection
3. View all submitted messages
4. Sort by date or search by email

### Check Error Logs

**Render.com**:

1. Go to Logs tab
2. Search for errors
3. Debug based on stack trace

**Browser Console**:

1. Open DevTools (F12)
2. Check Console tab
3. Look for fetch errors or validation issues

### Monitor Rate Limiting

Backend logs show:

```
Request blocked: Too many requests from 123.45.67.89
```

To adjust limits, update `backend/.env`:

```env
RATE_LIMIT_MAX_REQUESTS=5      # More = more lenient
RATE_LIMIT_WINDOW_MS=900000   # Larger = longer timeout
```

## Troubleshooting

### Backend Won't Start

```bash
# Check Node version
node --version  # Should be v16+

# Check port availability
lsof -i :5000   # Linux/Mac
netstat -ano | findstr :5000  # Windows

# Clear npm cache
npm cache clean --force
npm install
```

### MongoDB Connection Failed

```bash
# Check connection string format
mongodb+srv://USER:PASSWORD@cluster.mongodb.net/DB

# Verify credentials
- Username and password correct
- No special characters misinterpreted
- @ is escaped if needed

# Check IP whitelist
- Go to MongoDB Atlas Network Access
- Verify your IP is whitelisted
- Try 0.0.0.0/0 for development
```

### reCAPTCHA Not Working

```bash
# Check keys
echo $RECAPTCHA_SECRET_KEY   # Should print key, not blank

# Verify domains
- Log into Google reCAPTCHA admin
- Check if domain is added
- Localhost must be in list

# Test in browser
- Open DevTools Console
- Use test keys to verify
```

### CORS Errors

```
Error: CORS policy: Response to preflight request...

Solution:
1. Check VITE_BACKEND_URL matches exactly
2. Ensure backend PORT matches URL
3. Restart backend server
4. Check browser localhost:port is exact match
```

## Need Help?

1. **Check SETUP_GUIDE.md** for detailed instructions
2. **Check FRONTEND_SETUP.md** for frontend questions
3. **Backend README.md** for backend details
4. **MongoDB docs**: https://docs.mongodb.com
5. **Express docs**: https://expressjs.com

## Next Steps

1. ✅ Copy this guide to your project
2. ✅ Follow all setup steps
3. ✅ Test locally completely
4. ✅ Deploy backend first
5. ✅ Deploy frontend with backend URL
6. ✅ Monitor and maintain

---

**Congratulations!** Your portfolio now has a professional, secure contact form system. 🎉

Contact submissions are being stored safely in MongoDB and protected from bots with reCAPTCHA.
