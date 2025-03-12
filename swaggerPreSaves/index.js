const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger");

const authRoutes = require("./routes/authRoutes");
const fileRoutes = require("./routes/fileRoutes");
const formRoutes = require("./routes/formRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Swagger UI Route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use("/auth", authRoutes);
app.use("/file", fileRoutes);
app.use("/form", formRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
