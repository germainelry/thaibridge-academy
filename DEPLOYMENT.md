# Deployment Guide - ThaiBridge Academy Frontend

## Quick Deploy to Vercel (Recommended)

### Step 1: Prepare Your Repository

1. Make sure your code is committed to a Git repository (GitHub, GitLab, or Bitbucket)
2. Ensure your `package.json` has the correct build script: `"build": "vite build"`

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your Git repository
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy"

### Step 3: Configure Custom Domain

1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `thaibridgeacademy.sg`)
4. Follow the DNS configuration instructions
5. SSL certificate will be automatically provisioned

## Alternative Deployment Options

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login and deploy
netlify login
netlify deploy --prod
```

## Build Optimization

Your project is already optimized with:

- ✅ Vite for fast builds
- ✅ React Router for SPA routing
- ✅ Tailwind CSS for styling
- ✅ Proper API integration with N8n

## Monitoring & Analytics

After deployment, consider adding:

- **Vercel Analytics** (built-in)
- **Google Analytics** for user tracking
- **Sentry** for error monitoring

## Cost Breakdown

### Vercel Free Tier Includes:

- ✅ Unlimited personal projects
- ✅ 100GB bandwidth/month
- ✅ Custom domains
- ✅ Automatic SSL
- ✅ Global CDN
- ✅ 24/7 uptime

### Paid Plans (if needed):

- **Pro**: $20/month - More bandwidth, team features
- **Enterprise**: Custom pricing - Advanced features

## Post-Deployment Checklist

- [ ] Test all API calls to N8n backend
- [ ] Verify form submissions work
- [ ] Check mobile responsiveness
- [ ] Test custom domain
- [ ] Set up monitoring/analytics
- [ ] Configure backup strategy

## Troubleshooting

### Common Issues:

1. **Build fails**: Check Node.js version compatibility
2. **API calls fail**: Verify CORS settings in N8n
3. **Routing issues**: Ensure `vercel.json` is configured correctly
4. **Domain not working**: Check DNS settings and propagation time

### Support:

- Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Community forum: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
