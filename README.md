# /users/register Endpoint Documentation

## Description
Endpoint to register a new user. It validates input data, creates a new user, and returns the created user's token and information.

## HTTP Method
**POST**

## Request Body
The request body should be a JSON object containing:
- **fullname**: object with:
  - **firstname**: *string* (required, at least 3 characters)
  - **lastname**: *string* (optional, at least 3 characters if provided)
- **email**: *string* (required, valid email format, at least 5 characters)
- **password**: *string* (required, at least 5 characters)

### Example Request Body
json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "your_secure_password"
}


## Response Status Codes
- **201 Created**: User registration successful.
- **400 Bad Request**: Validation failed or missing required fields.
- **500 Internal Server Error**: Server encountered an unexpected condition.


# Example of the Response 

- `user` (object): 

  - **fullname**: object with:
  - **firstname**: *string* (required, at least 3 characters)
  - **lastname**: *string* (optional, at least 3 characters if provided)
- **email**: *string* (required, valid email format, at least 5 characters)
- **password**: *string* (required, at least 5 characters)
- **token**: *string* (JWT Tokan)
