# Quick Setup Guide - Contact Form

## The Error You're Seeing

The error **"An unexpected error occurred. Please try again later."** appears because the Resend API key is not configured yet.

## Fix It in 3 Steps

### Step 1: Get Your Free Resend API Key

1. Go to **https://resend.com**
2. Click "Sign Up" (it's free!)
3. Verify your email
4. Go to **API Keys** section
5. Click "Create API Key"
6. Copy the key (starts with `re_`)

### Step 2: Add the API Key

I've created a `.env.local` file for you. Open it and add your API key:

**File:** `.env.local`
```bash
RESEND_API_KEY=re_paste_your_key_here
```

Replace `re_paste_your_key_here` with the actual key you copied.

### Step 3: Restart the Server

The dev server will automatically reload when you save the `.env.local` file. If not:
1. Stop the server (Ctrl+C in terminal)
2. Run `npm run dev` again

## Test It

1. Go to http://localhost:3000/contact
2. Fill out the form
3. Click "Send Message"
4. You should see a **green success message** ✅

## Important Notes

> **Free Tier Limits**: Resend free tier gives you 100 emails/day, 3,000/month - perfect for testing!

> **Sender Email**: Currently using `onboarding@resend.dev` (Resend's test domain). For production, you'll want to verify your own domain.

> **Where Emails Go**: Messages are sent to `info@onfees.com` (configured in the API route)

## Still Having Issues?

Check the terminal/console for error messages. Common issues:
- API key not saved properly
- Server not restarted after adding key
- Typo in the API key

---

**Need more details?** See the full guide: `docs/CONTACT-FORM-SETUP.md`
