// API Configuration
// This file centralizes all API-related configuration for easier maintenance

// Purpose: Store all your API URLs in one place. 
// Think of this like a phone book. Instead of memorizing everyone's phone number, you write them down in one book.

// Get the base URL from environment variable or use default
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://thaibridge.app.n8n.cloud';

// API Endpoints configuration
export const API_ENDPOINTS = {
  // Subscription endpoints
  subscribe: `${API_BASE_URL}/webhook/subscribe`, // Newsletter signup
  
  // Contact/FAQ endpoints
  submitFAQ: `${API_BASE_URL}/webhook/submit-faq`, // Contact form
  
  // Reviews endpoints
  getReviews: `${API_BASE_URL}/webhook/get-reviews`, // Get reviews
  reviewForm: `${API_BASE_URL}/form/145db122-0763-4660-9d68-11781099a011`,
} as const;

// API configuration options
export const API_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds
} as const;

// Helper to check if we're in development mode
export const isDevelopment = import.meta.env.DEV;

// Export the base URL for any custom needs
export const getApiBaseUrl = () => API_BASE_URL; 