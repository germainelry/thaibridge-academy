// API Service Layer
// Centralized API handling with proper error handling and type safety

// Purpose: Do all the hard work of making API calls
// Think of this like a personal assistant who handles all your phone calls for you. You just tell them "subscribe this person to newsletter" and they handle all the details.

import { API_ENDPOINTS, API_CONFIG } from './api-config';
import type {
  SubscribeRequest,
  SubscribeResponse,
  ContactFormRequest,
  ContactFormResponse,
  Review,
  ApiResponse,
  ApiError
} from './api-types';

// Custom error class for API errors
export class ApiServiceError extends Error {
  constructor(
    message: string,
    public code?: string,
    public details?: unknown
  ) {
    super(message);
    this.name = 'ApiServiceError';
  }
}

// Generic fetch wrapper with error handling
async function fetchWithErrorHandling<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...API_CONFIG.headers,
        ...options?.headers,
      },
    });

    // Handle non-OK responses
    if (!response.ok) {
      const errorText = await response.text();
      throw new ApiServiceError(
        `API request failed: ${response.statusText}`,
        response.status.toString(),
        errorText
      );
    }

    // Try to parse JSON response
    try {
      const data = await response.json();
      return {
        data: data as T,
        status: response.status,
      };
    } catch (e) {
      // If response is not JSON, return empty data
      return {
        data: {} as T,
        status: response.status,
      };
    }
  } catch (error) {
    // Network errors or other fetch failures
    if (error instanceof ApiServiceError) {
      throw error;
    }
    
    throw new ApiServiceError(
      'Network error: Unable to connect to the server',
      'NETWORK_ERROR',
      error
    );
  }
}

// API Service methods
export const apiService = {
  // Subscribe to newsletter
  async subscribe(data: SubscribeRequest): Promise<SubscribeResponse> {
    const response = await fetchWithErrorHandling<SubscribeResponse>(
      API_ENDPOINTS.subscribe,
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
    
    return response.data || { success: true };
  },

  // Submit contact form / FAQ
  async submitContactForm(data: ContactFormRequest): Promise<ContactFormResponse> {
    const response = await fetchWithErrorHandling<ContactFormResponse>(
      API_ENDPOINTS.submitFAQ,
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
    
    return response.data || { success: true };
  },

  // Get reviews
  async getReviews(): Promise<Review[]> {
    const response = await fetchWithErrorHandling<Review[]>(
      API_ENDPOINTS.getReviews,
      {
        method: 'GET',
      }
    );
    
    return response.data || [];
  },

  // Get review form URL
  getReviewFormUrl(): string {
    return API_ENDPOINTS.reviewForm;
  },
};

// Export helper functions for common error handling
export function getErrorMessage(error: unknown): string {
  if (error instanceof ApiServiceError) {
    return error.message;
  }
  
  if (error instanceof Error) {
    return error.message;
  }
  
  return 'An unexpected error occurred. Please try again later.';
}

export function isNetworkError(error: unknown): boolean {
  return error instanceof ApiServiceError && error.code === 'NETWORK_ERROR';
} 