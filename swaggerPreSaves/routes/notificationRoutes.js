const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /notifications:
 *   get:
 *     summary: Get all notifications
 *     description: Retrieve a list of notifications
 *     responses:
 *       200:
 *         description: List of notifications
 */
router.get("/", (req, res) => {
  res.json([
    { id: 1, type: "payment", message: "Payment received from John" },
    { id: 2, type: "order", message: "Your order has been shipped" },
  ]);
});

/**
 * @swagger
 * /notifications/mark-read:
 *   put:
 *     summary: Mark all notifications as read
 *     responses:
 *       200:
 *         description: Notifications marked as read
 */
router.put("/mark-read", (req, res) => {
  res.json({ message: "All notifications marked as read" });
});

module.exports = router;
