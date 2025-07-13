# Deployment Guide

> **Complete Deployment Documentation for ThaiBridge Academy**  
> Comprehensive guide for deploying the application to production environments

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Vercel Deployment](#vercel-deployment)
- [Alternative Platforms](#alternative-platforms)
- [Environment Configuration](#environment-configuration)
- [Domain & SSL](#domain--ssl)
- [Performance Optimization](#performance-optimization)
- [Monitoring & Analytics](#monitoring--analytics)
- [Security Considerations](#security-considerations)
- [Troubleshooting](#troubleshooting)
- [Cost Analysis](#cost-analysis)
- [Post-Deployment Checklist](#post-deployment-checklist)

## Overview

This guide provides comprehensive instructions for deploying the ThaiBridge Academy application to production environments. The application is optimized for deployment on Vercel but can be deployed to other platforms as well.

### Deployment Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Source Code   │    │   Build Process │    │   Production    │
│   (Git Repo)    │───►│   (Vite Build)  │───►│   (Vercel CDN)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Version       │    │   Optimized     │    │   Global Edge   │
│   Control       │    │   Assets        │    │   Network       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Key Benefits

- **Lightning Fast** - Vite build system for optimal performance
- **Global CDN** - Automatic content delivery worldwide
- **SSL Security** - Automatic HTTPS certificate provisioning
- **Mobile Optimized** - Responsive design for all devices
- **Auto Deploy** - Continuous deployment from Git

## Prerequisites

### Required Tools

Before deploying, ensure you have the following:

- **Git** - Version control system
- **Node.js** (v16.0.0+) - JavaScript runtime
- **npm** or **yarn** - Package manager
- **Vercel CLI** (optional) - Command-line deployment tool

### Repository Setup

1. **Ensure your code is committed** to a Git repository
2. **Verify build script** in `package.json`:
   ```json
   {
     "scripts": {
       "build": "vite build",
       "preview": "vite preview"
     }
   }
   ```
3. **Check environment variables** are properly configured
4. **Test local build** before deployment:
   ```bash
   npm run build
   npm run preview
   ```

### Pre-Deployment Checklist

- [✅] All code is committed to Git repository
- [✅] Build script works locally (`npm run build`)
- [✅] Environment variables are documented
- [✅] API endpoints are tested
- [✅] Mobile responsiveness verified
- [✅] Performance optimization completed

## Vercel Deployment (Recommended)

### Step 1: Prepare Your Repository

1. **Ensure Git repository is ready**:

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Verify build configuration**:
   - Check `vite.config.ts` is properly configured
   - Ensure `package.json` has correct build script
   - Verify TypeScript configuration in `tsconfig.json`

### Step 2: Deploy to Vercel

#### Option A: Web Interface (Recommended for beginners)

1. **Visit Vercel Dashboard**

   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in to your account

2. **Create New Project**

   - Click "New Project"
   - Import your Git repository (GitHub, GitLab, or Bitbucket)
   - Vercel will automatically detect it's a Vite project

3. **Configure Project Settings**

   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Set Environment Variables**

   - Click "Environment Variables"
   - Add required variables:
     ```
     VITE_API_BASE_URL=https://thaibridge.app.n8n.cloud
     ```

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (usually 1-3 minutes)

#### Option B: Vercel CLI (Advanced users)

1. **Install Vercel CLI**:

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:

   ```bash
   vercel login
   ```

3. **Deploy from command line**:

   ```bash
   vercel --prod
   ```

4. **Follow prompts** to configure your project

### Step 3: Configure Custom Domain

1. **Access Domain Settings**

   - Go to your Vercel project dashboard
   - Click "Settings" → "Domains"

2. **Add Custom Domain**

   - Enter your domain (e.g., `thaibridgeacademy.sg`)
   - Click "Add Domain"

3. **Configure DNS**

   - Follow Vercel's DNS configuration instructions
   - Add the required CNAME or A records to your domain provider
   - Wait for DNS propagation (can take up to 48 hours)

4. **SSL Certificate**
   - SSL certificate is automatically provisioned
   - HTTPS is enabled by default

### Step 4: Verify Deployment

1. **Test the deployed application**:

   - Visit your deployment URL
   - Test all functionality (forms, API calls, navigation)

2. **Check build logs**:

   - Review build output for any warnings or errors
   - Ensure all assets are properly optimized

3. **Performance audit**:
   - Use Lighthouse to check performance scores
   - Verify mobile responsiveness

## Alternative Platforms

### Netlify Deployment

#### Prerequisites

```bash
npm install -g netlify-cli
```

#### Deployment Steps

1. **Login to Netlify**:

   ```bash
   netlify login
   ```

2. **Deploy to Netlify**:

   ```bash
   netlify deploy --prod --dir=dist
   ```

3. **Configure build settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `16` (or higher)

#### Netlify Configuration

Create `netlify.toml` in your project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "16"
```

### AWS Amplify

#### Prerequisites

- AWS account
- Amplify CLI installed

#### Deployment Steps

1. **Initialize Amplify**:

   ```bash
   amplify init
   ```

2. **Configure build settings**:

   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - "**/*"
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Deploy**:
   ```bash
   amplify push
   ```

### GitHub Pages

#### Prerequisites

- GitHub repository
- GitHub Actions enabled

#### Deployment Steps

1. **Create GitHub Actions workflow**:
   Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: "16"
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source

## Environment Configuration

### Required Environment Variables

#### Production Environment

```env
# API Configuration (Required)
VITE_API_BASE_URL=https://thaibridge.app.n8n.cloud

# Optional: Debug Mode
VITE_DEBUG=false

# Optional: Analytics
VITE_ANALYTICS_ID=your_analytics_id
```

#### Development Environment

```env
# API Configuration
VITE_API_BASE_URL=https://thaibridge.app.n8n.cloud

# Debug Mode (Development)
VITE_DEBUG=true
```

### Environment Variable Management

#### Vercel Environment Variables

1. **Access Environment Variables**:

   - Go to Vercel project dashboard
   - Click "Settings" → "Environment Variables"

2. **Add Variables**:

   - **Name**: `VITE_API_BASE_URL`
   - **Value**: `https://thaibridge.app.n8n.cloud`
   - **Environment**: Production, Preview, Development

3. **Verify Configuration**:
   - Redeploy after adding environment variables
   - Test API connectivity

#### Security Best Practices

- **Never commit sensitive data** to Git
- **Use environment variables** for configuration
- **Rotate API keys** regularly
- **Monitor access logs** for suspicious activity

## Domain & SSL

### Custom Domain Setup

#### Domain Registration

1. **Choose a domain registrar** (Namecheap, GoDaddy, etc.)
2. **Register your domain** (e.g., `thaibridgeacademy.sg`)
3. **Configure DNS settings** as per Vercel instructions

#### DNS Configuration

##### For Vercel

1. **Add CNAME record**:

   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

2. **Add A record** (if required):
   ```
   Type: A
   Name: @
   Value: 76.76.19.19
   ```

#### SSL Certificate

- **Automatic provisioning** by Vercel
- **Let's Encrypt** certificates
- **Auto-renewal** every 90 days
- **HTTPS enforcement** by default

### Domain Verification

#### DNS Propagation Check

```bash
# Check DNS propagation
dig yourdomain.com
nslookup yourdomain.com
```

#### SSL Certificate Verification

```bash
# Check SSL certificate
openssl s_client -connect yourdomain.com:443 -servername yourdomain.com
```

## Performance Optimization

### Build Optimization

#### Vite Configuration

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    // Enable minification
    minify: "terser",

    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
        },
      },
    },

    // Enable source maps for debugging
    sourcemap: false, // Set to true for development
  },
});
```

#### Image Optimization

- **Use WebP format** for images
- **Implement lazy loading** for images
- **Optimize image sizes** before upload
- **Use responsive images** with srcset

#### Code Splitting

```typescript
// Lazy load components
const LazyComponent = lazy(() => import("./LazyComponent"));

// Route-based code splitting
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
```

### CDN Configuration

#### Vercel Edge Network

- **Automatic global CDN** deployment
- **Edge caching** for static assets
- **Geographic optimization** for faster loading

#### Cache Headers

```json
// vercel.json
{
  "headers": [
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## Monitoring & Analytics

### Built-in Monitoring

#### Vercel Analytics

1. **Enable Analytics**:

   - Go to Vercel project dashboard
   - Click "Analytics" tab
   - Enable analytics for your project

2. **View Metrics**:
   - Page views and unique visitors
   - Performance metrics
   - Error tracking

#### Performance Monitoring

```typescript
// Performance monitoring
const measurePerformance = () => {
  if ("performance" in window) {
    const navigation = performance.getEntriesByType("navigation")[0];
    console.log(
      "Page load time:",
      navigation.loadEventEnd - navigation.loadEventStart
    );
  }
};
```

### Third-party Analytics

#### Google Analytics

1. **Create Google Analytics account**
2. **Add tracking code**:
   ```html
   <!-- Google Analytics -->
   <script
     async
     src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
   ></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag() {
       dataLayer.push(arguments);
     }
     gtag("js", new Date());
     gtag("config", "GA_MEASUREMENT_ID");
   </script>
   ```

#### Error Monitoring (Sentry)

1. **Install Sentry**:

   ```bash
   npm install @sentry/react @sentry/tracing
   ```

2. **Configure Sentry**:

   ```typescript
   import * as Sentry from "@sentry/react";

   Sentry.init({
     dsn: "your-sentry-dsn",
     environment: "production",
     tracesSampleRate: 1.0,
   });
   ```

## Security Considerations

### Security Headers

#### Content Security Policy

```json
// vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### API Security

- **HTTPS enforcement** for all API calls
- **CORS configuration** in N8n backend
- **Input validation** on all forms
- **Rate limiting** (future implementation)

### Data Protection

- **No sensitive data** stored in client-side code
- **Environment variables** for configuration
- **Secure API endpoints** with proper validation

## Troubleshooting

### Common Deployment Issues

#### Build Failures

**Problem**: Build fails during deployment

**Solutions**:

1. **Check Node.js version**:

   ```bash
   node --version  # Should be 16+
   ```

2. **Clear cache and reinstall**:

   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Check build script**:
   ```json
   {
     "scripts": {
       "build": "vite build"
     }
   }
   ```

#### API Connection Issues

**Problem**: API calls fail in production

**Solutions**:

1. **Verify environment variables**:

   ```bash
   # Check if VITE_API_BASE_URL is set
   echo $VITE_API_BASE_URL
   ```

2. **Test API connectivity**:

   ```bash
   curl https://thaibridge.app.n8n.cloud/webhook/get-reviews
   ```

3. **Check CORS configuration** in N8n

#### Routing Issues

**Problem**: Page refreshes return 404

**Solutions**:

1. **Configure SPA routing** in Vercel:
   ```json
   // vercel.json
   {
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```

#### Domain Issues

**Problem**: Custom domain not working

**Solutions**:

1. **Check DNS propagation**:

   ```bash
   dig yourdomain.com
   ```

2. **Verify DNS records** match Vercel requirements
3. **Wait for propagation** (up to 48 hours)

### Debug Mode

#### Enable Debug Logging

```env
VITE_DEBUG=true
```

#### Browser Developer Tools

```javascript
// Enable debug mode in browser
localStorage.setItem("debug", "true");
```

### Performance Issues

#### Slow Loading Times

**Solutions**:

1. **Optimize images** and use WebP format
2. **Enable code splitting** for large components
3. **Use lazy loading** for non-critical resources
4. **Implement caching** strategies

#### High Bandwidth Usage

**Solutions**:

1. **Compress assets** during build
2. **Use CDN** for static assets
3. **Implement lazy loading**
4. **Optimize bundle size**

## Cost Analysis

### Vercel Pricing

#### Free Tier (Hobby)

- **Unlimited personal projects**
- **100GB bandwidth/month**
- **Custom domains**
- **Automatic SSL**
- **Global CDN**
- **24/7 uptime**

#### Pro Plan ($20/month)

- **Unlimited bandwidth**
- **Team collaboration**
- **Advanced analytics**
- **Priority support**
- **Password protection**

#### Enterprise Plan (Custom pricing)

- **Custom contracts**
- **Advanced security**
- **Dedicated support**
- **SLA guarantees**

### Alternative Platform Costs

#### Netlify

- **Free**: 100GB bandwidth, 300 build minutes
- **Pro**: $19/month - Unlimited bandwidth
- **Business**: $99/month - Team features

#### AWS Amplify

- **Free tier**: 15GB storage, 15GB transfer
- **Pay-as-you-go**: Based on usage
- **Estimated cost**: $5-20/month for small projects

### Cost Optimization Tips

1. **Use free tiers** for development and testing
2. **Monitor bandwidth usage** regularly
3. **Optimize assets** to reduce transfer costs
4. **Consider CDN** for global distribution
5. **Implement caching** to reduce server load

## Post-Deployment Checklist

### Functionality Testing

- [✅] **Homepage loads correctly**
- [✅] **Navigation works on all pages**
- [✅] **Contact form submissions work**
- [✅] **Newsletter subscription functions**
- [✅] **API calls to N8n backend succeed**
- [✅] **Mobile responsiveness verified**
- [✅] **Cross-browser compatibility tested**

### Performance Verification

- [✅] **Lighthouse score > 90**
- [✅] **Page load time < 3 seconds**
- [✅] **Mobile performance optimized**
- [✅] **Images properly optimized**
- [✅] **Bundle size reasonable**

### Security Validation

- [✅] **HTTPS enforced**
- [✅] **Security headers configured**
- [✅] **No sensitive data in client code**
- [✅] **API endpoints secured**
- [✅] **CORS properly configured**

### Monitoring Setup

- [✅] **Analytics tracking enabled**
- [✅] **Error monitoring configured**
- [✅] **Performance monitoring active**
- [✅] **Uptime monitoring set up**
- [✅] **Alert notifications configured**

### Documentation

- [✅] **Deployment process documented**
- [✅] **Environment variables documented**
- [✅] **Troubleshooting guide updated**
- [✅] **Team access configured**
- [✅] **Backup strategy implemented**

---
