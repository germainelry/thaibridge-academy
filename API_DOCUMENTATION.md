# ThaiBridge Academy API Documentation

> **Complete API Reference for ThaiBridge Academy Platform**  
> Comprehensive documentation for all API endpoints, authentication, and integration patterns

## 📖 Table of Contents

- [Overview](#-overview)
- [Authentication & Security](#-authentication--security)
- [Base URL & Configuration](#-base-url--configuration)
- [Endpoints](#-endpoints)
- [Data Models](#-data-models)
- [Error Handling](#-error-handling)
- [Examples & Use Cases](#-examples--use-cases)
- [SDK & Integration](#-sdk--integration)
- [Advanced Features](#-advanced-features)
- [Troubleshooting](#-troubleshooting)
- [Migration Guide](#-migration-guide)

## 🌟 Overview

The ThaiBridge Academy API is built on [N8n](https://n8n.io/) workflows, providing a robust backend for the learning platform. This API handles form submissions, data retrieval, email notifications, and student interactions through webhook-based endpoints.

### Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   N8n Workflows │    │   External      │
│   (React App)   │◄──►│   (API Layer)   │◄──►│   Services      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Components    │    │   Webhooks      │    │   Email, DB,    │
│   (UI Layer)    │    │   (Endpoints)   │    │   Analytics     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Key Benefits

- **🔧 Centralized Configuration** - All endpoints managed in one place
- **🛡️ Type Safety** - Full TypeScript support with strict typing
- **⚡ Consistent Error Handling** - Standardized error responses
- **🔄 Reusable Service Layer** - DRY principle with shared utilities
- **📊 Real-time Integration** - Seamless data flow with external services

## 🔐 Authentication & Security

### Current Authentication

Currently, the API uses **public webhooks** with no authentication required. This is suitable for form submissions and public data retrieval.

### Security Headers

All requests should include standard security headers:

```typescript
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "User-Agent": "ThaiBridge-Academy/1.0.0",
};
```

### CORS Policy

The API supports cross-origin requests from the following domains:

- `https://thaibridge-academy.vercel.app`
- `http://localhost:5173` (development)
- `http://localhost:3000` (development)

## 🌐 Base URL & Configuration

### Base URL

```typescript
const API_BASE_URL = "https://thaibridge.app.n8n.cloud";
```

### Environment Configuration

```env
# Required for API connectivity
VITE_API_BASE_URL=https://thaibridge.app.n8n.cloud

# Optional: Enable debug mode
VITE_DEBUG=true
```

### API Service Layer

The project uses a centralized API service for better maintainability:

| File                     | Purpose          | Description                                    |
| ------------------------ | ---------------- | ---------------------------------------------- |
| `src/lib/api-config.ts`  | Configuration    | Centralized endpoint URLs and settings         |
| `src/lib/api-types.ts`   | Type Definitions | TypeScript interfaces for requests/responses   |
| `src/lib/api-service.ts` | Service Methods  | Centralized API handling with error management |

## 🔌 Endpoints

### 1. Newsletter Subscription

Subscribe users to the newsletter mailing list.

#### Endpoint Details

- **URL**: `/webhook/subscribe`
- **Method**: `POST`
- **Content-Type**: `application/json`
- **Authentication**: None required

#### Request Body

```typescript
interface SubscribeRequest {
  name: string; // User's full name
  email: string; // User's email address
}
```

#### Request Example

```typescript
const response = await fetch(
  "https://thaibridge.app.n8n.cloud/webhook/subscribe",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "John Doe",
      email: "john@example.com",
    }),
  }
);
```

#### Response Format

```typescript
interface SubscribeResponse {
  success: boolean; // Operation success status
  message?: string; // Optional success/error message
}
```

#### Response Examples

**Success Response (200)**

```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter"
}
```

**Error Response (400)**

```json
{
  "success": false,
  "message": "Invalid email address"
}
```

#### Status Codes

| Code  | Description                |
| ----- | -------------------------- |
| `200` | Successfully subscribed    |
| `400` | Bad request (invalid data) |
| `500` | Internal server error      |

---

### 2. Contact Form / FAQ Submission

Submit contact form inquiries and FAQ questions.

#### Endpoint Details

- **URL**: `/webhook/submit-faq`
- **Method**: `POST`
- **Content-Type**: `application/json`
- **Authentication**: None required

#### Request Body

```typescript
interface ContactFormRequest {
  name: string; // User's full name
  user_email: string; // User's email address
  phone?: string; // Optional phone number
  course_taken?: string; // Optional course information
  message: string; // Inquiry message
}
```

#### Request Example

```typescript
const response = await fetch(
  "https://thaibridge.app.n8n.cloud/webhook/submit-faq",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Jane Smith",
      user_email: "jane@example.com",
      phone: "+66-123-456-789",
      course_taken: "Thai for Beginners",
      message: "I would like to know more about advanced courses.",
    }),
  }
);
```

#### Response Format

```typescript
interface ContactFormResponse {
  success: boolean; // Operation success status
  message?: string; // Optional success/error message
  ticketId?: string; // Optional support ticket ID
}
```

#### Response Examples

**Success Response (200)**

```json
{
  "success": true,
  "message": "Your inquiry has been submitted successfully",
  "ticketId": "TKT-2024-001"
}
```

**Error Response (400)**

```json
{
  "success": false,
  "message": "Please provide a valid email address"
}
```

#### Status Codes

| Code  | Description                |
| ----- | -------------------------- |
| `200` | Successfully submitted     |
| `400` | Bad request (invalid data) |
| `500` | Internal server error      |

---

### 3. Get Reviews

Retrieve student reviews and testimonials.

#### Endpoint Details

- **URL**: `/webhook/get-reviews`
- **Method**: `GET`
- **Content-Type**: `application/json`
- **Authentication**: None required

#### Request Parameters

Currently, no query parameters are supported. All reviews are returned.

#### Request Example

```typescript
const response = await fetch(
  "https://thaibridge.app.n8n.cloud/webhook/get-reviews",
  {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }
);
```

#### Response Format

```typescript
interface GetReviewsResponse {
  reviews: Review[]; // Array of review objects
  total: number; // Total number of reviews
  averageRating: number; // Average rating across all reviews
}

interface Review {
  id?: string; // Optional review ID
  name: string; // Student name
  course: string; // Course name
  rating: number; // Rating (1-5)
  comment: string; // Review comment
  date: string; // Review date (ISO format)
  verified?: boolean; // Optional verification status
}
```

#### Response Example

```json
{
  "reviews": [
    {
      "id": "rev-001",
      "name": "Sarah Johnson",
      "course": "Thai for Beginners",
      "rating": 5,
      "comment": "Excellent course! The instructors are very patient and helpful.",
      "date": "2024-01-15T10:30:00Z",
      "verified": true
    },
    {
      "id": "rev-002",
      "name": "Michael Chen",
      "course": "Advanced Thai Conversation",
      "rating": 4,
      "comment": "Great advanced course with practical conversation skills.",
      "date": "2024-01-10T14:20:00Z",
      "verified": true
    }
  ],
  "total": 2,
  "averageRating": 4.5
}
```

#### Status Codes

| Code  | Description                    |
| ----- | ------------------------------ |
| `200` | Successfully retrieved reviews |
| `500` | Internal server error          |

---

### 4. Review Form

Direct link to external review submission form.

#### Endpoint Details

- **URL**: `/form/145db122-0763-4660-9d68-11781099a011`
- **Method**: `GET`
- **Type**: External N8n form
- **Authentication**: None required

#### Usage

This endpoint provides a direct link to an external review submission form hosted on N8n. Users can access this form to submit new reviews.

#### Redirect Example

```typescript
// Redirect user to review form
window.location.href =
  "https://thaibridge.app.n8n.cloud/form/145db122-0763-4660-9d68-11781099a011";
```

## 📊 Data Models

### Core Types

#### SubscribeRequest

```typescript
interface SubscribeRequest {
  name: string; // User's full name (required)
  email: string; // User's email address (required)
}
```

#### ContactFormRequest

```typescript
interface ContactFormRequest {
  name: string; // User's full name (required)
  user_email: string; // User's email address (required)
  phone?: string; // Phone number (optional)
  course_taken?: string; // Course information (optional)
  message: string; // Inquiry message (required)
}
```

#### Review

```typescript
interface Review {
  id?: string; // Unique review identifier (optional)
  name: string; // Student's name (required)
  course: string; // Course name (required)
  rating: number; // Rating from 1-5 (required)
  comment: string; // Review text (required)
  date: string; // ISO 8601 date string (required)
  verified?: boolean; // Verification status (optional)
}
```

### Response Wrappers

#### ApiResponse

```typescript
interface ApiResponse<T> {
  data?: T; // Response data (optional)
  error?: string; // Error message (optional)
  status: number; // HTTP status code (required)
}
```

#### ApiError

```typescript
interface ApiError {
  message: string; // Human-readable error message
  code?: string; // Application-specific error code
  details?: unknown; // Additional error details
}
```

### Validation Rules

| Field     | Type   | Required | Validation            |
| --------- | ------ | -------- | --------------------- |
| `name`    | string | Yes      | 2-100 characters      |
| `email`   | string | Yes      | Valid email format    |
| `phone`   | string | No       | Optional phone format |
| `message` | string | Yes      | 10-1000 characters    |
| `rating`  | number | Yes      | 1-5 inclusive         |
| `course`  | string | Yes      | 2-100 characters      |

## ⚠️ Error Handling

### Standard Error Response

All API endpoints return consistent error responses:

```typescript
interface ErrorResponse {
  success: false;
  message: string;
  code?: string;
  details?: unknown;
}
```

### Common Error Codes

| Code                     | Description                | HTTP Status |
| ------------------------ | -------------------------- | ----------- |
| `INVALID_EMAIL`          | Invalid email format       | 400         |
| `MISSING_REQUIRED_FIELD` | Required field is missing  | 400         |
| `INVALID_RATING`         | Rating must be 1-5         | 400         |
| `SERVER_ERROR`           | Internal server error      | 500         |
| `NETWORK_ERROR`          | Network connectivity issue | 0           |

### Error Handling Example

```typescript
import { apiService, getErrorMessage } from "@/lib/api-service";

try {
  const response = await apiService.subscribe({
    name: "John Doe",
    email: "invalid-email",
  });

  console.log("Success:", response);
} catch (error) {
  const errorMessage = getErrorMessage(error);
  console.error("Error:", errorMessage);

  // Handle specific error types
  if (error.code === "INVALID_EMAIL") {
    // Show email validation error
  } else if (error.code === "NETWORK_ERROR") {
    // Show network connectivity error
  }
}
```

### Debug Mode

Enable debug logging by setting the environment variable:

```env
VITE_DEBUG=true
```

This will log detailed API request/response information to the console.

## 💡 Examples & Use Cases

### Quick Start

Here's a simple example to get started with the API:

```typescript
import { apiService } from "@/lib/api-service";

// Subscribe to newsletter
const subscribeToNewsletter = async (name: string, email: string) => {
  try {
    const result = await apiService.subscribe({ name, email });
    console.log("Subscribed successfully:", result);
    return result;
  } catch (error) {
    console.error("Subscription failed:", error);
    throw error;
  }
};

// Submit contact form
const submitContactForm = async (formData: ContactFormRequest) => {
  try {
    const result = await apiService.submitFAQ(formData);
    console.log("Form submitted:", result);
    return result;
  } catch (error) {
    console.error("Form submission failed:", error);
    throw error;
  }
};

// Get reviews
const getStudentReviews = async () => {
  try {
    const result = await apiService.getReviews();
    console.log("Reviews retrieved:", result);
    return result;
  } catch (error) {
    console.error("Failed to get reviews:", error);
    throw error;
  }
};
```

### Common Workflows

#### 1. Newsletter Subscription Flow

```typescript
import { apiService } from "@/lib/api-service";
import { useToast } from "@/hooks/use-toast";

const NewsletterSubscription = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (formData: SubscribeRequest) => {
    setIsLoading(true);

    try {
      await apiService.subscribe(formData);

      toast({
        title: "Success!",
        description: "You have been subscribed to our newsletter.",
      });

      // Reset form or redirect
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubscribe)}>
      {/* Form fields */}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );
};
```

#### 2. Contact Form Submission

```typescript
const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: ContactFormRequest) => {
    setIsSubmitting(true);

    try {
      const result = await apiService.submitFAQ(data);

      toast({
        title: "Message Sent!",
        description: `Thank you for your inquiry. Ticket ID: ${result.ticketId}`,
      });

      // Clear form
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <form onSubmit={handleSubmit}>{/* Contact form fields */}</form>;
};
```

#### 3. Reviews Display

```typescript
const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const result = await apiService.getReviews();
        setReviews(result.reviews);
      } catch (error) {
        setError("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <div>Loading reviews...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};
```

### Code Samples in Different Languages

#### JavaScript (Vanilla)

```javascript
// Newsletter subscription
const subscribeToNewsletter = async (name, email) => {
  const response = await fetch(
    "https://thaibridge.app.n8n.cloud/webhook/subscribe",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    }
  );

  if (!response.ok) {
    throw new Error("Subscription failed");
  }

  return response.json();
};
```

#### Python

```python
import requests

def subscribe_to_newsletter(name, email):
    url = 'https://thaibridge.app.n8n.cloud/webhook/subscribe'
    data = {'name': name, 'email': email}

    response = requests.post(url, json=data)
    response.raise_for_status()

    return response.json()
```

#### cURL

```bash
# Subscribe to newsletter
curl -X POST https://thaibridge.app.n8n.cloud/webhook/subscribe \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'

# Get reviews
curl -X GET https://thaibridge.app.n8n.cloud/webhook/get-reviews \
  -H "Accept: application/json"
```

## 🔧 SDK & Integration

### Official SDK

The project includes a centralized API service layer that acts as an unofficial SDK:

```typescript
// Import the API service
import { apiService } from "@/lib/api-service";

// Use the service methods
const result = await apiService.subscribe({
  name: "John Doe",
  email: "john@example.com",
});
```

### Third-party Libraries

Currently, no official third-party SDKs are available. The API can be integrated using:

- **Fetch API** (browser)
- **Axios** (Node.js/browser)
- **Requests** (Python)
- **HTTP client libraries** (any language)

### Integration Examples

#### React Integration

```typescript
// Custom hook for API integration
const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subscribe = async (data: SubscribeRequest) => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiService.subscribe(data);
      return result;
    } catch (err) {
      setError(getErrorMessage(err));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading, error };
};
```

#### Next.js Integration

```typescript
// API route handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const response = await fetch(
        "https://thaibridge.app.n8n.cloud/webhook/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(req.body),
        }
      );

      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```

### Testing Tools

#### Postman Collection

Create a Postman collection with the following requests:

```json
{
  "info": {
    "name": "ThaiBridge Academy API",
    "description": "API collection for ThaiBridge Academy"
  },
  "item": [
    {
      "name": "Subscribe to Newsletter",
      "request": {
        "method": "POST",
        "url": "https://thaibridge.app.n8n.cloud/webhook/subscribe",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"John Doe\",\n  \"email\": \"john@example.com\"\n}"
        }
      }
    },
    {
      "name": "Submit Contact Form",
      "request": {
        "method": "POST",
        "url": "https://thaibridge.app.n8n.cloud/webhook/submit-faq",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"Jane Smith\",\n  \"user_email\": \"jane@example.com\",\n  \"message\": \"I would like to know more about your courses.\"\n}"
        }
      }
    },
    {
      "name": "Get Reviews",
      "request": {
        "method": "GET",
        "url": "https://thaibridge.app.n8n.cloud/webhook/get-reviews",
        "header": [
          {
            "key": "Accept",
            "value": "application/json"
          }
        ]
      }
    }
  ]
}
```

## 🚀 Advanced Features

### Pagination

Currently, the API doesn't support pagination. All data is returned in a single response. Future versions may include:

```typescript
interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
```

### Filtering & Sorting

Future endpoints may support query parameters for filtering and sorting:

```typescript
// Example future implementation
const getReviews = async (params: {
  page?: number;
  limit?: number;
  sortBy?: "date" | "rating" | "name";
  sortOrder?: "asc" | "desc";
  course?: string;
}) => {
  const queryParams = new URLSearchParams();
  // Add parameters to query string
};
```

### Webhooks

Currently, the API doesn't support webhook notifications. Future versions may include:

```typescript
interface WebhookPayload {
  event: "review.submitted" | "subscription.created";
  data: unknown;
  timestamp: string;
  signature: string;
}
```

### Batch Operations

Future versions may support batch operations for efficiency:

```typescript
interface BatchSubscribeRequest {
  subscribers: SubscribeRequest[];
}

const batchSubscribe = async (data: BatchSubscribeRequest) => {
  // Process multiple subscriptions in one request
};
```

### File Uploads

Currently, the API doesn't support file uploads. Future versions may include:

```typescript
interface FileUploadRequest {
  file: File;
  type: "profile" | "review" | "course";
  metadata?: Record<string, unknown>;
}
```

## 🔧 Troubleshooting

### Common Issues

#### 1. CORS Errors

**Problem**: Browser blocks requests due to CORS policy

**Solution**:

- Ensure requests are made from allowed domains
- Check that the API base URL is correct
- Verify that the N8n instance has CORS properly configured

```typescript
// Check if CORS is properly configured
const testCors = async () => {
  try {
    const response = await fetch(
      "https://thaibridge.app.n8n.cloud/webhook/get-reviews"
    );
    console.log("CORS test successful");
  } catch (error) {
    console.error("CORS error:", error);
  }
};
```

#### 2. Network Timeouts

**Problem**: Requests timeout after 30 seconds

**Solution**:

- Check network connectivity
- Verify the N8n instance is running
- Consider implementing retry logic

```typescript
// Implement retry logic
const fetchWithRetry = async (
  url: string,
  options: RequestInit,
  retries = 3
) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fetch(url, options);
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise((resolve) => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
};
```

#### 3. Authentication Errors

**Problem**: Requests fail with authentication errors

**Solution**:

- Currently, no authentication is required
- If authentication is added in the future, ensure proper headers are included

#### 4. Invalid Data Errors

**Problem**: Requests fail due to invalid data format

**Solution**:

- Validate data before sending
- Check required fields are present
- Ensure email format is valid

```typescript
// Data validation helper
const validateSubscribeData = (data: SubscribeRequest): boolean => {
  if (!data.name || data.name.length < 2) return false;
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return false;
  return true;
};
```

### Debug Mode

Enable debug logging to troubleshoot issues:

```typescript
// Enable debug mode
if (import.meta.env.VITE_DEBUG) {
  console.log("API Request:", {
    url: "https://thaibridge.app.n8n.cloud/webhook/subscribe",
    method: "POST",
    body: { name: "John", email: "john@example.com" },
  });
}
```

### Performance Monitoring

Monitor API performance with timing:

```typescript
const measureApiPerformance = async (apiCall: () => Promise<unknown>) => {
  const start = performance.now();

  try {
    const result = await apiCall();
    const duration = performance.now() - start;
    console.log(`API call completed in ${duration.toFixed(2)}ms`);
    return result;
  } catch (error) {
    const duration = performance.now() - start;
    console.error(`API call failed after ${duration.toFixed(2)}ms:`, error);
    throw error;
  }
};
```

## 🔄 Migration Guide

### From Direct Fetch Calls

If you have existing code using direct fetch calls, migrate to the centralized API service:

#### Before (Direct Fetch)

```typescript
// Old way - direct fetch calls
const subscribeToNewsletter = async (name: string, email: string) => {
  const response = await fetch(
    "https://thaibridge.app.n8n.cloud/webhook/subscribe",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    }
  );

  if (!response.ok) {
    throw new Error("Subscription failed");
  }

  return response.json();
};
```

#### After (API Service)

```typescript
// New way - centralized API service
import { apiService } from "@/lib/api-service";

const subscribeToNewsletter = async (name: string, email: string) => {
  return await apiService.subscribe({ name, email });
};
```

### Benefits of Migration

1. **Type Safety**: Full TypeScript support with interfaces
2. **Error Handling**: Consistent error handling across all endpoints
3. **Maintainability**: Single place to update API URLs
4. **Reusability**: Write once, use anywhere
5. **Testing**: Easier to mock and test

### Step-by-Step Migration

1. **Replace direct fetch calls** with API service methods
2. **Update error handling** to use the centralized error format
3. **Add proper TypeScript types** for request/response data
4. **Test all endpoints** to ensure functionality is preserved
5. **Update documentation** to reflect new usage patterns

### Testing Migration

```typescript
// Test that migration works correctly
const testMigration = async () => {
  const testData = {
    name: "Test User",
    email: "test@example.com",
  };

  try {
    // Test new API service
    const result = await apiService.subscribe(testData);
    console.log("Migration successful:", result);
  } catch (error) {
    console.error("Migration failed:", error);
  }
};
```

---

<div align="center">

**For support and questions, contact the ThaiBridge Academy development team**

[![ThaiBridge Academy](https://img.shields.io/badge/ThaiBridge-Academy-blue)](https://thaibridge-academy.vercel.app/)

</div>
