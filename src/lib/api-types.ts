// API Type Definitions
// This file contains all TypeScript types for API requests and responses

// Purpose: Define what your data should look like
// Think of this like a contract that says "When you send me a subscription request, it must have a name and email."

// Subscribe endpoint types
export interface SubscribeRequest {
  name: string;
  email: string;
}

export interface SubscribeResponse {
  success: boolean;
  message?: string;
}

// Contact/FAQ submission types
export interface ContactFormRequest {
  name: string;
  user_email: string;
  phone?: string;
  interested_course?: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message?: string;
  ticketId?: string;
}

// Review types
export interface Review {
  id?: string;
  name: string;
  user_email: string;
  course: string;
  rating: number;
  comment: string;
  date: string;
  verified?: boolean;
}

export interface GetReviewsResponse {
  reviews: Review[];
  total: number;
  averageRating: number;
}

// Generic API response wrapper
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

// Error response type
export interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
} 