# ThaiBridge Academy API Documentation

## Overview

This project uses [N8n](https://n8n.io/) workflows as the backend API. All API endpoints are webhooks configured in N8n that handle form submissions, data retrieval, and email notifications.

## Architecture

```
Frontend (React) → N8n Webhooks → External Services (Email, Database, etc.)
```

## API Service Layer

The project uses a centralized API service layer for better maintainability:

- **`src/lib/api-config.ts`** - API endpoints configuration
- **`src/lib/api-types.ts`** - TypeScript type definitions
- **`src/lib/api-service.ts`** - Centralized API methods with error handling

## Available Endpoints

### 1. Newsletter Subscription

- **Endpoint**: `/webhook/subscribe`
- **Method**: `POST`
- **Purpose**: Subscribe users to the newsletter
- **Request Body**:
  ```typescript
  {
    name: string;
    email: string;
  }
  ```
- **Response**: Success confirmation

### 2. Contact Form / FAQ Submission

- **Endpoint**: `/webhook/submit-faq`
- **Method**: `POST`
- **Purpose**: Submit contact form inquiries
- **Request Body**:
  ```typescript
  {
    name: string;
    user_email: string;
    phone?: string;
    course_taken?: string;
    message: string;
  }
  ```
- **Response**: Success confirmation with optional ticket ID

### 3. Get Reviews

- **Endpoint**: `/webhook/get-reviews`
- **Method**: `GET`
- **Purpose**: Retrieve student reviews
- **Response**: Array of review objects

### 4. Review Form

- **URL**: `/form/145db122-0763-4660-9d68-11781099a011`
- **Type**: External N8n form
- **Purpose**: Direct link to review submission form

## Configuration

### Environment Variables

Create a `.env.local` file in the project root:

```env
# N8n webhook base URL
VITE_API_BASE_URL=https://thaibridge.app.n8n.cloud
```

### Using the API Service

Instead of direct fetch calls, use the centralized API service:

```typescript
import { apiService, getErrorMessage } from "@/lib/api-service";
import { useToast } from "@/hooks/use-toast";

// Example: Subscribe to newsletter
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
    description: getErrorMessage(error),
    variant: "destructive",
  });
}
```

## API Analogy

### Key Benefits

- One Place to Change URLs: If your N8n URL changes, update only api-config.ts
- No Typos: TypeScript prevents mistakes in your API calls
- Easy to Understand: New developers can quickly see all your APIs
- Consistent Error Handling: All API calls handle errors the same way
- Reusable: Write the API call once, use it anywhere

### Simple Analogy

Think of it like ordering food:

- **api-config.ts** = Restaurant menu (lists all available dishes)
- **api-types.ts** = Recipe specifications (what ingredients each dish needs)
- **api-service.ts** = Waiter (takes your order and brings you food)

Instead of you going to the kitchen and cooking yourself, you just tell the waiter "I want dish #3" and they handle everything!
Does this help clarify how these files work together? Let me know if you'd like me to explain any specific part in more detail!

## N8n Workflow Management

### Access Requirements

- N8n instance URL: `https://thaibridge.app.n8n.cloud`
- Admin credentials required for workflow modifications
- Contact the project owner for access

### Workflow Structure

Each webhook in N8n should follow this pattern:

1. **Webhook Trigger** - Receives HTTP requests
2. **Data Validation** - Validates incoming data
3. **Business Logic** - Processes the request
4. **External Services** - Sends emails, saves to database, etc.
5. **Response** - Returns success/error to frontend

### Testing Webhooks

1. Use tools like Postman or curl for testing
2. Check N8n execution logs for debugging
3. Ensure CORS is properly configured in N8n

## Error Handling

The API service provides consistent error handling:

- **Network Errors**: Connection failures, timeouts
- **API Errors**: 4xx/5xx responses from N8n
- **Validation Errors**: Invalid data format

All errors are caught and formatted with user-friendly messages.

## Best Practices

1. **Always use the API service** - Don't make direct fetch calls
2. **Handle loading states** - Show spinners during API calls
3. **Provide user feedback** - Use toast notifications
4. **Type your data** - Add types to `api-types.ts` for new endpoints
5. **Test error scenarios** - Ensure graceful error handling

## Adding New Endpoints

1. Add the endpoint URL to `api-config.ts`:

   ```typescript
   export const API_ENDPOINTS = {
     // ... existing endpoints
     newEndpoint: `${API_BASE_URL}/webhook/new-endpoint`,
   };
   ```

2. Define types in `api-types.ts`:

   ```typescript
   export interface NewEndpointRequest {
     // request fields
   }

   export interface NewEndpointResponse {
     // response fields
   }
   ```

3. Add method to `api-service.ts`:

   ```typescript
   async newMethod(data: NewEndpointRequest): Promise<NewEndpointResponse> {
     const response = await fetchWithErrorHandling<NewEndpointResponse>(
       API_ENDPOINTS.newEndpoint,
       {
         method: 'POST',
         body: JSON.stringify(data),
       }
     );

     return response.data || { /* default response */ };
   }
   ```

## Troubleshooting

### Common Issues

1. **CORS Errors**

   - Ensure N8n webhooks have CORS enabled
   - Check allowed origins include your frontend URL

2. **Network Timeouts**

   - Default timeout is 30 seconds
   - Adjust in `api-config.ts` if needed

3. **Authentication Errors**
   - N8n webhooks are currently public
   - Add authentication headers if required in future

### Debug Mode

Enable debug logging by setting:

```env
VITE_DEBUG=true
```

## Migration Guide

To migrate existing code to use the new API service:

1. Replace direct fetch calls:

   ```typescript
   // Old
   const response = await fetch(
     "https://thaibridge.app.n8n.cloud/webhook/subscribe",
     {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ name, email }),
     }
   );

   // New
   await apiService.subscribe({ name, email });
   ```

2. Update error handling:

   ```typescript
   // Old
   } catch (error) {
     toast({ title: "Error", variant: "destructive" });
   }

   // New
   } catch (error) {
     toast({
       title: "Error",
       description: getErrorMessage(error),
       variant: "destructive"
     });
   }
   ```

## Support

For N8n workflow issues or API changes, contact:

- Project maintainer
- N8n documentation: https://docs.n8n.io/
