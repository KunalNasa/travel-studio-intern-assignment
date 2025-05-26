# Backend for Travel Studio intern assignment

A simple NestJS API for handling guest requests, featuring two endpoints:  
- `POST /api/requests` — to create a new request  
- `GET /api/requests` — to fetch all pending requests  

---

## Project Structure
```
src/
  |  interface/
  |     |
  |     |----ApiResponse.ts #interface to maintain uniform APIResponse
  |  middlewares/
  |     |
  |     |----logger.middleware.ts #middleware debug post requests.        
  |  routes/
  |     |
  |     |----requests.ts # Main app logic to handle req, interact to DB etc.
  |--exceptionFilter.ts # Global exception filter to catch nestJS errors.
  |--index.ts # Entry point
  |--prisma.module.ts # Global prisma provider
  |--prisma.service.ts # Prisma injectable to add prisma as dependency.
```

## API Endpoints

### POST `/api/requests`

Create a new guest request.

**Request Body:**

```json
{
  "Body": "Request message text",
  "WaId": "Guest phone number (without + sign)"
  "...other fields sent by n8n webhook"
}
```
**Response:**
```json
{
  "message": "Request logged to the DB successfully",
  "data": {
    "text": "Request message text",
    "phone": "+Guest phone number"
  }
}
```


### GET `/api/requests`

Fetch all pending requests from the database.

**Response:**
```json
{
  "message": "All requests fetched from DB",
  "data": [
    {
      "id": 1,
      "guestPhone": "+91XXXXXXXXX",
      "requestText": "Hi",
      "createdAt": "2025-05-26T14:18:47.649Z",
      "status": " pending "
    }
  ]
}
```

## Features
* Prisma ORM integration for database access

* Logger middleware that logs incoming POST requests

* Global exception filter for consistent error handling

* TypeScript interfaces for standardized API responses

* Modular NestJS architecture for scalability and maintainability


## Setup and Running
1. Clone the repository and cd path_to_repo/backend/

2. Install dependencies:
```npm install```

3. Create .env, copy .sample.env in it and run postgres locally using docker.
```docker run --name my-postgres -e POSTGRES_PASSWORD=yourpassword -p 5432:5432 -d postgres```

4. Generate Prisma client:
```npx prisma generate```

5. Apply migrations:
``` npx prisma migrate dev --name init ```

6. Run the application:
``` npm run dev```


The server will start on http://localhost:8000 (or the port defined in your .env file).

## Notes

* Middleware logs only POST requests to /api/requests.
* All API routes are prefixed with /api.
* Errors are handled gracefully using a global exception filter.