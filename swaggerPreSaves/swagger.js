const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Swagger API Docs",
      version: "1.0.0",
      description: "Swagger OpenAPI documentation for various endpoints",
    },
    servers: [{ url: "http://localhost:5000" }],
  },
  apis: ["./routes/*.js"], // Load documentation from route files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;
