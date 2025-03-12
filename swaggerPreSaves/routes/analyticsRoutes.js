const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /analytics/traffic:
 *   get:
 *     summary: Get website traffic data
 *     responses:
 *       200:
 *         description: Website traffic data
 */
router.get("/traffic", (req, res) => {
  res.json({ visitorsToday: 250, totalVisitors: 12000 });
});

/**
 * @swagger
 * /analytics/sales:
 *   get:
 *     summary: Get sales analytics data
 *     responses:
 *       200:
 *         description: Sales analytics data
 */
router.get("/sales", (req, res) => {
  res.json({ totalRevenue: 50000, bestSellingProduct: "Laptop" });
});

module.exports = router;
