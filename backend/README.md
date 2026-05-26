# Portfolio Backend API

A production-ready Node.js/Express backend for handling portfolio contact form submissions with MongoDB storage and Google reCAPTCHA protection.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env
# Edit .env with your MongoDB URI and reCAPTCHA secret key
```

### 3. Start the Server

```bash
# Development
npm run dev

# Production
npm start
```

Server runs on `http://localhost:5000`

## Features

✅ **Secure Form Handling**

- Input validation and sanitization
- XSS protection with xss library
- Email format validation
- Message length constraints

✅ **Bot Prevention**

- Google reCAPTCHA v2 verification
- Rate limiting (5 requests per 15 minutes)
- IP-based throttling

✅ **Database Storage**

- MongoDB Atlas integration
- Mongoose ORM with validation
- Automatic timestamps
- Indexed queries for performance

✅ **Security**

- Helmet for HTTP headers
- CORS protection
- Environment variable management
- Error handling and logging

✅ **API Endpoints**

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check endpoint

## Environment Variables

```env
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/db
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
RECAPTCHA_SECRET_KEY=your_secret_key
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5
```

## Project Structure

```
backend/
├── server.js               # Express server setup
├── models/Contact.js       # MongoDB Contact schema
├── routes/contact.js       # Contact form API routes
├── middleware/
│   ├── cors.js            # CORS configuration
│   ├── rateLimiter.js     # Rate limiting middleware
│   └── errorHandler.js    # Global error handler
├── utils/
│   ├── validators.js      # Form validation logic
│   └── recaptcha.js       # reCAPTCHA verification
├── package.json
├── .env.example
└── SETUP_GUIDE.md         # Detailed setup instructions
```

## API Response Format

### Success Response (201)

```json
{
  "success": true,
  "message": "Thank you! Your message has been received.",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Error Response (400/500)

```json
{
  "success": false,
  "message": "Validation Error",
  "errors": ["Email is invalid", "Message too short"]
}
```

## Tech Stack

- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Security**: Helmet, CORS, XSS prevention
- **Validation**: express-validator, email-validator
- **reCAPTCHA**: Google reCAPTCHA v2
- **Rate Limiting**: express-rate-limit

## Development

### Run with Nodemon (auto-reload)

```bash
npm run dev
```

### Check Health

```bash
curl http://localhost:5000/api/health
```

## Deployment

### Render.com

1. Connect GitHub repository
2. Set environment variables in dashboard
3. Deploy automatically on push

### Other Platforms

- Heroku
- Railway
- Fly.io
- DigitalOcean App Platform

See `SETUP_GUIDE.md` for detailed deployment instructions.

## Security Checklist

- [ ] `.env` file created and not committed to git
- [ ] MongoDB Atlas cluster created
- [ ] Google reCAPTCHA keys generated
- [ ] FRONTEND_URL configured for CORS
- [ ] Rate limiting thresholds appropriate
- [ ] Environment variables secured

## Troubleshooting

**MongoDB Connection Error**: Check connection string and IP whitelist
**reCAPTCHA Error**: Verify secret key and domain settings
**CORS Error**: Ensure FRONTEND_URL matches your frontend domain
**Rate Limit Error**: Wait 15 minutes or adjust RATE_LIMIT settings

## Support & Documentation

- Full setup guide: See `SETUP_GUIDE.md`
- MongoDB docs: https://docs.mongodb.com
- Express docs: https://expressjs.com
- reCAPTCHA docs: https://www.google.com/recaptcha/admin

---

**Created**: January 2024  
**Version**: 1.0.0  
**License**: ISC
