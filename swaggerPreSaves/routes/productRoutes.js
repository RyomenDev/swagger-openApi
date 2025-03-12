const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: List of products
 */
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Smartphone", price: 800 },
  ]);
});

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get product details
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product details
 */
router.get("/:id", (req, res) => {
  res.json({ id: req.params.id, name: "Laptop", price: 1200 });
});

module.exports = router;
