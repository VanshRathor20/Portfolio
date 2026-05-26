# Frontend Setup for Contact Form Integration

## Prerequisites

- React project with Vite
- Node.js v16+
- `react-google-recaptcha` package

## Installation

### Step 1: Install reCAPTCHA Package

```bash
npm install react-google-recaptcha
```

### Step 2: Create Frontend Environment File

Create `.env.local` in your project root:

```env
VITE_BACKEND_URL=http://localhost:5000
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
```

Replace values with:

- **VITE_BACKEND_URL**: Your backend URL (local or production)
- **VITE_RECAPTCHA_SITE_KEY**: From Google reCAPTCHA admin console

## Implementation

### Updated Contact Component

The `Contact.jsx` component has been updated with:

✅ Form state management (name, email, message)
✅ Client-side validation
✅ Backend API integration
✅ reCAPTCHA verification
✅ Loading, success, and error states
✅ Smooth animations
✅ All original styling preserved

### Features

1. **Form Validation**
   - Required fields check
   - Email format validation
   - Message length constraints (10-1000 chars)
   - Real-time feedback

2. **reCAPTCHA Integration**
   - Easy "I'm not a robot" checkbox
   - Dark theme matching your design
   - Token validation on backend

3. **Loading States**
   - Button shows "Sending..." while processing
   - Form fields are disabled
   - Prevents double submissions

4. **Feedback Messages**
   - Success message with green text
   - Error messages in red
   - Auto-dismissal after 5 seconds
   - Smooth slide-down animation

## Environment Variables

### Development (.env.local)

```env
VITE_BACKEND_URL=http://localhost:5000
VITE_RECAPTCHA_SITE_KEY=6LfKgG0zAAAAAJ4a6Hl2t7Y8pZ9xQ1W2e3R4t5Y
```

### Production (.env.production.local)

```env
VITE_BACKEND_URL=https://your-backend-url.onrender.com
VITE_RECAPTCHA_SITE_KEY=your_production_site_key
```

## Testing Locally

### 1. Start Backend Server

```bash
cd backend
npm install
npm run dev
# Server runs on http://localhost:5000
```

### 2. Start Frontend

```bash
npm run dev
# Frontend runs on http://localhost:5173
```

### 3. Test Contact Form

1. Navigate to Contact section
2. Fill in: Name, Email, Message
3. Check "I'm not a robot" reCAPTCHA
4. Click "Send Message"
5. Check browser console for any errors
6. Check MongoDB Atlas for new contact entry

## Troubleshooting

### Issue: reCAPTCHA not appearing

**Solution**:

```javascript
// Check in browser console
console.log(import.meta.env.VITE_RECAPTCHA_SITE_KEY);
// Should print your site key, not "undefined"
```

If undefined:

- Verify `.env.local` file exists
- Restart dev server (`npm run dev`)
- Reload browser page

### Issue: Form submission fails

**Solution**:

```javascript
// Check browser console for error details
// Common errors:
1. CORS error → Backend URL incorrect
2. Network error → Backend not running
3. reCAPTCHA error → Site key incorrect
4. Validation error → Form data invalid
```

### Issue: Backend returns 400 Validation Error

**Solution**:

- Check all fields are filled
- Email must be valid format (example@domain.com)
- Message must be at least 10 characters
- reCAPTCHA must be checked

## Code Example: Contact Form Usage

```jsx
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div>
      <Contact />
    </div>
  );
}
```

The component handles everything internally:

- Form state
- Validation
- API calls
- Error handling
- reCAPTCHA verification

## Form Fields

| Field     | Type     | Validation      | Required |
| --------- | -------- | --------------- | -------- |
| Name      | Text     | 2-100 chars     | Yes      |
| Email     | Email    | Valid format    | Yes      |
| Message   | Textarea | 10-1000 chars   | Yes      |
| reCAPTCHA | Checkbox | Must be checked | Yes      |

## Styling

All original styling has been preserved:

- Purple accent color (#7C3AED)
- Dark theme matching portfolio
- Responsive design
- Smooth transitions
- Professional appearance

## Deployment

### Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables:
   ```
   VITE_BACKEND_URL=https://your-backend.onrender.com
   VITE_RECAPTCHA_SITE_KEY=your_site_key
   ```
4. Deploy

### Netlify

1. Connect GitHub repository
2. Add environment variables in build settings
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy

## Performance Tips

1. **Lazy Load reCAPTCHA**
   - Only loads when user scrolls to contact
   - Doesn't block initial page load

2. **Debounce Form Inputs**
   - Prevents excessive validation checks
   - Smooth user experience

3. **Error Auto-Dismiss**
   - Errors disappear after 5 seconds
   - Doesn't clutter the UI

4. **CSS Animations**
   - Hardware accelerated
   - Smooth 0.3s transitions
   - Minimal performance impact

## Security Notes

- **Frontend Validation**: Client-side checks for UX
- **Backend Validation**: Server-side checks for security
- **reCAPTCHA**: Prevents bot submissions
- **CORS**: Restricts API access to your domain
- **Rate Limiting**: Prevents spam and abuse

---

## Next Steps

1. ✅ Install `react-google-recaptcha`
2. ✅ Create `.env.local` with keys
3. ✅ Update Contact component (already done)
4. ✅ Set up MongoDB & reCAPTCHA
5. ✅ Test locally
6. ✅ Deploy to production

See `backend/SETUP_GUIDE.md` for complete backend setup.
