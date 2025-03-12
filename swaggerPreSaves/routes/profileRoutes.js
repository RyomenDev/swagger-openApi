const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /profile/update:
 *   put:
 *     summary: Update user profile
 *     description: Update user profile information
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
 *               phone:
 *                 type: string
 *                 example: "+1234567890"
 *     responses:
 *       200:
 *         description: Profile updated successfully
 */
router.put("/update", (req, res) => {
  res.json({ message: "Profile updated successfully", data: req.body });
});

/**
 * @swagger
 * /profile/get:
 *   get:
 *     summary: Get user profile
 *     description: Retrieve user profile information
 *     responses:
 *       200:
 *         description: User profile fetched successfully
 */
router.get("/get", (req, res) => {
  res.json({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
  });
});

module.exports = router;
