# ThaiBridge Academy

## Overview

ThaiBridge Academy is a modern, elegant web application designed to help learners connect with authentic Thai language and culture. Built with cutting-edge technologies, it provides a seamless learning experience with comprehensive course offerings, student reviews, and interactive features.

## Live Demo

**Visit the deployed application:** [https://thaibridge-academy.vercel.app/](https://thaibridge-academy.vercel.app/)

### Key Features

- **Responsive Design** - Modern UI with smooth animations and mobile-first approach
- **Course Listings** - Detailed information about all learning programs
- **Student Review System** - Dynamic reviews with real-time data integration
- **Newsletter Integration** - Seamless email subscription management
- **Social Media Integration** - Community building through social platforms
- **WhatsApp Integration** - Instant communication for student support
- **Accessibility First** - WCAG compliant with usability best practices
- **Multi-language Ready** - Built for international accessibility

## Tech Stack

### Frontend Framework

- **[React 18.3.1](https://react.dev/)** - Modern UI library with hooks
- **[TypeScript 5.5.3](https://www.typescriptlang.org/)** - Type-safe development
- **[Vite 7.0.4](https://vitejs.dev/)** - Lightning-fast build tool with HMR

### Styling & UI

- **[Tailwind CSS 3.4.11](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit

### State Management & Data Fetching

- **[React Query (TanStack Query)](https://tanstack.com/query/latest)** - Powerful data synchronization
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms with easy validation
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### Routing & Navigation

- **[React Router 6.30.1](https://reactrouter.com/)** - Client-side routing
- **React Context + Hooks** - Lightweight state management

### Backend & APIs

- **[FastAPI](https://fastapi.tiangolo.com/)** - Modern, fast web framework for building APIs
- **[Supabase](https://supabase.com/)** - Database and authentication
- **[N8n](https://n8n.io/)** - Workflow automation for API endpoints

### Development Tools

- **[ESLint 9.9.0](https://eslint.org/)** - Code linting and formatting
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript-specific linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[SWC](https://swc.rs/)** - Fast TypeScript/JavaScript compiler

### Additional Libraries

- **[Recharts](https://recharts.org/)** - Composable charting library
- **[Embla Carousel](https://www.embla-carousel.com/)** - Lightweight carousel
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Date-fns](https://date-fns.org/)** - Modern JavaScript date utility library
- **[React Day Picker](https://react-day-picker.js.org/)** - Flexible date picker

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
# API base URL (required)
VITE_API_BASE_URL=http://localhost:8000

# Optional: Enable debug mode
VITE_DEBUG=true

# Optional: Supabase configuration (if using)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Database Setup

This project uses FastAPI with Supabase as the backend database. The backend provides RESTful API endpoints for all frontend operations:

1. **Backend Setup**: Ensure the FastAPI backend is running on `http://localhost:8000`
2. **Database**: Supabase provides the database layer with automatic API generation
3. **API Documentation**: Access interactive API docs at `http://localhost:8000/docs`

### Running the Application

#### Development Mode

```bash
# Frontend
npm run dev

# Backend (in separate terminal)
cd ../thaibridge-backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
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
thaibridge-academy/
├── thaibridge-frontend/          # React frontend application
│   ├── public/                   # Static assets
│   │   ├── images/              # Image assets
│   │   │   └── immersion/       # Course-specific images
│   │   ├── background.jpg       # Background images
│   │   ├── cover-image.png      # Hero section images
│   │   └── favicon.ico         # Site favicon
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── ui/             # shadcn/ui components
│   │   │   ├── EmailPopup.tsx  # Newsletter popup
│   │   │   ├── Footer.tsx      # Site footer
│   │   │   ├── Navigation.tsx  # Main navigation
│   │   │   └── WhatsAppButton.tsx # WhatsApp integration
│   │   ├── hooks/              # Custom React hooks
│   │   │   ├── use-mobile.tsx  # Mobile detection
│   │   │   ├── use-navigation.ts # Navigation logic
│   │   │   └── use-toast.ts    # Toast notifications
│   │   ├── lib/                # Utilities and services
│   │   │   ├── api-config.ts   # API endpoint configuration
│   │   │   ├── api-service.ts  # Centralized API handling
│   │   │   ├── api-types.ts    # TypeScript type definitions
│   │   │   ├── navigation.ts   # Navigation utilities
│   │   │   └── utils.ts        # Helper functions
│   │   ├── pages/              # Page components (routes)
│   │   │   ├── courses/        # Course-specific pages
│   │   │   ├── About.tsx       # About page
│   │   │   ├── Contact.tsx     # Contact page
│   │   │   ├── Courses.tsx     # Courses listing
│   │   │   ├── FAQ.tsx         # FAQ page
│   │   │   ├── Index.tsx       # Home page
│   │   │   └── Reviews.tsx     # Reviews page
│   │   ├── App.tsx             # Main app component
│   │   ├── App.css             # Global styles
│   │   ├── index.css           # Base styles
│   │   └── main.tsx            # Application entry point
│   ├── .eslintrc.js            # ESLint configuration
│   ├── tailwind.config.ts      # Tailwind CSS configuration
│   ├── tsconfig.json           # TypeScript configuration
│   ├── vite.config.ts          # Vite build configuration
│   └── package.json            # Dependencies and scripts
│
├── thaibridge-backend/          # FastAPI backend application
│   ├── app/
│   │   ├── routes/             # API route handlers
│   │   │   ├── contact.py      # Contact form endpoints
│   │   │   ├── reviews.py      # Reviews management
│   │   │   └── subscribers.py  # Newsletter subscription
│   │   ├── auth.py             # Authentication logic
│   │   ├── database.py         # Database configuration
│   │   └── schemas.py          # Pydantic models
│   ├── config/                 # Configuration files
│   ├── docs/                   # Documentation
│   ├── tests/                  # Test files
│   ├── tools/                  # Development utilities
│   ├── main.py                 # FastAPI application entry
│   ├── requirements.txt        # Python dependencies
│   └── security_config.py      # Security configuration
│
└── README.md                   # Project documentation
```

### Key Files Explained

- **`src/lib/api-config.ts`** - Centralized API endpoint configuration
- **`src/lib/api-service.ts`** - Centralized API service with error handling
- **`src/lib/api-types.ts`** - TypeScript interfaces for API requests/responses
- **`src/components/Navigation.tsx`** - Main navigation component
- **`src/pages/Index.tsx`** - Homepage with hero section and course overview
- **`main.py`** - FastAPI application entry point
- **`app/routes/`** - API route handlers for different features

### Architecture Overview

The application follows a modern full-stack architecture:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React App     │    │   FastAPI       │    │   Supabase      │
│   (Frontend)    │◄──►│   (Backend)     │◄──►│   (Database)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Components    │    │   Type Safety   │    │   External      │
│   (UI Layer)    │    │   (Pydantic)    │    │   Services      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## API Integration

This project uses a FastAPI backend with Supabase database integration. All API calls are centralized in the service layer for better maintainability and type safety.

### API Service Layer

- **Configuration**: `src/lib/api-config.ts` - Centralized endpoint URLs
- **Type Definitions**: `src/lib/api-types.ts` - TypeScript interfaces
- **Service Methods**: `src/lib/api-service.ts` - Centralized API handling

### Available Endpoints

| Endpoint                                     | Method | Purpose                  | Status    |
| -------------------------------------------- | ------ | ------------------------ | --------- |
| `/api/subscribe`                             | POST   | Newsletter subscription  | ✅ Active |
| `/api/contact`                               | POST   | Contact form submission  | ✅ Active |
| `/api/reviews`                               | GET    | Retrieve student reviews | ✅ Active |
| `/api/reviews`                               | POST   | Submit new review        | ✅ Active |
| `/api/health`                                | GET    | Health check endpoint    | ✅ Active |

For detailed API documentation, see [API_DOCUMENTATION.md](./API_LIBRARY_DOCUMENTATION.md).

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
VITE_API_BASE_URL=https://your-api-domain.com

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

### Common Issues

1. **Build Errors**

   - Ensure Node.js version is 16+
   - Clear node_modules and reinstall
   - Check environment variables

2. **API Connection Issues**

   - Verify FastAPI backend is running on correct port
   - Check API base URL configuration
   - Test endpoints directly via `/docs` interface

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check for conflicting CSS rules
   - Verify component imports

4. **Backend Issues**
   - Ensure Python 3.8+ is installed
   - Install backend dependencies: `pip install -r requirements.txt`
   - Check Supabase connection configuration

## License

**Developer:** [@germainelry](https://github.com/germainelry)

This project is proprietary software for **ThaiBridge Academy**.

**All rights reserved.** This software and associated documentation files are the exclusive property of ThaiBridge Academy.

## Credits

- **Project Sponsor:** ThaiBridge Academy Team
- **[Lovable.dev](https://lovable.dev/)**: Provided the base template boilerplate

---

© 2025 ThaiBridge Academy
