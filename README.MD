# Coffee Management System

## Frontend Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend/apps/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
   - Local: http://localhost:3000
   - Network: http://26.80.124.40:3000

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linting

### Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui components

### Project Structure

```
frontend/apps/frontend/
├── src/
│   ├── app/
│   │   ├── global.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── ui/
│   └── lib/
│       └── utils.ts
├── components.json
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

### Troubleshooting

#### PostCSS Error with Tailwind CSS v4

If you encounter this error:
```
Error: It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. 
The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS 
with PostCSS you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.
```

**Solution:**

1. Install the new PostCSS plugin:
```bash
npm install -D @tailwindcss/postcss
```

2. Update your `postcss.config.js`:
```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};
```

**Note:** This error occurs because Tailwind CSS v4 moved the PostCSS plugin to a separate package `@tailwindcss/postcss`.

#### Tailwind CSS Not Working

If Tailwind CSS classes are not being applied:

1. **Check global.css imports:** Make sure you're using the correct import syntax for Tailwind CSS v4:
```css
@import "tailwindcss";  /* Instead of @import "tailwindcss/preflight" and @import "tailwindcss/utilities" */
```

2. **Verify content paths:** Ensure your `tailwind.config.js` has the correct content paths:
```javascript
content: [
  './src/**/*.{ts,tsx,js,jsx,html}',
  './src/app/**/*.{ts,tsx,js,jsx,html}',
  './src/components/**/*.{ts,tsx,js,jsx,html}',
  './src/lib/**/*.{ts,tsx,js,jsx,html}',
],
```

3. **Check PostCSS configuration:** Ensure your PostCSS is properly configured with `@tailwindcss/postcss`.

#### Button Component TypeScript Errors

If you encounter TypeScript errors with the Button component:

1. **Simplified Button:** The Button component has been simplified to avoid React 19 compatibility issues.
2. **Remove asChild prop:** The `asChild` functionality has been temporarily removed to fix TypeScript errors.

### Development

The frontend is built with modern React patterns and includes:
- Server-side rendering with Next.js
- Component library with shadcn/ui
- Styling with Tailwind CSS v4
- Type safety with TypeScript

### Current Status

✅ **Fixed Issues:**
- PostCSS configuration for Tailwind CSS v4
- Tailwind CSS import syntax
- Button component TypeScript errors
- Content paths in Tailwind config

✅ **Working Features:**
- Next.js development server
- Tailwind CSS styling
- shadcn/ui Button component
- Basic page layout with Tailwind classes
