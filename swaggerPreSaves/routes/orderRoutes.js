const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /order/place:
 *   post:
 *     summary: Place an order
 *     description: Place an order for products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerName:
 *                 type: string
 *                 example: "John Doe"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productName:
 *                       type: string
 *                       example: "Laptop"
 *                     quantity:
 *                       type: integer
 *                       example: 1
 *               totalPrice:
 *                 type: number
 *                 example: 1500.50
 *     responses:
 *       201:
 *         description: Order placed successfully
 */
router.post("/place", (req, res) => {
  res
    .status(201)
    .json({ message: "Order placed successfully", data: req.body });
});

/**
 * @swagger
 * /order/status:
 *   get:
 *     summary: Get order status
 *     description: Retrieve the status of an order
 *     responses:
 *       200:
 *         description: Order status retrieved successfully
 */
router.get("/status", (req, res) => {
  res.json({ orderId: "12345", status: "Processing" });
});

module.exports = router;
