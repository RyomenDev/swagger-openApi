const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     description: Authenticate user with email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log({ email, password });
  
  if (email === "user@example.com" && password === "password123") {
    res.json({ message: "Login successful", token: "abcd1234" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: User registration
 *     description: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "john@example.com"
 *               password:
 *                 type: string
 *                 example: "securepassword"
 *     responses:
 *       201:
 *         description: Registration successful
 */
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  console.log({ name, email, password });
  
  res.status(201).json({ message: "Registration successful", name, email });
});

module.exports = router;
