# Deployment Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will automatically detect Next.js and deploy

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables if needed

### Other Platforms
- Ensure Node.js 18+ is available
- Set build command: `npm run build`
- Set start command: `npm start`

## Environment Variables

Copy `.env.example` to `.env.local` and configure:
- Analytics IDs (Google Analytics, etc.)
- Email service credentials (for contact form)
- Booking integration credentials

## Post-Deployment Checklist

- [ ] Update `canonical` URLs in `app/layout.tsx`
- [ ] Update Google Maps embed with correct coordinates
- [ ] Configure contact form to send emails
- [ ] Set up Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Test all forms and booking links
- [ ] Verify mobile responsiveness
- [ ] Test page load speeds
- [ ] Set up SSL certificate (HTTPS)

## SEO Setup

1. **Google Search Console**
   - Add property
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Google My Business**
   - Claim/verify business listing
   - Add photos and business hours
   - Encourage reviews

3. **Local Directories**
   - List on Yelp, Yellow Pages, etc.
   - Ensure NAP (Name, Address, Phone) consistency

## Performance Optimization

- Images are automatically optimized by Next.js
- Consider using a CDN for static assets
- Enable compression on your hosting provider
- Monitor Core Web Vitals

## Analytics

To add Google Analytics, create `app/analytics.tsx`:

```tsx
import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  )
}
```

Then add `<Analytics />` to your layout.

