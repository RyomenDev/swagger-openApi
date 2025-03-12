const express = require("express");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
app.use(express.json());
app.use(cors());

// Swagger configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "User API",
      description: "Simple API for user authentication",
      version: "1.0.0",
    },
    servers: [{ url: "http://localhost:5000" }],
  },
  apis: ["./index.js"], // Documentation source
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     description: Authenticate user with email and password
 *     requestBody:   # ✅ Correct way to define request body
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
 *                 example: "password"
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Login successful"
 *                 token:
 *                   type: string
 *                   example: "12345"
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid credentials"
 */

app.post("/login", (req, res) => {
  //   console.log(req.body, req.params);

  const { email, password } = req.body;
  //   console.log({ email, password });

  if (email === "user@example.com" && password === "password") {
    res.json({ message: "Login successful", token: "12345" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
