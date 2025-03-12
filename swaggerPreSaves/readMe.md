![Image](https://github.com/user-attachments/assets/b4945d89-4232-42cd-9972-56eff922eb29)

## Features Covered

✅ **Login API –** Authenticate users using email & password.
✅ **Register API –** Register users with email & password.
✅ **Image Upload API –** Upload image files using `multipart/form-data`.
✅ **Video Upload API –** Upload video files using `multipart/form-data`.
✅ **Form Submission API –** Send structured JSON data via form submission.

## Swagger API Documentation

After running the server, visit:
📌 http://localhost:5000/api-docs

## 📁 Project Structure

```
/swagger-api
│── /routes
│   ├── authRoutes.js
│   ├── fileRoutes.js
│   ├── formRoutes.js
│── /uploads              # Storage for uploaded files
│── swagger.js            # Swagger documentation setup
│── index.js              # Main server file
│── package.json
```

## 🔥 New Features Added

✅ **Profile Management**

- `GET /profile/get` → Fetch user profile
- `PUT /profile/update` → Update user profile

✅ **Real-time Chat**

- `POST /chat/send` → Send a message
- `GET /chat/messages` → Retrieve chat history

✅ **Order Management**

- `POST /order/place` → Place an order
- `GET /order/status` → Get order status

✅ **Extended File Operations**

- `DELETE /file/delete` → Delete a file
