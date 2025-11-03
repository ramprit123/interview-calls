# Interview Client

React application with Clerk authentication, TanStack Query, and Tailwind CSS.

## Features

- **Clerk Authentication** - Complete auth solution with sign-in/sign-out
- **TanStack Query** - Data fetching and caching
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool

## Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your actual values:
   - `VITE_CLERK_PUBLISHABLE_KEY` - Your Clerk publishable key
   - `VITE_API_URL` - Your API endpoint URL

3. **Start development server:**
   ```bash
   npm run dev
   ```

## Deployment to Netlify

### Option 1: Netlify CLI (Recommended)

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

### Option 2: Git Integration

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Set build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`

3. **Set environment variables in Netlify:**
   - Go to Site settings > Environment variables
   - Add your environment variables:
     - `VITE_CLERK_PUBLISHABLE_KEY`
     - `VITE_API_URL`

### Option 3: Drag and Drop

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Drag the `dist` folder to Netlify's deploy area**

## Environment Variables

- `VITE_CLERK_PUBLISHABLE_KEY` - Clerk publishable key for authentication
- `VITE_API_URL` - Backend API URL (default: http://localhost:4000/api)

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── AuthButton.tsx   # Authentication button
│   ├── UserProfile.tsx  # User profile management
│   └── UsersList.tsx    # Users list display
├── hooks/               # Custom React hooks
│   └── useUser.ts       # User-related API hooks
├── lib/                 # Utilities
│   └── api.ts           # API client configuration
├── App.tsx              # Main app component
└── main.tsx             # App entry point
```

## Configuration Files

- `netlify.toml` - Netlify deployment configuration
- `public/_redirects` - Client-side routing redirects
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `vite.config.ts` - Vite build configuration