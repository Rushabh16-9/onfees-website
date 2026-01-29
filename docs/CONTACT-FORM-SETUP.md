# Contact Form Setup Instructions

## Overview
The contact form has been successfully implemented with email functionality. Follow these steps to complete the setup.

## Required Steps

### 1. Get Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

### 2. Configure Environment Variables

Create a `.env.local` file in the project root (if it doesn't exist):

```bash
# Resend API Key
RESEND_API_KEY=re_your_actual_api_key_here
```

> **Note**: Never commit `.env.local` to version control. It's already in `.gitignore`.

### 3. Configure Email Sender (Optional but Recommended)

For production use, you should verify your domain with Resend:

1. In Resend dashboard, go to Domains
2. Add your domain (e.g., onfees.com)
3. Add the required DNS records
4. Once verified, update the `from` field in `app/api/contact/route.ts`:

```typescript
from: 'Contact Form <noreply@onfees.com>', // Replace with your verified domain
```

### 4. Test the Form

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/contact`
3. Fill out the form with test data
4. Submit and verify:
   - Loading state appears
   - Success message is displayed
   - Email is received at info@onfees.com

## Features Implemented

✅ **API Route**: `/api/contact` handles form submissions
✅ **Email Sending**: Uses Resend API to send formatted emails
✅ **Validation**: Server-side validation with Zod
✅ **Loading States**: Visual feedback during submission
✅ **Success/Error Messages**: Clear user feedback
✅ **Form Reset**: Automatically clears form after successful submission
✅ **Error Handling**: Graceful error handling with user-friendly messages

## Troubleshooting

### "Failed to send email" error
- Check that `RESEND_API_KEY` is set in `.env.local`
- Verify the API key is valid
- Check Resend dashboard for any issues

### Email not received
- Check spam folder
- Verify recipient email in `route.ts` (line 28)
- Check Resend dashboard logs

### Form not submitting
- Check browser console for errors
- Verify dev server is running
- Check network tab for API request/response

## Free Tier Limits

Resend free tier includes:
- 100 emails per day
- 3,000 emails per month

For higher volumes, upgrade to a paid plan.
