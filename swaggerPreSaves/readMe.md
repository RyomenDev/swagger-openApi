![Image](https://github.com/user-attachments/assets/c7d4c429-796e-4b68-b70d-e4571ff43628)
![Image](https://github.com/user-attachments/assets/b4945d89-4232-42cd-9972-56eff922eb29)

## Features Covered

✅ **Login API :** `(POST /auth/login)` - Authenticate users using email & password.
✅ **Register API :** `(POST /auth/register)` -  Register users with email & password.
✅ **Image Upload API :** `(POST /file/upload-image)` - Upload image files using `multipart/form-data`.
✅ **Video Upload API :** `(POST /file/upload-video)` - Upload video files using `multipart/form-data`.
✅ **Form Submission API :** `(POST /form/submit)` - Send structured JSON data via form submission.

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

## 🔥 New Features Added I

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

## 🔥 New Features Added II

✅ **Notifications System**

- `GET /notifications` → Retrieve notifications
- `PUT /notifications/mark-read` → Mark notifications as read

✅ **Product Catalog**

- `GET /products` → Get all products
- `GET /products/{id}` → Get product details

✅ **Product Reviews**

- `POST /reviews` → Add a review
- `GET /reviews/{productId}` → Get product reviews

✅ **Website Analytics**

- `GET /analytics/traffic` → Get website traffic data
- `GET /analytics/sales` → Get sales analytics
