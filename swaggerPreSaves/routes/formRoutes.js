const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /form/submit:
 *   post:
 *     summary: Submit a form
 *     description: Submit user data through a form
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Jane Doe"
 *               email:
 *                 type: string
 *                 example: "jane@example.com"
 *               phone:
 *                 type: string
 *                 example: "+1234567890"
 *     responses:
 *       200:
 *         description: Form submitted successfully
 */
router.post("/submit", (req, res) => {
    console.log(req.body);
    
  res.json({ message: "Form submitted successfully", data: req.body });
});

module.exports = router;
