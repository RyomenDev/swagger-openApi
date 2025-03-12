const express = require("express");
const multer = require("multer");
const router = express.Router();

// Multer setup for file uploads
const upload = multer({ dest: "uploads/" });

/**
 * @swagger
 * /file/upload-image:
 *   post:
 *     summary: Upload an image
 *     description: Upload an image file
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 */
router.post("/upload-image", upload.single("image"), (req, res) => {
  res.json({ message: "Image uploaded successfully", file: req.file });
});

/**
 * @swagger
 * /file/upload-video:
 *   post:
 *     summary: Upload a video
 *     description: Upload a video file
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               video:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Video uploaded successfully
 */
router.post("/upload-video", upload.single("video"), (req, res) => {
  res.json({ message: "Video uploaded successfully", file: req.file });
});

/**
 * @swagger
 * /file/delete:
 *   delete:
 *     summary: Delete a file
 *     description: Delete a file by filename
 *     parameters:
 *       - in: query
 *         name: filename
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: File deleted successfully
 */
router.delete("/delete", (req, res) => {
  const { filename } = req.query;
  const filePath = `uploads/${filename}`;

  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(500).json({ message: "File deletion failed" });
    }
    res.json({ message: "File deleted successfully" });
  });
});

module.exports = router;
