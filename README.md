# ThaiBridge Academy

> **Modern Thai Language Learning Platform**  
> Connect with authentic Thai language and culture through our comprehensive learning platform

## 📖 Table of Contents

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## Overview

ThaiBridge Academy is a modern, elegant web application designed to help learners connect with authentic Thai language and culture. Built with cutting-edge technologies, it provides a seamless learning experience with comprehensive course offerings, student reviews, and interactive features.

### Key Features

- **Responsive Design** - Modern UI with smooth animations and mobile-first approach
- **Course Listings** - Detailed information about all learning programs
- **Student Review System** - Dynamic reviews with real-time data integration
- **Newsletter Integration** - Seamless email subscription management
- **Social Media Integration** - Community building through social platforms
- **WhatsApp Integration** - Instant communication for student support
- **Accessibility First** - WCAG compliant with usability best practices
- **Multi-language Ready** - Built for international accessibility

## Live Demo

**Visit the deployed application:** [https://thaibridge-academy.vercel.app/](https://thaibridge-academy.vercel.app/)

## Tech Stack

### Frontend Framework

- **[React 18.3.1](https://react.dev/)** - Modern UI library with hooks
- **[TypeScript 5.5.3](https://www.typescriptlang.org/)** - Type-safe development
- **[Vite 7.0.4](https://vitejs.dev/)** - Lightning-fast build tool with HMR

### Styling & UI

- **[Tailwind CSS 3.4.11](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives

### Routing & State

- **[React Router 6.30.1](https://reactrouter.com/)** - Client-side routing
- **React Context + Hooks** - Lightweight state management

### Backend & APIs

- **[N8n](https://n8n.io/)** - Workflow automation for API endpoints
- **[Supabase](https://supabase.com/)** - Database and authentication (optional)

### Development Tools

- **[ESLint 9.9.0](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript-specific linting

### Deployment

- **[Vercel](https://vercel.com/)** - Global edge deployment platform

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** - [Install yarn](https://yarnpkg.com/)
- **Git** - [Download here](https://git-scm.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone <YOUR_GIT_URL>
   cd thaibridge-academy-v1
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   # Copy the example environment file
   cp .env.example .env.local

   # Edit the file with your configuration
   nano .env.local
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The application will be available at `http://localhost:5173` by default.

### Environment Setup

Create a `.env.local` file in the project root with the following variables:

```env
# N8n webhook base URL (required)
VITE_API_BASE_URL=https://thaibridge.app.n8n.cloud

# Optional: Enable debug mode
VITE_DEBUG=true

# Optional: Supabase configuration (if using)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Database Setup

This project uses N8n workflows as the backend. No traditional database setup is required, but ensure your N8n instance is properly configured:

1. Access your N8n instance at `https://thaibridge.app.n8n.cloud`
2. Verify webhook endpoints are active
3. Test API connectivity

### Running the Application

#### Development Mode

```bash
npm run dev
```

- Hot module replacement enabled
- Source maps for debugging
- Development-specific optimizations

#### Production Build

```bash
npm run build
npm run preview
```

- Optimized for performance
- Minified assets
- Production-ready deployment

## Project Structure

```
thaibridge-academy-v1/
├── public/                 # Static assets
│   ├── background.jpg      # Background images
│   ├── cover-image.png     # Hero section images
│   └── favicon.ico        # Site favicon
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── EmailPopup.tsx # Newsletter popup
│   │   ├── Footer.tsx     # Site footer
│   │   ├── Navigation.tsx # Main navigation
│   │   └── WhatsAppButton.tsx # WhatsApp integration
│   ├── hooks/             # Custom React hooks
│   │   ├── use-mobile.tsx # Mobile detection
│   │   ├── use-navigation.ts # Navigation logic
│   │   └── use-toast.ts   # Toast notifications
│   ├── lib/               # Utilities and services
│   │   ├── api-config.ts  # API endpoint configuration
│   │   ├── api-service.ts # Centralized API handling
│   │   ├── api-types.ts   # TypeScript type definitions
│   │   ├── navigation.ts  # Navigation utilities
│   │   └── utils.ts       # Helper functions
│   ├── pages/             # Page components (routes)
│   │   ├── courses/       # Course-specific pages
│   │   ├── About.tsx      # About page
│   │   ├── Contact.tsx    # Contact page
│   │   ├── Courses.tsx    # Courses listing
│   │   ├── FAQ.tsx        # FAQ page
│   │   ├── Index.tsx      # Home page
│   │   └── Reviews.tsx    # Reviews page
│   ├── App.tsx            # Main app component
│   ├── App.css            # Global styles
│   ├── index.css          # Base styles
│   └── main.tsx           # Application entry point
├── .eslintrc.js           # ESLint configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
└── package.json           # Dependencies and scripts
```

### Key Files Explained

- **`src/lib/api-config.ts`** - Centralized API endpoint configuration
- **`src/lib/api-service.ts`** - Centralized API service with error handling
- **`src/lib/api-types.ts`** - TypeScript interfaces for API requests/responses
- **`src/components/Navigation.tsx`** - Main navigation component
- **`src/pages/Index.tsx`** - Homepage with hero section and course overview

### Architecture Overview

The application follows a modern React architecture:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React App     │    │   API Service   │    │   N8n Backend   │
│   (Frontend)    │◄──►│   (TypeScript)  │◄──►│   (Workflows)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Components    │    │   Type Safety   │    │   External      │
│   (UI Layer)    │    │   (Interfaces)  │    │   Services      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## API Integration

This project uses N8n workflows as the backend API. All API calls are centralized in the service layer for better maintainability and type safety.

### API Service Layer

- **Configuration**: `src/lib/api-config.ts` - Centralized endpoint URLs
- **Type Definitions**: `src/lib/api-types.ts` - TypeScript interfaces
- **Service Methods**: `src/lib/api-service.ts` - Centralized API handling

### Available Endpoints

| Endpoint                                     | Method | Purpose                  | Status    |
| -------------------------------------------- | ------ | ------------------------ | --------- |
| `/webhook/subscribe`                         | POST   | Newsletter subscription  | ✅ Active |
| `/webhook/submit-faq`                        | POST   | Contact form submission  | ✅ Active |
| `/webhook/get-reviews`                       | GET    | Retrieve student reviews | ✅ Active |
| `/form/145db122-0763-4660-9d68-11781099a011` | GET    | Review submission form   | ✅ Active |

For detailed API documentation, see [API_DOCUMENTATION.md](./API_DOCUMENTATION.md).

### Usage Examples

```typescript
import { apiService } from "@/lib/api-service";
import { useToast } from "@/hooks/use-toast";

// Subscribe to newsletter
try {
  await apiService.subscribe({
    name: "John Doe",
    email: "john@example.com",
  });

  toast({
    title: "Success!",
    description: "You have been subscribed to our newsletter.",
  });
} catch (error) {
  toast({
    title: "Error",
    description: "Failed to subscribe. Please try again.",
    variant: "destructive",
  });
}
```

## Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Build variants
npm run build:dev    # Build with development mode
```

### Development Setup

1. **Code Style**

   - Use TypeScript for all new code
   - Follow existing code style and patterns
   - Use the centralized API service for all API calls
   - Add proper type definitions for new features

2. **Testing Strategy**

   - Test on multiple devices and browsers
   - Verify mobile responsiveness
   - Test API integration thoroughly
   - Validate accessibility compliance

3. **Linting and Formatting**
   - ESLint is configured for code quality
   - TypeScript strict mode enabled
   - Consistent code formatting enforced

### Git Workflow

1. **Branch Strategy**

   ```bash
   main          # Production-ready code
   ├── develop   # Integration branch
   ├── feature/* # Feature development
   └── hotfix/*  # Critical bug fixes
   ```

2. **Commit Guidelines**

   ```bash
   feat: add new newsletter subscription feature
   fix: resolve mobile navigation issue
   docs: update API documentation
   style: improve button component styling
   refactor: optimize API service performance
   ```

3. **Pull Request Process**
   - Create feature branch from `develop`
   - Implement changes with proper testing
   - Update documentation if needed
   - Submit PR for review
   - Merge after approval

## Deployment

### Vercel Deployment

The project is configured for automatic deployment on Vercel:

1. **Connect Repository**

   - Link your GitHub repository to Vercel
   - Configure build settings automatically

2. **Environment Variables**

   - Set `VITE_API_BASE_URL` in Vercel dashboard
   - Configure any additional environment variables

3. **Custom Domain**
   - Configure custom domain in Vercel dashboard
   - SSL certificate automatically provisioned

### Manual Deployment

```bash
# Build for production
npm run build

# Deploy to your preferred platform
# (Vercel, Netlify, AWS, etc.)
```

### Environment Variables for Production

```env
# Required
VITE_API_BASE_URL=https://thaibridge.app.n8n.cloud

# Optional
VITE_DEBUG=false
VITE_ANALYTICS_ID=your_analytics_id
```

### Performance Considerations

- **Image Optimization**: Use WebP format for images
- **Code Splitting**: Implement lazy loading for routes
- **Caching**: Configure proper cache headers
- **CDN**: Use Vercel's global edge network

### Security Notes

- **Environment Variables**: Never commit sensitive data
- **API Keys**: Store securely in deployment platform
- **CORS**: Configure properly for production domains
- **HTTPS**: Always use HTTPS in production

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## Contributing

We welcome contributions from the community! Please follow these guidelines:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow the existing code style
   - Add tests for new features
   - Update documentation
4. **Commit your changes**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines

- **TypeScript**: Use strict typing for all new code
- **Components**: Create reusable, accessible components
- **API Integration**: Use the centralized API service
- **Testing**: Test on multiple devices and browsers
- **Documentation**: Update docs for new features

### Contact Information

- **ThaiBridge Academy Team** - Project sponsor
- **[Lovable.dev](https://lovable.dev/)** – Provided the base template boilerplate
- **Developer**: [GitHub Profile](https://github.com/germainelry)

### Common Issues

1. **Build Errors**

   - Ensure Node.js version is 16+
   - Clear node_modules and reinstall
   - Check environment variables

2. **API Connection Issues**

   - Verify N8n instance is running
   - Check API base URL configuration
   - Test webhook endpoints directly

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check for conflicting CSS rules
   - Verify component imports

## License

This project is proprietary software for ThaiBridge Academy.

**All rights reserved.** This software and associated documentation files are the exclusive property of ThaiBridge Academy.

### Legal Information

- **Copyright**: © 2024 ThaiBridge Academy
- **License**: Proprietary - All rights reserved
- **Developer**: [Germaine Lry](https://github.com/germainelry)
- **Terms of Use**: Contact ThaiBridge Academy for licensing information

---
