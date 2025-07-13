# ThaiBridge Academy

A modern, elegant web application for ThaiBridge Academy, designed to help learners connect with authentic Thai language and culture. Built with React, TypeScript, Tailwind CSS, and shadcn-ui.

## 🌟 Features

- **Beautiful, responsive design** with smooth animations
- **Course listings** with detailed information
- **Student reviews** system with dynamic data
- **Newsletter signup** and contact forms
- **Social media integration** for community building
- **WhatsApp integration** for instant communication
- **Accessibility** and usability best practices

---

## 🌐 Live Site

Visit the deployed site: [https://thaibridge-academy.vercel.app/](https://thaibridge-academy.vercel.app/)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm (comes with Node.js)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Copy environment variables
cp env.example .env.local

# Start the development server
npm run dev
```

The app will be available at `http://localhost:8080` by default.

### Environment Setup

Create a `.env.local` file with your configuration:

```env
# N8n webhook base URL
VITE_API_BASE_URL=https://thaibridge.app.n8n.cloud
```

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/) - Lightning fast HMR
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **State Management**: React hooks + Context
- **API Backend**: [N8n](https://n8n.io/) workflows
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📦 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # shadcn/ui components
│   └── ...          # Custom components
├── pages/           # Page components (routes)
├── lib/             # Utilities and services
│   ├── api-config.ts    # API configuration
│   ├── api-service.ts   # Centralized API handling
│   ├── api-types.ts     # TypeScript types
│   └── utils.ts         # Helper functions
├── hooks/           # Custom React hooks
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

---

## 🔌 API Integration

This project uses N8n workflows as the backend. All API calls are centralized in the service layer:

- **Configuration**: `src/lib/api-config.ts`
- **Type definitions**: `src/lib/api-types.ts`
- **Service methods**: `src/lib/api-service.ts`

See [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for detailed API documentation.

### Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Build variants
npm run build:dev    # Build with development mode
```

---

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Use the centralized API service for all API calls
- Add proper type definitions
- Test on mobile devices

---

## 🚀 Deployment

The project is deployed using Vercel. For deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Quick Deploy

1. Push changes to the main branch
2. Vercel automatically builds and deploys
3. Custom domain configuration available in Vercel dashboard

---

## 🔧 Maintenance

### Adding New API Endpoints

1. Add endpoint to `src/lib/api-config.ts`
2. Define types in `src/lib/api-types.ts`
3. Add method to `src/lib/api-service.ts`
4. Update API documentation

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Update to latest major versions (careful!)
npm install package@latest
```

---

## 📄 License

This project is proprietary software for ThaiBridge Academy.
Developed by ([Github Profile](https://github.com/germainelry)). 
All rights reserved.

---

## 🤝 Support

- ThaiBridge Academy Team for sponsoring this project
- [Lovable.dev](https://lovable.dev/) for providing the base template
- All open-source contributors
