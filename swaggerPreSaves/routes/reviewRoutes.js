const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Add a product review
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: integer
 *               rating:
 *                 type: integer
 *               comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Review added successfully
 */
router.post("/", (req, res) => {
  res.status(201).json({ message: "Review added successfully" });
});

/**
 * @swagger
 * /reviews/{productId}:
 *   get:
 *     summary: Get all reviews for a product
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of reviews
 */
router.get("/:productId", (req, res) => {
  res.json([
    { user: "John", rating: 5, comment: "Amazing product!" },
    { user: "Jane", rating: 4, comment: "Good value for money" },
  ]);
});

module.exports = router;
