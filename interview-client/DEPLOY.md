# Quick Netlify Deployment Guide

## 🚀 Deploy in 3 Steps

### Step 1: Build the Project

```bash
npm run build
```

### Step 2: Deploy to Netlify

**Option A: Drag & Drop (Easiest)**

1. Go to [netlify.com](https://netlify.com)
2. Drag the `dist` folder to the deploy area
3. Set environment variables in site settings

**Option B: Git Integration (Recommended)**

1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Step 3: Configure Environment Variables

In Netlify dashboard, go to **Site settings > Environment variables** and add:

```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
VITE_API_URL=https://your-api-domain.com/api
```

## 🔧 Important Files for Netlify

- `netlify.toml` - Build and redirect configuration
- `public/_redirects` - Client-side routing support
- `.env.example` - Environment variables template

## 🐛 Troubleshooting

**404 on page refresh?**

- The `_redirects` file handles this automatically

**Build fails?**

- Check environment variables are set
- Ensure Node.js version is 18+ in Netlify settings

**API calls fail?**

- Update `VITE_API_URL` to your production API URL
- Ensure CORS is configured on your backend

## 📱 Testing

After deployment, test:

- [ ] Sign in/out works
- [ ] User profile loads
- [ ] API calls work
- [ ] Page refresh doesn't break routing
