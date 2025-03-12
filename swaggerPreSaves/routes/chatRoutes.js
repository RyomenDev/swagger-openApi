const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /chat/send:
 *   post:
 *     summary: Send a chat message
 *     description: Send a message in a chat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sender:
 *                 type: string
 *                 example: "John Doe"
 *               receiver:
 *                 type: string
 *                 example: "Jane Smith"
 *               message:
 *                 type: string
 *                 example: "Hello, how are you?"
 *     responses:
 *       200:
 *         description: Message sent successfully
 */
router.post("/send", (req, res) => {
  res.json({ message: "Message sent successfully", data: req.body });
});

/**
 * @swagger
 * /chat/messages:
 *   get:
 *     summary: Get chat messages
 *     description: Fetch all chat messages between two users
 *     responses:
 *       200:
 *         description: Chat messages retrieved successfully
 */
router.get("/messages", (req, res) => {
  res.json([
    { sender: "John Doe", receiver: "Jane Smith", message: "Hello!" },
    { sender: "Jane Smith", receiver: "John Doe", message: "Hi there!" },
  ]);
});

module.exports = router;
